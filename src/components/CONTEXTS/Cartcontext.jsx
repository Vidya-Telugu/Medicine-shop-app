import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export const CartContext=createContext();

export default function CartProvider({children}){
    const[cart,setCart]=useState([]);
    const [TotalAmount,setTotalAmount]=useState(0)
    function handleAmount(){
      const amount=cart.reduce((sum,item) =>sum+item.quantity*item.price,0)
      setTotalAmount(amount)
  
    }
    useEffect(()=>{
      handleAmount();
    },cart)
      function addToCart(medicine){
        setCart(prevCart=>{
            const checkItem=prevCart.find(item=>item.name===medicine.name);
            if(checkItem){
                return  prevCart.map((item)=>(item.name===medicine.name)
                        ?{...item,quantity:item.quantity+1}
                        :item
                        )                 
            }else{
                return [...prevCart,{...medicine,quantity:1}]
            }
        })
      }
      return <CartContext.Provider value={{cart,addToCart,TotalAmount}}>
             {children}
      </CartContext.Provider>
}



