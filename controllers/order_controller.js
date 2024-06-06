const orderModel = require('../models/orderModels');
const productModel = require('../models/productModels');
//Create Order API -/api/v1/order
exports.createOrder= async (req, res, next) => { 
   const cartItems = req.body;
   const amount = Number(cartItems.reduce((acc, item) =>(acc + item.product.price * item.quantity), 0)).toFixed(2);
   const status = 'pending';
    // console.log(cartItems);
    // console.log(amount);
    // console.log(status);

    //Updating Product Stock
    cartItems.forEach(async (item) => {
        const product = await productModel.findById(item.product._id);
        product.stock = product.stock - item.quantity;
        await product.save();
    });

    const order = await orderModel.create(cartItems,amount,status)
    res.json({
        success: true,
        order
    })
}