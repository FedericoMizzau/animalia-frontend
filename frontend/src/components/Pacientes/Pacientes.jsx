import { React, useState, useEffect } from "react";
import PacientesBuscar from "./PacientesBuscar";
import PacientesListado from "./PacientesListado";
import PacientesRegistro from "./PacientesRegistro";
import HorizontalBar from "../HorizontalBar";

const pacientes_test = [
  {
    id: 1,
    Nombre: "Zlatan",
    Descripcion: "Perro de raza ovejero aleman, el pana zlatan",
    Peso: 31,
    FechaNacimiento: "2007-07-16",
    Esterilizado: true,
    Sexo: "M",
    Propietarios_id: 1,
    idEspecie: 0,
  },
  {
    id: 2,
    Nombre: "Galo Panzon",
    Descripcion: "Gato naranja ultra obeso, panzon, que molesta a la otra gata con la que convive y es adicto a las harinas ultraprocesadas, come facturas, criollos",
    Peso: 3,
    FechaNacimiento: "2022-11-20",
    Esterilizado: true,
    Sexo: "M",
    Propietarios_id: 2,
    idEspecie: 1,
  },
  {
    id: 3,
    Nombre: "Orion",
    Descripcion: "Gato blanco peludo lleno de cicatrices de guerra, tiene el maullido mas fino de la historia por lo que dudan de su sexualidad",
    Peso: 5,
    FechaNacimiento: "2019-10-08",
    Esterilizado: true,
    Sexo: "M",
    Propietarios_id: 2,
    idEspecie: 1,
  },
  {
    id: 4,
    Nombre: "Lola",
    Descripcion: "Perrita de tamaño mediano-chico, raza delba (del barrio pa), tambien le dicen Pongpong",
    Peso: 8,
    FechaNacimiento: "2015-09-28",
    Esterilizado: false,
    Sexo: "H",
    Propietarios_id: 3,
    idEspecie: 0,
  },
  {
    id: 5,
    Nombre: "Pepita",
    Descripcion: "Lora de tamaño mediano-grande y colores verdes con plumas amarillas en las alas, que sable hablar, muy inteligente",
    Peso: 1.5,
    FechaNacimiento: "1996-01-01",
    Esterilizado: false,
    Sexo: "H",
    Propietarios_id: 4,
    idEspecie: 2,
  },
];

const pacienteInicial = {
  id: 0,
  Nombre: "",
  Descripcion: "",
  Peso: 0,
  FechaNacimiento: "",
  Esterilizado: false,
  Sexo: "",
  Propietarios_id: null,
  idEspecie: 0,
};

const Pacientes = () => {
  // Definicion de variables de estado.
  //   La accion es Consulta (C), Listado (L), Modificacion (M) o Registro (R) segun la funcionalidad
  const [accion, setAccion] = useState("L");
  const [pacientes, setPacientes] = useState([]);
  const [pacienteActual, setPacienteActual] = useState(pacienteInicial);

  // Variables de estado para los input de busqueda
  const [nombre, setNombre] = useState("");

  // cargar los pacientes por primera vez

  useEffect(() => {
    setPacientes(pacientes_test);
    console.log(pacientes);
  }, []);

  // useEffect para clogear los pacientes en cada update, solo para testing, sacar para implementacion

  useEffect(() => {
    console.log(pacientes);
  
    
  }, [pacientes]);
  
  // funciones de busqueda

  function buscarPacientePorId(id) {
    let buscado = pacientes.find((pac) => pac.id === id);
    if (buscado) return buscado;
    else return;
  }

  function buscarPacientes() {
    let filtrados = pacientes.filter((pac) => pac.Nombre === nombre);
    if (filtrados) setPacientes(filtrados);
    return;
  }

  function agregarPaciente() {
    setAccion("R");
    setPacienteActual(pacienteInicial);
  }

  function consultarPaciente(id, accion) {
    let buscado = buscarPacientePorId(id);
    console.log(buscado);
    setPacienteActual(buscado);
    setAccion(accion);
  }

  function eliminarPaciente(id) {
    let newPacientes = pacientes.filter((pac) => pac.id !== id);
    setPacientes(newPacientes);
  }

  function regresarListado() {
    setAccion("L");
  }

  function grabarPaciente(nuevoPaciente) {
    
    let esNuevo = pacientes.find((pac) => pac.id === nuevoPaciente.id);
    console.log(esNuevo);

    if (esNuevo === undefined){
      setPacientes([
        ...pacientes,
        nuevoPaciente
      ]); 
    } else {
        let indicePacienteActualizado = pacientes.indexOf(esNuevo);
        console.log(indicePacienteActualizado);
        pacientes[indicePacienteActualizado] = nuevoPaciente;
      }
    
    // setPacienteActual(pacienteInicial);
    regresarListado();
  }

  return (
    <div className="container-fluid">
      <div>
      {accion === "L" && (
        <PacientesBuscar
          nombre={nombre}
          setNombre={setNombre}
          buscarPacientes={buscarPacientes}
          agregarPaciente={agregarPaciente}
        />
      )}
      </div>
      <HorizontalBar />
      <div >
      {accion === "L" &&
        (pacientes.length > 0 ? (
          <PacientesListado
            accion={accion}
            setAccion={setAccion}
            pacientes={pacientes}
            pacienteActual={pacienteActual}
            consultarPaciente={consultarPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        ) : (
          <p>No se encontraron pacientes...</p>
        ))}
      {accion !== "L" && (
        <PacientesRegistro
          accion={accion}
          setAccion={setAccion}
          pacienteActual={pacienteActual}
          setPacienteActual={setPacienteActual}
          regresarListado={regresarListado}
          grabarPaciente={grabarPaciente}
        />
      )}
      </div>
    </div>
  );
};

export default Pacientes;
