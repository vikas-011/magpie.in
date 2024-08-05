import React from "react";
import "./Dining.css";
import Footer from "../../components/FooterComponent/Footer";
import Restaurants from "../../components/RestaurantComponent/Restaurant";

const Dining = () => {
  return (
    <>
      <section className="hero-section">
        <div className="dining-hero">
          <img src="dininghero.jpg" alt="" />
        </div>
      </section>
      <Restaurants />
      <Footer />
    </>
  );
};

export default Dining;
