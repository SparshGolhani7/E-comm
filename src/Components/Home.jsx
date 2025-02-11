import React from 'react'
import jsonData from "../products.json"

const Home = () => {
  return (
    <>
    {jsonData.map((product)=>(
        <li key={product.id}>
            <img src={product.image}></img>
            <h3>{product.name}--{product.price}</h3>
        </li>
    ))}
    </>
  )
}

export default Home