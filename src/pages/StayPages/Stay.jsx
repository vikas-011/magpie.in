import React from "react";
import "./Stay.css";
import Footer from "../../components/FooterComponent/Footer";
import Rooms from "../../components/RoomComponent/Rooms";
import { rooms } from "../../Data";
import Facilities from "../../components/FacilityComponent/Facilities";
import Restaurants from "../../components/RestaurantComponent/Restaurant";

const Stay = () => {
  return (
    <>
      <section className="hero-section">
        <div className="stay-hero">
          <img src="hero2222.jpeg" alt="" />
        </div>
      </section>
      <section>
        <div className="stay-desc">
          <div className="stay-div-img">
            <img src="mainRoom3.jpg" alt="" />
          </div>
          <div className="desc">
            <h1>STAY</h1>
            <p>
              Unwind at our 100+ exquisitely well-equipped rooms and suites
              decorated with comfort and elegance in mind. As our privileged
              guest, you will gain access to 24-hour in-room dining, free
              high-speed wireless internet, television, pool area, games zone,
              kids’ zone, concierge and more for a cozy and comfortable stay.
            </p>
            <p>
            
            </p>
          </div>
        </div>
      </section>
      <section className="blank"></section>
      <section className="blank"></section>
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
      <Restaurants />
      <Facilities />
      <Footer />
    </>
  );
};

export default Stay;
