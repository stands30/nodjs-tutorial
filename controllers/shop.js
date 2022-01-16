
const Product = require('../models/product');

exports.getProducts = (req, res, next) =>{
    Product.fetchAll((products) =>{
        res.render('shop/product-list', {
            pageTitle: 'Products',
            prods: products,
            path: '/product-list',
        });
    });
};

exports.getIndex = (req, res, next) =>{
    Product.fetchAll((products) =>{
        res.render('shop/index', {
            pageTitle: 'Shop',
            prods: products,
            path: '/',
        });
    });
}

exports.getCart = (req, res, next) =>{
    res.render('shop/cart',  {
        pageTitle: 'Your Cart',
        path: '/cart',
    });
};

exports.shopCheckout = (req, res, next) =>{
    res.render('shop/checkout',  {
        pageTitle: 'Checkout',
        path: '/checkout',
    });
};

exports.getOrders = (req, res, next) =>{
    res.render('shop/orders',  {
        pageTitle: 'Your Orders',
        path: '/orders',
    });
};