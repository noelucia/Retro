import React from "react";
import "./CardDias.scss";

const CardDias = ({day,actividad,eliminar}) => {
  return (
    <section className="card">
      <div className="contenedor-titulo">
        <h1>{day}</h1>
        <ul> 
          <li>Aerobico</li>
          {actividad.map(ejercicio => {
            return (<li key={`${day}${ejercicio.ejercicio}`}>{ejercicio.ejercicio}: {ejercicio.repeticiones }</li>)
          })}
          <li> <button eliminar={eliminar}>Eliminar</button></li>
        </ul>
      </div>
    </section>
  );
};

export default CardDias;
