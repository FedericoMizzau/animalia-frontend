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
    <table className="table table-warning">
      <thead>
        <tr>
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
              <td>{p.id}</td>
              <td>{p.Nombre}</td>
              <td>{moment(p.FechaNacimiento).format("DD/MM/YYYY")}</td>
              <td>{p.Propietarios_id}</td>
              <td>
                <button onClick={(e) => consultarPaciente(p.id, "C")} className="btn-opciones-pacientes consultar">C&nbsp;</button>
                <button onClick={(e) => consultarPaciente(p.id, "M")} className="btn-opciones-pacientes modificar">M</button>
                <button onClick={(e) => eliminarPaciente(p.id)} className="btn-opciones-pacientes eliminar">X&nbsp;</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default PacientesListado;
