import type { ServiceMotifId } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Every shape below carries pathLength={100} so the CSS in globals.css
 * (.service-motif-draw) can drive a normalized stroke-dashoffset reveal
 * on hover, regardless of each shape's actual geometric length.
 */
const MOTIFS: Record<ServiceMotifId, React.ReactNode> = {
  consultant: (
    <>
      <line pathLength={100} x1="8" y1="12" x2="24" y2="38" />
      <line pathLength={100} x1="24" y1="6" x2="24" y2="38" />
      <line pathLength={100} x1="40" y1="12" x2="24" y2="38" />
    </>
  ),
  immigration: (
    <>
      <line pathLength={100} x1="24" y1="6" x2="24" y2="42" />
      <path pathLength={100} d="M8 34 C 16 34, 20 14, 40 12" />
    </>
  ),
  finance: (
    <>
      <polyline pathLength={100} points="8,38 18,26 26,30 40,10" />
      <circle pathLength={100} cx="40" cy="10" r="2.5" />
    </>
  ),
  admin: (
    <>
      <rect pathLength={100} x="9" y="9" width="30" height="30" />
      <rect pathLength={100} x="17" y="17" width="14" height="14" />
    </>
  ),
  tradeflow: (
    <>
      <line pathLength={100} x1="4" y1="24" x2="44" y2="24" />
      <line pathLength={100} x1="14" y1="38" x2="14" y2="10" />
      <line pathLength={100} x1="14" y1="10" x2="9" y2="17" />
      <line pathLength={100} x1="14" y1="10" x2="19" y2="17" />
      <line pathLength={100} x1="34" y1="10" x2="34" y2="38" />
      <line pathLength={100} x1="34" y1="38" x2="29" y2="31" />
      <line pathLength={100} x1="34" y1="38" x2="39" y2="31" />
    </>
  ),
  web: (
    <>
      <polyline pathLength={100} points="19,12 9,24 19,36" />
      <polyline pathLength={100} points="29,12 39,24 29,36" />
      <line pathLength={100} x1="24" y1="14" x2="24" y2="34" />
    </>
  ),
  design: (
    <>
      <circle pathLength={100} cx="19" cy="22" r="12" />
      <rect pathLength={100} x="21" y="14" width="20" height="20" />
    </>
  ),
  marketing: (
    <>
      <circle pathLength={100} cx="8" cy="40" r="2" />
      <path pathLength={100} d="M8 32 A8 8 0 0 1 16 40" />
      <path pathLength={100} d="M8 24 A16 16 0 0 1 24 40" />
      <path pathLength={100} d="M8 16 A24 24 0 0 1 32 40" />
    </>
  ),
  assets: (
    <>
      <rect pathLength={100} x="16" y="10" width="16" height="30" />
      <line pathLength={100} x1="16" y1="18" x2="32" y2="18" />
      <line pathLength={100} x1="16" y1="26" x2="32" y2="26" />
      <line pathLength={100} x1="16" y1="34" x2="32" y2="34" />
      <line pathLength={100} x1="8" y1="40" x2="40" y2="40" />
    </>
  ),
};

export function ServiceMotif({
  id,
  className,
}: {
  id: ServiceMotifId;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("service-motif h-12 w-12", className)}
    >
      {MOTIFS[id]}
    </svg>
  );
}
