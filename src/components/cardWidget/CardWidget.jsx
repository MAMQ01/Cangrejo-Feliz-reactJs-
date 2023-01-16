import "./CardWidget.scss";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CardWidget = () => {

    const {cart} = useContext (CartContext)

    return (
        <Link to="/cart" className="nav-link active" aria-current="page" href="#">
            <span>Mi carrito {cart.length}</span>
            <CgShoppingCart style={{ fontSize: "1.3rem" }} />
        </Link>
    )
}


export default CardWidget

/* <GiSadCrab style={{
    fontSize: "2rem",
    color: "white",
}} /> */