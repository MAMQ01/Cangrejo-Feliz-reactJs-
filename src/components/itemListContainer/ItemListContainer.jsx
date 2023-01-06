import { useEffect, useState } from "react";
import { products } from "../productsMocks";
import "./ItemListContainer.scss";
import ProductCard from "../productCard/ProductCard";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

  const { categoryName } = useParams()

  const [items, setItems] = useState([])

  useEffect(() => {

    const productosFiltered = products.filter(productos => productos.category === categoryName)

    const task = new Promise((resolve, reject) => {

      setTimeout(() => {

        resolve(categoryName ? productosFiltered : products)

      }, 500);

    })

    task
      .then((res) => { setItems(res) })
      .catch((err) => { console.log("Se rechazo la operacion") })

    console.log("se hizo la peticion");
  }, [categoryName])

  console.log(items)


  //alternativa cuando viene de una base en el backend

  /* let task = fetch("https://jsonplaceholder.typicode.com/users") */


  /* let task = fetch("https://jsonplaceholder.typicode.com/users")
  
      task
        .then((res) => { console.log(res.json()); })
        .catch((err) => { console.log("Se rechazo la operacion") })
  
    console.log("se hizo la peticion"); */

  return (
    <div>
      {/* <div className="containerBienvenida container-fluid">
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
      </div> */}
      {
        items.map((element) => {

          return (
            <div key={element.name}>
              <ProductCard key={element.name} element={element} />
            </div>)
        })
      }
    </div>
  )
}

export default ItemListContainer