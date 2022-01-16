
const Product = require('../models/product');

exports.getProducts = (req, res, next) =>{
    Product.fetchAll((products) =>{
        res.render('shop/product-list', {
            docTitle: 'Products',
            prods: products,
            path: '/product-list',
        });
    });
};

exports.getIndex = (req, res, next) =>{
    Product.fetchAll((products) =>{
        res.render('shop/index', {
            docTitle: 'Shop',
            prods: products,
            path: '/',
        });
    });
}

exports.getCart = (req, res, next) =>{
    res.render('shop/cart',  {
        docTitle: 'Your Cart',
        path: '/cart',
    });
};

exports.shopCheckout = (req, res, next) =>{
    res.render('shop/checkout',  {
        docTitle: 'Checkout',
        path: '/checkout',
    });
};

exports.getOrders = (req, res, next) =>{
    res.render('shop/orders',  {
        docTitle: 'Your Orders',
        path: '/orders',
    });
};