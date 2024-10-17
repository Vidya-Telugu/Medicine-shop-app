import React from 'react'
//import { CartContext } from './CONTEXTS/Cartcontext';
import { useContext } from 'react';
import "./ShowDetails.css"
import  { CartContext } from './CONTEXTS/Cartcontext';
 function ShowDetails({details}) {
    const {addToCart}=useContext(CartContext);
    function handleCart(detail){
       addToCart(detail);
       detail.quantity--;
    }
  return (
    <div className='show-details'>
      <table className="table-container" border={1} cellPadding={5} cellSpacing={5} width="80%" align='center'>
         <tr >
            <th>Medicine Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Availability</th>
         </tr>
         {
            details.map((detail,index)=>
                <tr key={index}>
                   <td>{detail.name}</td>
                    <td>{detail.description}</td>
                    <td>{detail.price}</td>
                    <td>{detail.quantity}</td>
                    <td>{detail.quantity>0?(detail.quantity):"Out of Stock"}</td>
                    <td>
                     <button disabled={detail.quantity<=0}
                     onClick={()=>handleCart(detail)}>Add to cart</button></td>                 
                </tr>
            )
         }
         <tr>
            
         </tr>
      </table>
    </div>
  )
}

export default ShowDetails