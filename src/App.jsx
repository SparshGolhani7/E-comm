import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import DealsandDiscount from './Components/DealsandDiscount'
import DisplayNavbar from "./Components/DisplayNavbar"
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import jsonData from './products.json'
import {useState} from 'react'
import ShopNow from "./Components/ShopNow"
import BestSellers from "./Components/BestSellers"
import { CartProvider } from "./context/CartContext"
import MyCart from "./Components/MyCart"
import Wishlist from "./Components/Wishlist"

function App() {
  const [filteredItems,setFilteredItems] = useState(jsonData);
  const [filteredItems1,setFilteredItems1] = useState(jsonData);

  return (

    <CartProvider>
    <BrowserRouter>
   
    {/* <Navbar/> */}
    <DisplayNavbar filteredItems={filteredItems} setFilteredItems={setFilteredItems}/>
    <Routes>
      <Route path="/" element={<Home filteredItems={filteredItems}/>}></Route>
      <Route path="/shopnow" element={<ShopNow filteredItems1={filteredItems1} setFilteredItems1={setFilteredItems1}/>}></Route>
      <Route path="/bestSeller" element={<BestSellers filteredItems={filteredItems} />}></Route>
      <Route path="/viewcart" element={<MyCart/>}></Route>
      <Route path="/wishlist" element={<Wishlist/>}></Route>


    </Routes>
    </BrowserRouter>
</CartProvider>
    
  )
}

export default App

