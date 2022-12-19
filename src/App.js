import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import CustomButton from "./components/customButton/CustomButton";

function App() {

  const onAdd =()=>{
    console.log("Hola onAdd");
  }

  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <CustomButton texto={"sumar"} initial={1} stock={10} onAdd={onAdd}/>
    </div>
  );
}

export default App;
