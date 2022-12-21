import { Link } from "react-router-dom";
import CustomButton from "../customButton/CustomButton";
import "../productCard/ProductCard.scss"


const ProductCard = ({ element }) => {

    const onAdd = ( quantity ) => {
        console.log(`la canditad de ${element.name} es`, quantity );
    }

    return (
        <div className="items-container card">
            <h2>{element.name}</h2>
            <h3>${element.price}</h3>
            <p>{element.description}</p>
            <Link to={`/itemDetail/${element.id}`}>Ver más</Link>
            <img className="img-fluid" src={element.img} alt="" />
            <CustomButton texto={"sumar"} initial={0} stock={element.stock} onAdd={onAdd} />
        </div>
    )
}

export default ProductCard

// {/* <CustomButton texto={"sumar"} initial={1} stock={10} onAdd={onAdd} /> */}