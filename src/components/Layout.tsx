import { Link, NavLink, Outlet } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors hover:text-accent ${
    isActive ? "text-accent" : "text-ink/70"
  }`;

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-ink/10">
        <div className="mx-auto max-w-3xl px-6 py-5 flex items-center justify-between">
          <Link to="/" className="font-display text-lg font-semibold tracking-tight">
            Tu Estilo Creativo
          </Link>
          <nav className="flex gap-6">
            <NavLink to="/" end className={navLinkClass}>
              Teoría
            </NavLink>
            <NavLink to="/test" className={navLinkClass}>
              Hacer el test
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-ink/10 mt-16">
        <div className="mx-auto max-w-3xl px-6 py-8 text-xs text-ink/50 leading-relaxed">
          <p>
            Marco conceptual inspirado en la teoría de tipos psicológicos de Carl Jung y en la
            relación entre estilo cognitivo y proceso creativo que explora Sheila Davis en{" "}
            <em>The Songwriter's Idea Book</em> (1992). Preguntas, textos y perfiles de esta
            página son de elaboración propia para uso educativo.
          </p>
        </div>
      </footer>
    </div>
  );
}
