import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div><h4>
            <NavLink to={"/"}>Home
                </NavLink></h4>
                
                <h4>
            <NavLink to={"/deals"}>DealsandDiscount
                </NavLink></h4></div>
    </nav>
  )
}

export default Navbar