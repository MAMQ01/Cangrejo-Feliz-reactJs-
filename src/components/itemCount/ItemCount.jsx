import { useEffect, useState } from "react";
import "./ItemCount.scss"
import { CgShoppingCart } from "react-icons/cg"
import CardWidget from "../cardWidget/CardWidget";

const ItemCount = ({ /* texto, */ stock, initial = 0, onAdd }) => {

    /* const miEstado = useState(0)
    let counter = miEstado[0]
    let setCounter = miEstado[1] */

    const [counter, setCounter] = useState(initial)

    useEffect(() => {
        setCounter(initial)
    }, [initial])

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

    if (counter <= 0) {
        return <div>
            <div className="containerCounter">
                <h3>agrega un producto</h3>
                <button onClick={sumar}>sumar</button>{/* {texto} */}
            </div>
            <div className="containerCart">
                <CardWidget />
            </div>
        </div>
    }

    return (
        <>
            <div className="containerCounter">
                <button onClick={restar}>reducir</button>
                <h3>{counter}</h3>
                <button onClick={sumar}>sumar</button>{/* {texto} */}
            </div>
            <div className="containerCart">
                <button className="widgetCartButton" onClick={() => onAdd(counter)}>
                    <p>Agregar a mi carrito</p>
                    <CgShoppingCart className="cart" />
                </button>
                <CardWidget />
            </div>
        </>
    )
}

export default ItemCount