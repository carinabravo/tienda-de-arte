import './cart.css';
import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const { cart, cartTotal, clear, removeItem, sumaTotal } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row py-5 px-5">
                    <div className="col-md-12 text-center mb-5 px-5">
                        <div className="alert alert-product alert-danger" role="alert">No se encontraron productos en el carrito!</div>
                        <Link to={"/"} className="btn btn-volver btn-primary mt-2">Go Home</Link>
                    </div>
                </div>
            </div>
        )

    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 py-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col" style={{ fontSize: "18px" }}>Producto</th>
                                <th scope="col" style={{ fontSize: "18px" }}>Cantidad</th>
                                <th scope="col" style={{ fontSize: "18px" }}>Precio</th>
                                <th scope="col" colSpan={5} className="text-end"><Link onClick={clear} className="btn btn-primary" title={"Limpiar carrito"}>Limpiar carrito</Link></th>

                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.image} alt={item.title} width={80} /></td>
                                    <td className="align-middle" style={{ fontSize: "15px" }}>{item.title}</td>
                                    <td className="align-middle px-5" style={{ fontSize: "15px" }}>{item.quantity}</td>
                                    <td className="align-middle" style={{ fontSize: "15px" }}>${item.quantity * item.price}</td>
                                    <td className="align-middle text-end px-5"><Link onClick={() => { removeItem(item.id) }} title={"Eliminar producto"}><img src={"/images/logo e iconos/trash.svg"} alt={"Eliminar producto"} style={{ width: "22px" }} /></Link></td>
                                </tr>
                            ))
                            }
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td className="align-middle" style={{ fontSize: "20px" }}><b>Total a pagar:</b></td>
                                <td className="align-middle" style={{ fontSize: "px" }}><b>${sumaTotal()}</b></td>
                                <td className="align-middle text-end"><button className="btn btn-primary">Finalizar compra</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <button className="btn me-5 mb-5" type="submit" onClick={() => navigate(-1)}><i className="bi bi-box-arrow-left" style={{ fontSize: "30px", color: "#716e6e" }}></i></button>
            </div>
        </div>
    )
}

export default Cart;