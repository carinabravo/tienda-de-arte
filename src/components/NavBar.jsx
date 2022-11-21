import React from "react";

import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-11 mt-3 mb-3">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <a className="navbar-brand" href="#p"><img src="images/logo/logo.jpg" alt="logo" width="350" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse mx-3" id="navbarNav">
                                <ul className="navbar-nav me-3">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/inicio">Inicio</a>
                                    </li>
                                    <li className="nav-item dropdown me-5">
                                        <a className="nav-link dropdown-toggle" href="#p" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Categorías</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#p">Tienda</a></li>
                                            <li><a className="dropdown-item" href="#p">Promos</a></li>
                                            <li><a className="dropdown-item" href="#p">Contacto</a></li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#p">Biografía de Danna</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Obra..." aria-label="Search" />
                                    <button className="btn btn-outline-success" type="Search">Buscar</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div >
    )
}

export default NavBar;