import React from "react";
import "./ContactUs.css";
import Footer from "../../components/FooterComponent/Footer";

const ContactUs = () => {
  return (
    <>
      <section className="hero-section">
        <div className="stay-hero">
          <img src="Home1.png" alt="" />
        </div>
      </section>

      <section className="contact-info">
        <div className="left">
          <ul>
            <li>
              <p>Contact Us</p>
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
        <div className="right">
          <form
            action="https://formsubmit.co/reservations@shrijiresorts.com"
            method="POST"
          >
            <div>
              <label htmlFor="name">Your Name:</label>
              <br />
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email Address:</label>
              <br />
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="subject">Subject:</label>
              <br />
              <input type="text" id="subject" name="subject" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <br />
              <textarea id="message" name="message" required />
            </div>
            <button type="submit">SEND</button>
          </form>
        </div>
      </section>
      <section className="map">
        <div className="map-div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29579.797999230243!2d78.97604837408038!3d22.0696791717381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd567c298180553%3A0x14c3fc0e464bacbf!2sSHRIJI%20RESORTS!5e0!3m2!1sen!2sin!4v1715754714909!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
