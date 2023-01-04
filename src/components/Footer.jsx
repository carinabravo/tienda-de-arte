import './footer.css';
import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {

  return (
    <footer className="container">
      <div className="row">
        <div className="col-md-7 px-3 mb-3">
          <h5>Sección</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-1"><NavLink to={"/"} className="nav-NavLink px-0 text-muted text-decoration-none">
              <img src={"images/logo e iconos/house.svg"} className="me-2" alt="house" width="18" />Inicio</NavLink >
            </li>
            <li className="nav-item"><NavLink to={"/biografia"} className="nav-NavLink px-0 text-muted text-decoration-none">
              <img src={"images/logo e iconos/person-lines-fill.svg"} className="me-2" alt="person" width="17" />Biografía</NavLink >
            </li>
          </ul>
        </div>
        <div className=" col-md-5 mb-3 px-3">
          <form>
            <h5>Newsletter de Danna Blenk</h5>
            <p>¡Suscribite y recibí todas las novedades!</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Dirección de Email</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Ingresar dirección de Email..." />
              <button className="btn btn-suscription btn-primary" type="button">Suscribirme</button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p className="ms-3">© 2022 By Carina Bravo - All rights reserved.</p>
        <div className="list-unstyled d-flex">
          <a href="https://www.facebook.com/" className="me-3" >
            <img src="images/logo e iconos/facebook.svg" alt="facebook" width="28" />
          </a>
          <a href="https://twitter.com/" className="me-3"  >
            <img src="images/logo e iconos/twitter.svg" alt="twitter" width="28" />
          </a>
          <a href="https://www.instagram.com/" className="me-3" >
            <img src="images/logo e iconos/instagram.svg" alt="instagram" width="28" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;