const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: [
        {
            image: String,
        }
    ],
    seller: String,
    stock: Number,
    numOfReviws: Number,
    category: String,
    brand: String,
    rating: Number,
    createdAt: Date,
    updatedAt: Date
})

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;