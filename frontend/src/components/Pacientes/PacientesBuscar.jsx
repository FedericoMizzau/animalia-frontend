import React from "react";
import "./pacientes.css";
import HorizontalBar from "../HorizontalBar";

const PacientesBuscar = ({
  nombre,
  setNombre,
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
      className="form-buscar-pacientes mt-3"
    >
      <div className="container">
        <div className="row justify-content-center">
        <h2 className="title-buscar">BUSCAR PACIENTE</h2>
        </div>
        <div className="row my-2">
          {/* <div className="col-2 col-md-3 gy-1 gx-1">
            <label htmlFor="nombre" className="form-label fw-bold text-uppercase">
              Nombre:{" "}
            </label>
          </div> */}
          <div className="input-group col-auto gy-1">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre del paciente"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              className="input-nombre shadow-sm"
            />
            <button type="submit" className="btn btn-buscar me-3 shadow-sm">  
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
            className="btn btn-success btn-agregar shadow-sm"
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
