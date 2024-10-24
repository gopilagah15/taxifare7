// src/components/FareDetails.js
import React from 'react';

const FareDetails = ({ distance, fareRates, calculateFare }) => {
  const totalFare = calculateFare(distance, fareRates);

  return (
    <div className="fare-details">
      <h3>Fare Breakdown</h3>
      <p>Distance: {distance} km</p>
      <p>Base Fare: ₹{fareRates.baseFare}</p>
      <p>Rate per km: ₹{fareRates.perKm} x {distance} km</p>
      <p>Waiting Charge: ₹{fareRates.waitingCharge} (if applicable)</p>
      <p>Total Fare: ₹{totalFare}</p>
    </div>
  );
};

export default FareDetails;
