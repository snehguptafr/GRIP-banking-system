import "./customers.css"
import { useEffect, useState } from "react";
import Transfer from "../components/Transfer";


export default function Customers() {
  const [data, setData] = useState([]);
  const [transferDetails, setTransferDetails] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(e => console.log("Error fetching data\n"+e))
  },[apiUrl])

  const handleTransfer = (rec) => {
    const details = {
      name: rec.customerName,
      accountNo: rec.accountNumber,
      email: rec.email,
      balance: rec.customerBalance
    }
    setTransferDetails(details);
  }

  const Records = data.map(record => {
    return(
      <tr key={record._id} className="record" onClick={() => handleTransfer(record)}>
        <td>{record.accountNumber}</td>
        <td>{record.customerName}</td>
        <td>{record.email}</td>
        <td>₹ {record.customerBalance}</td>
      </tr>
    )
  })

  console.log(transferDetails)

  return (
    <main className="customers">
      <h1>All customers</h1>
      <p>
        Click on any record to transfer money to that account.
      </p>
      <p>Administrator&apos;s balance: ₹ 500000</p>

      <table>
        <thead>
          <tr>
            <th>Account No.</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {Records}
          <tr>
            <td>001</td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>$1,000.00</td>
          </tr>
          <tr>
            <td>002</td>
            <td>Jane Doe</td>
            <td>jane@example.com</td>
            <td>$2,500.00</td>
          </tr>
        </tbody>
      </table>
      {transferDetails && <Transfer beneficiary={transferDetails} />}
    </main>
  );
}
