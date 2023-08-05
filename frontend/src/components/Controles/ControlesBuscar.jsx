import React from "react";
import "./controles.css";
import HorizontalBar from "../HorizontalBar";

const ControlesBuscar = ({
  nroControl,
  fechaControl,
  setNroControl,
  setFechaControl,
  agregarControl,
}) => {
  return (
    <div className="container-fluid form-buscar-control opacity-chg-low my-2 mt-4">
      <form>
        <div className="row my-2 justify-content-center">
          <div className="col-12 col-md-6">
            <div className="input-group my-1">
              <label
                className="input-group-text fw-bold bg-white-1"
                htmlFor="nroControl"
              >
                Nro Control:
              </label>
              <input
                type="text"
                name="nroControl"
                value={nroControl}
                onChange={(e) => {
                  setNroControl(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="col-4 col-md-4 input-group my-1">
              <label
                className="input-group-text fw-bold bg-white-1"
                htmlFor="fechaControl"
              >
                Fecha:
              </label>
              <input
                type="date"
                name="fechaControl"
                value={fechaControl}
                onChange={(e) => {
                  setFechaControl(e.target.value);
                }}
                className="px-2"
              />
            </div>
          </div>
        </div>
        <HorizontalBar />
        <div className="row align-middle text-center my-3">
          <div className="col-6 col-md-4 col-lg-3">
            <button
              type="submit"
              className="btn btn-buscar btn-hover shadow-small my-1"
            >
              BUSCAR
              <i className="bi bi-search ms-2"></i>
            </button>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <button
              className="btn btn-agregar btn-success btn-hover shadow-small my-1"
              onClick={(e) => {
                e.preventDefault();
                agregarControl();
              }}
            >
              AGREGAR
              <i className="bi bi-plus-lg ms-1"></i>
            </button>
          </div>
          {/* A implementar: funcionalidades de enviar e imprimir */}
          <div className="col-auto col-md-4 col-lg-3 mx-auto my-1">
            <button
              className="btn btn-enviar btn-hover bg-l-green-1 shadow-small ms-2 my-1"
              onClick={(e) => e.preventDefault()}
            >
              ENVIAR A <i className="bi bi-send ms-1"></i>
            </button>
          </div>
          <div className="col-auto col-md-auto mx-auto">
            <button
              className="btn btn-imprimir btn-hover shadow-small ms-2 my-1"
              onClick={(e) => e.preventDefault()}
            >
              IMPRIMIR RESUMEN <i className="bi bi-printer-fill ms-1"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ControlesBuscar;
