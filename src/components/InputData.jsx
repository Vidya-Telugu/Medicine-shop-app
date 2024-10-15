import React, { useState } from 'react'
import ShowDetails from './ShowDetails';
function InputData() {
    const[details,setDetails]=useState([]);
    const[name,setName]=useState("");
    const[description,setDescription]=useState();
    const[price,setPrice]=useState();
    const[quantity,setQuantity]=useState();
    

    function handleSetDetails(e){
        e.preventDefault();
        setDetails( p =>[ ...p,
           {name:name,
           description:description,
           price:price,
           quantity:quantity
        }])
        
        setName("");
        setDescription("");
        setPrice("");
        setQuantity("");
    }
  return (
    <div className='input-container'>
     <label for="name">Medicine name:</label>
     <input type="text" id="name"  value={name}
      onChange={(e)=>setName(e.target.value)}/><br></br><br></br>
     
     <label for="desc">Description</label>
     <input type="text" id="desc" value={description}
     onChange={(e)=>setDescription(e.target.value)}></input><br></br><br></br>
     
     <label for="price">Price</label>
     <input type="number" id="price" value={price}
     onChange={(e)=>setPrice(e.target.value)}></input><br></br><br></br>

     <label for="Quant">Quantity</label>
     <input type="number" id="Quant" value={quantity}
     onChange={(e)=>setQuantity(e.target.value)}></input><br></br><br></br>
     
     <button onClick={handleSetDetails}>ADD PRODUCT</button>

     <ShowDetails details={details}></ShowDetails>
    </div>
  )
}

export default InputData
