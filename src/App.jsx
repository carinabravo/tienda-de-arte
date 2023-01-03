import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import Encabezado from "./components/Encabezado";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Propaganda from "./components/Propaganda";
import Promocion from "./components/Promocion";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Biografia from "./components/Biografia";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Encabezado />
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Inicio />} />
          <Route path={"/biografia"} element={<Biografia />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Promocion />
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );

}

function Inicio() {
  return (
    <>
      <Carousel />
      <Propaganda />
      <ItemListContainer />
    </>
  )
}

export default App;
