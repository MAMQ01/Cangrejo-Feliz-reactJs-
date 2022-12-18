import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import CardWidget from "./components/cardWidget/CardWidget";
import CustomButton from "./components/customButton/CustomButton";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <CardWidget />
      <CustomButton texto={"sumar"} />
    </div>
  );
}

export default App;
