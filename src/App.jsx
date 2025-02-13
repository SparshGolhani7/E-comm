import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import DealsandDiscount from './Components/DealsandDiscount'
import DisplayNavbar from "./Components/DisplayNavbar"
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import jsonData from './products.json'
import {useState} from 'react'
import ShopNow from "./Components/ShopNow"

function App() {
  const [filteredItems,setFilteredItems] = useState(jsonData);

  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <DisplayNavbar filteredItems={filteredItems} setFilteredItems={setFilteredItems}/>
    <Routes>
      <Route path="/" element={<Home filteredItems={filteredItems}/>}></Route>
      <Route path="/shopnow" element={<ShopNow filteredItems={filteredItems}/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

