import React from "react";

const Cards = () => {

    return (
        <div className="container-fluid">
            <div className="col-md-12">
                <div className="row p-5">
                    <div className="col-md text-center shadow px-5 py-4 mb-3 mx-2 bg-body rounded">
                        <p><img src="images/pinturas al oleo/Delicadeza.jpg" alt="Delicadeza" width="200" height="200" /></p>
                        <p>DELICADEZA 50x50 cm</p>
                        <h4>$30000</h4>
                        <p>3 Cuotas sin interés de $10.000,00</p>
                        <p><a href="#p" className="btn btn-dark py-2 px-4">AGREGAR AL CARRITO</a></p>
                    </div>
                    <div className="col-md text-center shadow px-5 py-4 mb-3 mx-2 bg-body rounded">
                        <p><img src="images/pinturas al oleo/Emociones.jpg" alt="Emociones" width="200" height="200" /></p>
                        <p>EMOCIONES 50x50 cm</p>
                        <h4>$30000</h4>
                        <p>3 Cuotas sin interés de $10.000,00</p>
                        <p><a href="#p" className="btn btn-dark py-2 px-4">AGREGAR AL CARRITO</a></p>
                    </div>
                    <div className="col-md text-center shadow px-5 py-4 mb-3 mx-2 bg-body rounded">
                        <p><img src="images/pinturas al oleo/Sinceridad.jpg" alt="Sinceridad" width="200" height="200" /></p>
                        <p>SINCERIDAD 50x50 cm</p>
                        <h4>$30000</h4>
                        <p>3 Cuotas sin interés de $10.000,00</p>
                        <p><a href="#p" className="btn btn-dark py-2 px-4">AGREGAR AL CARRITO</a></p>
                    </div>
                    <div className="col-md text-center shadow px-5 py-4 mb-3 mx-2 bg-body rounded">
                        <p><img src="images/pinturas al oleo/Fuego.jpg" alt="Fuego" width="200" height="200" /></p>
                        <p>ALEGRÍA 50x50 cm</p>
                        <h4>$30000</h4>
                        <p>3 Cuotas sin interés de $10.000,00</p>
                        <p><a href="#p" className="btn btn-dark py-2 px-4">AGREGAR AL CARRITO</a></p>
                    </div>

                    <div className="col-md-12 bg-body rounded mt-5 d-flex justify-content-center">
                        <p><a href="#p" className="btn btn-dark py-2 px-5">VER TODOS LOS PRODUCTOS</a></p>
                    </div >
                </div >
            </div>
        </div>
    )
}

export default Cards;