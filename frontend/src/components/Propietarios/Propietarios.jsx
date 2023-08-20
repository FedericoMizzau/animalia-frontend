import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PropietariosLista from "./PropietariosLista";
import "./propietarios.css";
import ErrorMessage from "../ErrorMessage";

const propietarioInicial = {
  id: 0,
  Nombre: "",
  Apellido: "",
  Telefono: "",
  Email: "",
  Activo: true,
};

const propietariosTest = [
  {
    id: 0,
    Nombre: "Fede",
    Apellido: "Mizzau",
    Telefono: "543521666777",
    Email: "fedemiz@gmail.com",
    Activo: true,
  },
  {
    id: 1,
    Nombre: "Lautaro",
    Apellido: "Gregorat",
    Telefono: "543505123456",
    Email: "lautarogrego@gmail.com",
    Activo: true,
  },
  {
    id: 2,
    Nombre: "Roberto",
    Apellido: "Musso",
    Telefono: "52452678",
    Email: "robertcdns@gmail.com",
    Activo: true,
  },
  {
    id: 3,
    Nombre: "Leonel",
    Apellido: "Messi",
    Telefono: "543502101010",
    Email: "leonelmessirve10@gmail.com",
    Activo: true,
  },
  {
    id: 4,
    Nombre: "John",
    Apellido: "Doe",
    Telefono: "50987654321",
    Email: "johndoe@mail.com",
    Activo: true,
  },
];

const Propietarios = ({
  accionPacientes,
  accionPropietarios,
  setAccionPropietarios,
  seleccionarPropietario,
  pacienteActual,
  regresarRegistroPaciente,
}) => {
  const [propietarios, setPropietarios] = useState(propietariosTest);
  const [propietarioActual, setPropietarioActual] = useState(propietarioInicial);
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isSubmitted },
  } = useForm({ values: propietarioActual });

  function buscarPropietario(id) {
    let buscado = propietarios.find((p) => p.id === id);
    if (buscado) return buscado;
    else return;
  }

  function consultarPropietario(id, accion) {
    let buscado = buscarPropietario(id);
    setPropietarioActual(buscado);
    setAccionPropietarios(accion);
  }

  function grabarPropietario(propietario) {
    propietario.id = propietarios.length + 1; // simular autoincremental
    setPropietarios(...propietarios, propietario);
    setAccionPropietarios("L");
  }

  function agregarPropietario() {
    setPropietarioActual(propietarioInicial);
    setAccionPropietarios("R");
  }

  const onSubmit = (data) => {
    grabarPropietario(data);
  };

  // useEffect para cambiar la accion de propietario según la del paciente
  useEffect(() => {
    return () => {
      if (accionPacientes === "C") consultarPropietario(pacienteActual.id, "C");
    };
  }, [accionPacientes]);

  return (
    <div className="propietarios-container container-fluid opacity-chg-low my-2">
      {accionPropietarios === "L" && (
        <div className="row agregar-propietarios mt-2">
          <div className="col-12 text-center my-1">
            <button
              type="button"
              className="btn btn-agregar btn-success shadow-small"
              onClick={(e) => agregarPropietario()}
            >
              AGREGAR PROPIETARIO
              <i className="bi bi-plus-lg ms-2"></i>
            </button>
          </div>
        </div>
      )}
      {accionPropietarios === "L" && (
        <PropietariosLista
          propietarios={propietarios}
          consultarPropietario={consultarPropietario}
          seleccionarPropietario={seleccionarPropietario}
        />
      )}
      {accionPropietarios !== "L" && (
        <form
          className="form-propietarios opacity-chg-low"
          onSubmit={handleSubmit(onSubmit)}
        >
          {accionPropietarios === "R" && (
            <div className="row container-title-registro my-1">
              <h3 className="title-registrar-propietario text-shadow-small">
                REGISTRAR PROPIETARIO
              </h3>
            </div>
          )}
          <fieldset disabled={accionPacientes === "C"}>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="input-group my-1">
                  <label className="input-group-text text-center">Nombre</label>
                  <input
                    type="text"
                    {...register("Nombre", {
                      required: {
                        value: true,
                        message: "El nombre del propietario es requerido.",
                      },
                    })}
                  />
                </div>
              </div>
              {errors?.Nombre && touchedFields.Nombre && (
                <ErrorMessage message={errors?.Nombre} />
              )}
              <div className="col-12 col-md-6">
                <div className="input-group my-1">
                  <label className="input-group-text">Apellido</label>
                  <input type="text" {...register("Apellido")} />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="col-12 input-group my-1">
                  <label className="input-group-text fw-bold">@</label>
                  <input className="px-4" type="email" {...register("Email")} />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="col-12 input-group mt-1">
                  <label className="input-group-text">Telefono</label>
                  <input
                    className="px-2"
                    type="tel"
                    {...register("Telefono")}
                  />
                </div>
              </div>
            </div>
            {accionPropietarios === "R" && (
              <div className="row justify-content-center my-3">
                <div className="col-6 mx-auto text-center">
                  <button className="btn btn-grabar btn-hover shadow-small">
                    GRABAR
                    <i className="bi bi-check-lg ms-1"></i>
                  </button>
                </div>
                <div className="col-6 mx-auto text-center">
                  <button
                    type="button"
                    onClick={(e) => regresarRegistroPaciente()}
                    className="btn btn-cancelar btn-hover shadow-small"
                  >
                    CANCELAR
                    <i className="bi bi-x-lg ms-2"></i>
                  </button>
                </div>
              </div>
            )}
          </fieldset>
          {!isValid && isSubmitted && (
            <div className="form-error">
              <ErrorMessage message="Datos de registro incorrectos." />
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default Propietarios;
