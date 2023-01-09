import React, { useContext, useState } from "react";
import { addDoc, doc, collection, getFirestore, writeBatch, getDoc } from "firebase/firestore";
import { CartContext } from "./context/CartContext";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Checkout = () => {
    const navigate = useNavigate();
    const { cart, clear, sumaTotal } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();

        const order = {
            buyer: {
                name: nombre,
                phone: telefono,
                email: email
            },

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

        addDoc(ordersCollection, order).then(async (orderRef) => {
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
                <div className="col-lg-5 col-md-11 col-sm-11">
                    <Formik
                        initialValues={{
                            nombre: '',
                            telefono: '',
                            email: ''
                        }}

                        validate={(valores) => {
                            let errores = {};

                            if (!valores.nombre) {
                                errores.nombre = 'Por favor ingrese un nombre.'
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                                errores.nombre = 'El nombre solo puede contener letras y espacios.'
                            }

                            if (!valores.telefono) {
                                errores.telefono = 'Por favor ingrese un número telefónico.'
                            } else if (!/^\d{7,14}$/.test(valores.telefono)) {
                                errores.telefono = 'El número telefónico solo debe contener números sin espacio.'
                            }

                            if (!valores.email) {
                                errores.email = 'Por favor ingrese un correo electrónico.'
                            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                                errores.email = 'El correo solo puede contener letras, números, punto, giones y gión bajo.'
                            }

                            return errores;
                        }}

                        onSubmit={(_values) => {
                            generarOrden()
                        }}
                    >
                        {({ errors }) => (
                            <Form className="formulario">
                                <div className="mb-3 mt-1">
                                    <label htmlFor="nombre" className="form-label" style={{ fontSize: "15px" }}><b>Nombre y apellido:</b></label>
                                    <Field
                                        type="text" className="form-control" style={{ fontSize: "15px" }}
                                        id="nombre" name="nombre" placeholder="juan perez"
                                        onInput={(e) => {
                                            setNombre(e.target.value)
                                        }}
                                    />
                                    <ErrorMessage name="nombre" component={() => (
                                        <div className="error mt-2" style={{ fontSize: "15px", color: "#cc062e" }}>
                                            {errors.nombre}
                                        </div>
                                    )}>
                                    </ErrorMessage>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="telefono" className="form-label" style={{ fontSize: "15px" }}><b>Teléfono:</b></label>
                                    <Field
                                        type="number" className="form-control" style={{ fontSize: "15px" }}
                                        id="telefono" name="telefono" placeholder="2213451122"
                                        onInput={(e) => {
                                            setTelefono(e.target.value)
                                        }}
                                    />
                                    <ErrorMessage name="telefono" component={() => (
                                        <div className="error mt-2" style={{ fontSize: "15px", color: "#cc062e" }}>
                                            {errors.telefono}
                                        </div>
                                    )}>
                                    </ErrorMessage>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label" style={{ fontSize: "15px" }}><b>Email:</b></label>
                                    <Field
                                        type="text" className="form-control" style={{ fontSize: "15px" }}
                                        id="email" name="email" placeholder="ejemplo@gmail.com"
                                        onInput={(e) => {
                                            setEmail(e.target.value)
                                        }}
                                    />
                                    <ErrorMessage name="email" component={() => (
                                        <div className="error mt-2" style={{ fontSize: "15px", color: "#cc062e" }}>
                                            {errors.email}
                                        </div>
                                    )}>
                                    </ErrorMessage>
                                </div>
                                <button type="submit" className="btn btn-success mt-2 mb-5">Generar orden</button>
                            </Form>
                        )}
                    </Formik>
                </div>


                <div className="col-lg-6 col-md-11 col-sm-11 offset-md-1 mb-4 mt-1">
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
                    {orderId !== "" ?
                        <Navigate to={"/ordenGenerada/" + orderId} />
                        : ""}
                </div>
                <div>
                    <button className="btn me-5 mb-5" type="submit" onClick={() => navigate(-1)}>
                        <i className="bi bi-box-arrow-left" style={{ fontSize: "30px", color: "#716e6e" }}></i>
                    </button>
                </div>
            </div>
        </div >

    )
}

export default Checkout;