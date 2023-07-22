import React from "react";

const ControlesListado = ({ controles }) => {
  async function buscarDetalles(id) {
    // logica para buscar los detalles para el control
  }

  function consultarControl(id, accion){
    // logica de consulta
  }

  function eliminarControl(id, activo){
    if (activo){
      // baja logica
    } else {
      // baja fisica
    }
  }

  return (
    <table>
      <thead>
        <th>NRO</th>
        <th>FECHA</th>
        <th>DESCRIPCION</th>
        <th>ACTIVO</th>
        <th>VER</th>
        <th>OPCIONES</th>
      </thead>
      <tbody>
        {controles.map((control) => (
          <tr>
            <td>{control.id}</td>
            <td>{control.Fecha}</td>
            <td>{control.Descripcion}</td>
            <td>{control.Activo}</td>
            {/* <td>{Logica de renderizado condicional para detalles}</td> */}
            <td>
              <button onClick={(e) => consultarControl(control.id, "C")} disabled={control.Activo}>C</button>
              <button onClick={(e) => consultarControl(control.id, "M")} disabled={control.Activo} >M</button>
              <button onClick={(e) => eliminarControl(control.id)}>X</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ControlesListado;
