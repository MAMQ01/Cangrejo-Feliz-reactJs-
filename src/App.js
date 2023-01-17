import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
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
