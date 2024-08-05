import React, { useEffect, useState } from "react";
import "./Description.css";

const Description = ({ image, heading, desc, bgcolor }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const leftDivStyle = {
    width: windowWidth > 768 ? "80%" : "100%",
    height: windowWidth > 768 ? "500px" : "400px",
    background: `url(${image}) no-repeat center / cover`,
    borderRadius: "8px",
  };

  const rightDivStyle = {
    width: windowWidth > 768 ? "70%" : "90%",
    minHeight: "400px",
    backgroundColor: bgcolor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    borderRadius: "8px",
    color: "white",
    marginLeft: "-150px",
    // marginTop: windowWidth > 768 ? "-150px" : "0",
  };

  return (
    <section className="desc-sect">
      <div class="container">
        <div style={leftDivStyle}></div>
        <div className="right" style={rightDivStyle}>
          <div class="content">
            <h1>{heading}</h1>
            <p>{desc}</p>
            <a href="#" class="btn">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
