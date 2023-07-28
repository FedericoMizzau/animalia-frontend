import React from "react";

const ControlesBuscar = ({ nroControl, fechaControl, setNroControl, setFechaControl }) => {
  return (
    <div>
      <h3>BUSCAR CONTROL</h3>
      <form>
        <div>
          <label htmlFor="nroControl">Numero de control: </label>
          <input type="text" name="nroControl" value={nroControl} onChange={(e) => {setNroControl(e.target.value)}}/>
        </div>
        <div>
        <label htmlFor="fechaControl">Fecha: </label>
        <input type="date" name="fechaControl" value={fechaControl} onChange={(e) => {setFechaControl(e.target.value)}} />
        </div>
        <input type="submit" value="BUSCAR" />
{/* A implementar: funcionalidades de enviar e imprimir */}
        <button>ENVIAR A</button>
        <button>IMPRIMIR RESUMEN</button>
      </form>
    </div>
  );
};

export default ControlesBuscar;
