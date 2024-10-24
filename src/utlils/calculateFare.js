// src/utils/calculateFare.js
const calculateFare = (distance, { baseFare, perKm, waitingCharge }) => {
    const fare = baseFare + distance * perKm;
    const totalFare = fare + waitingCharge; // Add waiting charges if applicable
    return totalFare;
  };
  
  export default calculateFare;
  