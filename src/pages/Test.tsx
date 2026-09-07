import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DIMENSIONS, QUESTIONS } from "../data/content";
import { computeResult, type Answers } from "../lib/scoring";
import ScaleQuestion from "../components/ScaleQuestion";

const RESULT_KEY = "songwriter-style-result";
const ANSWERS_KEY = "songwriter-style-answers";

function loadStoredAnswers(): Answers {
  try {
    const raw = localStorage.getItem(ANSWERS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export default function Test() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Answers>(loadStoredAnswers);
  const [index, setIndex] = useState(0);

  const question = QUESTIONS[index];
  const total = QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;
  const currentValue = answers[question.id];

  function persist(next: Answers) {
    setAnswers(next);
    try {
      localStorage.setItem(ANSWERS_KEY, JSON.stringify(next));
    } catch {
      // localStorage no disponible; el test sigue funcionando en memoria
    }
  }

  function handleChange(value: number) {
    persist({ ...answers, [question.id]: value });
  }

  function handleCommit() {
    if (currentValue === undefined) return;
    if (index < total - 1) {
      setTimeout(() => setIndex(index + 1), 200);
    }
  }

  function goPrev() {
    if (index > 0) setIndex(index - 1);
  }

  function goNext() {
    if (index < total - 1) setIndex(index + 1);
  }

  function finish() {
    const result = computeResult(answers);
    try {
      localStorage.setItem(RESULT_KEY, JSON.stringify(result));
    } catch {
      // no-op
    }
    navigate("/resultado", { state: { result } });
  }

  const allAnswered = answeredCount === total;
  const progress = Math.round((answeredCount / total) * 100);

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <div className="mb-8">
        <div className="flex justify-between text-xs text-ink/50 mb-2">
          <span>{DIMENSIONS[question.dimension].title}</span>
          <span>
            Pregunta {index + 1} de {total}
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-ink/10 overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      <ScaleQuestion
        question={question}
        value={currentValue}
        onChange={handleChange}
        onCommit={handleCommit}
      />

      <div className="flex justify-between items-center mt-8">
        <button
          type="button"
          onClick={goPrev}
          disabled={index === 0}
          className="text-sm font-medium text-ink/60 hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Anterior
        </button>

        <span className="text-xs text-ink/40">{progress}% respondido</span>

        {index < total - 1 ? (
          <button
            type="button"
            onClick={goNext}
            disabled={currentValue === undefined}
            className="text-sm font-medium text-accent hover:text-accent-dark disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Siguiente →
          </button>
        ) : (
          <button
            type="button"
            onClick={finish}
            disabled={!allAnswered}
            className="rounded-full bg-accent px-6 py-2 text-white text-sm font-medium hover:bg-accent-dark disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Ver mi resultado
          </button>
        )}
      </div>
    </div>
  );
}
