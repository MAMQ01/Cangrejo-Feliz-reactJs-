import { useState } from "react";
import "../form/Form.scss"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig"
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore";

const Form = () => {

    const { getTotalPrice, setOrderId, clearCart, orderId,cart } = useContext(CartContext)

    const total = getTotalPrice()

    const [userData, setUserData] = useState({ name: "", email: "", phone: "" })

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: userData,
            items: cart,
            total: total,
            date: serverTimestamp()
        }

        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order)
            .then(res => setOrderId(res.id))


        cart.map(product =>  (
            updateDoc(doc(db, "products", product.id), {stock: product.stock - product.quantity})
         ) )

        clearCart()

    };

    if (orderId) {
        return <div>
            <h1>su orden es: {orderId}</h1>
        </div>
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
                />
                <input
                    type="text"
                    placeholder="Ingrese su telefono"
                    phone="phone"
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    value={userData.phone}
                />
                <input
                    type="email"
                    placeholder="Ingrese su email"
                    email="email"
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    value={userData.email}
                />
                <button type="submit">Pagar</button>
            </form>
        </div>
    );
};

export default Form;
