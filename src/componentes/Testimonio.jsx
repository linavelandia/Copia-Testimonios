import React from "react";
import '../hoja-de-estilo/Testimonio.css'


function Testimonio(props) {
    return(
        <div className='contenedor-testimonio'>
          <img className="imagen-testimonio" src={`../assets/testimonio-${props.imagen}.png `} alt={`foto de ${props.nombre}`} />
          <div className="contenedor-texto-testimonio">
            <p className="nombre-testimonio">{props.nombre} en {props.pais}</p>
            <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
            <p className="texto-testimonio">{props.Testimonio}</p>
          </div>
        </div>
        
    );
}


export default Testimonio;