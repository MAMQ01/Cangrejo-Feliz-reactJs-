import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from "../productsMocks"

const ItemDetailContainer = () => {


    const [ product, setProduct] = useState({})

    const {id} = useParams()

      console.log(id)
  
    useEffect( ()=>{

        const productSelected = products.find( producto => producto.id === parseInt(id) ) //no consigo que me funcione por el id despues de horas y era un + :)
        setProduct(productSelected)

    }, [id])

      console.log(product);

  return (
    <div>
        <h2>{product.name}</h2>
        <h2>{product.price}</h2>
        <h2>{product.description}</h2>
        <img className="img-fluid" src={product.img} alt="" />
    </div>
  )
}

export default ItemDetailContainer