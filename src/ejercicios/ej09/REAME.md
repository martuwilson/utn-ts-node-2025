# Ejercicio 9

**Consigna**
- `Persona` con privados `nombre`, `apellido`, con setters y getters.
- `Visitante` y `Guardia` extienden de `Persona`.
- Instanciar cada clase, asignar valores y mostrar.

**Ventajas de la herencia**
- **Reutilización**: setters/getters y lógica común viven en `Persona`.
- **Menos duplicación**: un solo lugar para cambios (mantenibilidad).
- **Consistencia tipada**: todo Visitante/Guardia “es una” Persona (LSP).
