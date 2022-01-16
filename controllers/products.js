
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views','add-product.html'));
    // Render view
    res.render('add-product', {
        docTitle: 'Add product',
        path: '/admin/add-product',
        activeAddProduct: true,
        productCss: true,
        formsCss: true,

    });
};

exports.postAddProduct = (req, res, next) =>{
    console.log('req body : ', req.body);
    if(req.body.title){
        const product = new Product(req.body.title);
        product.save();
    }
    res.redirect('/');
};

exports.getProducts = (req, res, next) =>{
    Product.fetchAll((products) =>{
        res.render('shop', {
            docTitle: 'Shop',
            prods: products,
            path: '/',
            hansProducts:products.length > 0,
            activeShop: true,
            productCss: true
        });
    });
};