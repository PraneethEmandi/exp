import React from "react";
import styles from "./AboutUs.module.css";
import image from "./images/nitc_logo_icon.svg";

function AboutUs() {
  const aboutUs =
    "LevYug - Rally for Startups";

  return (
    <div className={styles["Main"]} id="About-layout">
        <div className={styles["About"]}>
            <h1 className={styles["About-head"]}>About</h1>
        </div>
        <div>
            <p className={styles["About-paragraph"]}>This page is to let you know about us!!!</p>
        </div>
        <div className={styles["AboutUs-wrapper"]} id="aboutUsSection">
            <div className={styles["AboutUs-heading"]}>
                <p className={styles["AboutUs"]}> {aboutUs} </p>
            </div>
            <div className={styles["AboutUs-content"]}>
                <img className={styles["AboutUs-image"]} src={image}/>
            </div>
        </div>
    </div>
  );
}

export default AboutUs;