import React from "react";
import moment from "moment";
import "./pacientes.css";

const PacientesListado = ({
  pacientes,
  pacienteActual,
  accion,
  setAccion,
  consultarPaciente,
  eliminarPaciente,
}) => {
  return (
    <div className="table-responsive-sm opacity-chg-low">
      <table className="table table-warning table-hover pacientes-listado">
        <thead>
          <tr className="align-middle">
            <th>NRO</th>
            <th>NOMBRE</th>
            <th>FECHA NAC.</th>
            <th>DUEÑO/A</th>
            <th>OPCIONES</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.length === 0 ? (
            <tr>
              <td>No se encontraron pacientes</td>
            </tr>
          ) : (
            pacientes.map((p) => (
              <tr key={p.id}>
                <td className="fw-bold text-center">{p.id}</td>
                <td>{p.Nombre}</td>
                <td className="text-center">{moment(p.FechaNacimiento).format("DD/MM/YYYY")}</td>
                <td className="fw-bold text-center">{p.Propietarios_id}</td>
                <td>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-3">
                      <button
                        onClick={(e) => consultarPaciente(p.id, "C")}
                        className="btn-opciones-pacientes consultar"
                      >
                        {/* C&nbsp; */}
                        <i className="bi bi-info-lg"></i>
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        onClick={(e) => consultarPaciente(p.id, "M")}
                        className="btn-opciones-pacientes modificar"
                      >
                        {/* M */}
                        <i className="bi bi-pencil"></i>
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        onClick={(e) => eliminarPaciente(p.id)}
                        className="btn-opciones-pacientes eliminar"
                      >
                        {/* X&nbsp; */}
                        <i className="bi bi-trash3"></i>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PacientesListado;
