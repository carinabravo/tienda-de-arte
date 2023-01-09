import './itemDetail.css';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from './context/CartContext';

const ItemDetail = ({ item }) => {
    const navigate = useNavigate();
    const { addItem } = useContext(CartContext);
    const [itemStock, setItemStock] = useState(0);

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity);
    }

    useEffect(() => {
        setItemStock(item.stock);

    }, [item]);

    return (
        <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 offset-md-1">
                <img src={item.image} alt={item.title} className="img-unica img-fluid mb-4" width={400} />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
                <h1 className="item-title">{item.title}</h1>
                <h3 className="item-article">{item.article}</h3>
                <p className="item-description">{item.description}</p>
                <h5 className="item-price"><b>$ {item.price}</b></h5>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
            <div>
                <button className="btn me-5" type="submit" onClick={() => navigate(-1)}>
                    <i className="bi bi-box-arrow-left" style={{ fontSize: "30px", color: "#716e6e" }}></i>
                </button>
            </div>
        </div>
    )
}

export default ItemDetail;


