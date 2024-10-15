import React from 'react'

export default function ShowDetails({details}) {
  return (
    <div>
      <table>
         <tr>
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
                </tr>
            )
         }
         <tr>
            
         </tr>
      </table>
    </div>
  )
}
