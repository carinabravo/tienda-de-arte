import './cart.css';
import React from "react";
import { Link, useParams } from "react-router-dom";

const OrdenGenerada = () => {
    const { id } = useParams();

    return (
        <div className="container">
            <div className="row py-5 px-5">
                <div className="col-md-12 text-center mb-5">
                    <div className="alert alert-success">
                        <h1 className="mb-2" style={{ fontSize: "25px" }}>Agradecemos su compra!</h1>
                        <p className="mb-0"style={{ fontSize: "15px" }}>Su número de orden es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn btn-volver btn-primary mt-2">Volver a la página principal</Link>
                </div>
            </div>
        </div>
    )
}

export default OrdenGenerada;