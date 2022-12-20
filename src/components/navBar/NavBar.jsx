import CardWidget from "../cardWidget/CardWidget"
import "./NavBar.scss"
import { CgShoppingCart } from "react-icons/cg"
import { useState } from "react";

const NavBar = () => {


    const [isDark, setIsDark] = useState(true)

    const tooggleMode = () => {

        setIsDark(!isDark)

    }

    return (
        <div>
            <div className="containerHeader container-fluid">
                <nav className={isDark ? "navbar navbar-dark bg-dark" : "navbar  navbar-ligth bg-light"}>
                    <div className="container-fluid">
                        <div>
                            <img className="logo d-flex"
                                src="https://res.cloudinary.com/dicnsypv0/image/upload/v1671489883/Logo-cangrejoFeliz_k8i3sy.png"
                                alt=""
                            />
                        </div>
                        <button onClick={tooggleMode} className={isDark ? "cambiar-button-dark" : "cambiar-button-light"}>{isDark ? "cambiar a modo claro" : "cambiar a modo oscuro"}</button>
                        <div className="navbar-brand" href="#">Restaurante el Cangrejo Feliz</div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <div className={isDark ? "card-widget-dark" : "card-widget-light"}>
                                <CardWidget />
                            </div>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <div className="nav-link active" aria-current="page" href="#">Menu de dia</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" href="#">Comida Italiana</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" href="#">Comida Asiatica</div>
                                </li>
                                <div className="nav-item">
                                    <li className={isDark ? "container-cart-dark" : "container-cart-light"}>
                                        <div className="nav-link active" aria-current="page" href="#">Mi carrito</div>
                                        <CgShoppingCart className="cart" />
                                    </li>
                                </div>
                                <li className="nav-item dropdown">
                                    <div className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        De la Casa
                                    </div>
                                    <ul className="dropdown-menu">
                                        <li><div className="dropdown-item" href="#">Cangrejo Feliz</div></li>
                                        <li><div className="dropdown-item" href="#">Langosta Feliz</div></li>
                                        <li><div className="dropdown-item" href="#">Salmón Feliz</div></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
