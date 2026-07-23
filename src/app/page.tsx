import { CaseStudy } from "@/components/home/CaseStudy";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { Hero } from "@/components/home/Hero";
import { InsightTeaser } from "@/components/home/InsightTeaser";
import { Jurisdictions } from "@/components/home/Jurisdictions";
import { Mandate } from "@/components/home/Mandate";
import { Pillars } from "@/components/home/Pillars";
import { ProofStrip } from "@/components/home/ProofStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <Mandate />
      <Pillars />
      <ProofStrip />
      <CaseStudy />
      <Jurisdictions />
      <InsightTeaser />
      <ConsultationCTA />
    </>
  );
}
