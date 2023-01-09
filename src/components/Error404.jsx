import './error.css';
import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container mb-5">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className='row'>
                    <div className="text-center py-1" role="alert">
                        <img src="./images/logo e iconos/error.jpg" className="img-error img-fluid me-4" alt="error" />
                        <h4 className="text-error">Oops! Page not found</h4>
                        <Link to={"/"} className="btn btn-error btn-primary mt-2 mb-5">Volver a la página principal</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Error404;
