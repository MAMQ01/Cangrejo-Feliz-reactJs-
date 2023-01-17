import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CardWidget = () => {

    const { cart } = useContext(CartContext)

    if (cart.length <= 0) {
        return <div>
            <Link to="/cart" className="nav-link active" aria-current="page" href="#">
                <span>
                    Mi carrito
                </span>
                <CgShoppingCart style={{ fontSize: "1.3rem" }} />
            </Link>
        </div>
    }
    return (
        <Link to="/cart" className="nav-link active" aria-current="page" href="#">
            <span>
                Mi carrito
                {cart.length}
            </span>
            <CgShoppingCart style={{ fontSize: "1.3rem" }} />
        </Link>
    )
}


export default CardWidget
