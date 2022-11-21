import React from "react";

const Promocion = () => {
    return (
        <div className="container-fluid bg-warning">
            <div className="col-md-12 mb-5">
                <div className="container">
                    <div className="row  px-0 py-4">
                        <div className="col-md-4 d-flex justify-content-start align-items-center">
                            <img src="images/logo/truck.svg" alt="camión de envíos" width="30" />
                            <p className="m-2">ENVIOS A TODO EL PAÍS</p>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <img src="images/logo/credit-card-2-back.svg" alt="tarjeta de crédito" width="30" />
                            <p className="m-2">PAGÁ COMO QUIERAS</p>
                        </div>
                        <div className="col-md-4 d-flex justify-content-end align-items-center ">
                            <img src="images/logo/check2-circle.svg" alt="certificado" width="30" />
                            <p className="m-2">OBRAS ÚNICAS Y CERTIFICADAS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promocion;