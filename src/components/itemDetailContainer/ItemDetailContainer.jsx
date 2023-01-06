import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CustomButton from '../customButton/CustomButton'
import { products } from "../productsMocks"
import "../itemDetailContainer/ItemDetailContainer.scss"

const ItemDetailContainer = () => {


  const [product, setProduct] = useState({})

  const { id } = useParams()

  /* console.log(id) */

  useEffect(() => {

    const productSelected = products.find(producto => producto.id === parseInt(id)) //no consigo que me funcione por el id despues de horas y era un + :)
    setProduct(productSelected)

  }, [id])

  /* console.log(product); */

  /* const onAdd = (quantity) => {
    console.log(`la canditad de ${"Elem agg, prev import promise"} es`, quantity);
  } */

  const onAdd = (quantity) => {
    console.log(`la canditad de ${product.name} es`, quantity);
  }

  return (
    <div>
      <div>
        <h2>{product.name}</h2>
        <h2>{product.price}</h2>
        <h2>{product.description}</h2>
        <img className="img-fluid" src={product.img} alt="" />
      </div>
      <CustomButton texto={"sumar"} initial={0} stock={product.stock} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetailContainer