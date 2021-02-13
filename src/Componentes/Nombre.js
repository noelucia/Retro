import React, { useState, useReducer } from "react";
import "./Nombre.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.payload };
  }
  switch (action.type) {
    case "changeUserName":
      return { ...state, username: action.payload };
  }
};

function Nombre() {
  const [name, setName] = useState();
  const [username, setUser] = useState();
  const [state, dispatch] = useReducer(reducer, { name, username });
  const changeName = () => dispatch({ type: "changeName", payload: name });
  const changeUserName = () =>dispatch({ type: "changeUserName", payload: username });

  return (
    <div className="contenedor-nombre">
      <div className="imagen"></div>
      <div className="info-user">Username: {state.username}</div>
      <input
        type="text"
        placeholder="UserName"
        onChange={e => setUser(e.target.value)}
        className="info"
      ></input>
      <button className="info" onClick={changeUserName}>Agregar</button>
    </div>
  );
}

export default Nombre;
