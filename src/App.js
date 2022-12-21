import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import CustomButton from "./components/customButton/CustomButton";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(element) {

  const onAdd = (quantity) => {
    console.log(`la canditad de ${"Elem agg, prev import promise"} es`, quantity);
  }


  return (

    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/itemListContainer/:id" element={<ItemListContainer />} />
        <Route path="/category" element={<ItemListContainer />} />
        <Route path="/custonButton" element={<CustomButton texto={"sumar"} initial={1} stock={10} onAdd={onAdd} />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/cardWidget" element={"Lo siento este carrito no tiene nada xd"} />
        <Route path="*" element={"Lo siento la ruta no existe"} />

      </Routes>
      
    </BrowserRouter>

  );
}

export default App;

/*     <div>
      <NavBar />
      <ItemListContainer />
      <CustomButton texto={"sumar"} initial={1} stock={10} onAdd={onAdd}/>
      <ItemDetailContainer />
    </div> */