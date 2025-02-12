import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{backgroundcolor:"red"}}>
        <div><h4>
            <NavLink to={"/"}>Home
                </NavLink></h4>
                
                <h4>
            <NavLink to={"/shopnow"}>ShopNow
                </NavLink></h4>

                <h4>
            <NavLink to={"/bestseller"}>BestSellers
                </NavLink></h4>

                <h4>
            <NavLink to={"/contact"}>Contact
                </NavLink></h4>



                
                
                </div>
    </nav>
  )
}

export default Navbar