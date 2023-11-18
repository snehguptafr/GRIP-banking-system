import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./transfer.css";

export default function Transfer({ onClose, api, secret, details }) {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.adminBalance < amount) {
      alert("Transfer amount is more than your balance, please recheck.");
    } else {
      console.log("Amount:", amount);
      const updatedData = {
        beneficiaryAcc: details.accountNo,
        beneficiaryBal: details.balance + parseFloat(amount),
        adminAcc: details.adminAcc,
        adminBal: details.adminBalance - amount,
      };
      console.log(updatedData)
      fetch(api , {
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
      navigate(0);
    }
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="overlay-header">
          <span className="overlay-title">Transfer</span>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="beneficiary-info">
          <p><span>Beneficiary Name:</span> {details.name}</p>
          <p><span>Beneficiary Account No.:</span> {details.accountNo}</p>
          <p><span>Beneficiary E-mail:</span> {details.email}</p>
          <p>
            <span>Your Balance:</span> {details.adminBalance}{" "}
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Amount:
            <input
              autoFocus
              min={1}
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
