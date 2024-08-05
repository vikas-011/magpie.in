import React, { useState } from "react";

const BookingForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Book Now</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Booking Form</h2>
            <form>
              <label>
                Name:
                <input type="text" />
              </label>
              <label>
                Email:
                <input type="email" />
              </label>
              <button type="submit">Submit</button>
            </form>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
