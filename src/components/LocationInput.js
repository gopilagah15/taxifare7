// src/components/LocationInput.js
import React, { useState } from 'react';

const LocationInput = ({ calculateDistance }) => {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateDistance(startLocation, endLocation);
  };

  return (
    <form className="location-input" onSubmit={handleSubmit}>
      <h3>Enter Locations</h3>
      <input
        type="text"
        placeholder="Start Location"
        value={startLocation}
        onChange={(e) => setStartLocation(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="End Location"
        value={endLocation}
        onChange={(e) => setEndLocation(e.target.value)}
        required
      />
      <button type="submit">Calculate Fare</button>
    </form>
  );
};

export default LocationInput;
