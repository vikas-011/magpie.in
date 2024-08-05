import React, { useState } from "react";
import "./Restaurant.css";
import { Link } from "react-router-dom";

const Restaurants = () => {
  let images = [
    {
      image: "Dyan1.jpeg",
      name: "Open-Air Café",
      description:
        "Relish the blissful ambiance of our open-air café, nestled in the heart of our verdant surroundings. Surrounded by nature's tranquility, our café provides the perfect setting to start your day with a freshly brewed cup of coffee or to unwind with a refreshing beverage as you bask in the natural beauty that surrounds you. Savor a selection of light bites, snacks, and delectable treats while immersing yourself in the serene atmosphere of our green environment",
    },
    {
      image: "Dyan2.jpg",
      name: "Multi-Cuisine AC Restaurant",
      description:
        "Step into a world of culinary delights at our multi-cuisine AC restaurant, where a feast for the senses awaits. Indulge in a gastronomic journey with our diverse menu featuring an array of flavors from around the world. From traditional Indian delicacies to continental favorites, our expert chefs craft each dish with passion and precision, ensuring a culinary experience that delights the palate. Whether you're craving spicy curries, savory grilled dishes, or indulgent desserts, our restaurant offers something to tantalize every taste bud. Enjoy your meal in the comfort of our air-conditioned dining space, where elegant decor and warm hospitality come together to create a memorable dining experience for you and your loved ones.",
    },
    {
      image: "Dyan3.jpeg",
      name: "Food",
      description:
        "__",
    },
    {
      image: "Dyan4.jpeg",
      name: "Food",
      description:
        "__",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="restaurant-main">
      <h1>OUR CAFÉ & RESTAURANT </h1>
      <p className="restaurant-desc">
        Welcome to the culinary delights of Shriji Café & Restaurant , where
        dining becomes an experience to remember amidst the lush greenery of
        Chhindwara.
      </p>
      <div className="restaurants">
        {images.map((image, index) => (
          <div
            key={index}
            className="restaurant-item"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={image.image} alt={image.name} />
            <p className="image-name">{image.name}</p>
            {hoveredIndex === index && (
              <div className="description-overlay">
                <p className="image-description">{image.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
