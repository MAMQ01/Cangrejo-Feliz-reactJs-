import CustomButton from "../customButton/CustomButton";


const ProductCard = ({ element }) => {

    const onAdd = () => {
        console.log("Hola onAdd");
    }

    return (
        <div className="items-container card">
            <h2>{element.name}</h2>
            <h3>${element.price}</h3>
            <p>{element.description}</p>
            <img className="img-fluid" src={element.img} alt="" />
            <CustomButton texto={"sumar"} initial={0} stock={element.stock} onAdd={onAdd} />
        </div>
    )
}

export default ProductCard