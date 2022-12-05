import React from 'react';
import './itemDetail.css';

const ItemDetail = ({ item }) => {

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
            </div>
        </div>

    )
}

export default ItemDetail;


