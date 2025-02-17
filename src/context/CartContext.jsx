import { useState,createContext } from "react";

export const CartContext = createContext() 
export const CartProvider =({children})=>{
    const [count,setCount] = useState(0)
  

    const increment = ()=>{
        setCount(count+1);
    }

    const decrement = ()=>{
        if(count>0){
            setCount(count-1)
        }
       
    }



    return (<CartContext.Provider value={{increment,decrement,count}}>

     {children}
    </CartContext.Provider>
    )
  }
  