import React, { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';
import Loader from './Loader';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { id: category } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();

        const itemsCollection = category
            ? query(collection(db, 'items'), where("category", "==", category))
            : collection(db, "items");

        getDocs(itemsCollection).then((datos) => {
            setItems(datos.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            setLoading(false)
        });

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