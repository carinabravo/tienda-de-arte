import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loader from './Loader';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "items", id);

        getDoc(item).then((datos) => {
            if (datos.exists()) {
                setItem({ id: datos.id, ...datos.data() });
                setLoading(false);
            } else { }
        });

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