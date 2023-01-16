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




  //alternativa cuando viene de una base en el backend

/* let task = fetch("https://jsonplaceholder.typicode.com/users") */


/* let task = fetch("https://jsonplaceholder.typicode.com/users")
 
    task
      .then((res) => { console.log(res.json()); })
      .catch((err) => { console.log("Se rechazo la operacion") })
 
  console.log("se hizo la peticion"); */


/* <div className="containerBienvenida container-fluid">
    <button data-text="Awesome" className="button">
      <span className="actual-text">&nbsp;Bienvenido&nbsp;</span>
      <span className="hover-text" aria-hidden="true">&nbsp;Bienvenido&nbsp;</span>
    </button>
  </div>
  <div className="containerProducto">
    <div className="cta-container">
      <button className="cta">
        <span className="hover-underline-animation"> Menú del día </span>
        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
          <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
        </svg>
      </button>
    </div>
  </div>
  <div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis fuga quae culpa provident modi aut debitis earum sed ullam inventore?</p>
  </div> */