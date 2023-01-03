import './error.css';
import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container mb-5">
            <div className="row col-md-12">
                <div className="text-center py-1" role="alert">
                    <img src="./images/logo e iconos/error.jpg" className="img-error me-4" alt="" />
                    <h4 className="text-error">Oops! Page not found</h4>
                    <Link to={"/"} className="btn btn-error btn-primary mt-2 mb-5">Go Home</Link>
                </div>
            </div>
        </div>
    )

}

export default Error404;
