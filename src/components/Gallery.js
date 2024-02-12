import React from 'react';
import pic from "./images/Taj.jpeg";
import pic1 from "./images/levyug.jpeg";
import "./gallery.css";
import logo from "./images/nitc_logo_icon.svg";
function Gallery() {
  return (
    <div>
      <div>
        <h1>Gallery</h1>
        <div className="section">
          <h3>NIT CALICUT</h3>
          <div className="slider">
            <div className="slidetrack">
              <div className="slide">
                <img src={pic1} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div>
        <div className="section">
          <h3>College Name</h3>
          <div className="slider">
            <div className="slidetrack">
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='colab'>
        <h1>Collaborations with colleges</h1>
        <div className="clgs">
          <img src={logo} alt="image" />
          <img src={logo} alt="image" />
          <img src={logo} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;