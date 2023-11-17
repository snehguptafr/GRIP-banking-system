const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    customerID: {
        type: Number,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerBalance:{
        type: Number,
        required: true
    },
    accountNumber:{
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const Customer = new mongoose.model("Customer", customerSchema);

module.exports = Customer;