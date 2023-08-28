import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../assets/img/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <header className='header'>
            <div className="container">
                <div className="header-inner">
                    <div className="header-brand">
                        <Link to="/" className="logo"><img src={Logo} alt="" /></Link>
                    </div>
                    <nav className="nav">
                        <div className="nav-inner">
                            <Link to="/" className='nav-item active'>Home</Link>
                            <Link to="/about" className='nav-item'>About</Link>
                            <Link to="/service" className='nav-item'>Service</Link>
                            <Link to="/elements" className='nav-item'>Elements</Link>
                            <Link to="/contact" className='nav-item'>Contact</Link>
                            <Link to="/contact" className='nav-item btn'>Sign Up</Link>
                        </div>
                    </nav>
                    <div className="nav-toggle">
                        <FontAwesomeIcon className='nav-bar' icon={faBars}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar