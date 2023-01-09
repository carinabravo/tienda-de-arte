import './informacion.css';
import React from "react";

const Informacion = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col- lg-7 col-md-7  col-sm-11 offset-md-1 mt-3 mb-0">
                    <p className="text-informacion1">Danna Blenk <b>trabaja</b> en cada pieza poniendo atención a la calidad y el detalle,
                        respetando los procesos de secado de los materiales en su taller.</p>
                    <p className="text-informacion2">Realiza <b>envíos</b> a todo el país, cuidando al máximo los detalles de embalaje y
                        empaquetado, utilizando pluribol de alta densidad y cartón corrugado tri-capa para proteger tu compra y que recibas 
                        todo en perfectas condiciones.</p>
                    <p className="text-informacion3">El tiempo estimado de <b>entrega</b> de cada producto es de 10 a 15 dìas hábiles y se
                        envían con su certificado de autenticidad firmado por la artista.</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-11 offset-md-1 my-3">
                    <img src="/images/Danna Blenk/propaganda.jpg" alt="danna blenk" className="img-informacion img-fluid" />
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Informacion;