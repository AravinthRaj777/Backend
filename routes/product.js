const express = require('express');
const { getProducts, getSingleProduct } = require('../controllers/product_controller');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/products/:id').get(getSingleProduct);

module.exports = router;