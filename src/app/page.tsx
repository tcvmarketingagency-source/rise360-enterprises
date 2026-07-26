import { CapabilityStrip } from "@/components/home/CapabilityStrip";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { Hero } from "@/components/home/Hero";
import { InsightTeaser } from "@/components/home/InsightTeaser";
import { Jurisdictions } from "@/components/home/Jurisdictions";
import { Mandate } from "@/components/home/Mandate";
import { Pillars } from "@/components/home/Pillars";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <Mandate />
      <Pillars />
      <ServicesShowcase />
      <CapabilityStrip />
      <Jurisdictions />
      <InsightTeaser />
      <ConsultationCTA />
    </>
  );
}
