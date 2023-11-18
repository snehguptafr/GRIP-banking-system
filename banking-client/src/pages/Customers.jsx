import "./customers.css";
import { useEffect, useState } from "react";
import Transfer from "../components/Transfer";

export default function Customers() {
  const [data, setData] = useState([]);
  const [transferDetails, setTransferDetails] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    fetch(apiUrl, {
      method: "get",
      headers: {
        "x-api-key": apiKey,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log("Error fetching data\n" + e));
  }, [apiUrl, apiKey]);

  const handleTransfer = (rec) => {
    if (rec.customerID === 1) {
      return;
    }
    const details = {
      name: rec.customerName,
      accountNo: rec.accountNumber,
      email: rec.email,
      balance: rec.customerBalance,
      adminBalance: data[0].customerBalance,
      adminAcc: data[0].accountNumber,
    };
    setTransferDetails(details);
  };

  const Records = data.map((record) => {
    return (
      <tr
        key={record._id}
        className={record.customerID === 1 ? "admin-record" : "record"}
        onClick={() => handleTransfer(record)}
      >
        <td>{record.accountNumber}</td>
        <td>{record.customerName}</td>
        <td>{record.email}</td>
        <td>₹ {record.customerBalance}</td>
      </tr>
    );
  });

  return (
    <main className="customers">
      <h1>All customers</h1>
      <p>Click on any record to transfer money to that account.</p>

      <table>
        <thead>
          <tr>
            <th>Account No.</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>{Records}</tbody>
      </table>
      {transferDetails && (
        <Transfer
          details={transferDetails}
          api={apiUrl}
          secret={apiKey}
          onClose={() => setTransferDetails(false)}
        />
      )}
    </main>
  );
}
