import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceMotif } from "@/components/services/ServiceMotifs";
import type { ServiceCard as ServiceCardData } from "@/types";

export function ServiceCard({
  service,
  detailed = false,
  delay = 0,
}: {
  service: ServiceCardData;
  detailed?: boolean;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group relative h-full overflow-hidden border border-hairline bg-ink-soft p-8 transition-transform duration-200 ease-out hover:-translate-y-1 md:p-10">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-4 select-none font-display text-display-xl text-brass/15"
        >
          {service.index}
        </span>

        <div className="relative flex h-full flex-col">
          <ServiceMotif id={service.motif} className="text-brass" />

          <h3 className="mt-6 font-display text-heading text-paper">{service.name}</h3>

          <p className="mt-3 text-body text-paper/70">{service.description}</p>

          {detailed && <p className="mt-2 text-body text-paper/50">{service.detail}</p>}

          <Link
            href={service.href}
            className="mt-6 inline-flex items-center gap-2 font-ui text-sm text-brass transition-colors duration-200 hover:text-paper"
          >
            Learn more
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
