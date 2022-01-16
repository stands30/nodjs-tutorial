// const products = [];
const fs = require('fs');
const path = require('path');
const Cart = require('./cart');
const p = path.join( path.dirname(process.mainModule.filename), 'data', 'products.json' );
const getProductsFromFile = (cb) =>{
        fs.readFile(p, (err, fileContent) =>{
            if(err){
            return cb([]);
            }
            cb(JSON.parse(fileContent));
        });
};

module.exports = class Product{
    constructor(id, title, imageUrl, description, price){
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save(){
        
        getProductsFromFile( (products)=>{
           const updatedProducts = [...products];
            if(this.id){
                const existingProductIndex = products.findIndex(prod => prod.id == this.id);
                updatedProducts[existingProductIndex] = this;
            }else{
                this.id = Math.random().toString();
                updatedProducts.push(this);
            }
            fs.writeFile(p, JSON.stringify(updatedProducts), (err, fileContent) =>{
                console.log('error while saving product');
                console.log(err);
            });
         });
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }

    static findById(id, cb){
        getProductsFromFile(products =>{
            const product = products.find(p => p.id == id );
            cb(product);
        });
    }

    static deleteById(id){
        console.log('products in id ', id);
        getProductsFromFile(products =>{
            console.log('products in delete ', products);
            const product = products.find(prod => prod.id === id);
            console.log('product in delete ', product);
            const updatedProducts = products.filter(p => p.id !== id );
            fs.writeFile(p, JSON.stringify(updatedProducts), (err, fileContent) =>{
                console.log('error while deleting product');
                console.log(err);
                if(!err){
                    Cart.deleteProduct(id, product.price)
                }
            });
        });
    }
}