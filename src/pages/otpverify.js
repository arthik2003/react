
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OtpVerification() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerify = () => {
    if (otp === '1234') {
      navigate('/customers');
    } else {
      alert('Incorrect OTP');
    }
  };

  return (
    <div>
      <h2>Phone Number and OTP Verification</h2>
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerify}>Verify OTP</button>
    </div>
  );
}

export default OtpVerification;