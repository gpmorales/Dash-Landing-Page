import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0); // Correctly defining useState here

  const texts = [
    "to precisely and swiftly analyze data",
    "to generate beautiful visualizations",
    "to enhance team collaboration",
  ];

  useEffect(() => {
    const changeText = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    const timeoutId = setTimeout(changeText, 3000);
    const intervalId = setInterval(() => {
      clearTimeout(timeoutId);
      changeText();
    }, 3000 + 1000);
    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
      clearTimeout(timeoutId); // Also clean up the initial timeout
    };
  }, [texts.length]);

  return (
    <div className="hero-container">
      <video src="/public/videos/dash-2.mp4" autoPlay loop muted></video>

      <div className="black-rectangle"></div>

      <div id="slogans-container">
        <div id="slogan-1">
          <span class="basic_text">Dash</span>
        </div>
        <div id="slogan-2">
          <span class="basic_text">Analytics</span>
        </div>
      </div>

      <div id="description">
        <span id="basic_text">
          Harness the power of Artificial Intelligence...
        </span>
        <span className="dynamic-text">{texts[currentIndex]}</span>{" "}
        {/* Applying dynamic text */}
      </div>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Learn More <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
