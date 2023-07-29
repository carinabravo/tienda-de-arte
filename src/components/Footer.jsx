import './footer.css';
import React from 'react';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const footerRef = useRef(null);
  const [state, handleSubmit] = useForm("xrgdqqpr");
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  useEffect(() => {
    if (state.succeeded === true) {
      setMostrarMensaje(true)
      setTimeout(() => {
        setMostrarMensaje(false)
      }, 3000)
    }

  }, [state.succeeded])

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (mostrarMensaje) {
    return (
      <div className='container'>
        <div className='col-lg-6 col-md-6 col-sm-12 offset-md-3 px-5 py-5'>
          <div className='row text-center'>
            <div className="alert alert-primary mensaje-exito" role="alert">Suscripción exitosa!</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <footer className="container" ref={footerRef}>
      <div className="row">
        <div className="col-lg-7 col-md-5 col-sm-12 px-3 mb-3">
          <h5 className='seccion-titulo'>Sección</h5>
          <ul className="nav flex-column mb-3">
            <li className="nav-item mb-1">
              <NavLink to={"/"} className="nav-NavLink px-0 text-muted text-decoration-none" onClick={scrollToTop}>
                <img src={"images/logo e iconos/house.svg"} className="me-2 logo-inicio-1" alt="house" />Inicio</NavLink >
            </li>
            <li className="nav-item"><NavLink to={"/biografia"} className="nav-NavLink px-0 text-muted text-decoration-none" onClick={scrollToTop}>
              <img src={"images/logo e iconos/person-lines-fill.svg"} className="me-2 logo-persona-1" alt="person" />Biografía</NavLink >
            </li>
          </ul>
        </div>

        <div className="col-lg-5 col-md-7 col-sm-12 mb-3 px-3">
          <form onSubmit={handleSubmit}>
            <h5 className="titulo-suscripcion">Newsletter de Danna Blenk</h5>
            <p className="texto-suscripcion">¡Suscribite y recibí todas las novedades!</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2 ">
              <label htmlFor="email" className="visually-hidden ">Dirección de Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="ejemplo@gmail.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <button className="btn btn-suscription btn-primary" type="submit" disabled={state.submitting}>Suscribirme</button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-sm-4 pt-2 my-4 border-top derechos-1">
        <p className="ms-1 derechos-texto">© 2022 By Carina Bravo - All rights reserved.</p>
        <div className="list-unstyled d-flex redes">
          <a href="https://www.facebook.com/" className="me-2" >
            <img className="logo-f" src="images/logo e iconos/facebook.svg" alt="facebook" />
          </a>
          <a href="https://twitter.com/" className="me-2"  >
            <img className="logo-t" src="images/logo e iconos/twitter.svg" alt="twitter" />
          </a>
          <a href="https://www.instagram.com/" className="me-2" >
            <img className="logo-i" src="images/logo e iconos/instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>

    </footer>
  )
}

export default Footer;










