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
                <div className="row py-5 md-px-5" >
                    <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-3 text-center px-5 mb-5">
                        <div className="alert alert-product alert-danger" role="alert">
                            <h1 className="m-1 texto-carrito "><b>Tu carrito de compras se encuentra vacío!</b></h1>
                        </div>
                        <div>
                            <Link to={"/"} className="btn btn-volver btn-primary mt-2">Volver a la página principal</Link>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    return (
        <div className="container-fluid">
            <div className="row py-5">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col" className='producto'>Producto</th>
                                <th scope="col" className='cantidad'>Cantidad</th>
                                <th scope="col" className='precio'>Precio</th>
                                <th scope="col" className="text-end">
                                    <Link onClick={clear} className="btn btn-primary btn-limpiar" title={"Limpiar carrito"}>Eliminar</Link>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img className='img-foto' src={item.image} alt={item.title} /></td>
                                    <td className="align-middle titulo-1">{item.title}</td>
                                    <td className="align-middle px-sm-5 cantidad-1">{item.quantity}</td>
                                    <td className="align-middle precio-1">${item.quantity * item.price}</td>
                                    <td className="align-middle text-end px-sm-2">
                                        <Link onClick={() => { removeItem(item.id) }} title={"Eliminar producto"}>
                                            <img className="papelera-1" src={"/images/logo e iconos/trash.svg"} alt={"Eliminar producto"} />
                                        </Link></td>
                                </tr>
                            ))
                            }
                            <tr>
                                <td colSpan={2}></td>
                                <td className="align-middle total-pago"><b>Total a pagar:</b></td>
                                <td className="align-middle suma-total"><b>${sumaTotal()}</b></td>
                                <td className="align-middle text-end"><Link to={"/checkout"} className="btn btn-success btn-finalizar-compra">Comprar</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <button className="btn me-5 mb-5 btn-navigate" type="submit" onClick={() => navigate(-1)}>
                    <i className="bi bi-box-arrow-left"></i>
                </button>
            </div>
        </div>
    )
}

export default Cart;