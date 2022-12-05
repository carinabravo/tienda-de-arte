import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import arrayProductos from './json/products.json';
import Loader from './Loader';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const { id: category } = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);

        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                // filtra por categoría de productos sino muestra todos los productos.
                resolve(category ? arrayProductos.filter(item => item.category === category) : arrayProductos);
            }, 2000);

        });

        promesa.then((data) => {
            setLoading(false)
            setItems(data);
        })
    }, [category]);


    return (
        <div className="container">
            {
                loading
                    ? <Loader />
                    : <ItemList items={items} />
            }
        </div>
    );
}

export default ItemListContainer;