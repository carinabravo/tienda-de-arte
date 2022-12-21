import React, { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';
import Loader from './Loader';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
// import arrayProductos from './json/products.json';


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { id: category } = useParams();

    // useEffect(() => {
    //     setLoading(true);

    //     const promesa = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             // filtra por categoría de productos sino muestra todos los productos.
    //             resolve(category ? arrayProductos.filter(item => item.category === category) : arrayProductos);
    //         }, 2000);

    //     });

    //     promesa.then((data) => {
    //         setLoading(false)
    //         setItems(data);
    //     })
    // }, [category]);


    //Proceso para cargar productos de la colecciòn
    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items");

    //     arrayProductos.forEach((item) => {
    //         addDoc(itemsCollection, { title: item.title, article: item.article, description: item.description, price: item.price, image: item.image, stock: item.stock, category: item.category });
    //     });
    // }, []);


    //Se consulta a la collecciòn de datos
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        //Se filtra por categorías con uso de ternario
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