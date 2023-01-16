import { useContext } from 'react'
import Form from '../form/Form'
import { CartContext } from '../../context/CartContext'
import "../cart/ResumeCart.scss"
import NoInfo from '../noInfo/NoInfo'

const ResumeCart = () => {

    const { cart, clearCart, deleteItemById } = useContext(CartContext)


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
                                <button className='btn btn-outline-dark' onClick={() => deleteItemById(item.id)} type="button">Eliminar</button>
                            </div>
                        </div>
                    ))
                }
                {cart.length < 1 && <NoInfo />}
            </div>
            <div>
                <Form />
                <div className='containerButtonDelete'>
                    <button onClick={() => clearCart()} className="btn btn-outline-danger">
                        <p>Vaciar Carrito</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ResumeCart

