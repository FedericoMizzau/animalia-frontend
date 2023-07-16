import { React, useState, useEffect } from "react";
import PacientesBuscar from "./PacientesBuscar";
import PacientesListado from "./PacientesListado";

const pacientes_test = [
  {
    id: 1,
    nombre: "Zlatan",
    peso: 31,
    fechaNacimiento: "2007-07-16",
    esterilizado: true,
    sexo: "M",
    idPropietario: 1,
    idEspecie: 0,
  },
  {
    id: 2,
    nombre: "Galo Panzon",
    peso: 3,
    fechaNacimiento: "2022-11-20",
    esterilizado: true,
    sexo: "M",
    idPropietario: 2,
    idEspecie: 1,
  },
  {
    id: 3,
    nombre: "Orion",
    peso: 5,
    fechaNacimiento: "2019-10-08",
    esterilizado: true,
    sexo: "M",
    idPropietario: 2,
    idEspecie: 1,
  },
  {
    id: 4,
    nombre: "Lola",
    peso: 8,
    fechaNacimiento: "2015-09-28",
    esterilizado: false,
    sexo: "H",
    idPropietario: 3,
    idEspecie: 0,
  },
  {
    id: 5,
    nombre: "Pepita",
    peso: 1.5,
    fechaNacimiento: "1996-01-01",
    esterilizado: false,
    sexo: "H",
    idPropietario: 4,
    idEspecie: 2,
  },
];

const Pacientes = () => {
  // Definicion de variables de estado.
  //   La accion es Consulta (C), Listado (L), Modificacion (M) o Registro (R) segun la funcionalidad
  const [accion, setAccion] = useState("");
  const [pacientes, setPacientes] = useState([]);
  const [pacienteActual, setPacienteActual] = useState(null);

  // Variables de estado para los input de busqueda
  const [nombre, setNombre] = useState("");
  const [idPaciente, setIdPaciente] = useState(0);

// cargar los pacientes por primera vez

useEffect(() => {
  setPacientes(pacientes_test);
  console.log(pacientes);
}, [])

  return (
    <div>
      <PacientesBuscar nombre={nombre} setNombre={setNombre} idPaciente={idPaciente} setIdPaciente={setIdPaciente}/>
      <PacientesListado pacientes={pacientes} pacienteActual={pacienteActual} />
    </div>
  );
};

export default Pacientes;
