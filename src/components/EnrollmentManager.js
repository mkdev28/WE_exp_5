// src/components/EnrollmentManager.js
import React, { useState } from 'react';

const EnrollmentManager = () => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [availableSeats, setAvailableSeats] = useState(60);

  const handleEnrollment = () => {
    if (isEnrolled) {
      setIsEnrolled(false);
      setAvailableSeats(availableSeats + 1);
    } else {
      setIsEnrolled(true);
      setAvailableSeats(availableSeats - 1);
    }
  };

  return (
    <div className="enrollment-box">
      <h3>Advanced Machine Learning</h3>
      <p className={availableSeats < 10 ? 'seats-low' : 'seats-good'}>
        Seats Available: {availableSeats}
      </p>
      <button 
        className={`enroll-btn ${isEnrolled ? 'btn-cancel' : 'btn-active'}`}
        onClick={handleEnrollment}
      >
        {isEnrolled ? 'Cancel Enrollment' : 'Enroll Now'}
      </button>
      {isEnrolled && <p style={{ color: 'green', marginTop: '10px' }}>✅ Registered!</p>}
    </div>
  );
};

export default EnrollmentManager;