// OverlayForm.js

import  { useState } from 'react';
import './transfer.css';

export default function Transfer({ onClose, details }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Amount:', amount);
    // You may want to perform further actions like API calls or state updates
    // after the form submission.
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="overlay-header">
          <span className="overlay-title">Payment Form</span>
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
        <div className="beneficiary-info">
          <p>Beneficiary Name: {details.name}</p>
          <p>Beneficiary Account No.: {details.accountNo}</p>
          <p>Beneficiary E-mail: {details.email}</p>
          <p>Your Balance: {details.balance} {/* Replace with actual balance */}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Amount:
            <input
              type="number"
              step="any"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="pay-btn">Pay</button>
        </form>
      </div>
    </div>
  );
}
