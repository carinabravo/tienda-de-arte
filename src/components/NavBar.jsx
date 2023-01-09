import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md mt-4 mb-4">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>
                    <img className="img-fluid mb-4" src={"images/logo e iconos/logo.jpg"} alt="logo" width={350} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-3 mt-2">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeclassname="page" to={"/"}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeclassname="page" to={"/biografia"}>Biografía</NavLink>
                        </li>
                        <li className="nav-item dropdown me-5 mb-4">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false" activeclassname="page" >Obras</a>
                            <ul className="dropdown-menu mb-4">
                                <NavLink className="dropdown-item" to={"/category/acrilico"}>
                                    <img src={"images/logo e iconos/palette.svg"} className="me-2" alt="palette"
                                        width="18" />Acrílicos</NavLink>
                                <hr className="dropdown-divider" />
                                <NavLink className="dropdown-item" to={"/category/acuarela"}>
                                    <img src={"images/logo e iconos/palette.svg"} className="me-2" alt="palette"
                                        width="18" />Acuarelas</NavLink>
                                <hr className="dropdown-divider" />
                                <NavLink className="dropdown-item" to={"/category/oleo"}>
                                    <img src={"images/logo e iconos/palette.svg"} className="me-2" alt="palette"
                                        width="18" />Óleos</NavLink>
                                <hr className="dropdown-divider" />
                                <NavLink className="dropdown-item" to={"/category/tecnica-mixta"}>
                                    <img src={"images/logo e iconos/palette.svg"} className="me-2" alt="palette"
                                        width="18" />Técnica mixta</NavLink>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="align-items-center justify-content-end"><CartWidget /></div>
            </div>
        </nav>
       

    )
}

export default NavBar;