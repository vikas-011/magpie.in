import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Hero.css";

const Hero = () => {
  const images = ["hero111.jpeg", "hero2222.jpeg", "hero3333.jpeg", "hero4444.jpeg"];
  const [textColor, setTextColor] = useState("#000");
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const colors = ["#6e87db", "#ff6f61"];
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const colors = ["#6e87db", "#ff6f61"];
    setTextColor(colors[colorIndex]);
  }, [colorIndex]);

  const slideProperties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
  };

  return (
    <section className="hero-section">
      <div className="hero">
        <Slide {...slideProperties}>
          {images.map((image, index) => (
            <div className="each-slide" key={index}>
              <img
                src={process.env.PUBLIC_URL + "/" + image}
                alt={`Hero ${index + 1}`}
              />
            </div>
          ))}
        </Slide>
      </div>
      {/* <div className="overlay-text" style={{ color: textColor }}>
        <h1>
  <span style={{ 
    background: 'linear-gradient(90deg, #ff6f61, #6e87db)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}>
    WHERE
  </span>
  {" "}NATURE MEETS{" "}
  <span style={{ 
    background: 'linear-gradient(90deg, #ff6f61, #6e87db)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}>
    LUXURY
  </span>
</h1>

      </div> */}
    </section>
  );
};

export default Hero;
