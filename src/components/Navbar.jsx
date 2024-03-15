import React from 'react'
import logo from '../assets/logo3.png'
import './navbar.css'


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                <img src={logo} className='logo' alt="do some coding" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contect us</li>
            </ul>
        </nav>
    )
}

export default Navbar