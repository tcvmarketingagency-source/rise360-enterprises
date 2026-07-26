"use client";

import { Check } from "lucide-react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { submitConsultation } from "@/app/consultation/actions";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  CONSULTATION_HORIZONS,
  CONSULTATION_OBJECTIVES,
  CONSULTATION_SCALES,
  CONSULTATION_SUCCESS_CONTENT,
  LEGAL_CONTACT_EMAIL,
  PRACTICES,
} from "@/lib/content";
import {
  consultationSchema,
  consultationStepSchemas,
  JURISDICTIONS,
  type HorizonValue,
  type JurisdictionValue,
  type ObjectiveValue,
  type PracticeSlugValue,
  type ScaleValue,
} from "@/lib/consultation-schema";
import { cn } from "@/lib/utils";

const TOTAL_STEPS = 5;
const STEP_LABELS = ["Objective", "Practices", "Markets", "Scale", "Contact"];

const transition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

interface ConsultationDraft {
  objective: ObjectiveValue | null;
  practices: PracticeSlugValue[];
  jurisdictions: JurisdictionValue[];
  horizon: HorizonValue | null;
  scale: ScaleValue | null;
  message: string;
  fullName: string;
  entity: string;
  email: string;
  phone: string;
  website: string;
}

interface ConsultationFlowProps {
  initialPracticeSlug?: PracticeSlugValue;
}

function isPracticeSlug(value: string | undefined): value is PracticeSlugValue {
  return Boolean(value) && value! in PRACTICES;
}

export function ConsultationFlow({ initialPracticeSlug }: ConsultationFlowProps) {
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [stepError, setStepError] = useState<string | null>(null);
  const [draft, setDraft] = useState<ConsultationDraft>(() => ({
    objective: null,
    practices: isPracticeSlug(initialPracticeSlug) ? [initialPracticeSlug] : [],
    jurisdictions: [],
    horizon: null,
    scale: null,
    message: "",
    fullName: "",
    entity: "",
    email: "",
    phone: "",
    website: "",
  }));

  function toggle<T>(list: T[], value: T): T[] {
    return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
  }

  function validateStep(current: number): boolean {
    if (current === 1) {
      const result = consultationStepSchemas.objective.safeParse({ objective: draft.objective ?? undefined });
      setStepError(result.success ? null : result.error.issues[0]?.message ?? "Select an option.");
      return result.success;
    }
    if (current === 2) {
      const result = consultationStepSchemas.practices.safeParse({ practices: draft.practices });
      setStepError(result.success ? null : result.error.issues[0]?.message ?? "Select at least one.");
      return result.success;
    }
    if (current === 3) {
      const result = consultationStepSchemas.jurisdictionsAndHorizon.safeParse({
        jurisdictions: draft.jurisdictions,
        horizon: draft.horizon ?? undefined,
      });
      setStepError(result.success ? null : result.error.issues[0]?.message ?? "Select a timeline.");
      return result.success;
    }
    if (current === 4) {
      setStepError(null);
      return true;
    }
    const result = consultationStepSchemas.contact.safeParse({
      fullName: draft.fullName,
      email: draft.email,
    });
    setStepError(result.success ? null : result.error.issues[0]?.message ?? "Complete the required fields.");
    return result.success;
  }

  function goNext() {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  }

  function goBack() {
    setStepError(null);
    setStep((s) => Math.max(1, s - 1));
  }

  async function handleSubmit() {
    if (!validateStep(5)) return;

    const parsed = consultationSchema.safeParse({
      objective: draft.objective ?? undefined,
      practices: draft.practices,
      jurisdictions: draft.jurisdictions,
      horizon: draft.horizon ?? undefined,
      scale: draft.scale ?? undefined,
      message: draft.message,
      fullName: draft.fullName,
      entity: draft.entity,
      email: draft.email,
      phone: draft.phone,
      website: draft.website,
    });

    if (!parsed.success) {
      setStepError(parsed.error.issues[0]?.message ?? "Please review your answers.");
      return;
    }

    setStepError(null);
    setPending(true);
    const result = await submitConsultation(parsed.data);
    setPending(false);

    if (!result.ok) {
      setStepError(result.error ?? "Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-display-lg text-ink">
          {CONSULTATION_SUCCESS_CONTENT.heading}
        </h2>
        <p className="mt-4 text-body text-slate">{CONSULTATION_SUCCESS_CONTENT.body}</p>
        <p className="mt-8 font-ui text-sm text-slate">
          Prefer email? Write to{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="text-brass hover:underline">
            {LEGAL_CONTACT_EMAIL}
          </a>
        </p>
      </div>
    );
  }

  const practiceList = Object.values(PRACTICES);

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="relative h-px w-full bg-hairline">
        <div
          className="absolute inset-y-0 left-0 bg-brass transition-all duration-500 ease-out"
          style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
        />
      </div>

      <div className="mt-6 flex items-baseline justify-between">
        <Eyebrow>
          Step {step} of {TOTAL_STEPS}
        </Eyebrow>
        <p className="font-ui text-caption uppercase text-slate">{STEP_LABELS[step - 1]}</p>
      </div>

      <AnimatePresence mode="wait">
        <m.div
          key={step}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={transition}
          className="mt-8"
        >
          {step === 1 && (
            <div role="radiogroup" aria-label="Objective" className="border-t border-hairline">
              {CONSULTATION_OBJECTIVES.map((option, index) => {
                const selected = draft.objective === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() =>
                      setDraft((d) => ({ ...d, objective: option.value as ObjectiveValue }))
                    }
                    className={cn(
                      "group flex w-full items-center justify-between gap-6 border-b border-hairline py-8 text-left transition-colors duration-200",
                      selected ? "bg-ink" : "hover:bg-ink-soft",
                    )}
                  >
                    <div className="flex items-baseline gap-6 md:gap-10">
                      <span className="font-display text-sm text-brass">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3
                          className={cn(
                            "font-display text-display-lg transition-colors duration-200",
                            selected ? "text-paper" : "text-ink group-hover:text-paper",
                          )}
                        >
                          {option.label}
                        </h3>
                        <p
                          className={cn(
                            "mt-2 max-w-xl text-body transition-colors duration-200",
                            selected ? "text-paper/70" : "text-slate group-hover:text-paper/70",
                          )}
                        >
                          {option.description}
                        </p>
                      </div>
                    </div>
                    {selected && <Check aria-hidden="true" className="h-5 w-5 shrink-0 text-brass" />}
                  </button>
                );
              })}
            </div>
          )}

          {step === 2 && (
            <div role="group" aria-label="Practices" className="border-t border-hairline">
              {practiceList.map((practice, index) => {
                const selected = draft.practices.includes(practice.slug as PracticeSlugValue);
                return (
                  <button
                    key={practice.slug}
                    type="button"
                    role="checkbox"
                    aria-checked={selected}
                    onClick={() =>
                      setDraft((d) => ({
                        ...d,
                        practices: toggle(d.practices, practice.slug as PracticeSlugValue),
                      }))
                    }
                    className={cn(
                      "group flex w-full items-center justify-between gap-6 border-b border-hairline py-6 text-left transition-colors duration-200",
                      selected ? "bg-ink" : "hover:bg-ink-soft",
                    )}
                  >
                    <div className="flex items-baseline gap-6 md:gap-10">
                      <span className="font-display text-sm text-brass">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className={cn(
                          "font-display text-heading transition-colors duration-200",
                          selected ? "text-paper" : "text-ink group-hover:text-paper",
                        )}
                      >
                        {practice.name}
                      </h3>
                    </div>
                    {selected && <Check aria-hidden="true" className="h-5 w-5 shrink-0 text-brass" />}
                  </button>
                );
              })}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-10">
              <div>
                <p className="font-ui text-caption uppercase text-slate">
                  Jurisdictions <span className="normal-case text-slate/70">(optional)</span>
                </p>
                <div role="group" aria-label="Jurisdictions" className="mt-4 flex flex-wrap gap-3">
                  {JURISDICTIONS.map((jurisdiction) => {
                    const selected = draft.jurisdictions.includes(jurisdiction);
                    return (
                      <button
                        key={jurisdiction}
                        type="button"
                        role="checkbox"
                        aria-checked={selected}
                        onClick={() =>
                          setDraft((d) => ({
                            ...d,
                            jurisdictions: toggle(d.jurisdictions, jurisdiction),
                          }))
                        }
                        className={cn(
                          "border px-4 py-2 font-ui text-sm transition-colors duration-200",
                          selected
                            ? "border-brass bg-brass text-paper"
                            : "border-hairline text-ink hover:border-brass",
                        )}
                      >
                        {jurisdiction}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="font-ui text-caption uppercase text-slate">Horizon</p>
                <div role="radiogroup" aria-label="Horizon" className="mt-4 flex flex-wrap gap-3">
                  {CONSULTATION_HORIZONS.map((option) => {
                    const selected = draft.horizon === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() =>
                          setDraft((d) => ({ ...d, horizon: option.value as HorizonValue }))
                        }
                        className={cn(
                          "border px-4 py-2 font-ui text-sm transition-colors duration-200",
                          selected
                            ? "border-brass bg-brass text-paper"
                            : "border-hairline text-ink hover:border-brass",
                        )}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-10">
              <div>
                <p className="font-ui text-caption uppercase text-slate">
                  Scale <span className="normal-case text-slate/70">(optional)</span>
                </p>
                <div role="radiogroup" aria-label="Scale" className="mt-4 flex flex-wrap gap-3">
                  {CONSULTATION_SCALES.map((option) => {
                    const selected = draft.scale === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() =>
                          setDraft((d) => ({
                            ...d,
                            scale: d.scale === option.value ? null : (option.value as ScaleValue),
                          }))
                        }
                        className={cn(
                          "border px-4 py-2 font-ui text-sm transition-colors duration-200",
                          selected
                            ? "border-brass bg-brass text-paper"
                            : "border-hairline text-ink hover:border-brass",
                        )}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="font-ui text-caption uppercase text-slate">
                  Anything else <span className="normal-case text-slate/70">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={draft.message}
                  onChange={(event) =>
                    setDraft((d) => ({ ...d, message: event.target.value }))
                  }
                  maxLength={4000}
                  className="mt-3 w-full resize-none border-b border-hairline bg-transparent py-2 font-ui text-sm text-ink placeholder:text-slate/50 focus:border-brass focus:outline-none"
                />
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-10">
              <ReviewSummary draft={draft} />

              <div className="grid gap-6 sm:grid-cols-2">
                <ContactField
                  id="fullName"
                  label="Full name"
                  value={draft.fullName}
                  onChange={(value) => setDraft((d) => ({ ...d, fullName: value }))}
                  required
                />
                <ContactField
                  id="entity"
                  label="Entity"
                  optional
                  value={draft.entity}
                  onChange={(value) => setDraft((d) => ({ ...d, entity: value }))}
                />
                <ContactField
                  id="email"
                  label="Email"
                  type="email"
                  value={draft.email}
                  onChange={(value) => setDraft((d) => ({ ...d, email: value }))}
                  required
                />
                <ContactField
                  id="phone"
                  label="Phone"
                  type="tel"
                  optional
                  value={draft.phone}
                  onChange={(value) => setDraft((d) => ({ ...d, phone: value }))}
                />
              </div>

              {/* Honeypot — left blank by real visitors, hidden off-screen so it never shows or receives focus */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={draft.website}
                  onChange={(event) => setDraft((d) => ({ ...d, website: event.target.value }))}
                />
              </div>
            </div>
          )}
        </m.div>
      </AnimatePresence>

      {stepError && (
        <p className="mt-6 font-ui text-sm text-brass" role="alert">
          {stepError}
        </p>
      )}

      <div className="mt-10 flex items-center justify-between border-t border-hairline pt-8">
        {step > 1 ? (
          <Button type="button" variant="ghost" onClick={goBack}>
            Back
          </Button>
        ) : (
          <span />
        )}
        {step < TOTAL_STEPS ? (
          <Button type="button" variant="primary" onClick={goNext}>
            Continue
          </Button>
        ) : (
          <Button
            type="button"
            variant="primary"
            onClick={handleSubmit}
            disabled={pending}
            className={pending ? "opacity-60" : undefined}
          >
            {pending ? "Sending…" : "Request Consultation"}
          </Button>
        )}
      </div>
    </div>
  );
}

function ReviewSummary({ draft }: { draft: ConsultationDraft }) {
  const objectiveLabel = CONSULTATION_OBJECTIVES.find((o) => o.value === draft.objective)?.label;
  const practiceNames = draft.practices.map((slug) => PRACTICES[slug]?.name).filter(Boolean);
  const horizonLabel = CONSULTATION_HORIZONS.find((h) => h.value === draft.horizon)?.label;
  const scaleLabel = CONSULTATION_SCALES.find((s) => s.value === draft.scale)?.label;

  const rows: { label: string; value: string }[] = [
    { label: "Objective", value: objectiveLabel ?? "—" },
    { label: "Practices", value: practiceNames.length ? practiceNames.join(", ") : "—" },
    {
      label: "Jurisdictions",
      value: draft.jurisdictions.length ? draft.jurisdictions.join(", ") : "Not specified",
    },
    { label: "Horizon", value: horizonLabel ?? "—" },
  ];
  if (scaleLabel) rows.push({ label: "Scale", value: scaleLabel });
  if (draft.message) rows.push({ label: "Message", value: draft.message });

  return (
    <div className="border border-hairline p-6">
      <p className="font-ui text-caption uppercase text-brass">Review</p>
      <dl className="mt-4 space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <dt className="w-32 shrink-0 font-ui text-sm text-slate">{row.label}</dt>
            <dd className="font-ui text-sm text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

interface ContactFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  optional?: boolean;
}

function ContactField({ id, label, value, onChange, type = "text", required, optional }: ContactFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="font-ui text-caption uppercase text-slate">
        {label} {optional && <span className="normal-case text-slate/70">(optional)</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full border-b border-hairline bg-transparent py-2 font-ui text-sm text-ink placeholder:text-slate/50 focus:border-brass focus:outline-none"
      />
    </div>
  );
}
