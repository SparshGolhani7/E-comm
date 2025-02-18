// import { useState,createContext } from "react";

// export const CartContext = createContext() 
// export const CartProvider =({children})=>{

//     const [cart,setCart] = useState([])
//     const [count,setCount] = useState(0)
//     const updatedCart=[]

//     const cartSet = new Set();

//     const increment = (prodId,prodName)=>{
//        cart.map((item)=>{

//            if(!cartSet.has(item.id)){    
//         categorySet.add(item.category);
//         updatedCart.push({ key: prodId, name:prodName,qty:count+1});
//         setCart(updatedCart)
        
//      }
//        })
//        console.log(cart,"cartC");
//     }


        


//     const decrement = ()=>{
//         if(count>0){
//             setCount(count-1)
//         }       
//     }

//     return (<CartContext.Provider value={{increment,decrement,cart}}>
//      {children}
//     </CartContext.Provider>
//     )
//   }
  


import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Increment function
  const increment = (prodId, prodName,prodPrice,prodImg) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === prodId);
      if (existingItem) {

        return prevCart.map((item) =>
          item.id === prodId ? { ...item, qty: item.qty + 1 ,price:prodPrice,image:prodImg } : item
        );
      } else {
        return [...prevCart, { id: prodId, name: prodName, qty: 1 ,price:prodPrice,image:prodImg}];
      }
    });
  };

  // Decrement function
  const decrement = (prodId) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === prodId ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0);
    });
  };

  return (
    <CartContext.Provider value={{ increment, decrement, cart }}>
      {children}
    </CartContext.Provider>
  );
};
