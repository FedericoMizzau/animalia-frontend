import React, {useState} from 'react'
import DetallesRegistro from './DetallesRegistro'
import ModalFoto from '../ModalFoto';

const Detalles = ({accionControl, detalles, setDetalles}) => {
  const [accionDetalle, setAccionDetalle] = useState("L");  
  const [modalDetalle, setModalDetalle] = useState(null);

  function agregarDetalle() {
    setAccionDetalle("R");
  }

  function grabarDetalle(detalle){
    setDetalles([
      ...detalles,
      detalle
    ]);
    regresar();
  }

  function regresar(){
    setAccionDetalle("L");
  }
  
  function toggleModal(detalle){
    setModalDetalle(detalle);
  }

  return (
    <div>
        <div>
          <button onClick={(e) => (agregarDetalle())}>NUEVO TRATAMIENTO/LESION/ESTUDIO</button>
        </div>
        {/* clase flex con flex align column para el estilo */}
        {accionControl !== "R" &&
          (detalles.length === 0 ? (
            <p>
              No se encontraron tratamientos/lesiones/estudios...
            </p>
          ) : (
            detalles.map((dc) => (<figure key={dc.id}>
              <div>
                <h4>{dc.Tipo}</h4>
                <button onClick={(e) => toggleModal(dc)}>VER FOTOS</button>
            </div>
            <div>
                <p>{dc.Descripcion}</p>
            </div>
            </figure>
            ))
            ))}
            {accionDetalle !== "R" && modalDetalle !== null && <ModalFoto detalle={modalDetalle} toggleModal={toggleModal}/>}
            {accionDetalle === "R" && <DetallesRegistro grabarDetalle={grabarDetalle} regresar={regresar} />}
    </div>
  )
}

export default Detalles;