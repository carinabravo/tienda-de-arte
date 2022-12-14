import './encabezado.css';
import React from 'react';

const Encabezado = () => {

    return (
        <div className="container-fluid">
            <div className="fondo row mb-1">
                <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
                    <p className="texto-encabezado mt-3 mb-3">TIENDA ONLINE DE ARTE ABSTRACTO</p>
                </div>
            </div>
        </div>
    )
}

export default Encabezado;