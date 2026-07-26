import { z } from "zod";

// Keep in sync with PracticeSlug in @/types and PRACTICES in @/lib/content.
export const PRACTICE_SLUGS = ["capital", "mobility", "trade", "assets", "digital"] as const;

// Keep in sync with JURISDICTION_MARKERS in @/lib/content.
export const JURISDICTIONS = [
  "USA",
  "Canada",
  "UK",
  "UAE",
  "India",
  "Singapore",
  "Australia",
] as const;

export const OBJECTIVES = ["expand", "relocate", "invest", "structure"] as const;
export const HORIZONS = ["immediate", "near", "exploratory"] as const;
export const SCALES = ["under-1m", "1m-5m", "5m-25m", "25m-plus"] as const;

export type PracticeSlugValue = (typeof PRACTICE_SLUGS)[number];
export type JurisdictionValue = (typeof JURISDICTIONS)[number];
export type ObjectiveValue = (typeof OBJECTIVES)[number];
export type HorizonValue = (typeof HORIZONS)[number];
export type ScaleValue = (typeof SCALES)[number];

export const consultationSchema = z.object({
  objective: z.enum(OBJECTIVES, { message: "Select what you're looking to do." }),
  practices: z
    .array(z.enum(PRACTICE_SLUGS))
    .min(1, "Select at least one practice."),
  jurisdictions: z.array(z.enum(JURISDICTIONS)).max(JURISDICTIONS.length).default([]),
  horizon: z.enum(HORIZONS, { message: "Select a timeline." }),
  scale: z.enum(SCALES).optional(),
  message: z.string().trim().max(4000).optional().or(z.literal("")),
  fullName: z.string().trim().min(1, "Enter your full name.").max(200),
  entity: z.string().trim().max(200).optional().or(z.literal("")),
  email: z.string().trim().min(1, "Enter your email.").email("Enter a valid email.").max(320),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  // Honeypot — real visitors never see or fill this field. Any non-empty
  // value here means a bot filled every input; the server treats it as a
  // silent-success rejection rather than surfacing that it was caught.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ConsultationFormValues = z.infer<typeof consultationSchema>;

export const consultationStepSchemas = {
  objective: consultationSchema.pick({ objective: true }),
  practices: consultationSchema.pick({ practices: true }),
  jurisdictionsAndHorizon: consultationSchema.pick({ jurisdictions: true, horizon: true }),
  contact: consultationSchema.pick({ fullName: true, email: true }),
} as const;
