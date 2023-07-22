import React from "react";

const DetallesRegistro = ({regresar, grabarDetalle}) => {

    return (
    <form>
      <h3>AGREGAR DETALLE DE CONTROL</h3>
      <div>
        <label htmlFor="Descripcion">Descripcion: </label>
        <textarea name="Descripcion" cols="50" rows="5" required/>
        <input type="file" name="Imagen" placeholder="Examinar..." multiple />
        <select name="Tipo" required>
            <option value="T">Tratamiento</option>
            <option value="L">Lesion</option>
            <option value="E">Estudio</option>
        </select>
      </div>
      <div>
        <button onClick={(e) => grabarDetalle()}>GRABAR</button>
        <button onClick={(e) => regresar()}>CANCELAR</button>
      </div>
    </form>
  );
};

export default DetallesRegistro;
