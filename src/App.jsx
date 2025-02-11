import './App.css'
import DealsandDiscount from './Components/DealsandDiscount'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {
 

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/" element={<DealsandDiscount/>}></Route>

    </Routes>
  
    </BrowserRouter>
  )
}

export default App
