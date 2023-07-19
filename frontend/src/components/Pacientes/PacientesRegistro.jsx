import React from "react";
import { useForm } from "react-hook-form";

// const initialForm = {
//   id: 0,
//   nombre: "",
//   peso: 0,
//   sexo: "M",
//   fechaNac: "",
//   esterilizado: false,
//   idEspecie: 0,
//   idPropietario: "",
// };

const PacientesRegistro = ({
  accion,
  pacienteActual,
  grabarPaciente,
  regresarListado,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isSubmitted },
  } = useForm({ values: pacienteActual });

  const onSubmit = (data) => {
    grabarPaciente(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <form> */}
        <h2>{accion === "C" ? "CONSULTAR" : "REGISTRAR"} PACIENTE</h2>
        <fieldset disabled={accion === "C"}>
          <div>
            <label htmlFor="nombre">Nombre: </label>
            <input
              type="text"
              {...register("nombre", {
                required: {
                  value: true,
                  message: "El nombre es un campo requerido.",
                },
              })}
              autoFocus
            />
            {errors?.nombre && touchedFields.nombre && (
              <div>{errors?.nombre.message}</div>
            )}
          </div>
          <div>
            <label htmlFor="sexo">Sexo: </label>
            <label>Macho </label>
            <input
              type="radio"
              {...register("sexo", {
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
              {...register("sexo", {
                required: {
                  value: true,
                  message: "Debe seleccionar un sexo para el paciente",
                },
              })}
              value="H"
            />
            {errors?.sexo && touchedFields.sexo && (
              <div>{errors?.sexo.message}</div>
            )}
          </div>
          <div>
            <label htmlFor="peso">Peso: </label>
            <input
              type="number"
              {...register("peso", {
                required: { value: true, message: "El peso es requerido" },
                min: {
                  value: 0,
                  message: "El peso no puede ser un numero negativo.",
                },
              })}
            />
            {errors?.peso && touchedFields.peso && (
              <div>{errors?.peso.message}</div>
            )}
          </div>
          <div>
            <label htmlFor="fechaNacimiento">Fecha de nacimiento: </label>
            <input
              type="date"
              {...register("fechaNacimiento", {
                required: {
                  value: true,
                  message: "La fecha de nacimiento es requerida",
                },
              })}
            />
            {errors?.fechaNacimiento && touchedFields.fechaNacimiento && (
              <div>{errors?.fechaNacimiento.message}</div>
            )}
          </div>
          <div>
            <label htmlFor="esterilizado">¿Se encuentra esterilizado? </label>
            <input type="checkbox" {...register("esterilizado")} />
          </div>
          <div>
            <label htmlFor="idEspecie">Especie: </label>
            <select
              {...register("idEspecie", {
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
            {errors?.idEspecie && touchedFields.idEspecie && (
              <div>{errors?.idEspecie.message}</div>
            )}
          </div>
          <div>
            <label htmlFor="idPropietario">Propietario: </label>
            <input
              type="text"
              name="idPropietario"
              {...register("idPropietario", {
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
            {errors?.idPropietario && touchedFields.idPropietario && (
              <div>{errors?.idPropietario.message}</div>
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
    </div>
  );
};

export default PacientesRegistro;
