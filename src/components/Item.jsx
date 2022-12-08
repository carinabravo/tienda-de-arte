import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {

    return (
        <div className="card col-2 ms-3 me-3 mb-5 p-0">
            <img src={item.image} className="card-img-top" alt="card" />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-price">$ {item.price}</h6>
                <Link to={`/item/${item.id}`} className="btn btn-card btn-primary">Ver más...</Link>
            </div>
        </div>
    )
}

export default Item;