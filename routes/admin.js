const path = require('path');
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');


router.get('/add-product', adminController.getAddProduct);
router.post('/add-product', adminController.postAddProduct);
router.get('/products', adminController.getProducts);
router.get('/edit-product', adminController.getAddProduct);
router.post('/edit-product', adminController.getAddProduct);

// exports.routes = router;
// exports.products = products;

module.exports = router;