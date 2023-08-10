import React, { useState, useEffect } from "react";
import ControlesBuscar from "./ControlesBuscar";
import ControlesListado from "./ControlesListado";
import ControlesRegistro from "./ControlesRegistro";
import HorizontalBar from "../HorizontalBar";

const controlInicial = {
  id: 0,
  Descripcion: "",
  Fecha: "",
  Animales_id: 0,
  Activo: false,
};

const detallesPrueba = [
  {
    id: 0,
    Descripcion:
      "Dolor intenso, deformidad: La extremidad se ve fuera de lugar, Hinchazón, hematomas o dolor alrededor de la herida,Problemas al mover la extremidad",
    Imagen: "",
    Controles_id: 1,
    Tipo: "Lesion",
  },
  {
    id: 1,
    Descripcion:
      "Estudio por problemas estomacales del animal, se realizo una ecografia en la zona del abdomen",
    Imagen: "",
    Controles_id: 0,
    Tipo: "Estudio",
  },
  {
    id: 2,
    Descripcion:
      "Lesion por mordedura causada por un animal de mayor tamaño, se realizaron 4 puntos",
    Imagen: "",
    Controles_id: 0,
    Tipo: "Lesion",
  },
  {
    id: 3,
    Descripcion: "Tratamiento contra tumor no benigno",
    Imagen: "",
    Controles_id: 1,
    Tipo: "Tratamiento",
  },
];

const Controles = ({ controles, setControles }) => {
  const [accionControl, setAccionControl] = useState("L");
  const [nroControl, setNroControl] = useState("");
  const [fechaControl, setFechaControl] = useState("");
  const [detalles, setDetalles] = useState(detallesPrueba);
  const [controlActual, setControlActual] = useState(controlInicial);

  function resetControlActual() {
    setControlActual(controlInicial);
  }

  function regresar() {
    setAccionControl("L");
  }

  function agregarControl() {
    setAccionControl("R");
    resetControlActual();
  }

  function buscarControl(idControl) {
    let buscado = controles.find((el) => el.id === idControl);
    if (buscado) return buscado;
    else return;
  }

  function buscarDetalles(idControl) {
    let detallesControl = detalles.filter(
      (det) => det.Controles_id === idControl
    );
    return detallesControl;
  }

  function grabarControl(control) {
    setControles([...controles, control]);
    resetControlActual();
    regresar();
  }

  function consultarControl(id, accionControl) {
    let controlConsulta = buscarControl(id);
    setControlActual(controlConsulta);
    setAccionControl(accionControl);
  }

  function eliminarControl(id, activo) {
    if (activo) {
      let indiceBuscado = controles.findIndex((el) => el.id === id);
      let controlesActualizados = controles;

      controlesActualizados[indiceBuscado].Activo = false;
      setControles(controlesActualizados);
    } else {
      let filtrados = controles.filter((el) => el.id !== id);
      setControles([filtrados]);
    }
  }

  return (
    <section className="container-fluid">
      <HorizontalBar />
      <div className="container-title my-2">
        <h3 className="title-controles text-center text-shadow-small">
          CONTROLES
        </h3>
      </div>
      {accionControl === "L" && (
        <>
          <ControlesBuscar
            nroControl={nroControl}
            setNroControl={setNroControl}
            fechaControl={fechaControl}
            setFechaControl={setFechaControl}
            agregarControl={agregarControl}
          />
          <HorizontalBar />
        </>
      )}
      {accionControl === "L" &&
        (controles.length === 0 ? (
          <div className="msg-control">
            <p>No se encontraron controles para el paciente...</p>
          </div>
        ) : (
          <ControlesListado
            controles={controles}
            accionControl={accionControl}
            setAccionControl={setAccionControl}
            eliminarControl={eliminarControl}
            consultarControl={consultarControl}
          />
        ))}
      {accionControl !== "L" && (
        <>
          <HorizontalBar />
          <ControlesRegistro
            buscarDetalles={buscarDetalles}
            grabarControl={grabarControl}
            regresar={regresar}
            accionControl={accionControl}
            controlActual={controlActual}
          />
        </>
      )}
    </section>
  );
};

export default Controles;
