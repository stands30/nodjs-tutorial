const path = require('path');

const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

const adminData = require('./admin');

router.get('/',(req, res, next) =>{
    // res.send('<h1>Hello from Express</h1>');
    console.log(' products : ', adminData.products);
    const products = adminData.products;
    // Render HTML
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    // Render view
    res.render('shop', {
        docTitle: 'Shop',
        prods: products,
        path: '/',
        hansProducts:products.length > 0,
        activeShop: true,
        productCss: true
    });
});

module.exports = router;


