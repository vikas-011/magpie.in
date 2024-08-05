import React from "react";
import Footer from "../../components/FooterComponent/Footer";
import "./Events.css";

const Events = () => {
  return (
    <>
      <section className="hero-section">
        <div className="stay-hero">
          <img src="eventshero.jpg" alt="" />
        </div>
      </section>
      <section>
        <div className="dining-desc">
          <h1>CELEBRATE IN STYLE</h1>
          <p>
            Birthday parties, wedding Anniversaries, promotions, kitty parties
            or any other social celebrations -we have got you covered!
          </p>
          <p>
            Shriji Resort and Convention Center is an ideal destination for
            your celebrations and to create lasting lifetime memories.
          </p>
        </div>
        <div className="dining-type">
          <div className="type">
            <div className="img-div">
              <img src="type1.jpg" alt="" />
            </div>
            <div className="type-desc">
              <h1>10 + Venues</h1>
              <p>
                Choose from our assortment of indoor banquets and Outdoor lawns
                ranging from elegant ballrooms, lush gardens, serene poolside
                and stunning rooftops, which can accommodate anywhere from 50+
                to 5000 guests comfortably.
              </p>
            </div>
          </div>
          <div className="type">
            <div className="type-desc">
              <h1>Global F&B curations</h1>
              <p>
                Our world-class culinary team will curate a luscious menu that
                will satisfy every palate. A lavish buffet spread or a
                multi-course plated meal, our team will customize as per your
                tastes and preferences.
              </p>
            </div>
            <div className="img-div">
              <img src="type2.jpg" alt="" />
            </div>
          </div>
          <div className="type">
            <div className="img-div">
              <img src="type3.jpg" alt="" />
            </div>
            <div className="type-desc">
              <h1>Decoration</h1>
              <p>
                Looking for Fresh floral arrangements, starry nights, pastel
                hues and any other themed décor, our dedicated team will bring
                all your ideas to life and create an ambience to appease your
                guests and create lasting memories.
              </p>
            </div>
          </div>
        </div>
        <div className="inquiries">
          <h2>For enquiries contact  /+919479484887</h2>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Events;

// adhklfgds;fdsf
