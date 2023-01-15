import React from 'react';
import me from "../Images/img.jpg"
function Navbar(props) {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar_start">
                    <div className="navbar_left">
                        <div className="navbar_left-text">
                            <h3>Hi, I am Xayrullo Rakhmonberganov</h3>
                            <p>Frontend Developer</p>
                        </div>
                        <div className="navbar_left-btns">
                            <button className="button_one">Portfolio</button>
                            <button className="button_two">Contact</button>
                        </div>
                    </div>
                    <div className="navbar_right">
                        <div className="navbar_right-radius">
                            <img src={me} alt="me"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;