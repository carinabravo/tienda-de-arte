import './promocion.css';
import React from 'react';

const Promocion = () => {
    return (
        <div className="container-fluid promo">
            <div className="col-lg-12 col-md-12 col-sm-12 mb-5 px-sm-2 py-2">
                <div className="row text-center">
                    <div className="text-cyber col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                        <p className="mt-3 mb-2 lanzamiento-1">Lanzamos el <b>Cyber Week</b> y con tu compra obtendrás un <b>15% off!</b></p>
                    </div>
                    <div className="text-promo row my-3">
                        <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center justify-content-center ">
                            <img className="truck-1" src={"images/logo e iconos/truck.svg"} alt="camión de envíos" />
                            <p className="m-2 lanzamiento-2">ENVIOS A TODO EL PAÍS.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center justify-content-center">
                            <img className="credit-1" src={"images/logo e iconos/credit-card-2-back.svg"} alt="tarjeta de crédito" />
                            <p className="m-2 me-3 lanzamiento-3">ELEGÍ COMO PAGARLO.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center justify-content-center">
                            <img className="check-1" src={"images/logo e iconos/check2-circle.svg"} alt="certificado" />
                            <p className="m-2 me-4 lanzamiento-4">OBRAS CERTIFICADAS.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promocion;