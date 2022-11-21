import React from "react";
import Encabezado from "./components/Encabezado";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import Promocion from "./components/Promocion";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Encabezado />
      <NavBar />
      <ItemListContainer greeting={"¡PROXIMAMENTE - CYBER WEEK 2022!"} />
      <Carousel />
      <Cards />
      <Promocion />
      <Footer />
    </div>
  );
}

export default App;
