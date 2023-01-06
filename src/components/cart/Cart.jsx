
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CustomButton from "../customButton/CustomButton"


const Cart = () => {

  const {cart} = useContext( CartContext )

  console.log(cart)

  return (
    <div>
      <CustomButton/>
    </div>
  )
}

export default Cart
