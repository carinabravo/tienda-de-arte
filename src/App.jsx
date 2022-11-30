import React from "react";
import Encabezado from "./components/Encabezado";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import Promocion from "./components/Promocion";
import Footer from "./components/Footer";
import "./App.css";


function App() {

  return (
    <>
      <Encabezado />
      <NavBar />
      <Carousel />
      <ItemListContainer greeting={"¡PROXIMAMENTE - CYBER WEEK 2022!"} />
      <ItemCount initial={1} stock={20} onAdd={() => { }} />
      <Promocion />
      <Footer />
    </>
  );

}

export default App;
