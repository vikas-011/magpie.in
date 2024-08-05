import React from "react";
import "./Activities.css";
import Footer from "../../components/FooterComponent/Footer";

const Activities = () => {
  return (
    <>
      <section className="hero-section">
        <div className="stay-hero">
          <img src="activitieshero.jpg" alt="" />
        </div>
      </section>
      <section className="desc">
        <div className="activities-heading">
          <h1>Welcome to Adventure Central!</h1>
          <p>
            Just 3km from our resort, adventure beckons at every corner. Embark
            on a journey of excitement with our diverse array of thrilling
            activities, meticulously crafted to ignite your senses and forge
            indelible memories. Whether you crave heart-racing water sports or
            immersive encounters with the natural world, we offer an adventure
            to suit every seeker. Step beyond our doors and into a world of
            endless possibilities, just moments away from your doorstep.
          </p>
        </div>
        <div className="ativities-type">
          <div className="type">
            <div className="img">
              <img src="jungle.jpg" alt="" />
            </div>
            <div className="ativities-text">
              <h1>JUNGLE SAFARI</h1>
              <p>
                Venture into the heart of the wilderness on an immersive jungle
                safari. Trek through dense forests, encounter exotic wildlife,
                and discover the hidden wonders of nature guided by our expert
                team of naturalists.
              </p>
            </div>
          </div>
          <div className="type">
            <div className="ativities-text">
              <h1>WATER RIDING</h1>
              <p>
                Feel the wind in your hair and the spray of water on your face
                as you glide across the sparkling waves. From jet skiing to
                banana boat rides, our water riding activities offer endless
                excitement on the open water.
              </p>
            </div>
            <div className="img">
              <img src="water.jpg" alt="" />
            </div>
          </div>
          <div className="type">
            <div className="img">
              <img src="waterfall.jpg" alt="" />
            </div>
            <div className="ativities-text">
              <h1>WATER FALL</h1>
              <p>
                Experience the thunderous roar and the refreshing mist kissing
                your skin as you stand in awe before the majestic cascade of a
                waterfall. From daring dives into natural plunge pools to serene
                boat rides beneath the cascading veil, our waterfall adventures
                promise boundless thrills amidst nature's breathtaking beauty.
                Whether you seek an adrenaline rush or a tranquil escape,
                immerse yourself in the wonder of cascading waters and create
                unforgettable memories in the heart of pristine landscapes.
              </p>
            </div>
          </div>
        </div>
        <div className="more">
          <p>
            Get ready to embark on the adventure of a lifetime at our resort.
            Browse our activities, book your next adventure, and get ready to
            experience the thrill of exploration like never before. Adventure
            awaits!
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Activities;
