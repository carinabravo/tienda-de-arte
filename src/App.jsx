import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Encabezado from "./components/Encabezado";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Promocion from "./components/Promocion";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";

function App() {

  return (
    <BrowserRouter>
      <Encabezado />
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Inicio />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Promocion />
      <Footer />
    </BrowserRouter>
  );

}

function Inicio() {
  // solo se carga el carousel en el inicio
  return (
    <>
      <Carousel />
      <ItemListContainer />
    </>
  )
}

export default App;
