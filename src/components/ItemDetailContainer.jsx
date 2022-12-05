import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from './json/products.json';
import Loader from './Loader';
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                //filtra el array de productos y devuelve un solo objeto.
                resolve(arrayProductos.find(item => item.id === parseInt(id)));
            }, 2000);

        });

        promesa.then((data) => {
            setLoading(false)
            setItem(data);
        })
    }, [id]);


    return (

        <div className="container my-5">
            {
                loading
                    ? <Loader />
                    : <ItemDetail item={item} />
            }
        </div>
    )

}

export default ItemDetailContainer;