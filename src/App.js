import React, { useState } from 'react';
import LocationInput from './components/LocationInput';
import FareDetails from './components/FareDetails';
import FareSummary from './components/FareSummary';
import Confirmation from './components/Confirmation';
import calculateFare from './utlils/calculateFare';


const App = () => {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [distance, setDistance] = useState(null); // Distance in km
  const [totalFare, setTotalFare] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  // Fare rate data (can be configured dynamically)
  const fareRates = {
    baseFare: 50, // ₹50 base fare
    perKm: 10, // ₹10 per kilometer
    waitingCharge: 20, // ₹20 flat waiting charge
  };

  const calculateDistance = (start, end) => {
    // Simulate distance calculation (replace this with an API call)
    const mockDistance = Math.random() * 10 + 1; // Random distance between 1 and 10 km
    setStartLocation(start);
    setEndLocation(end);
    setDistance(mockDistance.toFixed(2));
  };

  const handleFareCalculation = () => {
    const fare = calculateFare(distance, fareRates);
    setTotalFare(fare);
  };

  const confirmBooking = () => {
    setConfirmed(true);
  };

  return (
    <div className="App">
      <h1>Taxi Fare System</h1>
      {!confirmed ? (
        <>
          <LocationInput calculateDistance={calculateDistance} />
          {distance && (
            <>
              <FareDetails
                distance={distance}
                fareRates={fareRates}
                calculateFare={calculateFare}
              />
              <button onClick={handleFareCalculation}>Calculate Fare</button>
              {totalFare && (
                <>
                  <FareSummary totalFare={totalFare} distance={distance} />
                  <button onClick={confirmBooking}>Confirm Booking</button>
                </>
              )}
            </>
          )}
        </>
      ) : (
        <Confirmation
          totalFare={totalFare}
          startLocation={startLocation}
          endLocation={endLocation}
        />
      )}
    </div>
  );
};

export default App;
