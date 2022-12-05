import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    return (
        <button type="button" className="btn position-relative">
            <Link to={"/carrito"}>
                <img src={"images/logo e iconos/cart4.svg"} alt="Carrito" width="28" />
                <span className="position-absolute start-5 translate-middle badge rounded-pill bg-danger">1</span>
            </Link>
        </button>
    )
}

export default CartWidget;