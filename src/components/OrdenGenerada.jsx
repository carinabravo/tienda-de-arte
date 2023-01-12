import './ordenGenerada.css';
import './cart.css';
import React from "react";
import { Link, useParams } from "react-router-dom";

const OrdenGenerada = () => {
    const { id } = useParams();

    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-3 text-center px-5 mb-5">
                    <div className="alert alert-success alert-orden">
                        <h1 className="m-1 agradecimiento"><b>Agradecemos tu compra!</b></h1>
                        <p className="m-1 numero-Orden">Número de orden: <b>{id}</b> </p>
                    </div>
                    <div>
                        <Link to={"/"} className="btn btn-volver btn-primary mt-2">Volver a la página principal</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdenGenerada;