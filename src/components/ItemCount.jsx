import './itemCount.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);

    const decrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const increase = () => {
        if (count < itemStock) {
            setCount(count + 1);
        }
    }

    const addToCart = (quantity) => {
        if (count <= itemStock) {
            setCount(1);
            setItemStock(itemStock - quantity);
            setVendido(true);
            onAdd(quantity);
        }
    }

    useEffect(() => {
        setItemStock(stock);

    }, [stock]);


    return (
        <div className="counter mt-4 mb-4">
            <button className="btnUno btn btn-outline-primary p-1" onClick={decrease}>-</button>
            <button className="countUno btn btn-outline-primary p-1">{count}</button>
            <button className="btnDos btn btn-outline-primary p-1" onClick={increase}>+</button>
            <div>
                {vendido ? <Link to={"/cart"} className="btnTres btn btn-outline-primary px-3 mt-2 ">Finalizar Compra</Link> : <button className="btnTres btn btn-outline-primary px-3 mt-2"
                    onClick={() => { addToCart(count) }}>Agregar al carrito</button>}
            </div>
        </div>
    )

}

export default ItemCount;
