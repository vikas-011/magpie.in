import React from "react";
import { FaWifi, FaParking, FaStar } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { TbAirConditioning } from "react-icons/tb";
import "./Facilities.css";

const Facilities = () => {
  return (
    <div className="facilities_main">
      <h1>FEATURES & FACILITIES</h1>
      <p>
        Indulge in the perfect blend of luxury and nature at our Luxury Cottage,
        where every detail has been carefully curated to ensure your utmost
        comfort and satisfaction. Experience the true essence of relaxation and
        rejuvenation amidst the natural beauty of Chhindwara at Shriji Resort.
      </p>
      <div className="features">
        <div className="feat-div">
          <div>
            <ul>
              <li>
                <FaStar color="#b48c58" /> IN ROOM DINING
              </li>
              <li>
                <FaStar color="#b48c58" /> CONCIERGE FACILITY
              </li>
              <li>
                <FaStar color="#b48c58" /> FACILITIES FOR DISABLE
              </li>
              <li>
                <FaStar color="#b48c58" /> CHECK IN TIME 1PM
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <FaStar color="#b48c58" /> CHECH OUT TIME 11AM
              </li>
              <li>
                <FaStar color="#b48c58" /> DESTINATION WEDDING PACKAGES
              </li>
              <li>
                <FaStar color="#b48c58" /> RESTAURANT SERVICE
              </li>
              <li>
                <FaStar color="#b48c58" /> GAZEBOS
              </li>
            </ul>
          </div>
        </div>
        <div className="facilities">
          <div>
            <FaWifi size={60} color="#b48c58" />
            <p>Free Wifi Access</p>
          </div>
          <div>
            <IoFastFood size={60} color="#b48c58" />
            <p>Best Restaurants & Cafe</p>
          </div>
          <div>
            <TbAirConditioning size={60} color="#b48c58" />
            <p>Air Conditioning</p>
          </div>
          <div>
            <FaParking size={60} color="#b48c58" />
            <p>Valet Parking Facility</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
