// src/components/FareSummary.js
import React from 'react';

const FareSummary = ({ totalFare, distance }) => {
  return (
    <div className="fare-summary">
      <h3>Trip Summary</h3>
      <p>Total Distance: {distance} km</p>
      <p>Total Fare: ₹{totalFare}</p>
    </div>
  );
};

export default FareSummary;
