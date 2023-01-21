import React from 'react';

function About(props) {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="about_start">
                    <div className="about_top">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                    </div>
                    <div className="about_bottom">
                        <div className="about_bottom-links">
                            <div className="about_bottom-link">
                                <div className="about_bottom-links-circle">
                                    <div className="circle">
                                    </div>
                                </div>
                                <div className="about_bottom-links-text">
                                    <p>Full Name</p>
                                    <span>Xayrullo</span>
                                </div>
                            </div>

                            <div className="about_bottom-link">
                                <div className="about_bottom-links-circle">
                                    <div className="circle">
                                    </div>
                                </div>
                                <div className="about_bottom-links-text">
                                    <p>Email Address</p>
                                    <span>xayrulloweb@gmail.com</span>
                                </div>
                            </div>

                            <div className="about_bottom-link">
                                <div className="about_bottom-links-circle">
                                    <div className="circle">
                                    </div>
                                </div>
                                <div className="about_bottom-links-text">
                                    <p>Telegram</p>
                                    <a href="https://web.telegram.org/z/#972474098">Xayrullo</a>
                                </div>
                            </div>

                            <div className="about_bottom-link">
                                <div className="about_bottom-links-circle">
                                    <div className="circle">
                                    </div>
                                </div>
                                <div className="about_bottom-links-text">
                                    <p>Phone</p>
                                    <a href="tel:+998995640201">+99899-564-02-01</a>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;