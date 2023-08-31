import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Logo from "../assets/img/logo.png"

function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className="container">
                    <div className="footer-inner">
                        <div className="footer-item">
                            <h2 className='footer-title'>Subscribe Us</h2>
                            <p className='footer-desc'>Fectetur adipisicing elit, sed do eius mod tempor</p>
                            <form className="footer-form">
                                <label htmlFor="emailSend" className='footer-label'>
                                    <input className='footer-email' id='emailSend' type="email" placeholder='Submut E-Mail' />
                                    <FontAwesomeIcon className='footer-email-icon' icon={faEnvelope}></FontAwesomeIcon>
                                </label>
                            </form>
                        </div>
                        <div className="footer-item">
                            <h2 className='footer-title'>Service</h2>
                            <nav className="footer-nav">
                                <Link to="/about" className='footer-nav-item'>About Us</Link>
                                <Link to="/service" className='footer-nav-item'>Service</Link>
                                <Link to="/" className='footer-nav-item'>Our Story</Link>
                                <Link to="/" className='footer-nav-item'>Success</Link>
                            </nav>
                        </div>
                        <div className="footer-item">
                            <h2 className='footer-title'>Help</h2>
                            <nav className="footer-nav">
                                <Link to="/" className='footer-nav-item'>Documentation</Link>
                                <Link to="/" className='footer-nav-item'>Sitemap</Link>
                                <Link to="/" className='footer-nav-item'>Legal Advice</Link>
                                <Link to="/" className='footer-nav-item'>Support</Link>
                            </nav>
                        </div>
                        <div className="footer-item">
                            <h2 className='footer-title'>Get In Touch</h2>
                            <div className="footer-contact">
                                <div className="footer-contact-item">
                                    <FontAwesomeIcon className='footer-contact-icon' icon={faLocationDot}></FontAwesomeIcon>
                                    <p>22/1 Bardeshi, Amin Bazar Dhaka 1348</p>
                                </div>
                                <div className="footer-contact-item">
                                    <FontAwesomeIcon className='footer-contact-icon' icon={faEnvelope}></FontAwesomeIcon>
                                    <a href="mailto:hello@startico.com" rel="noopener noreferrer">hello@startico.com</a>
                                </div>
                            </div>
                            <div className="footer-social">
                                <a href="#" className='footer-social-item' rel="noopener noreferrer">
                                    <FontAwesomeIcon className='footer-social-icon' icon={faGithub}></FontAwesomeIcon>
                                </a>
                                <a href="#" className='footer-social-item' rel="noopener noreferrer">
                                    <FontAwesomeIcon className='footer-social-icon' icon={faLinkedinIn}></FontAwesomeIcon>
                                </a>
                                <a href="#" className='footer-social-item' rel="noopener noreferrer">
                                    <FontAwesomeIcon className='footer-social-icon' icon={faInstagram}></FontAwesomeIcon>
                                </a>
                                <a href="#" className='footer-social-item' rel="noopener noreferrer">
                                    <FontAwesomeIcon className='footer-social-icon' icon={faXTwitter}></FontAwesomeIcon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <div className="container">
                    <div className="copyright-inner">
                        <div className="copyright-signature">
                            <img src={Logo} alt="" />
                            <p>All rights reserved <a href="#" rel="noopener noreferrer">Serhan Bakır</a> © 2023</p>
                        </div>
                        <div className="copyright-info">
                            <h3><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +90 000 00 00</h3>
                            <nav className="copyright-nav">
                                <Link to="/" className='copyright-nav-item'>Terms & Condition</Link>
                                <Link to="/" className='copyright-nav-item'>Privacy</Link>
                                <Link to="/" className='copyright-nav-item'>Cookies</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer