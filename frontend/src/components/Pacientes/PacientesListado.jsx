import React from "react";
import moment from "moment";

const PacientesListado = ({
  pacientes,
  pacienteActual,
  accion,
  setAccion,
  consultarPaciente,
  eliminarPaciente,
}) => {
  return (
    <table>
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
                <button onClick={(e) => consultarPaciente(p.id, "C")}>C</button>
                <button onClick={(e) => consultarPaciente(p.id, "M")}>M</button>
                <button onClick={(e) => eliminarPaciente(p.id)}>X</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default PacientesListado;
