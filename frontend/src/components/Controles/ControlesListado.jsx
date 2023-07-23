import React from "react";

const ControlesListado = ({ controles, accionControl, setAccionControl, eliminarControl }) => {
  async function buscarDetalles(id) {
    // logica para buscar los detalles para el control
  }

  function consultarControl(id, accion) {
    setAccionControl(accion);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>NRO</th>
          <th>FECHA</th>
          <th>DESCRIPCION</th>
          <th>ACTIVO</th>
          <th>VER</th>
          <th>OPCIONES</th>
        </tr>
      </thead>
      <tbody>
        {controles.map((control) => (
          <tr key={control.id}>
            <td>{control.id}</td>
            <td>{control.Fecha}</td>
            <td>{control.Descripcion}</td>
            <td>{control.Activo ? "SI" : "NO"}</td>
            {/* <td>{Logica de renderizado condicional para detalles}</td> */}
            <td>
              <button
                onClick={(e) => consultarControl(control.id, "C")}
                disabled={!control.Activo}
              >
                C
              </button>
              <button
                onClick={(e) => consultarControl(control.id, "M")}
                disabled={!control.Activo}
              >
                M
              </button>
              <button onClick={(e) => eliminarControl(control.id)}>X</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ControlesListado;
