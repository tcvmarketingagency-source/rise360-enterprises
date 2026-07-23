import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { JURISDICTION_MARKERS, JURISDICTIONS_CONTENT } from "@/lib/content";

const CONTINENT_PATHS = [
  "M160 70 L330 60 L360 140 L340 200 L300 230 L250 220 L200 180 L160 140 Z",
  "M270 240 L340 235 L360 300 L330 400 L300 430 L275 380 L260 300 Z",
  "M450 70 L530 65 L545 110 L520 150 L460 145 L445 100 Z",
  "M460 160 L560 155 L575 220 L550 320 L510 375 L470 320 L455 220 Z",
  "M545 60 L750 50 L880 90 L900 160 L850 230 L760 260 L650 240 L570 200 L545 130 Z",
  "M860 330 L950 325 L965 370 L930 400 L870 390 L855 360 Z",
];

export function Jurisdictions() {
  return (
    <Section id="global" className="bg-paper-soft">
      <Container>
        <Reveal>
          <Eyebrow>{JURISDICTIONS_CONTENT.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-display-lg text-ink">
            {JURISDICTIONS_CONTENT.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto mt-16 aspect-[2/1] w-full max-w-4xl">
          <svg
            viewBox="0 0 1000 500"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
          >
            {CONTINENT_PATHS.map((d) => (
              <path key={d} d={d} className="fill-ink-soft/25" />
            ))}
          </svg>

          {JURISDICTION_MARKERS.map((marker) => (
            <div
              key={marker.name}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
            >
              <button
                type="button"
                aria-label={marker.name}
                className="block h-2.5 w-2.5 rounded-full bg-brass ring-4 ring-brass/20 transition-colors duration-200 hover:bg-brass-dim focus-visible:bg-brass-dim"
              />
              <span
                role="tooltip"
                className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded border border-hairline bg-paper px-3 py-1.5 font-ui text-sm text-ink opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
              >
                {marker.name}
              </span>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
