import { useState } from "react";
import "../customButton/CustomButton.scss"

const CustomButton = ({ texto }) => {

    /* const miEstado = useState(0)
    let counter = miEstado[0]
    let setCounter = miEstado[1] */

    const [counter, setCounter] = useState(0)

    const sumar = () => {
        setCounter(counter + 1)
    };

    const restar = () => {
        setCounter(counter - 1)
    };

    return (
        <>
            <div className="container-custom-button">
                <div>
                    <p>Agregue su plato</p>
                </div>
                <div className="container-counter">
                    <button onClick={sumar}>{texto}</button>
                    <h3>{counter}</h3>
                    <button onClick={restar}>restar</button>
                </div>
            </div>
        </>
    )
}

export default CustomButton