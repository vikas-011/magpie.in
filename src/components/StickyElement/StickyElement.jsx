import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTripadvisor,
} from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import "./StickyElement.css";
import { Link } from "react-router-dom";

const StickyElement = () => {
  return (
    <div className="sticky-element fixed">
      <nav>
        <ul>
          <li>
            <Link to="#">
              {" "}
              <FaPhone /> +919479484887
            </Link>
          </li>
          {/* <li>
            <Link to="#">
              {" "}
              <FaPhone />  
            </Link>
          </li> */}
          <li>
            <Link to="#">
              {" "}
              <FaEnvelope /> reservations@shrijiresorts.com
            </Link>
          </li>
          <li>
            <Link to="#">
              {""}
              <FaMapMarkerAlt /> Virtual Tour
            </Link>
          </li>
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
          </li>
          {/* <li>
            <a
              href="https://www.tripadvisor.com/Hotel_Review-g17650028-d27454039-Reviews-Shriji_Camp_Resort-Kothi_Khandwa_District_Madhya_Pradesh.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTripadvisor />
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default StickyElement;
