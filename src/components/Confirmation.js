// src/components/Confirmation.js
import React from 'react';

const Confirmation = ({ totalFare, startLocation, endLocation }) => {
  return (
    <div className="confirmation">
      <h3>Booking Confirmed</h3>
      <p>Start Location: {startLocation}</p>
      <p>End Location: {endLocation}</p>
      <p>Total Fare: ₹{totalFare}</p>
    </div>
  );
};

export default Confirmation;
