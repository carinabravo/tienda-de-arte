import './loader.css';
import React from 'react';


const Loader = () => {

    return (
        <div className="d-flex justify-content-center py-5 my-5">
            <div className="spinner spinner-border" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
        </div>
    )
}

export default Loader;
