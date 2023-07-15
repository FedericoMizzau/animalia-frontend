import {React, useState, useEffect} from 'react'
import PacientesBuscar from './PacientesBuscar'
import PacientesListado from './PacientesListado'

const Pacientes = () => {
  // Definicion de variables de estado.
//   La accion es Consulta (C), Listado (L), Modificacion (M) o Registro (R) segun la funcionalidad
    const [accion, setAccion] = useState("")

    return (
    <div>
        <PacientesBuscar />
        <PacientesListado />
    </div>
  )
}

export default Pacientes