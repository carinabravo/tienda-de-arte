import React from 'react';
import './loader.css';

const Loader = () => {

    return (

        <div className="d-flex justify-content-center py-5 mb-5">
            <div className="spinner spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader;
