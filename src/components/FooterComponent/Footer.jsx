import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaYoutube,
  FaTwitter,
  FaTelegram,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="get-in-touch">
        <ul>
          <li>
            <p>Get in Touch</p>
          </li>
          <li>
            <span>YOU CAN FIND US:</span>
          </li>
          <li> Ward no 22, NH 347, Chhindwara-Seoni Rd M.P. 480001</li>
        </ul>
        <ul>
          <li>
            <span>RECEPTION DESK CONTACT:</span>
          </li>
          <li>+919479484887</li>
          <li> </li>
        </ul>
        <ul>
          <li>
            <span>RESERVATIONS:</span>
          </li>
          <li>reservations@shrijiresorts.com</li>
        </ul>
        <ul>
          <li>
            <span>BANQUET & CONFERENCES:</span>
          </li>
          <li>+919479484887</li>
          <li> </li>
        </ul>
      </div>
      <div className="quick-links">
        <ul>
          <li>
            <p>Quick Links</p>
          </li>
          <li>
            <Link to="/stay">Stay</Link>
          </li>
          <li>
            <Link to="/dining">Dining</Link>
          </li>
          <li>
            <Link to="/wedding">Weddings</Link>
          </li>
          <li>
            <Link to="/event">Events</Link>
          </li>
          <li>
            <Link to="/membership">Membership</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="more-info">
        <ul>
          <li>
            <p>More Info</p>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/terms-conditions">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/about-us">Refund and Cancellation Policy</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
        </ul>
      </div>
      <div className="social-media">
        <ul>
          <li>
            <p>Social Media</p>
          </li>
          <li>
            <div className="social-icons">
              <Link>
                <FaTwitter size={30} color="white" />
              </Link>
              <Link>
                <FaTelegram size={30} color="white" />
              </Link>
              <Link>
                <FaInstagram size={30} color="white" />
              </Link>
              <Link>
                <FaFacebook size={30} color="white" />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
