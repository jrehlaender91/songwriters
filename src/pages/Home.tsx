import { Link } from "react-router-dom";
import { DIMENSIONS, LETTER_PROFILES, type DimensionKey } from "../data/content";

const DIMENSION_ORDER: DimensionKey[] = ["EI", "SN", "TF", "JP"];

const PROCESS_STEPS = [
  {
    name: "Asociar",
    mode: "Modo derecho",
    desc: "Dejas fluir ideas, imágenes y palabras sin filtrarlas todavía. El objetivo es cantidad y conexión libre, no calidad.",
  },
  {
    name: "Incubar",
    mode: "Modo derecho",
    desc: "Le das tiempo a la idea para asentarse: caminas, haces otra cosa, duermes sobre el problema. Muchas soluciones aparecen cuando dejas de perseguirlas.",
  },
  {
    name: "Separar",
    mode: "Modo izquierdo",
    desc: "Ordenas el material en partes: verso, estribillo, puente. Eliges una estructura y pones cada idea en su lugar.",
  },
  {
    name: "Discriminar",
    mode: "Modo izquierdo",
    desc: "Editas: sacas lo que sobra, corriges lo que no cierra, eliges la mejor versión de cada línea.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-12 text-center">
        <p className="font-display text-sm uppercase tracking-[0.2em] text-accent mb-4">
          Para letristas y compositores
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight text-balance">
          Cada quien compone distinto. Descubre cómo compones tú.
        </h1>
        <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl mx-auto text-balance">
          Un test breve (24 preguntas, ~7 minutos) sobre cómo piensas, decides y trabajas cuando
          escribes una canción — para que entiendas tus fortalezas naturales y la forma de
          trabajo que más te conviene.
        </p>
        <Link
          to="/test"
          className="inline-block mt-8 rounded-full bg-accent px-8 py-3 text-white font-medium hover:bg-accent-dark transition-colors"
        >
          Hacer el test →
        </Link>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 border-t border-ink/10">
        <h2 className="font-display text-2xl font-semibold mb-4">
          Por qué esto importa a la hora de componer
        </h2>
        <p className="text-ink/75 leading-relaxed">
          No existe una única forma correcta de escribir una canción. Algunas personas componen
          mejor solas y en silencio; otras necesitan hablar, tocar o mostrar la idea apenas
          nace. Algunas parten de un detalle concreto y real; otras, de una imagen o un concepto
          abstracto. Ninguna forma es mejor — pero conocer la tuya te ahorra pelearte contigo
          mismo y te ayuda a anticipar en qué parte del proceso eres más fuerte y en cuál necesitas
          un empujón extra.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 border-t border-ink/10">
        <h2 className="font-display text-2xl font-semibold mb-4">
          El cerebro creativo trabaja en dos modos
        </h2>
        <p className="text-ink/75 leading-relaxed mb-6">
          Uno funciona como un telescopio: ve el panorama completo, conecta ideas lejanas,
          imagina posibilidades. Es el modo intuitivo y asociativo. El otro funciona como un
          microscopio: se fija en el detalle, ordena, estructura y corrige. Es el modo analítico
          y estructurado. Componer bien requiere pasar por los dos — no hace falta empezar
          siempre por el mismo.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.name}
              className="rounded-xl border border-ink/10 bg-paper-dim/60 p-4"
            >
              <p className="text-xs uppercase tracking-wide text-accent font-medium mb-1">
                {step.mode}
              </p>
              <h3 className="font-display text-lg font-semibold mb-1">{step.name}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 border-t border-ink/10">
        <h2 className="font-display text-2xl font-semibold mb-4">
          Cuatro dimensiones de tu estilo
        </h2>
        <p className="text-ink/75 leading-relaxed mb-6">
          El test te ubica en cuatro escalas independientes. En cada una no hay un lado "mejor":
          son formas distintas de llegar a una buena canción.
        </p>
        <div className="space-y-4">
          {DIMENSION_ORDER.map((key) => {
            const dim = DIMENSIONS[key];
            const low = LETTER_PROFILES[dim.low];
            const high = LETTER_PROFILES[dim.high];
            return (
              <div key={key} className="rounded-xl border border-ink/10 p-5">
                <p className="text-xs uppercase tracking-wide text-plum font-medium mb-2">
                  {dim.title}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-display font-semibold">
                      {low.letter} · {low.name}
                    </p>
                    <p className="text-sm text-ink/70">{low.tagline}</p>
                  </div>
                  <div>
                    <p className="font-display font-semibold">
                      {high.letter} · {high.name}
                    </p>
                    <p className="text-sm text-ink/70">{high.tagline}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 border-t border-ink/10 text-center">
        <h2 className="font-display text-2xl font-semibold mb-3">¿Listo para descubrir el tuyo?</h2>
        <p className="text-ink/70 mb-6">
          Tu resultado queda guardado solo en este navegador — nadie más lo ve.
        </p>
        <Link
          to="/test"
          className="inline-block rounded-full bg-accent px-8 py-3 text-white font-medium hover:bg-accent-dark transition-colors"
        >
          Hacer el test →
        </Link>
      </section>
    </div>
  );
}
