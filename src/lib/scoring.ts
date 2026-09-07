import { DIMENSIONS, QUESTIONS, type DimensionKey, type Letter } from "../data/content";

// Cada respuesta va de -2 (muy de acuerdo con A) a +2 (muy de acuerdo con B).
export type Answers = Record<string, number>;

export interface DimensionResult {
  dimension: DimensionKey;
  letter: Letter;
  rawScore: number;
  maxScore: number;
  strength: number; // 0-100, qué tan marcada es la preferencia
}

export interface TestResult {
  type: string; // ej "INFP"
  cognitiveStyle: string; // ej "NF"
  dimensions: DimensionResult[];
}

export function computeResult(answers: Answers): TestResult {
  const byDimension: Record<DimensionKey, number[]> = { EI: [], SN: [], TF: [], JP: [] };

  for (const q of QUESTIONS) {
    const value = answers[q.id] ?? 0;
    byDimension[q.dimension].push(value);
  }

  const order: DimensionKey[] = ["EI", "SN", "TF", "JP"];
  const dimensions: DimensionResult[] = order.map((dim) => {
    const values = byDimension[dim];
    const rawScore = values.reduce((sum, v) => sum + v, 0);
    const maxScore = values.length * 2;
    const { low, high } = DIMENSIONS[dim];
    const letter = rawScore >= 0 ? high : low;
    const strength = Math.round((Math.abs(rawScore) / maxScore) * 100);
    return { dimension: dim, letter, rawScore, maxScore, strength };
  });

  const type = dimensions.map((d) => d.letter).join("");
  const cognitiveStyle = dimensions[1].letter + dimensions[2].letter; // S/N + T/F

  return { type, cognitiveStyle, dimensions };
}

export function isComplete(answers: Answers): boolean {
  return QUESTIONS.every((q) => answers[q.id] !== undefined);
}
