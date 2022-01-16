
const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) =>{
    Product.fetchAll((products) =>{
        res.render('shop/product-list', {
            pageTitle: 'Products',
            prods: products,
            path: '/product-list',
        });
    });
};

exports.getProduct = (req, res, next) =>{
    const prodId =req.params.productId;
    Product.findById(prodId, product =>{
        res.render('shop/product-detail', {
            pageTitle: product.title,
            product: product,
            path: '/products',
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

exports.postCart = (req, res, next) =>{
   const prodId = req.body.productId;
   console.log(' prodId : ', prodId);
   Product.findById(prodId, product =>{
       console.log('prodId 1 : ', prodId);
       console.log('product : ', product);
       Cart.addProduct(prodId, product.price);
   })
   res.redirect('/cart');
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