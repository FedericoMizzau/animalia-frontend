import React from 'react'

const PacientesBuscar = ({nombre, setNombre, idPaciente, setIdPaciente, buscarPacientes, agregarPaciente}) => {
  
  const handleSearch = (e) => {
    e.preventDefault();
    // alert("Buscando paciente...");
    buscarPacientes(nombre);
  }
  
  return (
    <form name="formBuscarPacientes" onSubmit={handleSearch}>
        <h2>BUSCAR PACIENTE</h2>
        <div>
            <label htmlFor="idPaciente">Numero de paciente: </label>
            <input type="text" name="idPaciente" placeholder='Numero de paciente' pattern='[0-9]+' value={idPaciente} onChange={(e) => {setIdPaciente(e.target.value)}}/>
        </div>
        <div>
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" name="nombre" placeholder='Nombre' value={nombre} onChange={(e) => {setNombre(e.target.value)}} />
        </div>
        <div>
            <button type="submit">BUSCAR</button>
            <button onClick={(e) => agregarPaciente()} >AGREGAR</button>
        </div>
    </form>
  )
}

export default PacientesBuscar