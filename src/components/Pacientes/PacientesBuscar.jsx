import React from 'react'

const PacientesBuscar = ({}) => {
  return (
    <form name="formBuscarPacientes">
        <h2>BUSCAR PACIENTE</h2>
        <div>
            <label htmlFor="idPaciente">Numero de paciente: </label>
            <input type="number" name="idPaciente" placeholder='Numero de paciente'/>
        </div>
        <div>
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" name="nombre" placeholder='Nombre' />
        </div>
        <div>
            <button>BUSCAR</button>
            <button>AGREGAR</button>
        </div>
    </form>
  )
}

export default PacientesBuscar