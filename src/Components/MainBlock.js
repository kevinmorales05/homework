import React from "react";
import filter from "../assets/img/filter.png";

export default function MainBlock() {
  return (
    <div className="mainblock">
      <div>
        <h2>Buenas tardes, Edwin Encinas</h2>
        <p>No estes ocupado, se productivo.</p>
      </div>
      <div style={{display:"flex", flexDirection:"row"}}>
        <img src={filter} width="25px" height="25px" alt="home icon" />
        <h3>Filtrar por nombre</h3>
      </div>
      <div>
        <h2>Todos</h2>
        <div>
          <div>
            <h3>+</h3>
            <h3>Agregar nuevo proyecto</h3>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
