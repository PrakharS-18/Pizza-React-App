import React, { useState } from 'react'

import Logo from '../assets/pizzaLogo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import { Reorder } from '@mui/icons-material';

function Navbar() {

  const [openLinks, setopenLinks] = useState(false)

  const toggleNavbar = () => {
    if(openLinks){
      setopenLinks(false);
    }
    else{
      setopenLinks(true);
    }
  }

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks?"open":"close"}>
            <img src={Logo}  alt=''/>
            <div className="hiddenLinks">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toggleNavbar}>
              <Reorder/>
            </button>
        </div>
    </div>
  )
}

export default Navbar