import "./CardWidget.scss";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";


const CardWidget = () => {
    return (
        <Link to="/cardWidget" className="nav-link active" aria-current="page" href="#">
            Mi carrito
            <CgShoppingCart style={{ fontSize: "1.3rem" }} />
        </Link>
    )
}

// eslint-disable-next-line no-lone-blocks
{/* <GiSadCrab style={{
    fontSize: "2rem",
    color: "white",
}} /> */}

export default CardWidget