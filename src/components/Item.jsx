import './item.css';
import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const ItemRef = useRef(null);

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (

        <div className="card col-2 ms-3 me-3 mb-4 p-0" ref={ItemRef}>
            <img src={item.image} className="card-img-top" alt="card" />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-price"><b>$ {item.price}</b></h6>
                <Link to={`/item/${item.id}`} className="btn btn-card btn-primary btn-ver" onClick={scrollToTop}>Ver más...</Link>
            </div>
        </div>
    )
}

export default Item;