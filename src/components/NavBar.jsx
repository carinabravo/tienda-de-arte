import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 mt-4 mb-4">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <Link className="navbar-brand" to={"/"}><img src={"images/logo e iconos/logo.jpg"} alt="logo" width={350} /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse mx-3" id="navbarNav">
                                <ul className="navbar-nav me-3">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname="page" to={"/"}>Inicio</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname="page" to={"/biografia"}>Biografía</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname="page" to={"/contacto"}>Contacto</NavLink>
                                    </li>
                                    <li className="nav-item dropdown me-5">
                                        <a className="nav-link dropdown-toggle" href="#p" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Obras</a>
                                        <ul className="dropdown-menu">
                                            <NavLink className="dropdown-item" activeclassname="page" to={"/category/acrilico"}><img src={"images/logo e iconos/palette.svg"} className="me-2" alt="palette" width="18" />Acrílicos</NavLink>
                                            <hr className="dropdown-divider" />
                                            <NavLink className="dropdown-item" activeclassname="page" to={"/category/acuarela"}><img src={"images/logo e iconos/palette.svg"} className="me-2" alt="palette" width="18" />Acuarelas</NavLink>
                                            <hr className="dropdown-divider" />
                                            <NavLink className="dropdown-item" activeclassname="page" to={"/category/oleo"}><img src={"images/logo e iconos/palette.svg"} className="me-2" alt="palette" width="18" />Óleos</NavLink>
                                            <hr className="dropdown-divider" />
                                            <NavLink className="dropdown-item" activeclassname="page" to={"/category/tecnica-mixta"}><img src={"images/logo e iconos/palette.svg"} className="me-2" alt="palette" width="18" />Técnica mixta</NavLink>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Obra..." aria-label="Search" />
                                    <button className="btn btn-outline-dark" type="submit">Buscar</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div >
    )
}

export default NavBar;