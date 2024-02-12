// Navbar.js
import React, { useRef } from "react";

import { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./nav.module.css";
import video1 from "./images/Beach.mp4"
import video2 from "./images/Cliff.mp4"
import video3 from "./images/lotus.mp4"

function Navbar() {
  const [isHome, setIsHome] = useState(true);
  const navRef = useRef();

  const showNavBar = () => {
    const navContainer = navRef.current;
    navContainer.classList.toggle(styles["responsive_nav"]);
    const rallyForStartupsLink = navContainer.querySelector('a[href="/#"]');
    if (rallyForStartupsLink) {
      rallyForStartupsLink.classList.toggle("visible");
    }
  };

  const videoRef1 = useRef();
  const videoRef2 = useRef();
  const videoRef3 = useRef();

  const handleMouseOver = (videoRef) => {
    if (videoRef.current){
      videoRef.current.style.display = 'block';
      videoRef.current.style.objectFit = 'cover';
      // videoRef.current.style.opacity = '95%';
      videoRef.current.play();
    }
  };

  const handleMouseOut = (videoRef) => {
    if (videoRef.current){
      videoRef.current.style.display = 'none';
      videoRef.current.pause();
  }
  };

  // const [hoverRef, isHovered] = useHover();

  return (
    <div>
      <div className="navbar-container">
        <header className={styles["navbar"]}>
          {isHome ? (
            <Link
              to="rallyForStartupsSection"
              className={styles["home-link"]}
              duration={500}
              onClick={() => {
                setIsHome(true);
              }}
            >
              Rally for Startups
            </Link>
          ) : (
            <NavLink
              to="/"
              className={styles["home-link"]}
              duration={500}
              onClick={() => {
                setIsHome(true);
              }}
            >
              Rally for Startups
            </NavLink>
          )}

          <nav ref={navRef}>
            {isHome ? (
              <Link to="homeSection" duration={500} onMouseOver={()=>handleMouseOver(videoRef2)}
              onMouseOut={()=>handleMouseOut(videoRef2)}>
                Home
              </Link>
            ) : (
              <NavLink to="/Home" duration={500} onMouseOver={()=>handleMouseOver(videoRef2)}
              onMouseOut={()=>handleMouseOut(videoRef2)}>
                Home
              </NavLink>
            )}

            <NavLink
              to="/About"
              duration={500}
              onMouseOver={()=>handleMouseOver(videoRef3)}
              onMouseOut={()=>handleMouseOut(videoRef3)}
              onClick={() => {
                setIsHome(false);
              }}
            >
              About
            </NavLink>
            {isHome ? (
              <Link to="gallerySection" duration={500} onMouseOver={()=>handleMouseOver(videoRef1)}
              onMouseOut={()=>handleMouseOut(videoRef1)}>
                Gallery
              </Link>
            ) : (
              <NavLink to="/Gallery" duration={500} onMouseOver={()=>handleMouseOver(videoRef1)}
              onMouseOut={()=>handleMouseOut(videoRef1)} onClick={() => {
                setIsHome(false)
              }}>
                Gallery
              </NavLink>
            )}

            <button
              className={`${styles["nav-btn"]} ${styles["nav-close-btn"]}`}
              onClick={showNavBar}
            >
              <FaTimes/>
            </button>
          </nav>
          <button className={styles["nav-btn"]} onClick={showNavBar}>
            <FaBars/>
          </button>
        </header>
      </div>
      <video
      autoPlay muted loop
        ref={videoRef1}
        src={video1} 
        style={{
          display: 'none',
          position: 'fixed',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          // mixBlendMode: 'overlay', 
          zIndex: 1,
        }}
      >
        Your browser does not support the video tag.
      </video>

      <video
      autoPlay muted loop
        ref={videoRef2}
        src={video2} 
        style={{
          display: 'none',
          position: 'fixed',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          // mixBlendMode: 'overlay', 
          zIndex: 1,
        }}
      >
        Your browser does not support the video tag.
      </video>

      <video
      autoPlay muted loop
        ref={videoRef3}
        src={video3} 
        style={{
          display: 'none',
          position: 'fixed',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          // mixBlendMode: 'overlay', 
          zIndex: 1,
        }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Navbar;