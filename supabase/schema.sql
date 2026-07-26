-- Rise360 Enterprises — Supabase schema
-- Covers: consultation lead capture, newsletter/insights subscribers,
-- and insights content (practices + articles) migrated off local MDX.
--
-- Apply with: supabase db execute --file supabase/schema.sql
-- (or paste into the SQL editor in the Supabase dashboard)

create extension if not exists pgcrypto;

create or replace function set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- Practices (Capital, Mobility, Trade, Assets, Digital)
-- ---------------------------------------------------------------------------

create type practice_slug as enum ('capital', 'mobility', 'trade', 'assets', 'digital');

create table practices (
  slug practice_slug primary key,
  name text not null,
  eyebrow text not null,
  mandate text not null,
  mandate_accent text,
  hero_support text not null,
  definition text not null,
  markets text[] not null default '{}',
  seo_title text not null,
  seo_description text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger practices_set_updated_at
  before update on practices
  for each row execute function set_updated_at();

create table practice_services (
  id uuid primary key default gen_random_uuid(),
  practice_slug practice_slug not null references practices (slug) on delete cascade,
  name text not null,
  description text not null,
  sort_order integer not null default 0
);

create index practice_services_practice_slug_idx on practice_services (practice_slug, sort_order);

create table practice_process_steps (
  id uuid primary key default gen_random_uuid(),
  practice_slug practice_slug not null references practices (slug) on delete cascade,
  step text not null,
  title text not null,
  description text not null,
  sort_order integer not null default 0
);

create index practice_process_steps_practice_slug_idx on practice_process_steps (practice_slug, sort_order);

create table practice_faqs (
  id uuid primary key default gen_random_uuid(),
  practice_slug practice_slug not null references practices (slug) on delete cascade,
  question text not null,
  answer text not null,
  sort_order integer not null default 0
);

create index practice_faqs_practice_slug_idx on practice_faqs (practice_slug, sort_order);

-- ---------------------------------------------------------------------------
-- Insights articles
-- ---------------------------------------------------------------------------

create type article_status as enum ('draft', 'published');

create table articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null,
  content text not null,
  practice_slug practice_slug not null references practices (slug),
  markets text[] not null default '{}',
  reading_time text,
  seo_title text not null,
  seo_description text not null,
  status article_status not null default 'draft',
  published_at timestamptz,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  constraint articles_published_at_required check (
    status <> 'published' or published_at is not null
  )
);

create trigger articles_set_updated_at
  before update on articles
  for each row execute function set_updated_at();

create index articles_practice_slug_idx on articles (practice_slug);
create index articles_status_published_at_idx on articles (status, published_at desc);

-- ---------------------------------------------------------------------------
-- Consultation intake (Private Consultation flow)
-- ---------------------------------------------------------------------------
-- Insert-only, and only from the server: the Server Action writes with the
-- service_role key, which bypasses RLS entirely. No policy below grants
-- anon/authenticated any access, so the anon key cannot read, insert,
-- update or delete a single row here.

create type consultation_objective as enum ('expand', 'relocate', 'invest', 'structure');
create type consultation_horizon as enum ('immediate', 'near', 'exploratory');
create type consultation_status as enum ('new', 'reviewed', 'contacted', 'closed');

create table consultations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  objective consultation_objective not null,
  practices text[] not null,
  jurisdictions text[],
  horizon consultation_horizon not null,
  scale text,
  full_name text not null,
  entity text,
  email text not null,
  phone text,
  message text,
  status consultation_status not null default 'new',
  source text not null default 'web',
  user_agent text,
  ip_hash text,
  constraint consultations_email_format check (
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  ),
  constraint consultations_practices_not_empty check (
    array_length(practices, 1) > 0
  )
);

create index consultations_status_created_at_idx on consultations (status, created_at desc);
create index consultations_email_idx on consultations (email);

-- ---------------------------------------------------------------------------
-- Newsletter / insights subscribers
-- ---------------------------------------------------------------------------

create type subscriber_status as enum ('subscribed', 'unsubscribed');

create table newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  status subscriber_status not null default 'subscribed',
  source_page text,
  subscribed_at timestamptz not null default now(),
  unsubscribed_at timestamptz,
  constraint newsletter_subscribers_email_format check (
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  )
);

create index newsletter_subscribers_status_idx on newsletter_subscribers (status);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
-- Content tables: public (anon) can read published rows only.
-- Lead/subscriber tables: public (anon) can insert only — reading and
-- managing leads/subscribers is done with the service_role key from a
-- trusted server context, which bypasses RLS entirely.

alter table practices enable row level security;
alter table practice_services enable row level security;
alter table practice_process_steps enable row level security;
alter table practice_faqs enable row level security;
alter table articles enable row level security;
alter table consultations enable row level security;
alter table newsletter_subscribers enable row level security;

create policy "Public can read practices"
  on practices for select
  to anon, authenticated
  using (true);

create policy "Public can read practice services"
  on practice_services for select
  to anon, authenticated
  using (true);

create policy "Public can read practice process steps"
  on practice_process_steps for select
  to anon, authenticated
  using (true);

create policy "Public can read practice faqs"
  on practice_faqs for select
  to anon, authenticated
  using (true);

create policy "Public can read published articles"
  on articles for select
  to anon, authenticated
  using (status = 'published');

create policy "Public can subscribe to the newsletter"
  on newsletter_subscribers for insert
  to anon, authenticated
  with check (true);
