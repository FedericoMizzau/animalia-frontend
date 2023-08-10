import React from "react";
import moment from "moment";
import "./pacientes.css";

const PacientesListado = ({
  Items,
  consultarPaciente,
  Pagina,
  RegistrosTotal,
  Paginas,
  buscarPacientes,
  Modificar
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
          { Items && Items.length === 0 ? (
            <tr>
              <td>No se encontraron pacientes</td>
            </tr>
          ) : (
            Items && Items.map((p) => (
              <tr key={p.id}>
                <td className="fw-bold text-center">{p.id}</td>
                <td>{p.Nombre}</td>
                <td className="text-center">{moment(p.FechaNacimiento).format("DD/MM/YYYY")}</td>
                <td className="fw-bold text-center">{p.Propietarios_id}</td>
                <td>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-3">
                      <button
                        onClick={(e) => consultarPaciente(p)}
                        className="btn-opciones-pacientes consultar"
                      >
                        {/* C&nbsp; */}
                        <i className="bi bi-info-lg"></i>
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        onClick={(e) => Modificar(p)}
                        className="btn-opciones-pacientes modificar"
                      >
                        {/* M */}
                        <i className="bi bi-pencil"></i>
                      </button>
                    </div>
                    {/*<div className="col-3">
                      <button
                        onClick={(e) => eliminarPaciente(p)}
                        className="btn-opciones-pacientes eliminar"
                      >
                        
                        <i className="bi bi-trash3"></i>
                      </button>
                    </div>*/}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="paginador">
        <div className="row">
          <div className="col">
            <span className="pyBadge">Registros: {RegistrosTotal}</span>
          </div>
          <div className="col text-center">
            Pagina: &nbsp;
            <select
              value={Pagina}
              onChange={(e) => {
                buscarPacientes(e.target.value);
              }}
            >
              {Paginas?.map((x) => (
                <option value={x} key={x}>
                  {x}
                </option>
              ))}
            </select>
            &nbsp; de {Paginas?.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacientesListado;
