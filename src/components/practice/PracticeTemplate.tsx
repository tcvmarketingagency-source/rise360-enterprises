import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { PracticeDefinition } from "@/components/practice/PracticeDefinition";
import { PracticeFaq } from "@/components/practice/PracticeFaq";
import { PracticeHero } from "@/components/practice/PracticeHero";
import { PracticeMarkets } from "@/components/practice/PracticeMarkets";
import { PracticeProcess } from "@/components/practice/PracticeProcess";
import { PracticeServices } from "@/components/practice/PracticeServices";
import { getPracticeCtaBody } from "@/lib/content";
import type { Practice } from "@/types";

export function PracticeTemplate({ practice }: { practice: Practice }) {
  return (
    <>
      <PracticeHero practice={practice} />
      <PracticeDefinition practice={practice} />
      <PracticeServices practice={practice} />
      <PracticeProcess practice={practice} />
      <PracticeMarkets practice={practice} />
      <PracticeFaq practice={practice} />
      <ConsultationCTA body={getPracticeCtaBody(practice.name)} />
    </>
  );
}
