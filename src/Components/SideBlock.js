import React from "react";

export default function SideBlock() {
  return (
    <div className="sideblock">
      <h1>Tus Tareas:</h1>
      <div>
        <table>
          <tr>
            <th>Tareas de tus Proyectos</th>
            <th>Tareas Personales</th>
            <th>Agenda</th>
          </tr>
        </table>
      </div>
      <div>
        <button>+ Crear Tarea</button>
        <button>Mi Calendario</button>
      </div>
      <div>
        <h2>Agenda</h2>
        <h3>October 28 - November 03</h3>
        <p>Wow, no tiene trabajo pendiente para los próximos 7 días.</p>

      </div>
    </div>
  );
}
