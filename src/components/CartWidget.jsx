import './cartwidget.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';

const CartWidget = () => {
    const { cartTotal } = useContext(CartContext);

    return (
        <div className='container'>
            <div className='row'>
                <Link to={"/cart"} className="btn position-relative" >
                    <img className="carrito-nav" src={"images/logo e iconos/cart4.svg"} alt="Carrito" />
                    <span className="position-absolute start-5 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
                </Link>
            </div>
        </div>
    )
}

export default CartWidget;