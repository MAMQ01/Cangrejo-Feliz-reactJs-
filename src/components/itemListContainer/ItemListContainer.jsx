import { useEffect, useState } from "react";
import "./ItemListContainer.scss";
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebaseConfig";



const ItemListContainer = () => {

  const { categoryName } = useParams()

  const [items, setItems] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    setIsLoading(true)

    const itemCollection = collection(db, "products")

    if (categoryName) {
      const q = query(itemCollection, where( "category" , "==" , categoryName ))
      getDocs(q)
        .then((res) => {
          const products = res.docs.map(product => {
            return {
              ...product.data(),
              id: product.id
            }
          })
          setItems(products)
        })
        .catch((err) => console.log(err))

    } else {
      getDocs(itemCollection)
        .then((res) => {
          const products = res.docs.map(product => {
            return {
              ...product.data(),
              id: product.id
            }
          })
          setItems(products)
        })
        .catch((err) => console.log(err))
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [categoryName])



  return (
    <div>
      {
        isLoading ? <h2>Cargando</h2> :

          items.map((element) => {

            return (
              <div key={element.name}>
                <ItemList element={element} />
              </div>)
          })
      }
    </div>
  )
}

export default ItemListContainer

