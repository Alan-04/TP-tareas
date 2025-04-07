const proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta } = require("./Tareas");
const {
  ComplejidadMinima,
  ComplejidadMedia,
  ComplejidadMaxima,
} = require("./Complejidades");

const t1 = new Tarea("1", 3);
t1.complejidad = t1.complejidad.siguiente(); 

const t2 = new TareaCompuesta("2", 5, [
  new Tarea("2.1", 6),
  new TareaCompuesta("2.2", 8, [
    new Tarea("2.2.1", 3),
    new Tarea("2.2.2", 4),
  ]),
]);
t2.complejidad = t2.complejidad.siguiente().siguiente(); 

const t3 = new TareaCompuesta("3", 7, [
  new Tarea("3.1", 6),
  new Tarea("3.2", 3),
  new Tarea("3.3", 2),
  new Tarea("3.4", 1),
]);

proyecto.agregarTarea(t1);
proyecto.agregarTarea(t2);
proyecto.agregarTarea(t3);

proyecto.mostrarTareas();
console.log(`Duración Total: ${proyecto.getDuracion()}`);
console.log(`Costo Total: $${proyecto.getCostoTotal()}`);
