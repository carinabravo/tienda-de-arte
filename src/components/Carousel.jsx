import React from "react";

const Carousel = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className=" col-md-12 mb-3 p-0">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">
                                <img src="images/Danna Blenk/1.jpg" className="d-block w-100" alt="foto artista 1" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>BIENVENID@S A MI TIENDA DE ARTE</h1>
                                    <p>ARTE ABSTRACTO - Danna Blenk</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="images/Danna Blenk/3.jpg" className="d-block w-100" alt="foto artista 3" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>REGALÁ Y REGALATE ARTE ORIGINAL</h1>
                                    <p>ARTE ABSTRACTO - Danna Blenk</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000" >
                                <img src="images/Danna Blenk/2.jpg" className="d-block w-100" alt="foto artista 2" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>SE REALIZAN TRABAJOS PERSONALIZADOS</h1>
                                    <p>ARTE ABSTRACTO - Danna Blenk</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000" >
                                <img src="images/Danna Blenk/4.jpg" className="d-block w-100" alt="foto artista 4" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>TIEMPO DE ENTREGA ESTIMADO 7-10 DÍAS</h1>
                                    <p>ARTE ABSTRACTO - Danna Blenk</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="images/Danna Blenk/5.jpg" className="d-block w-100" alt="foto artista 5" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>TE INVITO A VISITAR MI TALLER</h1>
                                    <p>ARTE ABSTRACTO - Danna Blenk</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">anterior</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">siguiente</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;