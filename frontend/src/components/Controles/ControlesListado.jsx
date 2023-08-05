import React from "react";

const ControlesListado = ({
  controles,
  accionControl,
  setAccionControl,
  eliminarControl,
  consultarControl
}) => {

  return (
    <div className="table-responsive-sm">
      <table className="table table-warning table-borderless controles-listado">
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
              <td className="align-middle text-center fw-bold td-nro">{control.id}</td>
              <td className="align-middle">{control.Fecha}</td>
              <td className="font-0 td-descripcion">{control.Descripcion}</td>
              <td className="align-middle text-center fw-bold font-1">
                {control.Activo ? "SI" : "NO"}
              </td>
              <td>
                <div className="row align-middle text-center container-botones">
                  <div className="col-12 col-lg-4">
                    <button className="btn btn-tratamiento fw-bold shadow-small btn-hover">T</button>
                  </div>
                  <div className="col-12 col-lg-4">
                    <button className="btn btn-lesion fw-bold shadow-small  btn-hover">L</button>
                  </div>
                  <div className="col-12 col-lg-4">
                    <button className="btn btn-estudio fw-bold shadow-small btn-hover">E</button>
                  </div>
                </div>
              </td>
              <td>
                <div className="row align-middle text-center container-botones">
                  <div className="col-12 col-lg-4">
                    <button
                      onClick={(e) => consultarControl(control.id, "C")}
                      disabled={!control.Activo}
                      className="btn btn-consultar shadow-small btn-hover"
                    >
                      <i className="bi bi-info-lg"></i>
                    </button>
                  </div>
                  <div className="col-12 col-lg-4">
                    <button
                      onClick={(e) => consultarControl(control.id, "M")}
                      disabled={!control.Activo}
                      className="btn btn-modificar shadow-small btn-hover"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                  </div>
                  <div className="col-12 col-lg-4">
                    <button
                      onClick={(e) => eliminarControl(control.id)}
                      className="btn btn-eliminar shadow-small btn-hover"
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ControlesListado;
