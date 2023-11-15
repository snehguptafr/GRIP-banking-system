const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const connectionUrl = process.env.CONNECTION_URL;

const app = express()

mongoose.connect(connectionUrl)
    .then(() => {console.log("connected to database")})
    .catch((e) => {console.log(`error connectiong to database ${e}`) });

app.get("/", (req, res) => {
    res.send("heheheh")
})

app.listen(3000, ()=>{
    console.log("Server up on port 3000")
})