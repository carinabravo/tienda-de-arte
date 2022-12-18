import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, cartTotal, clear, removeItem, sumaTotal } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row mx-5 my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron productos en el carrito!</div>
                    </div>
                </div>
            </div>
        )

    }


    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"><Link onClick={clear} className="btn btn-warning" title={"Limpiar carrito"}>Limpiar carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                            </tr>
                            <th>&nbsp;</th>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.image} alt={item.title} width={80} /></td>
                                    <td className="align-middle">{item.title}</td>
                                    <td className="align-middle">{item.quantity}</td>
                                    <td className="align-middle">${item.quantity * item.price}</td>
                                    <td className="align-middle" >
                                        <Link onClick={() => { removeItem(item.id) }}
                                            title={"Eliminar producto"}>
                                            <img src={"/images/logo e iconos/trash.svg"}
                                                alt={"Eliminar producto"}
                                                style={{ width: "22px" }} />
                                        </Link>
                                    </td>
                                </tr>
                            ))
                            }
                            <tr>
                                <td>&nbsp;</td>
                                <td>Total a Pagar:<td>
                                </td><b>${sumaTotal()}</b></td>
                                <td ><button className="btn btn-warning">Finalizar compra</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;