// OverlayForm.js

import { useState } from "react";
import "./transfer.css";

export default function Transfer({ onClose, api, secret, details }) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.adminBalance < amount) {
      alert("Transfer amount is more than your balance, please recheck.");
    } else {
      // Handle the form submission logic here
      console.log("Amount:", amount);
      // You may want to perform further actions like API calls or state updates
      // after the form submission.a
      const updatedData = {
        beneficiaryAcc: details.accountNo,
        beneficiaryBal: details.balance + parseFloat(amount),
        adminAcc: details.adminAcc,
        adminBal: details.adminBalance - amount,
      };
      console.log(updatedData)
      fetch(api+details.accountNo , {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": secret,
        },
        body: JSON.stringify(updatedData),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((e) => console.log("Error in transfer\n" + e));
      onClose();
    }
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="overlay-header">
          <span className="overlay-title">Payment Form</span>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="beneficiary-info">
          <p>Beneficiary Name: {details.name}</p>
          <p>Beneficiary Account No.: {details.accountNo}</p>
          <p>Beneficiary E-mail: {details.email}</p>
          <p>
            Your Balance: {details.adminBalance}{" "}
            {/* Replace with actual balance */}
          </p>
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
          <button type="submit" className="pay-btn">
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}
