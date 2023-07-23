import React, { useState, useEffect } from "react";
import ControlesBuscar from "./ControlesBuscar";
import ControlesListado from "./ControlesListado";
import ControlesRegistro from "./ControlesRegistro";

const Controles = ({controles, setControles }) => {
  const [accionControl, setAccionControl] = useState("L");
  const [nroControl, setNroControl] = useState("");
  const [fechaControl, setFechaControl] = useState("");
  const [detalles, setDetalles] = useState([]);


  function regresar(){
    setAccionControl("L");
  }

  function grabarControl(control){
    setControles([
      ...controles,
      control
    ]);
  }

  function eliminarControl(id, activo) {
    if (activo) {
      let indiceBuscado = controles.findIndex((el) => el.id === id);
      let controlesActualizados = controles;

      controlesActualizados[indiceBuscado].Activo = false;
      setControles(controlesActualizados);
      
    } else {
      let filtrados = controles.filter((el) => el.id !== id);
      setControles([
        filtrados
      ]);
    }
  }

  return (
    <section>
      <ControlesBuscar
        nroControl={nroControl}
        setNroControl={setNroControl}
        fechaControl={fechaControl}
        setFechaControl={setFechaControl}
      />
      {accionControl === "L" &&
        (controles.length === 0 ? (
          <p>No se encontraron controles para el paciente...</p>
        ) : (
          <ControlesListado controles={controles} accionControl={accionControl} setAccionControl={setAccionControl} eliminarControl={eliminarControl} />
        ))}
      {accionControl !== "L" && <ControlesRegistro detalles={detalles} grabarControl={grabarControl} regresar={regresar} accionControl={accionControl}/>}
    </section>
  );
};

export default Controles;
