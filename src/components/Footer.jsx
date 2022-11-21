import React from "react";

const Footer = () => {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-md-7 px-3 mb-3">
          <h5>Sección</h5>
          <ul className="nav flex-column">
            <li className="nav-item"><a href="/inicio" className="nav-link px-0 text-muted">Home</a></li>
            <li className="nav-item"><a href="/obras" className="nav-link px-0 text-muted">Obras</a></li>
            <li className="nav-item"><a href="/biografia" className="nav-link px-0 text-muted">Biografía</a></li>
            <li className="nav-item"><a href="/contacto" className="nav-link px-0 text-muted">Contacto</a></li>
          </ul>
        </div>

        <div className=" col-md-5 mb-3 px-3">
          <form>
            <h5>Newsletter de Danna Blenk</h5>
            <p>¡Suscribite y recibí todas las novedades!</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" className="visually-hidden">Dirección de Email</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Ingresá tu dirección de Email" />
              <button className="btn btn-primary" type="button">Suscribirme</button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p className="ms-3">© 2022 By Carina Bravo - Todos los derechos reservados.</p>
        <div className="list-unstyled d-flex">
          <a href="https://www.facebook.com/" className="me-3" ><img src="images/logo/facebook.svg" alt="facebook" width="28" /></a>
          <a href="https://twitter.com/" className="me-3"  ><img src="images/logo/twitter.svg" alt="twitter" width="28" /></a>
          <a href="https://www.instagram.com/" className="me-3" ><img src="images/logo/instagram.svg" alt="instagram" width="28" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;