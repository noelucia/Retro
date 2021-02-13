import React, { useState } from "react";
import "./Inputs.scss";

const Inputs = ({ agregarEjercicio }) => { // paso como objeto la funcion que me va a agregar en cada select
  const [dia, setDia] = useState(0);

  return (
    <div className="contenedor-input">
      <ul>
      <li><strong>Aerobico</strong></li>
          <li>
          <select
            value={dia}
            onChange={e => setDia(e.target.value)}
            name="Dias"
          >
            <option value="0">Lunes</option>
            <option value="1">Martes</option>
            <option value="2">Miercoles</option>
            <option value="3">Jueves</option>
            <option value="4">Viernes</option>
          </select>
        </li>

        <li>
          Cinta
          <select onChange={e => agregarEjercicio(e, dia)} name="cinta">
            <option>Sin asignar</option>
            <option>20 minutos</option>
            <option>30 minutos</option>
            <option>40 minutos</option>
          </select>
        </li>
        
        <li>
          Eliptico
          <select onChange={e => agregarEjercicio(e, dia)} name="eliptico">
            <option>Sin asignar</option>
            <option>20 minutos</option>
            <option>30 minutos</option>
            <option>40 minutos</option>
          </select>
        </li>
        <li>
          Bicicleta
          <select onChange={e => agregarEjercicio(e, dia)} name="bicicleta">
            <option>Sin asignar</option>
            <option>20 minutos</option>
            <option>30 minutos</option>
            <option>40 minutos</option>
          </select>
        </li>

        <li><strong>Localizada</strong></li>
        
        <li>
          Sentadillas
          <select onChange={e => agregarEjercicio(e, dia)} name="sentadillas">
            <option>Sin asignar</option>
            <option>3x20</option>
            <option>4x25</option>
            <option>5x30</option>
          </select>
        </li>
        
        <li>
          Abdominales
          <select onChange={e => agregarEjercicio(e, dia)} name="abdominales">
            <option>Sin asignar</option>
            <option>4x10</option>
            <option>5x20</option>
            <option>5x25</option>
          </select>
        </li>
       
        <li>
          Flexiones
          <select onChange={e => agregarEjercicio(e, dia)} name="flexiones">
            <option>Sin asignar</option>
            <option>3x15</option>
            <option>4x20</option>
            <option>5x30</option>
          </select>
        </li>
      </ul>
    </div>
  );
};
export default Inputs;
