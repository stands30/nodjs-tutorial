const products = [];
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
        products.push({title:req.body.title});
    }
    res.redirect('/');
};

exports.getProducts = (req, res, next) =>{
    res.render('shop', {
        docTitle: 'Shop',
        prods: products,
        path: '/',
        hansProducts:products.length > 0,
        activeShop: true,
        productCss: true
    });
};