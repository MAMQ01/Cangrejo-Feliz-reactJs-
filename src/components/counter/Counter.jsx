import { useState } from "react";


const Counter = () => {

    const [counter, setCounter] = useState(0)

    const sumar = () => {

            setCounter(counter + 1)
    };

    const restar = () => {

        if (counter > 0){
            setCounter(counter - 1)
        }
    };

    return (
        <div className="container-counter">
            <button onClick={restar}>restar</button>
            <h3>{counter}</h3>
            <button onClick={sumar}>Sumar</button>
        </div>
    )
}

export default Counter