# Tu Estilo Creativo — test para letristas

Sitio web (React + TypeScript + Vite + Tailwind) para que estudiantes de composición de
canciones descubran su estilo creativo: un test de 24 preguntas sobre cómo piensan, deciden
y trabajan al escribir una letra, con un resultado personalizado (fortalezas, hábitos de
trabajo, bloqueos típicos y técnicas para destrabarse).

El marco conceptual está inspirado en la teoría de tipos psicológicos de Carl Jung y en la
relación entre estilo cognitivo y proceso creativo que explora Sheila Davis en *The
Songwriter's Idea Book* (1992, Parte II). Todas las preguntas, perfiles y textos de este sitio
son redacción original — no una transcripción del libro.

Los resultados se guardan solo en el `localStorage` del navegador de cada alumno: nadie más
los ve, no hay backend ni base de datos.

## Estructura

- `src/data/content.ts` — preguntas, dimensiones y perfiles de resultado.
- `src/lib/scoring.ts` — lógica de puntaje (4 escalas → tipo de 4 letras + estilo cognitivo).
- `src/pages/` — `Home` (teoría), `Test` (cuestionario), `Resultado`.

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Deploy en Vercel

Es un proyecto Vite estándar: en Vercel, "Import Project" sobre este repo y usa la
configuración por defecto (`npm run build`, output `dist/`). No requiere variables de entorno
ni base de datos.
