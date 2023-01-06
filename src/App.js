import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import CustomButton from "./components/customButton/CustomButton";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Form from "./components/form/Form";
import Cart from "./components/cart/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";

function App(element) {




  return (

    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/itemListContainer/:id" element={<ItemListContainer />} />
          <Route path="/custonButton" element={<CustomButton />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={"Lo siento la ruta no existe"} />
          <Route path="/checkout" element={<Form />} />
        </Routes>
      </CartContextProvider>
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