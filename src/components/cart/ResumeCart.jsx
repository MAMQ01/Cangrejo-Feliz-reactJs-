import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import "../cart/ResumeCart.scss"
import Form from '../form/Form'
import { Link } from 'react-router-dom'

const ResumeCart = () => {

    const { cart, clearCart, getTotalPrice, deleteItemById } = useContext(CartContext)

    const [buy, setBuy] = useState(false)

    const openForm = () => {
        if (cart.length > 0) {
            setBuy(true)
        } else {
            alert("no puede estar vacio el carrito")
        }

    }

    return (
        <div className="containerResume">
            <div>
                {
                    cart.map(item => (
                        <div className="containerResumeItemCart" key={item.id}>
                            <div className="containerResumeItemCartImg">
                                <img className="img-fluid" src={item.img} alt="" />
                            </div>
                            <div className="containerResumeItemCartDescription">
                                <h2>{item.name}</h2>
                                <h3>{item.price}</h3>
                                <h4>{item.quantity}{item.quantity > 1 ? <p>Unidades</p> : <p>Unidad</p>}</h4>
                                <button className='btn btn-dark' onClick={() => deleteItemById(item.id)} type="button">Eliminar</button>
                            </div>
                        </div>
                    ))
                }
            </div>


            {
                buy ? <Form />
                    :
                    (
                        cart.length > 0 ?
                            <div>
                                <div className="containerCheckOut">
                                    <p>Descuento: No aplica</p>
                                    <p>Subtotal: No aplica</p>
                                    <p>IVA: Ya Incluido</p>
                                    <h3>Precio Final ${getTotalPrice()}</h3>
                                </div>
                                <div className='containerButtonDelete'>
                                    <button onClick={openForm} className='btn btn-success'>Comprar</button>
                                    <button onClick={() => clearCart()} className="btn btn-danger">Vaciar Carrito</button>
                                </div>
                            </div> :
                            <Link to={"/"}>
                                <button className='btn btn-success'>Seguir Comprando</button>
                            </Link>
                    )
            }

        </div>
    )
}

export default ResumeCart

