import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Controles from "../Controles/Controles.jsx";

const PacientesRegistro = ({
  accion,
  pacienteActual,
  grabarPaciente,
  regresarListado,
}) => {
  
  const [controles, setControles] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isSubmitted },
  } = useForm({ values: pacienteActual });

  const onSubmit = (data) => {
    grabarPaciente(data);
  };

  function obtenerControles(id) {
// peticion a la api de controles
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <form> */}
        <h2>{accion === "C" ? "CONSULTAR" : "REGISTRAR"} PACIENTE</h2>
        <fieldset disabled={accion === "C"}>
          <div>
            <label htmlFor="Nombre">Nombre: </label>
            <input
              type="text"
              {...register("Nombre", {
                required: {
                  value: true,
                  message: "El Nombre es un campo requerido.",
                },
              })}
              autoFocus
            />
            {errors?.Nombre && touchedFields.Nombre && (
              <div>{errors?.Nombre.message}</div>
            )}
          </div>
          <div>
            <label htmlFor="Sexo">Sexo: </label>
            <label>Macho </label>
            <input
              type="radio"
              {...register("Sexo", {
                required: {
                  value: true,
                  message: "Debe seleccionar un sexo para el paciente",
                },
              })}
              value="M"
            />
            <label>Hembra </label>
            <input
              type="radio"
              {...register("Sexo", {
                required: {
                  value: true,
                  message: "Debe seleccionar un sexo para el paciente",
                },
              })}
              value="H"
            />
            {errors?.Sexo && touchedFields.Sexo && (
              <div>{errors?.Sexo.message}</div>
            )}
          </div>
          <div>
            <label htmlFor="Peso">Peso: </label>
            <input
              type="number" step="0.1"
              {...register("Peso", {
                required: { value: true, message: "El Peso es requerido" },
                min: {
                  value: 0,
                  message: "El peso no puede ser un numero negativo.",
                },
              })}
            />
            {errors?.Peso && touchedFields.Peso && (
              <div>{errors?.Peso.message}</div>
            )}
          </div>
          <div>
            <label htmlFor="FechaNacimiento">Fecha de nacimiento: </label>
            <input
              type="date"
              {...register("FechaNacimiento", {
                required: {
                  value: true,
                  message: "La fecha de nacimiento es requerida",
                },
              })}
            />
            {errors?.FechaNacimiento && touchedFields.FechaNacimiento && (
              <div>{errors?.FechaNacimiento.message}</div>
            )}
          </div>
          <div>
            <label htmlFor="Esterilizado">¿Se encuentra esterilizado? </label>
            <input type="checkbox" {...register("Esterilizado")} />
          </div>
          <div>
            <label htmlFor="Especie">Especie: </label>
            <select
              {...register("Especie", {
                required: {
                  value: true,
                  message: "La especie es un campo requerido",
                },
              })}
              defaultValue={0}
            >
              <option value="0">Canino</option>
              <option value="1">Felino</option>
              <option value="2">Otros</option>
            </select>
            {errors?.Especie && touchedFields.Especie && (
              <div>{errors?.Especie.message}</div>
            )}
          </div>
          <div>
            <label htmlFor="Propietarios_id">Propietario: </label>
            <input
              type="text"
              name="Propietarios_id"
              {...register("Propietarios_id", {
                required: {
                  value: true,
                  message: "Debe ingresarse un propietario",
                },
                min: {
                  value: 0,
                  message:
                    "El valor de ID es incorrecto (ID es un numero mayor a 0)",
                },
              })}
            />
            {errors?.Propietarios_id && touchedFields.Propietarios_id && (
              <div>{errors?.Propietarios_id.message}</div>
            )}
          </div>
        </fieldset>
        {/* botones */}
        <div>
          {accion !== "C" && <button type="submit">GRABAR</button>}
          <button onClick={(e) => regresarListado()}>
            {accion === "C" ? "VOLVER" : "CANCELAR"}
          </button>
        </div>
        {/* Mensaje de error para el formulario */}
        {!isValid && isSubmitted && (
          <div>
            <p>Datos de registro incorrectos</p>
          </div>
        )}
      </form>
      {
        accion !== "R" && (<Controles id={pacienteActual.id} />)
      }
    </div>
  );
};

export default PacientesRegistro;
