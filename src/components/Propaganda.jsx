import React from "react";
import './propaganda.css';

const Propaganda = () => {
    return (
        <div className="container">
            <div className="row pt-5 pb-3 px-5">
                <div className="col-md-3 offset-md-1">
                    <img src="/images/Danna Blenk/propaganda.jpg" alt="" className="img-propaganda" />
                </div>
                <div className="col-md-7">
                    <h5 className="title-propaganda1">TRABAJOS PERSONALIZADOS</h5>
                    <p className="text-propaganda1 pb-3">Danna trabaja en cada pieza poniendo atenciòn a la calidad y el detalle, respetando los procesos de secado de los materiales en su taller.</p>
                    <h5 className="title-propaganda2">ENVÍOS</h5>
                    <p className="text-propaganda2">Realiza envíos a todo el país, por este motivo Danna cuida al máximo los detalles de embalaje y empaquetado de cada obra, utilizando pluribol de alta densidad y cartón corrugado tri-capa para proteger su compra y que usted reciba todo en perfectas condiciones. El tiempo estimado de entrega de la obra es de 10 a 15 dìas aproximadamente. Cada obra se entrega con su certificado de autenticidad.</p>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Propaganda;