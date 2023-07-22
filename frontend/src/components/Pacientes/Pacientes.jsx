import { React, useState, useEffect } from "react";
import PacientesBuscar from "./PacientesBuscar";
import PacientesListado from "./PacientesListado";
import PacientesRegistro from "./PacientesRegistro";

const pacientes_test = [
  {
    id: 1,
    Nombre: "Zlatan",
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
  const [idPaciente, setIdPaciente] = useState(0);

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
    <div>
      {accion === "L" && (
        <PacientesBuscar
          nombre={nombre}
          setNombre={setNombre}
          idPaciente={idPaciente}
          setIdPaciente={setIdPaciente}
          buscarPacientes={buscarPacientes}
          agregarPaciente={agregarPaciente}
        />
      )}
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
  );
};

export default Pacientes;
