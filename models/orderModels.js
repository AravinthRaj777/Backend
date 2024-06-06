const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    cartItems: Array,
    amount: Number,
    status: String,
    createdAt: Date
});

const orderModel = mongoose.model('Order', orderSchema);
module.exports = orderModel;