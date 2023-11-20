const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Customer = require("./customer");
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000
require("dotenv").config();

const connectionUrl = process.env.CONNECTION_URL;

const app = express();

// const corsOptions = {
//   origin: "https://grip-banking-system.vercel.app/",
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   credentials: true
// };

// app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.json());
// app.use(express.urlencoded({extended: false}))

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
  if(req.header('x-api-key') === process.env.API_KEY){
    const allCustomers = await Customer.find({});
    res.json(allCustomers);
  }
  else{
    res.status(400).send({message:"Invalid API key"})
  }
});

app.put("/customers", async (req, res) => {
  if(req.header('x-api-key') === process.env.API_KEY){
  // const { accno } = req.params;
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  const details = req.body;
  const ben = await Customer.findOneAndUpdate({ accountNumber: details.beneficiaryAcc}, {$set: {customerBalance: details.beneficiaryBal}})/* .then(data => console.log("Beneficiary:\n"+data)).catch(e => console.log(e)) */
  const adm = await Customer.findOneAndUpdate({ accountNumber: details.adminAcc}, {$set: {customerBalance: details.adminBal}})/* .then(data => console.log("Admin:\n"+data)).catch(e => console.log(e)) */
  console.log(ben, adm)
  res.send({beneficiary: ben, admin: adm})
  }
  else{
    res.status(400).send({message:"Invalid API key"})
  }
})

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});


// Customer.insertMany([
//   {
//     customerID: 1,
//     customerName: "You(Admin)",
//     customerBalance: 500000,
//     accountNumber: 123456789,
//     email: "adminstrator@example.com",
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
