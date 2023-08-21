import React from "react";

const PropietariosLista = ({
  propietarios,
  accionPacientes,
  accionPropietarios,
  agregarPropietario,
  eliminarPropietario,
  consultarPropietario,
  seleccionarPropietario,
}) => {
  return (
    <div className="table-responsive mt-2">
      <table className="table table-secondary table-borderless table-hover lista-propietarios">
        <thead className="table-dark">
          <tr>
            <th>NRO</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Activo</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {propietarios.length === 0 ? (
            <tr className="fw-bold text-center">
              <td colspan="7">No se encontraron propietarios...</td>
            </tr>
          ) : (
            propietarios.map((p) => (
              <tr key={p.id}>
                <td className="fw-bold text-center align-middle">{p.id}</td>
                <td className="text-center align-middle">{p.Nombre}</td>
                <td className="text-center align-middle">{p.Apellido}</td>
                <td className="text-center align-middle">{p.Telefono}</td>
                <td className="text-center align-middle">{p.Email}</td>
                <td className="text-center align-middle fw-bold">
                  {p.Activo ? "SI" : "NO"}
                </td>
                <td>
                  <div className="row justify-content-start justify-content-lg-center opciones-propietarios">
                    <div className="col-10">
                      <button
                        type="button"
                        className="btn btn-seleccionar btn-success btn-hover shadow-small"
                        onClick={(e) => {
                          e.preventDefault();
                          seleccionarPropietario(p.id);
                        }}
                      >
                        SELECCIONAR
                      </button>
                    </div>
                    <div className="col-4 me-2">
                      <button
                        type="button"
                        className="btn btn-modificar btn-hover shadow-small my-1"
                        onClick={(e) => consultarPropietario(p.id, "M")}
                      >
                        <i className="bi bi-pencil ms-1"></i>
                      </button>
                    </div>
                    <div className="col-4 ms-1">
                      <button
                        type="button"
                        className="btn btn-eliminar btn-hover shadow-small my-1"
                        onClick={(e) => eliminarPropietario()}
                      >
                        <i className="bi bi-trash3 ms-1"></i>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PropietariosLista;
