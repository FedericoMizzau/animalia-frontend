import React, { useState } from "react";
import DetallesRegistro from "./DetallesRegistro";
import ModalFoto from "../ModalFoto";
import "./detalles.css";

const Detalles = ({ accionControl, detalles, setDetalles }) => {
  const [accionDetalle, setAccionDetalle] = useState("L");
  const [modalDetalle, setModalDetalle] = useState(null);

  function agregarDetalle() {
    setAccionDetalle("R");
  }

  function grabarDetalle(detalle) {
    setDetalles([...detalles, detalle]);
    regresar();
  }

  function regresar() {
    setAccionDetalle("L");
  }

  function toggleModal(detalle) {
    setModalDetalle(detalle);
  }

  return (
    <div className="container-fluid">
      <div className="row justify-items-center">
        <div className="col-12 mx-auto mb-3 text-center">
          <button
            className="btn btn-success btn-agregar-detalle btn-hover my-1 shadow-small"
            onClick={(e) => agregarDetalle()}
          >
            AGREGAR TIPO DE CONTROL
            <i className="bi bi-plus-lg ms-1"></i>
          </button>
        </div>
      </div>
      {accionControl !== "R" &&
        (detalles.length === 0 ? (
          <div className="row">
            <div className="col-auto my-2">
              <p className="msg-detalle">
                Todavía no se cargaron tratamientos/lesiones/estudios...
              </p>
            </div>
          </div>
        ) : (
          detalles.length > 0 &&
          detalles.map((dc) => (
            <figure className="detalle-control" key={dc.id}>
              <div className="row">
                <div className="col-auto align-self-center">
                  <h4 className="detalle-tipo text-center fw-bold">
                    {dc.Tipo.toUpperCase()}
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-md-2">
                  <button
                    className="btn btn-ver-fotos btn-hover shadow-small"
                    onClick={(e) => toggleModal(dc)}
                  >
                    VER FOTOS
                  </button>
                </div>
                <div className={"col-8 col-md-10 align-self-end"}>
                  <textarea disabled className="detalle-descripcion">
                    {dc.Descripcion}
                  </textarea>
                </div>
              </div>
            </figure>
          ))
        ))}
      {accionDetalle !== "R" && modalDetalle !== null && (
        <ModalFoto detalle={modalDetalle} toggleModal={toggleModal} />
      )}
      {accionDetalle === "R" && (
        <DetallesRegistro grabarDetalle={grabarDetalle} regresar={regresar} />
      )}
    </div>
  );
};

export default Detalles;
