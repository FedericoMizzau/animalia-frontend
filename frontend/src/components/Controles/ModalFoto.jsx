import React from "react";

const ModalFoto = ({detalle}) => {
  
  function generateSliderDots(detalle) {
    return (<span className="slider-buttons-dots">{detalle.Imagen.forEach((img) => (<b>&bull;</b>))}</span>)
  }
  
  return (<article className="modal">
    <div>
      <h4>VER FOTOS</h4>
      <button>X</button>
    </div>
    <figure className="slider">
    <img src={detalle.Imagen[0]} alt={detalle.Tipo} />
    <div className="slider-buttons">
      {/* boton izquierda */}
      <button>&lt;</button>
      {generateSliderDots(detalle)}
      {/* boton derecha */}
      <button>&gt;</button>
    </div>
    </figure>
  </article>);
};

export default ModalFoto;
