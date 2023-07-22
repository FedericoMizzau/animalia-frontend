import React, { useState, useEffect } from "react";
import ControlesBuscar from "./ControlesBuscar";
import ControlesListado from "./ControlesListado";
import ControlesRegistro from "./ControlesRegistro";

const controlesTest = [
  {
    id: 0,
    Fecha: "10/03/2022",
    Descripcion: "Vacunacion antiparasitaria 1ra dosis",
    Animales_id: 2,
    Activo: true
  },
  {
    id: 1,
    Fecha: "21/02/2023",
    Descripcion: "Control por enfermedad estomacal",
    Animales_id: 2,
    Activo: true
  },
  {
    id: 2,
    Fecha: "15/03/2023",
    Descripcion: "Vacunacion antiparasitaria 2da dosis",
    Animales_id: 2,
    Activo: true
  }
]

const Controles = ({ idPaciente }) => {
  const [controles, setControles] = useState([]);
  const [accionControl, setAccionControl] = useState("L");
  const [nroControl, setNroControl] = useState("");
  const [fechaControl, setFechaControl] = useState(null);
  const [detalles, setDetalles] = useState([]);

  // useEffect para cargar los controles del paciente actual consultado
  useEffect(() => {
    buscarControles(idPaciente);
  }, []);
  
  function buscarControles (id){
    // cambiar por peticion a la api de controles
    let controlesPacienteActual = controlesTest.filter((c) => c.Animales_id === id);
    console.log(controlesPacienteActual);
    setControles(controlesPacienteActual);
  }

  function regresar(){
    setAccionControl("L");
  }

  function grabarControl(control){
    setControles([
      ...controles,
      control
    ]);
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
          <ControlesListado controles={controles} />
        ))}
      {accionControl === "R" && <ControlesRegistro detalles={detalles} grabarControl={grabarControl} regresar={regresar}/>}
    </section>
  );
};

export default Controles;
