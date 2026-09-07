import type { Question } from "../data/content";

const ADVANCE_KEYS = [
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End",
  "PageUp",
  "PageDown",
];

const THUMB_BASE = `
  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7
  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white
  [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:transition-colors
  [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:h-7
  [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white
  [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-grab [&::-moz-range-thumb]:transition-colors
  [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-runnable-track]:h-7
  [&::-moz-range-track]:bg-transparent [&::-moz-range-track]:h-7
`;

interface Props {
  question: Question;
  value: number | undefined;
  onChange: (value: number) => void;
  onCommit: () => void;
}

export default function ScaleQuestion({ question, value, onChange, onCommit }: Props) {
  const hasAnswered = value !== undefined;
  const displayValue = value ?? 0;

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (ADVANCE_KEYS.includes(e.key)) onCommit();
  }

  return (
    <div className="rounded-2xl border border-ink/10 bg-white/60 p-6 sm:p-8">
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <p className="font-display text-lg leading-snug">{question.textA}</p>
        <p className="font-display text-lg leading-snug sm:text-right">{question.textB}</p>
      </div>

      <div className="relative h-7 flex items-center">
        <div className="absolute left-0 right-0 h-1.5 rounded-full bg-gradient-to-r from-plum via-ink/15 to-gold pointer-events-none" />
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-3.5 rounded-full bg-ink/30 pointer-events-none" />
        <input
          type="range"
          min={-2}
          max={2}
          step={1}
          value={displayValue}
          onChange={(e) => onChange(Number(e.target.value))}
          onMouseUp={onCommit}
          onTouchEnd={onCommit}
          onKeyUp={handleKeyUp}
          aria-label={`Escala entre "${question.textA}" y "${question.textB}"`}
          className={`relative z-10 w-full appearance-none bg-transparent cursor-pointer ${THUMB_BASE} ${
            hasAnswered
              ? "[&::-webkit-slider-thumb]:bg-accent [&::-moz-range-thumb]:bg-accent"
              : "[&::-webkit-slider-thumb]:bg-ink/35 [&::-moz-range-thumb]:bg-ink/35"
          }`}
        />
      </div>

      <div className="flex justify-between mt-2 text-xs text-ink/50">
        <span>Muy de acuerdo</span>
        <span>Neutral</span>
        <span>Muy de acuerdo</span>
      </div>

      {!hasAnswered && (
        <p className="text-center text-xs text-ink/40 mt-3">Desliza para responder</p>
      )}
    </div>
  );
}
