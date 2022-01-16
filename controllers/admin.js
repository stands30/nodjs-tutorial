const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views','add-product.html'));
    // Render view
    res.render('admin/edit-product', {
        pageTitle: 'Add product',
        path: '/admin/add-product',
        editing: false
    });
};

exports.getEditProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views','add-product.html'));
    // Render view
    const editMode = req.query.edit;
    if(!editMode){
        res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findById(prodId, product =>{
        if(!product){
            return res.redirect('/');
        }
        res.render('admin/edit-product', {
            pageTitle: 'Edit product',
            product: product,
            path: '',
            editing: editMode
        });
    });
};

exports.postAddProduct = (req, res, next) =>{
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(null, title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) =>{
        res.render('admin/products', {
            pageTitle: 'Shop',
            prods: products,
            path: '/',
        });
    });
};

exports.postEditProduct = (req, res, next) => {
    console.log('prodId 353', req.body);
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedImageUrl = req.body.imageUrl;
    const updatedPrice = req.body.price;
    const updatedDesc = req.body.description;
    const updatedProduct = new Product(prodId, updatedTitle, updatedImageUrl, updatedDesc, updatedPrice);
    updatedProduct.save();
    res.redirect('/');
};

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.deleteById(prodId);
    res.redirect('/');
};