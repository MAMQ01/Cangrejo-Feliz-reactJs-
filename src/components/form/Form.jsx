import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "../form/Form.scss"

const Form = () => {

    const {getTotalPrice} = useContext(CartContext)
    
    const [userData, setUserData] = useState({ name: "", lastName: "" })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userData);
    };

    const handleKey = (event) => {

        if (event.key !== "a" && event.key !== "e" && event.key !== "i" && event.key !== "o" && event.key !== "u") {
            console.log(event.key)

        } else {

            event.preventDefault()

        }

    }


    return (
        <div className="formContainer">
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    name="name"
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    value={userData.name}
                    onKeyDown={handleKey}
                />
                <input
                    type="text"
                    placeholder="Ingrese su Apellido"
                    name="lastName"
                    onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                    value={userData.lastName}
                />
                <button type="submit">Enviar</button>
                <div className="containerCheckOut">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque voluptate voluptas, quidem accusamus dicta dolores dolorum, aliquid ad dolor accusantium nihil fugit amet, numquam cupiditate quis nobis ut iure.</p>
                    <h3>Precio Final ${getTotalPrice()}</h3>
                    <button>{`pagar`}</button>
                </div>
            </form>
        </div>
    );
};

export default Form;


    /* creare un estado Objeto para tener todas las propiedades que necesito, por eso comento las siguientes lineas */

    /* const [name, setName] = useState("");
    const [lastName, setlastName] = useState(""); */

            /*console.log(event.target.elements.name.value);
              console.log(event.target.elements.lastName.value); */
        /* console.log(`Hola ${userData.name} ${userData.lastName}, cómo estás?`); */

        
    //Aca hay dos formas de usar un estado en un objeto, mediante una función por fuera del js o refactorizando en el return 

    /* const handleChangeName = (event) => {
        setName(event.target.value)
    } */

    /* const handleChangelastName = (event) => {
        setUserData({ ...userData, lastName: event.target.value })
    } */

    /*console.log(name, lastName); */