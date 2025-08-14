# Programación 2 — UTN (Ciclo 2025)

Repositorio con ejercicios y prácticas de la materia Programación 2 de la Universidad Tecnológica Nacional (ciclo 2025). El código está escrito en TypeScript y pensado para ejecutarse con Node.js.

## Contenido
- Ejercicios y ejemplos en `src/ejercicios/`.
- Punto de entrada: `src/index.ts`.

## Requisitos
- Node.js (recomendado >= 18)
- npm (o pnpm / yarn)

## Instalación
Desde la raíz del proyecto:

```powershell
npm install
```

## Scripts útiles
Los scripts principales vienen en `package.json`:

- `npm run dev` — Ejecuta en desarrollo usando `ts-node` (entrada `src/index.ts`).
- `npm run build` — Compila TypeScript a JavaScript en `dist/`.
- `npm start` — Ejecuta la versión compilada (`node dist/index.js`).
- `npm run lint` — Ejecuta ESLint.
- `npm run format` — Formatea con Prettier.

## Uso rápido

Modo desarrollo (editar y probar):

```powershell
npm install
npm run dev
```

Compilar y ejecutar (producción):

```powershell
npm run build
npm start
```

## Estructura recomendada

- `src/` — Código fuente TypeScript.
  - `src/index.ts` — Punto de entrada que invoca los ejercicios.
  - `src/ejercicios/` — Subcarpetas por ejercicio (ej01, ej02, ...).

## Buenas prácticas
- Añadir README en cada ejercicio explicando el objetivo y cómo probarlo.
- Mantener tipado estricto y usar `tsc` para comprobar la compilación antes de commitear.

## Contribuir / Entregar
- Agrega tus cambios en ramas separadas y abre PR o sube commits al remoto.
- Para agregar dependencias: `npm install --save <paquete>` o `npm install --save-dev <paquete>`.




