import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../ErrorMessage";
import useScreensize from "../../../hooks/useScreensize";

const DetallesRegistro = ({ regresar, grabarDetalle, detalleActual }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isSubmitted },
  } = useForm({ values: detalleActual });
  const {width, height} = useScreensize();

  return (
    <div className="container-fluid p-0">
      <form className="form-registro-detalle">
        <div className="row">
          <h4 className="title-detalles-registro text-shadow-small shadow-small">
            AGREGAR TIPO DE CONTROL
          </h4>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 my-1">
            <div className="input-group">
              <label className="input-group-text fw-bold" htmlFor="Descripcion">
                Descripcion
              </label>
              <textarea
                className="detalle-descripcion"
                {...register("Descripcion", {
                  required: {
                    value: true,
                    message: "La descripcion del tipo de control es requerida.",
                  },
                })}
              />
            </div>
            {errors?.Descripcion && touchedFields.Descripcion && (
              <ErrorMessage message={errors?.Descripcion.message} />
            )}
            <div className="col-12 my-2">
              <div className="input-group">
                <label
                  className="input-group-text fw-bold lbl-imagenes"
                  htmlFor="Imagen"
                >
                  Imagenes
                </label>
                <input
                  type="file"
                  {...register("Imagen")}
                  placeholder="Examinar..."
                  multiple
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mx-auto">
            <div className="input-group">
              <select
                className="detalles-select-tipo"
                {...register("Tipo", {
                  required: {
                    value: true,
                    message: "Se debe seleccionar el tipo de control.",
                  },
                })}
              >
                <option value="T">Tratamiento</option>
                <option value="L">Lesion</option>
                <option value="E">Estudio</option>
              </select>
            </div>
            {errors?.Tipo && touchedFields.Tipo && (
              <ErrorMessage message={errors?.Tipo.message} />
            )}
          </div>
          <div className="col-12 text-center my-2">
            <button
              className="btn btn-grabar btn-hover shadow-small me-2"
              onClick={(e) => grabarDetalle()}
            >
              GRABAR <i className="bi bi-check-lg ms-1"></i>
            </button>
            <button
              className="btn btn-cancelar btn-hover shadow-small"
              onClick={(e) => regresar()}
            >
              CANCELAR<i className="bi bi-x-lg ms-2"></i>
            </button>
          </div>
        </div>
      </form>
      {!isValid && isSubmitted && (
            <div className="form-error">
              <ErrorMessage message="Datos de tipo de control incorrectos." />
            </div>
          )}
    </div>
  );
};

export default DetallesRegistro;
