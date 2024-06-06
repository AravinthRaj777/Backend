const productModel = require('../models/productModels');

//Get Products API -/api/v1/products
exports.getProducts = async (req, res, next) => {

    const products = await productModel.find({});
    res.json({
        success: true,
        products
    });
};

//Get Single Product API -/api/v1/products/:id
exports.getSingleProduct = async (req, res, next) =>{
    try{
        console.log(req.params.id, 'ID')
        const product = await productModel.findById(req.params.id);
        res.json({
            success: true,
            product
    });
    }catch(err){
        res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }
}