import { Link } from "react-router-dom";
import "./ItemList.scss"
import { MdOutlineRestaurantMenu } from "react-icons/md"


const ItemList = ({ element }) => {

    return (
        <div className="items-container card">
            <div className="tittle">
                <div className="containerMenu">
                    <MdOutlineRestaurantMenu style={{ color: "#37FF8B" }} />
                </div>
                <h2>{element.name}</h2>
            </div>
            <h3>${element.price}</h3>
            <p>{element.description}</p>
            <Link to={`/itemDetail/${element.id}`}>
                <p>Ver más</p>
            </Link>
            <img className="img-fluid" src={element.img} alt="" />
        </div>
    )
}

export default ItemList

// {/* <CustomButton texto={"sumar"} initial={1} stock={10} onAdd={onAdd} /> */}