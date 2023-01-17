import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../itemDetailContainer/ItemDetailContainer.scss"
import ItemCount from '../itemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { getDoc, doc, collection } from "firebase/firestore"
import { db } from '../../firebaseConfig'

const ItemDetailContainer = () => {

  const { addToCart, getQuantityById } = useContext(CartContext)

  const [product, setProduct] = useState({})

  const { id } = useParams()


  useEffect(() => {

    const itemCollection = collection(db, "products")

    const ref = doc(itemCollection, id)

    getDoc(ref)
    .then(res => {
      setProduct(
        {
          id: res.id,
          ...res.data()
        }
      )
    })

  }, [id])

  const onAdd = (quantity) => {
    addToCart(
      {
        ...product,
        quantity: quantity
      }
    )
  }

  const quantity = getQuantityById(product.id)

  return (
    <div className='itemDetailContainer flex col-12'>
      <div className='itemDetailContainerDescription flex col-6'>
        <h2>{product.name}</h2>
        <h3>{product.price}</h3>
        <p>{product.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, a adipisci voluptas quibusdam inventore fugit similique ducimus mollitia, nemo voluptate error repellat soluta eveniet optio excepturi, ullam dicta ea pariatur?</p>
        <div className='itemDetailContainerImg flex col-12'>
          <img className="img-fluid" src={product.img} alt="" />
        </div>
      </div>
      <div className='itemCountContainer container-fluid col-3'>
        
        <ItemCount initial={quantity} stock={product.stock} onAdd={onAdd} />
        <div>
          <Link to={"/"}>
          <button className='btn btn-dark'>SeguirComprando</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer