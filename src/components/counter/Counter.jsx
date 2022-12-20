import { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(10)

    const sumar = () => {

        if (counter < 50) {
            setCounter(counter + 1)
        }
    };

    const restar = () => {

        if (counter > 10){
            setCounter(counter - 1)
        }
    };

    return (
        <div>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>restar</button>
        </div>
    )
}

export default Counter