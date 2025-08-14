**Consigna:**  
Crear una clase `Articulo` que tenga los atributos **privados** `marca` y `modelo`.  

**Tareas:**
- Crear métodos públicos para asignar valores.
- Crear una instancia y asignarle valores.
- Notar que no es posible mostrar los valores directamente por pantalla y analizar el motivo.

**Objetivo:**  
Practicar encapsulamiento y visibilidad de atributos privados.

**Análisis:**  
Los atributos privados solo pueden ser accedidos desde **dentro de la clase**.  
Por eso, si intentamos mostrar `articulo.marca` directamente desde fuera, TypeScript marcará un error. La solución para mostrar datos es proveer un **getter**.
