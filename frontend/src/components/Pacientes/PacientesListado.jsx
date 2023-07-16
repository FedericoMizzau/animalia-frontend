import React from "react";

const PacientesListado = ({ pacientes, pacienteActual }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>NRO</th>
          <th>Nombre</th>
          <th>Propietario</th>
        </tr>
      </thead>
      <tbody>
        {pacientes.length === 0 ? (
          <tr>
            <td>No se encontraron pacientes</td>
          </tr>
        ) : (
          pacientes.forEach((p) => (
            <tr>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.idPropietario}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default PacientesListado;
