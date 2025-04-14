import React, { useState } from 'react';
import '../styles/RestaurantCard.css';

const RestaurantCard = ({ data }) => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="restaurant-card">
      <h3>{data.restaurantName}</h3>
      <p>{data.address}, {data.city}, {data.state}</p>
      <p>Rating: {data.rating}</p>

      <button onClick={() => setShowBooking(true)}>
        Book FREE Reservation
      </button>

      {showBooking && (
        <div className="booking-options">
          <p>Today</p>
          <p>Morning</p>
          <p>Afternoon</p>
          <p>Evening</p>
        </div>
      )}
    </div>
  );
};

export default RestaurantCard;
