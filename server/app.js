const express = require("express");
const mongoose = require("mongoose");
const Customer = require("./customer");

require("dotenv").config();

const connectionUrl = process.env.CONNECTION_URL;

const app = express();

mongoose
  .connect(connectionUrl)
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => {
    console.log(`error connectiong to database ${e}`);
  });

app.get("/", (req, res) => {
  res.send({
    message:
      "GRIP-banking API. Use '/customers' endpoint to fetch all customers' data",
  });
});
app.get("/customers", async (req, res) => {
    const allCustomers = await Customer.find({});
    res.send(allCustomers);
    // Customer.find({}).then(data => res.send(data))
});

app.listen(3000, () => {
  console.log("Server up on port 3000");
});


// Customer.insertMany([
//   {
//     customerID: 1,
//     customerName: "Amit Patel",
//     customerBalance: 5000.5,
//     accountNumber: 123456789,
//     email: "amit@example.com",
//   },
//   {
//     customerID: 2,
//     customerName: "Priya Sharma",
//     customerBalance: 7500.25,
//     accountNumber: 987654321,
//     email: "priya@example.com",
//   },
//   {
//     customerID: 3,
//     customerName: "Rahul Singh",
//     customerBalance: 3000.75,
//     accountNumber: 456789012,
//     email: "rahul@example.com",
//   },
//   {
//     customerID: 4,
//     customerName: "Anjali Desai",
//     customerBalance: 10000.0,
//     accountNumber: 789012345,
//     email: "anjali@example.com",
//   },
//   {
//     customerID: 5,
//     customerName: "Ravi Verma",
//     customerBalance: 12000.5,
//     accountNumber: 543210987,
//     email: "ravi@example.com",
//   },
//   {
//     customerID: 6,
//     customerName: "Meera Reddy",
//     customerBalance: 9000.75,
//     accountNumber: 678901234,
//     email: "meera@example.com",
//   },
//   {
//     customerID: 7,
//     customerName: "Sanjay Kapoor",
//     customerBalance: 6000.25,
//     accountNumber: 345678901,
//     email: "sanjay@example.com",
//   },
//   {
//     customerID: 8,
//     customerName: "Pooja Malik",
//     customerBalance: 8500.0,
//     accountNumber: 109876543,
//     email: "pooja@example.com",
//   },
//   {
//     customerID: 9,
//     customerName: "Arun Khanna",
//     customerBalance: 9500.5,
//     accountNumber: 234567890,
//     email: "arun@example.com",
//   },
//   {
//     customerID: 10,
//     customerName: "Neha Joshi",
//     customerBalance: 7000.0,
//     accountNumber: 890123456,
//     email: "neha@example.com",
//   },
//   {
//     customerID: 11,
//     customerName: "Sara Khan",
//     customerBalance: 8000.0,
//     accountNumber: 111222333,
//     email: "sara@example.com",
//   },
// ]).then(()=>console.log("data inserted")).catch((e) => console.log("error inserting data"))
