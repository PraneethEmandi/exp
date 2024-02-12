import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Navbar";
import bgvideo from "./bgVideo.js";
import './App.css';
import ImageOne from "./ImageOne.js";
import ImageTwo from "./ImageTwo.js";
import ImageThree from "./ImageThree.js";
import Banner from "./banner";
import AboutUs from "./AboutUs";
import Gallery from './Gallery';
import ContactUs from "./Contactus";
import TextBox from "./TextBox.js";
function App() {
  return (
    <Router>
      {/* <bgvideo/> */}
      <Navbar/>
      {/* <Banner/> */}
      <ImageOne/>
      <AboutUs/>
      <ImageTwo/>
      <TextBox/>
      <ImageThree/>
      {/* <Gallery /> */}
      <ContactUs/>
    </Router>
    
  );
}

export default App;