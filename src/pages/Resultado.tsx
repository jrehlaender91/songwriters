import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BRAIN_TECHNIQUES,
  COGNITIVE_STYLES,
  DIMENSIONS,
  LETTER_PROFILES,
  type CognitiveStyle,
} from "../data/content";
import type { TestResult } from "../lib/scoring";

const RESULT_KEY = "songwriter-style-result";
const ANSWERS_KEY = "songwriter-style-answers";

export default function Resultado() {
  const location = useLocation();
  const navigate = useNavigate();
  const [result] = useState<TestResult | null>(() => {
    const fromState = (location.state as { result?: TestResult } | null)?.result;
    if (fromState) return fromState;
    try {
      const raw = localStorage.getItem(RESULT_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (!result) navigate("/test", { replace: true });
  }, [result, navigate]);

  if (!result) return null;

  const cognitive = COGNITIVE_STYLES[result.cognitiveStyle as CognitiveStyle];

  function retake() {
    try {
      localStorage.removeItem(ANSWERS_KEY);
      localStorage.removeItem(RESULT_KEY);
    } catch {
      // ignore
    }
    navigate("/test");
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-2">
          Tu resultado
        </p>
        <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight">
          {result.type}
        </h1>
        <p className="mt-3 text-ink/60">
          Estilo cognitivo:{" "}
          <span className="font-semibold text-plum">
            {cognitive.name} ({cognitive.code})
          </span>
        </p>
      </div>

      <section className="mb-12">
        <h2 className="font-display text-xl font-semibold mb-4">Tus cuatro dimensiones</h2>
        <div className="space-y-3">
          {result.dimensions.map((d) => {
            const profile = LETTER_PROFILES[d.letter];
            const dimInfo = DIMENSIONS[d.dimension];
            return (
              <div key={d.dimension} className="rounded-xl border border-ink/10 p-4">
                <div className="flex justify-between items-baseline mb-1">
                  <p className="text-xs uppercase tracking-wide text-ink/40">{dimInfo.title}</p>
                  <p className="text-xs text-ink/40">{d.strength}% de preferencia</p>
                </div>
                <p className="font-display font-semibold text-lg">
                  {profile.letter} · {profile.name}
                </p>
                <div className="h-1.5 rounded-full bg-ink/10 overflow-hidden mt-2 mb-2">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: `${Math.max(d.strength, 6)}%` }}
                  />
                </div>
                <p className="text-sm text-ink/70">{profile.tagline}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-12 space-y-6">
        <h2 className="font-display text-xl font-semibold">Tus fortalezas como letrista</h2>
        {result.dimensions.map((d) => {
          const profile = LETTER_PROFILES[d.letter];
          return (
            <div key={d.dimension} className="rounded-xl bg-paper-dim/60 p-5">
              <p className="font-display font-semibold mb-2">
                {profile.letter} · {profile.name}
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-ink/75 mb-3">
                {profile.strengths.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="text-sm text-ink/75 mb-2">
                <span className="font-medium">Cómo trabajas mejor: </span>
                {profile.workStyle}
              </p>
              <p className="text-sm text-ink/75 mb-2">
                <span className="font-medium">Bloqueo típico: </span>
                {profile.block}
              </p>
              <p className="text-sm text-accent-dark">
                <span className="font-medium">Prueba esto: </span>
                {profile.tip}
              </p>
            </div>
          );
        })}
      </section>

      <section className="mb-12">
        <h2 className="font-display text-xl font-semibold mb-3">
          Tu estilo lírico: {cognitive.name}
        </h2>
        <p className="text-sm text-ink/75 mb-3">{cognitive.description}</p>
        <p className="text-sm text-ink/75 mb-3">
          <span className="font-medium">En tus letras: </span>
          {cognitive.lyricTendency}
        </p>
        <p className="text-sm text-accent-dark">
          <span className="font-medium">Presta atención a: </span>
          {cognitive.watchOut}
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-xl font-semibold mb-4">
          Técnicas para cuando te trabas
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[BRAIN_TECHNIQUES.right, BRAIN_TECHNIQUES.left].map((group) => (
            <div key={group.title} className="rounded-xl border border-ink/10 p-4">
              <p className="font-display font-semibold mb-3 text-sm">{group.title}</p>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-ink/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center border-t border-ink/10 pt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <button
          type="button"
          onClick={retake}
          className="rounded-full border border-ink/20 px-6 py-2 text-sm font-medium hover:bg-ink/5 transition-colors"
        >
          Volver a hacer el test
        </button>
        <Link
          to="/"
          className="rounded-full bg-accent px-6 py-2 text-sm font-medium text-white hover:bg-accent-dark transition-colors"
        >
          Volver a la teoría
        </Link>
      </div>
    </div>
  );
}
