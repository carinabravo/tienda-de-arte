import React from 'react';
import './promocion.css';

const Promocion = () => {

    return (
        <div className="container-fluid promo">
            <div className="col-md-12 mb-5">
                <div className="container">
                    <div className="text-promo row px-0 py-5">
                        <div className="col-md-4 d-flex justify-content-start align-items-center">
                            <img src={"images/logo e iconos/truck.svg"} alt="camión de envíos" width="30" />
                            <p className="m-2">ENVIOS A TODO EL PAÍS</p>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <img src={"images/logo e iconos/credit-card-2-back.svg"} alt="tarjeta de crédito" width="30" />
                            <p className="m-2">PAGÁ COMO QUIERAS</p>
                        </div>
                        <div className="col-md-4 d-flex justify-content-end align-items-center ">
                            <img src={"images/logo e iconos/check2-circle.svg"} alt="certificado" width="30" />
                            <p className="m-2">OBRAS ÚNICAS Y CERTIFICADAS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promocion;