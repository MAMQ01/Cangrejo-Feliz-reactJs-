import { useEffect, useState } from "react";
import "./ItemCount.scss"
import { CgShoppingCart } from "react-icons/cg"

const ItemCount = ({ /* texto, */ stock, initial=1, onAdd }) => {

    /* const miEstado = useState(0)
    let counter = miEstado[0]
    let setCounter = miEstado[1] */

    const [counter, setCounter] = useState(initial)

    useEffect( ()=>{
        setCounter(initial)
    },[initial]) 

    const sumar = () => {

        if (counter < stock) {
            setCounter(counter + 1)
        }
    };

    const restar = () => {

        if (counter > 1) {
            setCounter(counter - 1)
        }
    };


    return (
        <>
            <div className="containerCounter">
                <button onClick={restar}>restar</button>
                <h3>{counter}</h3>
                <button onClick={sumar}>sumar</button>{/* {texto} */}
            </div>
            <div className="containerCart">
                <button className="widgetCartButton" onClick={() => onAdd(counter)}>
                    <p>Agregar a mi carrito</p>
                    <CgShoppingCart className="cart" />
                </button>
            </div>
        </>
    )
}

export default ItemCount