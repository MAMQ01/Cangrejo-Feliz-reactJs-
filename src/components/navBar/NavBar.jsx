import CardWidget from "../cardWidget/CardWidget"
import { GiSadCrab } from "react-icons/gi";
import "./NavBar.scss"
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {


    const [isDark, setIsDark] = useState(true)

    const tooggleMode = () => {

        setIsDark(!isDark)

    }

    return (
        <div>
            <div className="container-fluid">
                <nav className={isDark ? "navbar navbar-dark bg-dark" : "navbar  navbar-ligth bg-light"}>
                    <div className="container-fluid">
                        <div>
                            <img className="logo d-flex"
                                src="https://res.cloudinary.com/dicnsypv0/image/upload/v1671489883/Logo-cangrejoFeliz_k8i3sy.png"
                                alt=""
                            />
                        </div>
                        <button onClick={tooggleMode} className={isDark ? "cambiar-button-dark" : "cambiar-button-light"}>{isDark ? "cambiar a modo claro" : "cambiar a modo oscuro"}</button>
                        <Link to="/" className="navbar-brand" href="#">Restaurante el Cangrejo Feliz</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <div className={isDark ? "card-widget-dark" : "card-widget-light"}>
                                <GiSadCrab style={{ fontSize: "2rem" }} />
                            </div>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page" href="#">Todas las variedades</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category/italiana" className="nav-link" href="#">Comida Italiana</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category/asiatica" className="nav-link" href="#">Comida Asiatica</Link>
                                </li>
                                <li className="nav-item">
                                    <div className={isDark ? "container-cart-dark" : "container-cart-light"}>
                                        <CardWidget className="cart" />
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        De la Casa
                                    </Link>
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
