import React from "react";

const PacientesRegistro = () => {
  return (
    <form>
      <div>
        <label htmlFor="nombre">Nombre: </label>
        <input type="text" name="nombre" placeholder="Nombre" required />
        <label htmlFor="sexo">Sexo: </label>
        <input type="radio" name="sexo" value="M" defaultChecked/>
        <input type="radio" name="sexo" value="H" />
      </div>
      <div>
        <label htmlFor="peso">Peso: </label>
        <input type="number" name="peso" required/>
        <label htmlFor="fechaNac">Fecha de nacimiento: </label>
        <input type="date" name="fechaNac" required />
      </div>
    </form>
  );
};

export default PacientesRegistro;
