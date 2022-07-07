import { useRef } from "react";
import{ FaBars, FaTimes} from"react-icons/fa";
import React from 'react'
import "../style/main.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <div>
        <header>
            <h3>OuiCare</h3>
            <nav ref={navRef}>
                <a href="/#">accueil</a>
                <a href="/#">contact</a>
                <a href="/#">a propos</a>
                <a href="/#">s'inscrire</a>
                <button className="nav-btn nav-close-btn " onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='menu' onClick={showNavbar}>
                    <FaBars/>
                </button>
        </header>
    </div>
  )
}

export default Navbar