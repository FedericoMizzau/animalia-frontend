import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Controles from "../Controles/Controles.jsx";
import HorizontalBar from "../HorizontalBar.jsx";

const controlesTest = [
  {
    id: 0,
    Fecha: "10/03/2022",
    Descripcion: "Vacunacion antiparasitaria 1ra dosis",
    Animales_id: 2,
    Activo: true,
  },
  {
    id: 1,
    Fecha: "21/02/2023",
    Descripcion: "Control por enfermedad estomacal",
    Animales_id: 2,
    Activo: true,
  },
  {
    id: 2,
    Fecha: "15/03/2023",
    Descripcion: "Vacunacion antiparasitaria 2da dosis",
    Animales_id: 2,
    Activo: true,
  },
];

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

  // useEffect para cargar los controles del paciente actual consultado
  useEffect(() => {
    buscarControles(pacienteActual.id);
  }, []);

  function buscarControles(id) {
    // cambiar por peticion a la api de controles
    let controlesPacienteActual = controlesTest.filter(
      (c) => c.Animales_id === id
    );
    console.log(controlesPacienteActual);
    setControles(controlesPacienteActual);
  }

  return (
    <div className="container-fluid">
      <div className="row container-title-consulta mb-2">
        <h2 className="title-consulta">
          {accion === "C" ? "CONSULTAR" : "REGISTRAR"} PACIENTE
        </h2>
      </div>
      <div className="row">
        <form onSubmit={handleSubmit(onSubmit)} className="form-pacientes shadow-small">
          {/* <form> */}
          <fieldset disabled={accion === "C"}>
            <div className="row">
            <div className="col-12 col-sm-6 col-lg-4 mb-2">
              {/* https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1170986.jpg&fm=jpg */}
              <div className="input-group mb-2">
              <input type="image" src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1170986.jpg&fm=jpg" alt="ImagenMascota" className="img-fluid rounded shadow-regular mx-auto"/>
              {accion === "R" ? (<input type="file" name="" id="" />) : (<br />)}
              </div>
              <div className="input-group">
                <span className="input-group-text">Descripcion</span>
                {/* <label htmlFor="Descripcion">Descripcion: </label> */}
                <textarea
                  {...register("Descripcion")}
                  className="descripcion p-1"
                />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="input-group my-1">
                {/* <label htmlFor="Nombre">Nombre: </label> */}
                <span className="input-group-text">Nombre</span>
                <input
                  type="text"
                  {...register("Nombre", {
                    required: {
                      value: true,
                      message: "El Nombre es un campo requerido.",
                    },
                  })}
                  autoFocus
                  className="px-2"
                />
                {errors?.Nombre && touchedFields.Nombre && (
                  <div>{errors?.Nombre.message}</div>
                )}
              </div>
              <div className="input-group mb-1">
                <label htmlFor="Sexo" className="input-group-text">Sexo: </label>
                <span className="input-group-span">Macho 
                <input
                  type="radio"
                  {...register("Sexo", {
                    required: {
                      value: true,
                      message: "Debe seleccionar un sexo para el paciente",
                    },
                  })}
                  value="M"
                  className="ms-2 align-middle"
                />
                </span>
                <span className="input-group-span">Hembra 
                <input
                  type="radio"
                  {...register("Sexo", {
                    required: {
                      value: true,
                      message: "Debe seleccionar un sexo para el paciente",
                    },
                  })}
                  value="H"
                  className="ms-2 align-middle"
                />
                </span>
                {errors?.Sexo && touchedFields.Sexo && (
                  <div>{errors?.Sexo.message}</div>
                )}
              </div>
              <div className="input-group mb-1">
                <span className="input-group-text">Peso</span>
                {/* <label htmlFor="Peso">Peso: </label> */}
                <input
                  type="number"
                  step="0.1"
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
              <div className="input-group mb-1">
                <span className="input-group-text">Fecha de Nacimiento</span>
                {/* <label htmlFor="FechaNacimiento">Fecha de nacimiento: </label> */}
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
              <div className="input-group mb-1">
                {/* <label htmlFor="Esterilizado">¿Se encuentra esterilizado? </label> */}
                <span className="input-group-text">
                  ¿Se encuentra esterilizado?
                </span>
                <span className="input-group-span">
                <input type="checkbox" {...register("Esterilizado")} className="align-middle"/>
                </span>
              </div>
              <div className="input-group">
                <label className="input-group-text" htmlFor="Especie">
                  Especie:{" "}
                </label>
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
            </div>
            <HorizontalBar />
            <div className="col-12 col-sm-6 col-lg-4">
                  <h4>DATOS DE DUEÑO/A</h4>
                  <div className="input-group">
              <label className="input-group-text" htmlFor="Propietarios_id">
                Propietario:{" "}
              </label>
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
            </div>
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
      <div className="row">
      {accion !== "R" && (
        <Controles controles={controles} setControles={setControles} />
      )}
      </div>
    </div>
  );
};

export default PacientesRegistro;
