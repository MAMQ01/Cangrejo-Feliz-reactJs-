import { Link } from "react-router-dom";
import React from 'react'

const NoInfo = () => {
  return (
    <div>
      <h2>No tienes agregado ningun item</h2>
      <Link to={"/"}>
        <button className='btn btn-success'>Seguir Comprando</button>
      </Link>
    </div>
  )
}

export default NoInfo