// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstNameLastName from './pages/FirstnameLastname';
import OtpVerification from './pages/otpverify';
import CustomerList from './pages/customerlist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstNameLastName/>} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/customers" element={<CustomerList/>} />
      </Routes>
    </Router>
  );
}

export default App;