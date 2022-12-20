import { useState } from "react";
import "../customButton/CustomButton.scss"
import {CgShoppingCart} from "react-icons/cg"

const CustomButton = ({ /* texto, */ stock, initial, onAdd }) => {

    /* const miEstado = useState(0)
    let counter = miEstado[0]
    let setCounter = miEstado[1] */

    const [counter, setCounter] = useState(initial)

    const sumar = () => {

        if (counter < stock) {
            setCounter(counter + 1)
        }
    };

    const restar = () => {

        if (counter > initial){
            setCounter(counter - 1)
        }
    };


    return (
        <>
            <div className="container-custom-button">
                <div className="container-counter">
                    <button onClick={restar}>restar</button>
                    <h3>{counter}</h3>
                    <button onClick={sumar}>sumar</button>{/* {texto} */}

                </div>
                <div className="container-cart">
                    <p>Agregar a mi carrito</p>
                    <CgShoppingCart className="cart" />
                </div>
            </div>
        </>
    )
}

export default CustomButton