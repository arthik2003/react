
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FirstNameLastName() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    navigate('/otp');
  };

  return (
    <div>
    
      <h2>Name</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}

export default FirstNameLastName;