import React, { useState } from 'react';
import './itemCount.css';

const ItemCount = ({ initial, stock }) => {

    const [count, setCount] = useState(initial)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)

    const onAdd = () => {
        if (stock > 0) {

            console.log("Agregaste: " + count + " productos al carrito!");
        }
    }

    return (
        <div className="counter mb-4">
            <button className="btnUno btn btn-outline-primary p-1" onClick={decrease}>-</button>
            <button className="countUno btn btn-outline-primary p-1">{count}</button>
            <button className="btnDos btn btn-outline-primary p-1" disabled={count === stock} onClick={increase}>+</button>
            <div>
                <button className="btnTres btn btn-outline-primary px-3 mt-2" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )

}

export default ItemCount;
