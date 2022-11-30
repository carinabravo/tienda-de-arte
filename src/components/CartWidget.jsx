import React from 'react';

const CartWidget = () => {

    return (
        <button type="button" className="btn position-relative">
            <img src="images/logo/cart4.svg" alt="Carrito" width="28" />
            <span className="position-absolute start-5 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CartWidget;