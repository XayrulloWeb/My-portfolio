import React,{useState, useEffect} from 'react';
import {HashLink, Link} from "react-router-hash-link";
import gsap from 'gsap';
import logo from "../Images/logo.png"

function Header(props) {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }


    return (
        <div className="header" id="home">
            <div className="container">
                <div className="header_start">
                    <div className="header_left">
                        <img src={logo}/>
                    </div>

                    <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                        <ul>
                            <HashLink to="#about" >About me</HashLink>
                            <HashLink to="#portfolio">Portfolio</HashLink>
                            <HashLink to="#contact">Contact </HashLink>
                        </ul>

                    </div>
                    <div className="burger" onClick={handleToggle}>
                        <input className="checkbox" type="checkbox"/>
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Header;