import React from "react";
import "./Wedding.css";
import Footer from "../../components/FooterComponent/Footer";

import Restaurants from "../../components/RestaurantComponent/Restaurant";

const Wedding = () => {
  return (
    <>
      <section className="hero-section">
        <div className="stay-hero">
          <img src="Pool side rock front view_enhanced (1).jpg" alt="" />
        </div>
      </section>
      <section className="wedding-desc-sect">
        <div className="wedding-desc-heading">
          <h1>WEDDINGS</h1>
          <p>
            A STUNNING LOCATION, IMPECCABLE SERVICE AND THOUGHTFUL UNIQUE
            TOUCHES ALL CONSTITUTE THE ELEMENTS OF A MEMORABLE AND DREAMY
            WEDDING.
          </p>
        </div>
        <div className="wedding-desc-div">
          <div className="wedding-desc">
            <h3>Why choose Shriji Resort ?</h3>
            <p>
              Shriji Resort,is one of the ideal venues for any destination
              wedding in Central India. We act as partners working closely with
              the couple and their families to ensure your special day is
              nothing but the most spectacular and magnificent celebration.
              Taking your vows on a mandap decorated in the middle of a swimming
              pool with a gorgeous sunset as the backdrop, a haldi ceremony with
              a pool party theme, a dazzling and starry cocktail or a pastel
              welcome brunch, we have got you covered. At Shriji Resort and
              Convention Center, weddings are bespoke and curated, we partner
              with the best vendors in the industry to bring the bride and
              groom’s dreams for their special days to life. From curating
              resort wedding packages to picking the décor to curating a
              delectable menu, our team will stand by you.
            </p>
          </div>
          <div className="img-div">
            <img src="Home1.png" alt="" />
          </div>
        </div>
      </section>

      <Restaurants />
      <Footer />
    </>
  );
};

export default Wedding;
