export const WORD_STAGGER_S = 0.06;
export const WORD_DURATION_S = 0.5;
export const ACCENT_HOLD_S = 0.21;

/**
 * The accent word is deliberately delayed past the last natural stagger step
 * so it lands after every other word, holding the eye on it.
 */
export function heroHeadlineTiming(wordCount: number) {
  const lastIndex = wordCount - 1;
  const accentDelay = lastIndex * WORD_STAGGER_S + WORD_STAGGER_S + ACCENT_HOLD_S;
  const settleAt = accentDelay + WORD_DURATION_S;
  return { accentDelay, settleAt };
}
