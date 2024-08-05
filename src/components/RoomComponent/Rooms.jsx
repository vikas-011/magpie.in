import React from "react";
import "./Rooms.css";

import { Link } from "react-router-dom";

const Rooms = ({ roomsData, title, description, description2, button }) => {
  return (
    <section className="room-section">
      <h1>{title}</h1>
      <div className="room">
        <div className="desc">
          <p>{description}</p>
          <p>{description2}</p>
        </div>
        <div className="image">
          <img src="mainRoom1.jpg" alt="Room Main" />
          <p className="image-name">Room Main</p>
          <Link to="/room-details" className="view-details">
            View Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
