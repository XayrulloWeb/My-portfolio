import React,{useState} from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header_start">
                    <div className="header_left">
                        <h2>Xayrowa</h2>
                    </div>

                    <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                        <ul>
                            <Link>About me</Link>
                            <Link>Services</Link>
                            <Link>Contact me</Link>
                        </ul>

                    </div>
                    <button className="burger" onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>

                </div>

            </div>

        </div>
    );
}

export default Header;