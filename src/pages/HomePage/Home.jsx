import React from "react";
import Hero from "../../components/HeroComponent/Hero";
import { Link } from "react-router-dom";
import "./Home.css";
import Rooms from "../../components/RoomComponent/Rooms";
import Footer from "../../components/FooterComponent/Footer";
import { rooms } from "../../../src/Data";
import Environment from "../../components/EnvironmentComponent/Environment";
import Facilities from "../../components/FacilityComponent/Facilities";
import Restaurant from "../../components/RestaurantComponent/Restaurant";

const Home = () => {
  return (
    <div>
      {/* Hide Hero component on mobile screens */}
      <div className="hero-wrapper">
        <Hero />
      </div>
      <section>
        <div className="abt-sect">
          <div className="home-about">
            <h1>ABOUT SHRIJI RESORT</h1>
            <h2>
              Welcome to Shriji Resort, where nature's embrace meets
              luxury and comfort in the heart of Chhindwara, Madhya Pradesh.
            </h2>
            <p>
              Nestled amidst 2.5 acres of lush greenery, our resort offers a
              serene retreat away from the hustle and bustle of city life.
              Situated just 125 kilometers away from the Nagpur Airport, our
              tranquil haven awaits to envelop you in tranquility and
              rejuvenation.
            </p>
            {/* <Link to="/">READ MORE</Link> */}
          </div>
          <div className="home-img">
            <img src="pool with puclic yeh 1.jpg" alt="" />
          </div>
        </div>
      </section>

      <Rooms
        roomsData={rooms}
        title={"OUR ACCOMMODATIONS"}
        description={
          "Welcome to our luxurious retreat, the Luxury Cottage, at Shriji Camp Resort, where rustic elegance meets modern comfort in the heart of Chhindwara. "
        }
        description2={
          "Step into a world of refined luxury as you enter our beautifully crafted Luxury Cottage. Each element of the room has been meticulously designed to provide you with an unparalleled stay experience."
        }
        button={"BOOK NOW"}
      />
      <Restaurant />
      <Facilities />
      <Environment />

      <div
        class="elfsight-app-24bf486e-09ef-43fe-ad14-0e859a5376e2"
        data-elfsight-app-lazy
      ></div>

      <div
        class="elfsight-app-392d361a-a1c4-41f5-84a5-50955d142227"
        data-elfsight-app-lazy
      ></div>
      <Footer />
    </div>
  );
};

export default Home;
