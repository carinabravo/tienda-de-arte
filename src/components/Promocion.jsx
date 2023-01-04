import './promocion.css';
import React from 'react';

const Promocion = () => {
    return (
        <div className="container-fluid promo">
            <div className="col-md-12 mb-5">
                <div className="container">
                    <div className="text-cyber col-md-12 d-flex justify-content-center align-items-center pt-3">
                    <img src={"images/logo e iconos/rocket-takeoff.svg"} alt="nave" width="30" />
                        <h4 className="m-2">Lanzamos el <b>Cyber Week</b> y con tu compra obtendrás un <b>15% off!</b></h4>
                    </div>
                    <div className="text-promo row px-0 py-4">
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