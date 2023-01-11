import'./tituloPrincipal.css';
import React from "react";

const TituloPrincipal = () => {
    return (
        <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center px-sm-5">
                <div className="row">
                    <h1 className="mt-3 mb-2 titulo-principal">Te presentamos la nueva Collección de Danna Blenk, titulada <b>"Vida"</b></h1>
                    <p className="texto-principal">Una serie única de <b>Arte abstracto</b>, la cual se encuentra conformada por 16 magníficas Obras.</p>
                </div>
            </div>
        </div>
    )
}

export default TituloPrincipal;