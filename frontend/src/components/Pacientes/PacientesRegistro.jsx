import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Controles from "../Controles/Controles.jsx";
import useScreensize from "../../hooks/useScreensize.js";
import ErrorMessage from "../ErrorMessage.jsx";

const controlesTest = [
  {
    id: 0,
    Fecha: "2022-10-03",
    Descripcion: "Vacunacion antiparasitaria 1ra dosis",
    Animales_id: 2,
    Activo: true,
  },
  {
    id: 1,
    Fecha: "2023-02-21",
    Descripcion: "Control por enfermedad estomacal",
    Animales_id: 2,
    Activo: true,
  },
  {
    id: 2,
    Fecha: "2023-03-15",
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
  const { width, height } = useScreensize();
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

  console.log(width, height);

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
    <div className="container-fluid opacity-chg-low">
      <div className="row container-title-consulta mb-2">
        <h2 className="title-consulta">
          {accion === "C" ? "CONSULTAR" : "REGISTRAR"} PACIENTE
        </h2>
      </div>
      <div className="row">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-pacientes shadow-small"
        >
          {/* <form> */}
          <fieldset disabled={accion === "C"}>
            <div className="row row-cols-md-2 row-cols-lg-3">
              <div className="col-12 col-sm-6 col-lg-4 mb-2">
                {/* https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1170986.jpg&fm=jpg */}
                <div className="input-group mb-2">
                  <input
                    type="image"
                    src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1170986.jpg&fm=jpg"
                    alt="ImagenMascota"
                    className="img-fluid rounded shadow-regular mx-auto"
                  />
                  {accion === "R" ? (
                    <div className="input-group my-1">
                      <input
                        type="file"
                        name="image-file"
                        accept="image/*"
                        className="pe-1"
                      />
                    </div>
                  ) : (
                    <br />
                  )}
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
              <div
                className={`datos-paciente col-12 col-sm-6 col-lg-4 ${
                  width >= 1000 ? `pt-2` : ``
                }`}
              >
                <div className={`row ${width >= 1000 ? "gy-1" : ""}`}>
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
                      <ErrorMessage message={errors?.Nombre.message} />
                    )}
                  </div>
                  <div className="input-group mb-1">
                    <label htmlFor="Sexo" className="input-group-text">
                      Sexo{" "}
                    </label>
                    <span className="input-group-span">
                      Macho
                      <input
                        type="radio"
                        {...register("Sexo", {
                          required: {
                            value: true,
                            message:
                              "Debe seleccionar un sexo para el paciente",
                          },
                        })}
                        value="M"
                        className="ms-2 align-middle"
                      />
                    </span>
                    <span className="input-group-span">
                      Hembra
                      <input
                        type="radio"
                        {...register("Sexo", {
                          required: {
                            value: true,
                            message: "Debe seleccionarse un sexo",
                          },
                        })}
                        value="H"
                        className="ms-2 align-middle"
                      />
                    </span>
                    {errors?.Sexo && touchedFields.Sexo && (
                      <ErrorMessage message={errors?.Sexo.message} />
                    )}
                  </div>
                  <div className="input-group mb-1">
                    <span className="input-group-text">Peso</span>
                    {/* <label htmlFor="Peso">Peso: </label> */}
                    <input
                      type="number"
                      step="0.1"
                      {...register("Peso", {
                        required: {
                          value: true,
                          message: "El Peso es requerido",
                        },
                        min: {
                          value: 0,
                          message: "El peso no puede ser un numero negativo.",
                        },
                      })}
                    />
                    {errors?.Peso && touchedFields.Peso && (
                      <ErrorMessage message={errors?.Peso.message} />
                    )}
                  </div>
                  <div className="input-group mb-1">
                    <span className="input-group-text">
                      {width >= 1000 ? "Fecha Nacim." : "Fecha de Nacimiento"}
                    </span>
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
                    {errors?.FechaNacimiento &&
                      touchedFields.FechaNacimiento && (
                        <ErrorMessage
                          message={errors?.FechaNacimiento.message}
                        />
                      )}
                  </div>
                  <div className="input-group mb-1">
                    {/* <label htmlFor="Esterilizado">¿Se encuentra esterilizado? </label> */}
                    <span className="input-group-text">
                      ¿Se encuentra esterilizado?
                    </span>
                    <span className="input-group-span">
                      <input
                        type="checkbox"
                        {...register("Esterilizado")}
                        className="align-middle form-check-input"
                      />
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
                      className="p-2"
                    >
                      <option value="0">Canino</option>
                      <option value="1">Felino</option>
                      <option value="2">Otros</option>
                    </select>
                    {errors?.Especie && touchedFields.Especie && (
                      <ErrorMessage message={errors?.Especie.message} />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 datos-propietarios align-self-center mx-auto">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <h4 className="medium-title text-center text-shadow-small">
                      DATOS DE DUEÑO/A
                    </h4>
                  </div>
                  <div className="col-12">
                    <div className="input-group">
                      <label
                        className="input-group-text"
                        htmlFor="Propietarios_id"
                      >
                        Propietario
                      </label>
                      <input
                        className={width >= 1000 ? "w-25" : ""}
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
                    </div>
                    {errors?.Propietarios_id &&
                      touchedFields.Propietarios_id && (
                        <ErrorMessage
                          message={errors?.Propietarios_id.message}
                        />
                      )}
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          {/* botones */}
          <div className="row text-center">
            <div className="col-6">
              {accion !== "C" && (
                <button
                  type="submit"
                  className="btn btn-grabar my-2 shadow-small"
                >
                  GRABAR <i className="bi bi-check-lg ms-1"></i>
                </button>
              )}
            </div>
            <div className={accion === "C" ? "col-12" : "col-6"}>
              <button
                onClick={(e) => regresarListado()}
                className="btn btn-volver shadow-small my-2"
              >
                {accion === "C" ? "VOLVER A LISTADO" : "CANCELAR"}
                {accion === "C" ? (
                  <i className="bi bi-arrow-counterclockwise ms-1"></i>
                ) : (
                  <i className="bi bi-x-lg ms-2"></i>
                )}
              </button>
            </div>
          </div>
          {/* Mensaje de error para el formulario */}
          {!isValid && isSubmitted && (
            <div className="form-error">
              <ErrorMessage message="Datos de registro incorrectos." />
            </div>
          )}
        </form>
      </div>
      <div className="row">
        {accion === "C" && (
          <Controles controles={controles} setControles={setControles} />
        )}
      </div>
    </div>
  );
};

export default PacientesRegistro;
