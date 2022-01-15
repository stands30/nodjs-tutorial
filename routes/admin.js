const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

const products = [];

router.get('/add-product',(req, res, next) =>{
    // res.sendFile(path.join(rootDir, 'views','add-product.html'));
      // Render view
      res.render('add-product', {
        docTitle: 'Add product',
        path: '/admin/add-product'
    });
});

router.post('/add-product', (req, res, next) =>{
    console.log('req body : ', req.body);
    if(req.body.title){
        products.push({title:req.body.title});
    }
    res.redirect('/');
});

exports.routes = router;
exports.products = products;