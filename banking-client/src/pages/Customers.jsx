import "./customers.css"

export default function Customers() {
  return (
    <main className="customers">
      <h1>All customers</h1>
      <p>
        Click on any record to transfer money to that account.
      </p>
      <p>Balance: 500000</p>

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
    </main>
  );
}
