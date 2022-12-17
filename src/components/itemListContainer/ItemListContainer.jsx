import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./ItemListContainer.scss";


const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <div className="containerBienvenida container-fluid">
        <button data-text="Awesome" className="button">
          <span className="actual-text">&nbsp;Bienvenido&nbsp;</span>
          <span className="hover-text" aria-hidden="true">&nbsp;Bienvenido&nbsp;</span>
        </button>
      </div>
      <div className="containerProducto">
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magni impedit nam sed cumque a officiis explicabo sit fugiat cum! Veniam officia adipisci fugit deleniti id numquam quam! Deleniti, voluptates.</li>
        <li>Hola crayola</li>
      </div>
      <div className="cta-container">
        <button className="cta">
          <span className="hover-underline-animation"> Menú del día </span>
          <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
          </svg>
        </button>
        <div className="containerMenu">
          <MdOutlineRestaurantMenu style={{ color: "#37FF8B" }} />
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer