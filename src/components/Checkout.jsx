import React, { useContext, useState } from "react";
import { addDoc, doc, collection, getFirestore, writeBatch, updateDoc } from "firebase/firestore";
import { CartContext } from "./context/CartContext";

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
                id: item.id, title: item.title, quantity: item.quantity, price: item.price,
                price_total: item.quantity * item.price
            })),
            total: sumaTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}-${fecha.getHours()}
            :${fecha.getMinutes()}:${fecha.getSeconds()}`
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, order).then((datos) => {
            setOrderId(datos.id);
            const generatedOrder = doc(db, "orders", datos.id);
            updateDoc(generatedOrder, { total: order.total * 1.21 });

            const batch = writeBatch(db);
            const updatedOrder = doc(db, "orders", datos.id);
            batch.set(updatedOrder, { ...order, price_cyber_week: sumaTotal() * 0.85 });
            batch.commit();

            clear();
        });
    }

    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-md-5">
                    <form>
                        <div className="mb-3 mt-1">
                            <label for="nombre" className="form-label" style={{ fontSize: "15px" }}><b>Nombre y Apellido:</b></label>
                            <input type="text" className="form-control" style={{ fontSize: "15px" }} id="nombre"
                                placeholder="Ingrese su nombre completo" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label" style={{ fontSize: "15px" }}><b>Teléfono:</b></label>
                            <input type="number" className="form-control" style={{ fontSize: "15px" }} id="telefono"
                                placeholder="Ingrese su número de teléfono" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label" style={{ fontSize: "15px" }}><b>Email:</b></label>
                            <input type="text" className="form-control" style={{ fontSize: "15px" }} id="email"
                                placeholder="Ingrese su email" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <button type="button" class="btn btn-success mt-3 mb-4" onClick={generarOrden}>Generar orden</button>
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
            <div className="row px-5 py-5">
                <div className="col-md-12 text-center mb-5">
                    {orderId !== "" ? <div className="alert alert-success" style={{ fontSize: "15px" }}
                        role="alert">La orden generada es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>

    )
}

export default Checkout;