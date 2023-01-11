import './carousel.css';
import React from 'react';

const Carousel = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 mb-3 p-0">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner mt-2">
                            <div className="carousel-item active" data-bs-interval="4000">
                                <img src="images/Danna Blenk/1.jpg" className="d-block w-100" alt="foto artista 1" />
                                <div className="carousel-caption d-none d-lg-block">
                                    <h3 className="texto-carousel"><b>TIENDA DE ARTE ABSTRACTO</b></h3>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="4000">
                                <img src="images/Danna Blenk/2.jpg" className="d-block w-100" alt="foto artista 3" />
                                <div className="carousel-caption d-none d-lg-block">
                                    <h3 className="texto-carousel"><b>CADA OBRA ES ÚNICA</b></h3>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="4000" >
                                <img src="images/Danna Blenk/3.jpg" className="d-block w-100" alt="foto artista 2" />
                                <div className="carousel-caption d-none d-lg-block">
                                    <h3 className='texto-carousel'><b>COMPRÁ ARTE ORIGINAL</b></h3>
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