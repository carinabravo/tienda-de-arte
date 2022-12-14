import './promocion.css';
import React from 'react';

const Promocion = () => {
    return (
        <div className="container-fluid promo">
            <div className="col-lg-12 col-md-12 col-sm-12 px-5 mb-5">
                <div className="row my-5">
                    <div className="text-cyber col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center align-items-center pt-3">
                    <img src={"images/logo e iconos/rocket-takeoff.svg"} alt="nave" width="30" />
                        <p className="m-2" style={{ fontSize: "22px" }}>Lanzamos el <b>Cyber Week</b> y con tu compra obtendrás un <b>15% off!</b></p>
                    </div>
                    <div className="text-promo row px-2 py-4">
                        <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center">
                            <img src={"images/logo e iconos/truck.svg"} alt="camión de envíos" width="30" />
                            <p className="m-3">ENVIOS A TODO EL PAÍS.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center">
                            <img src={"images/logo e iconos/credit-card-2-back.svg"} alt="tarjeta de crédito" width="30" />
                            <p className="m-3">PAGÁ COMO QUIERAS.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center">
                            <img src={"images/logo e iconos/check2-circle.svg"} alt="certificado" width="30" />
                            <p className="m-3">OBRAS ÚNICAS Y CERTIFICADAS.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promocion;