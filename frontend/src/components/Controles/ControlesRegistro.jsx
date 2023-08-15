import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Detalles from "./Detalles/Detalles.jsx";
import "./controles.css";
import HorizontalBar from "../HorizontalBar.jsx";
import ErrorMessage from "../ErrorMessage.jsx";

const ControlesRegistro = ({
  accionControl,
  buscarDetalles,
  idPaciente,
  nroControl,
  controlActual,
  grabarControl,
  regresar,
}) => {
  const [detallesActual, setDetallesActual] = useState([]);

  useEffect(() => {
    let detalles = buscarDetalles(controlActual.id);
    setDetallesActual(detalles);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isSubmitted },
  } = useForm({ values: controlActual });

  const onSubmit = (data) => {
    grabarControl(data);
  };

  return (
    <div className="container-fluid">
      <form
        className="form-registro-controles"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="row my-2 justify-content-center align-items-center">
          {accionControl === "C" && (
            <>
              <div className="col-5 col-md-3">
                <button
                  className="btn btn-volver shadow-small"
                  onClick={(e) => regresar()}
                >
                  VOLVER<i className="bi bi-arrow-counterclockwise ms-1"></i>
                </button>
              </div>
              <div className="col-3 col-md-auto mx-1 border-start border-opacity-25 border-3 border-dark">
                <h5 className="title-small-controles text-center">
                  PACIENTE Nº {controlActual.Animales_id}
                </h5>
              </div>
              <div className="col-3 col-md-auto ms-1">
                {accionControl === "C" ? (
                  <h5 className="title-small-controles text-center">
                    CONTROL Nº {controlActual.id}
                  </h5>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </div>
        <fieldset disabled={accionControl === "C"}>
          <div className="row align-middle text-center">
            <div className="col-12 col-lg-6 input-group mb-2">
              <label className="input-group-text fw-bold" htmlFor="Descripcion">
                Descripcion
              </label>
              <textarea
                {...register("Descripcion")}
                className="descripcion"
              ></textarea>
            </div>
            <div className="col-12 col-lg-6 input-group my-2 align-content-center">
              <label className="input-group-text fw-bold">Fecha</label>
              <input
                className="text-center"
                type="date"
                {...register("Fecha", {
                  required: {
                    value: true,
                    message: "La fecha de control es requerida.",
                  },
                })}
              />
            </div>
            {errors?.Fecha &&
                      touchedFields.Fecha && (
                        <ErrorMessage
                          message={errors?.Fecha.message}
                        />
                      )}
            {accionControl !== "C" ? (
              <div className="row align-content-center text-center">
                <div className="col-8 col-md-4 mx-auto">
                  <button
                    className="btn btn-grabar btn-hover shadow-small my-1"
                    type="submit"
                    onClick={(e) => grabarControl()}
                  >
                    GRABAR
                    <i className="bi bi-check-lg ms-1"></i>
                  </button>
                </div>
                <div className="col-8 col-md-4 mx-auto">
                  <button
                    className="btn btn-cancelar btn-hover shadow-small my-1"
                    onClick={(e) => regresar()}
                  >
                    {accionControl === "C" ? "VOLVER" : "CANCELAR"}
                    {accionControl === "C" ? (
                      <i className="bi bi-arrow-counterclockwise ms-1"></i>
                    ) : (
                      <i className="bi bi-x-lg ms-1"></i>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </fieldset>
        {accionControl === "C" && (
            <>
              <HorizontalBar />
              <Detalles detalles={detallesActual} />
            </>
          )}
          {!isValid && isSubmitted && (
            <div className="form-error">
              <ErrorMessage message="Datos de control incorrectos." />
            </div>
          )}
      </form>
    </div>
  );
};

export default ControlesRegistro;
