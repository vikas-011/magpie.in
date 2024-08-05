import React from "react";
import "./Environment.css";

const Environment = () => {
  return (
    <section className="environment">
      <h1>EXPLORE OUR ENVIRONMENT</h1>
      <div className="env">
      <iframe
      src="https://www.google.com/maps/embed?pb=!4v1715673269670!6m8!1m7!1sCpCT6ZTwWnhXCnRYpv5H-A!2m2!1d22.07042157934599!2d78.99594883275974!3f169.9688!4f0!5f0.7820865974627469"
      width="80%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
      </div>
    </section>
  );
};

export default Environment;
