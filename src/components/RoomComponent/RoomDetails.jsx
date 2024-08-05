import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./RoomDetails.css";
import { FaBath, FaChair, FaWifi } from "react-icons/fa";
import { PiParkFill } from "react-icons/pi";
import { AiFillLayout } from "react-icons/ai";
import { GiCoffeePot, GiSofa } from "react-icons/gi";

const RoomDetails = () => {
  const images = [
    "mainRoom1.jpg",
    "mainRoom2.jpg",
    "mainRoom3.jpg",
    "mainRoom4.jpg",
  ];

  const slideProperties = {
    duration: 3000,
    transitionDuration: 1000,
    infinite: true,
  };
  return (
    <div className="room-details">
      <div className="room-details-main">
        <div className="room-imgs">
          <Slide {...slideProperties}>
            {images.map((image, index) => (
              <div className="each-slide" key={index}>
                <img
                  src={process.env.PUBLIC_URL + "/" + image}
                  alt={`room ${index + 1}`}
                />
              </div>
            ))}
          </Slide>
        </div>
        <div className="desc">
          <p>
            Welcome to our luxurious retreat, the Luxury Cottage, at Shriji
            Resort, where rustic elegance meets modern comfort in the heart
            of Chhindwara
          </p>
          <p>
            Step into a world of refined luxury as you enter our beautifully
            crafted Luxury Cottage. Each element of the room has been
            meticulously designed to provide you with an unparalleled stay
            experience.
          </p>
        </div>
      </div>

      <div className="room-features">
        <div className="each">
          <FaChair size={60} color="#b48c58" />

          <h3>Pure Wooden Furniture: </h3>
          <p>
            Embrace the natural beauty and warmth of pure wooden furniture that
            adorns our Luxury Cottage. From the intricately carved bedframe to
            the elegant furnishings, every piece reflects the timeless charm of
            rustic craftsmanship.
          </p>
        </div>
        <div className="each">
          <AiFillLayout size={60} color="#b48c58" />
          <h3>Spacious Layout: </h3>
          <p>
            Spread out and relax in the generous space of our Luxury Cottage,
            designed to offer you ample room to unwind and rejuvenate.
          </p>
        </div>
        <div className="each">
          <GiCoffeePot size={60} color="#b48c58" />
          <h3>Modern Amenities: </h3>
          <p>
            Enjoy a host of modern amenities including a tea and coffee maker,
            ensuring you can indulge in your favorite beverages at any time of
            the day. Stay refreshed with complimentary mineral water provided in
            your room.
          </p>
        </div>
        <div className="each">
          <FaBath size={60} color="#b48c58" />
          <h3>En-suite Bathroom: </h3>
          <p>
            Pamper yourself in the comfort of your private en-suite bathroom,
            equipped with premium toiletries and luxurious bath amenities. Step
            into the rejuvenating shower and let the stresses of the day wash
            away.
          </p>
        </div>
        <div className="each">
          <PiParkFill size={60} color="#b48c58" />
          <h3>Scenic Views: </h3>
          <p>
            Open the curtains to reveal breathtaking views of the lush
            surroundings, offering you a tranquil backdrop to your stay.
          </p>
        </div>
        <div className="each">
          <GiSofa size={60} color="#b48c58" />
          <h3>Cozy Seating Area: </h3>
          <p>
            Relax and unwind in your cozy seating area, perfect for enjoying a
            cup of tea or coffee as you soak in the serenity of your
            surroundings.
          </p>
        </div>
        <div className="each">
          <FaWifi size={60} color="#b48c58" />
          <h3>Complimentary Wi-Fi: </h3>
          <p>
            Stay connected with complimentary Wi-Fi access throughout your stay,
            allowing you to effortlessly share your memorable moments with loved
            ones or catch up on work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
