import React, { useContext } from 'react'
import { CartContext } from './CONTEXTS/Cartcontext'
import "./Cart.css"
function Cart({onClose}) {
    const {cart,TotalAmount} =useContext(CartContext)
  return (
    <div className='cart-container'>
      <table border={1} cellPadding={5} cellSpacing={5} align='center' width="70%">
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
        </tr>
        
            {
                cart.map((item,index)=>
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                    </tr>
                )
            }      
      </table>
      <div className='btns'>
        <button onClick={onClose} className='close-btn'>close</button>
      </div>
      <h2>Amount :{Number(TotalAmount)}</h2>
      </div>
  )
}

export default Cart
