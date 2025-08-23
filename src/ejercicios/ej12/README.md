# Ejercicio 12

**Consigna**
- Modificar el método `controlarDocumento()` de `Guardia` para que devuelva:
  > "Adelante <nombre completo del visitante> con dni <dni>".
- Crear instancias de `Visitante` y `Guardia`, asignar valores y mostrar.
- Analizar si es posible pasar un único parámetro al método y estudiar ventajas/desventajas.

**Análisis**
- ✔ Ventaja de pasar el objeto completo (`Visitante`): se accede directamente a nombre y DNI sin múltiples parámetros.
- ❌ Desventaja: acopla el método `controlarDocumento()` a la clase `Visitante`, pierde generalidad (solo sirve para Visitante y no para cualquier persona).
