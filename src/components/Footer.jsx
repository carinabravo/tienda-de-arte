import './footer.css';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const [state, handleSubmit] = useForm("xrgdqqpr");
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  useEffect(() => {
    if (state.succeeded == true) {
      setMostrarMensaje(true)
      setTimeout(() => {
        setMostrarMensaje(false)
      }, 3000)
    }
    
  }, [state.succeeded])

  if (mostrarMensaje) {
    return (
      <div className='container'>
        <div className='col-md-4 offset-md-4 px-5 py-5'>
          <div className='row text-center'>
            <div className="alert alert-success mensaje-exito" role="alert">Suscripción exitosa!</div>
          </div>
        </div>
      </div>
    )
  }

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
          <form onSubmit={handleSubmit}>
            <h5>Newsletter de Danna Blenk</h5>
            <p>¡Suscribite y recibí todas las novedades!</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="email" className="visually-hidden">Dirección de Email</label>
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