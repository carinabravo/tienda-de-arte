import React, { useContext, useState } from "react";
import { addDoc, doc, collection, getFirestore, writeBatch, getDoc } from "firebase/firestore";
import { CartContext } from "./context/CartContext";
import { Navigate } from "react-router-dom";

const Checkout = () => {
    const { cart, clear, sumaTotal } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();

        const order = {
            buyer: { name: nombre, phone: telefono, email: email },
            items: cart.map(item => ({
                id: item.id, title: item.title, quantity: item.quantity, stock: item.stock, price: item.price,
                price_total: item.quantity * item.price
            })),
            total: sumaTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}-${fecha.getHours()}
            :${fecha.getMinutes()}:${fecha.getSeconds()}`
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, order).then(async(orderRef) => {
            const batch = writeBatch(db);
            batch.update(orderRef, { total: order.total * 1.21, price_cyber_week: sumaTotal() * 0.85 });

            for (let item of order.items) {
                let productRef = doc(db, "items", item.id);
                let product = await getDoc(productRef)
                batch.update(productRef, { stock: product.data().stock - item.quantity });
            }

            await batch.commit();
            setOrderId(orderRef.id);
            clear();
        });
    }

    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-md-5">
                    <form>
                        <div className="mb-3 mt-1">
                            <label htmlFor="nombre" className="form-label" style={{ fontSize: "15px" }}><b>Nombre y Apellido:</b></label>
                            <input type="text" className="form-control" style={{ fontSize: "15px" }} id="nombre"
                                placeholder="Ingrese su nombre completo" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label" style={{ fontSize: "15px" }}><b>Teléfono:</b></label>
                            <input type="number" className="form-control" style={{ fontSize: "15px" }} id="telefono"
                                placeholder="Ingrese su número de teléfono" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" style={{ fontSize: "15px" }}><b>Email:</b></label>
                            <input type="text" className="form-control" style={{ fontSize: "15px" }} id="email"
                                placeholder="Ingrese su email" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <button type="button" className="btn btn-success mt-3 mb-4" onClick={generarOrden}>Generar orden</button>
                    </form>
                </div>
                <div className="col-md-6 offset-md-1 mb-4 mt-1">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.image} alt={item.title} width={80} /></td>
                                    <td className="align-middle" style={{ fontSize: "15px" }}>{item.title}</td>
                                    <td className="align-middle px-5" style={{ fontSize: "15px" }}>{item.quantity}</td>
                                    <td className="align-middle" style={{ fontSize: "15px" }}>${item.quantity * item.price}</td>
                                </tr>
                            ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="align-middle" style={{ fontSize: "18px" }}><b>Total a pagar:</b></td>
                                <td className="align-middle" style={{ fontSize: "18px" }}><b>${sumaTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId !== "" ? <Navigate to={"/ordenGenerada/" + orderId} /> : ""}
                </div>
            </div>
        </div>

    )
}


export default Checkout;