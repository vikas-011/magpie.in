import React from "react";
import Footer from "../../components/FooterComponent/Footer";
import "./Membership.css";

const Membership = () => {
  return (
    <>
      <section>
        <div className="dining-hero">
          <img src="pool with puclic yeh 1.jpg" alt="" />
        </div>
      </section>
      <section className="membership-desc">
        <p>
          Reward yourself with one of the most elite membership programs and
          gain access to a wide range of exclusive member benefits and
          privileges on stay, room upgrades, dining experiences, events, Pool Party and more.
        </p>
        <p>For Enquiry Call us on: +919479484887</p>
        <p>
          FOR MEMBERSHIP{" "}
          <a
            href="https://wa.me/7977141074?text=Hi,%20I%20am%20interested%20in%20your%20membership.%20Can%20we%20talk%20about%20it."
            target="_blank">
            <strong>CLICK HERE</strong>
          </a>
        </p>
      </section>
      <Footer />
    </>
  );
};

export default Membership;
