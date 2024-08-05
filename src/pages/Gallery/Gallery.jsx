import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const photos = [
    "Dyan1.jpeg?raw=true",
    "Dyan2.jpg?raw=true",
    "Dyan3.jpeg?raw=true",
    "Dyan4.jpeg?raw=true",
    "Home1.png?raw=true",
    "Pool rocks.jpeg?raw=true",
    "pool side 12.jpeg?raw=true",
    "pool with puclic yeh 1.jpg?raw=true",
    
  ];

  const openModal = (photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="main_gallery">
      <h1>Gallery</h1>
      <div className="gallery">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            onClick={() => openModal(photo)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <img src={selectedImage} alt="Selected" />
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
