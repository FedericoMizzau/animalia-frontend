import React from "react";
import "./pacientes.css";
import HorizontalBar from "../HorizontalBar";

const PacientesBuscar = ({
  nombre,
  setNombre,
  idPaciente,
  setIdPaciente,
  buscarPacientes,
  agregarPaciente,
}) => {
  const handleSearch = (e) => {
    e.preventDefault();
    // alert("Buscando paciente...");
    buscarPacientes(nombre);
  };

  return (
    <form
      name="formBuscarPacientes"
      onSubmit={handleSearch}
      className="form-pacientes"
    >
      <div className="container">
        <h2>BUSCAR PACIENTE</h2>
        <div className="row justify-content-start my-2">
          <div className="col-6 col-md-3 gy-1">
            <label htmlFor="idPaciente" className="form-label">
              Numero de paciente:{" "}
            </label>
          </div>
          <div className="col-6 col-md-2 gy-1">
            <input
              type="text"
              name="idPaciente"
              pattern="[0-9]+"
              value={idPaciente}
              onChange={(e) => {
                setIdPaciente(e.target.value);
              }}
              className="input-numero"
            />
          </div>
          <div className="col-6 col-md-2 col-lg-1 gy-1">
            <label htmlFor="nombre" className="form-label">
              Nombre:{" "}
            </label>
          </div>
          <div className="col-6 col-md-2 col-lg-3 gy-1">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              className="input-nombre"
            />
          </div>
          <div className="col-auto ms-auto me-auto gy-1">
            <button type="submit" className="btn btn-buscar me-3">  
            BUSCAR
            <i className="bi-search ms-1"></i>
            </button>
          </div>
        </div>
        <HorizontalBar />
      </div>
      <div className="row">
        <div className="col-auto ms-auto me-auto">
          <button
            onClick={(e) => agregarPaciente()}
            className="btn btn-success btn-agregar"
          >
            AGREGAR
            <i className="bi-plus-lg ms-1"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default PacientesBuscar;
