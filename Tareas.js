const { ComplejidadMinima } = require("./Complejidades");

class Tarea {
  constructor(codigo, duracion) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.complejidad = new ComplejidadMinima();
  }

  getDuracion() {
    return this.duracion;
  }

  getCodigo() {
    return this.codigo;
  }

  getCosto() {
    return this.complejidad.calcularCostoBase(this.duracion);
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duración: ${this.duracion} - Costo: $${this.getCosto().toFixed(2)}`);
  }
}

class TareaCompuesta {
  constructor(codigo, duracion, tareas = []) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.tareas = tareas;
    this.complejidad = new ComplejidadMinima();
  }

  getDuracion() {
    return this.tareas.reduce(
      (acum, tarea) => acum + tarea.getDuracion(),
      this.duracion
    );
  }

  getCodigo() {
    return this.codigo;
  }

  getCosto() {
    const costoPropio = this.complejidad.calcularCostoBase(this.duracion);
    const costoSubtareas = this.tareas.reduce((acc, tarea) => acc + tarea.getCosto(), 0);
    var total = costoPropio + costoSubtareas;

    if (this.tareas.length > 3) {
      total *= 1.04; 
    }

    return total;
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duración: ${this.duracion} - Costo: $${this.getCosto()}`);
    this.tareas.forEach((t) => t.mostrarTarea("  "));
  }
}

module.exports = { Tarea, TareaCompuesta };


/*Agregar al ejercicio el costo y las complejidades que puede tener una tarea.

El costo en dinero de una tarea es igual al tiempo de la tarea multiplicado por un valor común y configurable para todas las complejidades.
Además cada complejidad puede agregarle un porcentaje extra que se suma al costo.

- Complejidad mínima: no agrega porcentaje extra.
- Complejidad media: agrega un 5% extra
- Complejidad máxima:
  - Si el tiempo es menor o igual a 10 unidades entonces agrega un extra del 7%
  - Si el tiempo es mayor a 10 unidades entonces agrega un extra del 7% más $1000 por cada día que la tarea exceda las 10 unidades.
A su vez las tareas que tengan más de 3 subtareas directas asociadas tienen un costo extra del 4% por overhead.*/