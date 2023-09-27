import React, { useEffect, useRef } from 'react';
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";

function Navbar(props) {

  useEffect(() => {
    const navbarRightAnimation = gsap.from('.navbar_right', {
      duration: 1.5,
      ease: 'expo.out',
      x: -300,
    });

    const navbarLeftTextAnimation = gsap.from('.navbar_left', {
      duration: 1.5,
      ease: 'expo.out',
      x: 300,
      opacity: 0,
    });

    gsap.timeline().add(navbarRightAnimation).add(navbarLeftTextAnimation, 0); // 0 означает, что анимация начнется одновременно с navbarRightAnimation
  }, []);
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
              <HashLink to="#portfolio"><button className="button_one">Portfolio</button></HashLink>
              <HashLink to="contact"><button className="button_two">Contact</button></HashLink>
            </div>
          </div>
          <div className="navbar_right"  >
            <div className="navbar_right-radius">
              <div className="navbar_right-image">
                {/* Ваше содержимое */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
