import React from "react";
import filter from "../assets/img/filter.png";
import enter from "../assets/img/enter.png";
import plus from "../assets/img/plus.png";

export default function MainBlock() {
  return (
    <div className="mainblock">
      <div>
        <h2>Buenas tardes, Edwin Encinas</h2>
        <p>No estes ocupado, se productivo.</p>
      </div>
      <div style={{display:"flex", flexDirection:"row", alignItems:'center'}}>
        <img src={filter} width="25px" height="25px" alt="home icon" />
        <h3 style={{marginLeft:"5px", fontWeight:"bolder", fontSize:"15px", color:"#766F6F"}}>Filtrar por nombre...</h3>
      </div>
      <div style={{display:"flex", flexDirection:"row", alignItems:'center'}}>
        <h3 style={{marginRight:"5px", fontWeight:"bolder", fontSize:"15px", color:"black"}}>Favoritos</h3>
        <img src={enter} width="25px" height="25px" alt="home icon" />
      </div>
      <div>
        <h2>Todos</h2>
        <div style={{margin:"10px"}}>
          <div style={{border:"dotted black 2px", width:'25%', height:"180px", flexDirection:"column"}} className="centered">
          <img src={plus} width="25px" height="25px" alt="home icon" />
        <h3 style={{marginLeft:"5px", fontWeight:"bolder", fontSize:"15px", color:"#766F6F"}}>Agregar nuevo proyecto</h3>
            
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
