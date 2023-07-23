import React from "react";
import Detalles from "./Detalles/Detalles.jsx";

const ControlesRegistro = ({
  accionControl,
  detalles,
  idPaciente,
  nroControl,
  grabarControl,
  regresar
}) => {
  return (
    <form>
      <div>
        <button onClick={(e) => regresar()}>VOLVER</button>
        <span>PACIENTE Nº {idPaciente}</span>
        {accionControl === "C" ? <span>CONTROL Nº {nroControl}</span> : ""}
      </div>
      <fieldset disabled={accionControl === "C"}>
        <div>
          <label htmlFor="Descripcion">DESCRIPCION</label>
          <textarea name="Descripcion" cols="50" rows="5"></textarea>
        </div>
        <div>
          <label htmlFor="FechaControl"></label>
          <input type="date" name="FechaControl" />
        </div>
        <div>
          <button onClick={(e) => grabarControl()}>GRABAR</button>
          <button onClick={(e) => regresar()}>CANCELAR</button>
        </div>
        <hr />
       <Detalles detalles={detalles}/>
      </fieldset>
    </form>
  );
};

export default ControlesRegistro;
