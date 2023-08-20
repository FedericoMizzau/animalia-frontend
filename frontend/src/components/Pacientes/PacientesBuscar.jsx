import React from "react";
import "./pacientes.css";

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
      className="form-buscar-pacientes mt-3 opacity-chg-low"
    >
      <div className="container-fluid">
        <div className="row">
          <h4 className="title-buscar">BUSCAR PACIENTE</h4>
        </div>
        <div className="row my-2 my-lg-1 pb-md-3">
          <div className="col-12 col-md-6">
            <div className="input-group">
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
              <button
                type="submit"
                className="btn btn-buscar btn-hover me-3 shadow-sm"
              >
                BUSCAR
                <i className="bi-search ms-1"></i>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 my-2 my-md-0 text-center">
            <button
              onClick={(e) => agregarPaciente()}
              className="btn btn-success btn-agregar shadow-sm"
            >
              AGREGAR
              <i className="bi-plus-lg ms-1"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PacientesBuscar;
