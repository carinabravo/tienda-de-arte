import React from 'react';
import './itemDetail.css';
import ItemCount from './ItemCount';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({ item }) => {

    const navigate = useNavigate();


    return (
        <div className="row">
            <div className="col-md-5 offset-md-1 mb-5">
                <img src={item.image} alt={item.title} className="img-unica img-fluid" width={400} />
            </div>
            <div className="col-md-5">
                <h1 className="item-title">{item.title}</h1>
                <h3 className="item-article">{item.article}</h3>
                <p className="item-description">{item.description}</p>
                <h5 className="item-price"><b>$ {item.price}</b></h5>
                <ItemCount stock={item.stock} />
            </div>
            <div>
                <button className="btn me-5" type="submit" onClick={() => navigate(-1)}><i className="bi bi-box-arrow-left" style={{ fontSize: "30px", color: "#716e6e" }}></i></button>
            </div>
        </div>
    )
}

export default ItemDetail;


