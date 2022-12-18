import './propaganda.css';
import React from "react";


const Propaganda = () => {
    return (
        <div className="container">
            <div className="row py-4">
                <div className="col-md-7 offset-md-1 mt-3">
                    <p className="text-propaganda1">Danna Blenk <b>trabaja</b> en cada pieza poniendo atención a la calidad y el detalle, respetando los procesos de secado de los materiales en su taller.</p>
                    <p className="text-propaganda2">Realiza <b>envíos</b> a todo el país, cuidando al máximo los detalles de embalaje y empaquetado, utilizando pluribol de alta densidad y cartón corrugado tri-capa para proteger su compra y que usted reciba todo en perfectas condiciones.</p>
                    <p className="text-propaganda3">El tiempo estimado de <b>entrega</b> de cada producto es de 10 a 15 dìas hábiles y se envían con su certificado de autenticidad firmado por la artista.</p>
                </div>
                <div className="col-md-2 offset-md-1">
                    <img src="/images/Danna Blenk/propaganda.jpg" alt="propaganda" className="img-propaganda" />
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Propaganda;