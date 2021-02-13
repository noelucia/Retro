import React, { useState } from "react";
import "./App.css";
import CardDias from "./Componentes/CardDias";
import Inputs from "./Componentes/Inputs";
import Header from "./Section/Header";
import Nombre from "./Componentes/Nombre";
const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domindo"];
function App() {
const [ejercicios,setEjercicios] = useState([]);

  const agregarEjercicio = (e, dia) =>{
    const {name,value} = e.target;
    if(value){
      const clon = [...ejercicios];
      if(!clon[dia]) clon[dia] = [];
      const index= clon[dia].findIndex(ej=>ej.ejercicio===name); // item de ejercicio igual al nombre
      if(index === -1) {// si no lo encuentra entonces hace un push 
        clon[dia].push({ejercicio:name,repeticiones:value});
      }else { 
        clon[dia][index] = {ejercicio:name,repeticiones:value}; // si el indice de arriba existe cambialo por lo nuevo 
      }

      setEjercicios(clon);
    }
  }

  const eliminar=(ejercicio)=>{
    const row=([...ejercicios])
    const indice=row.findIndex(ejercicios=>{
       return (
         ejercicios.ejercicio==ejercicio
       )
    }
    )
     row.splice(indice,1)
     setEjercicios(row)
     
   }
   
  return (
    <div className="input-container">
      <Header></Header>
      <Nombre
      ></Nombre>
      <Inputs
        agregarEjercicio={agregarEjercicio} // agregro la funcion
      ></Inputs>
        {ejercicios.map((card, index) => {
          return (
            <CardDias key={index + 1} day={days[index]} actividad={card?card:[]}
            eliminar={eliminar}></CardDias>
          );
        })}
    </div>
  );
}


export default App;
