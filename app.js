const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

app.use('/',(req, res, next) =>{
    // console.log(' this always runs');
    next();
});

app.get('/add-product',(req, res, next) =>{
    // console.log(' in add-product middleware');
    // res.send('<h1>Add product</h1>');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit" >Add Product </button></form>');
});

app.post('/product', (req, res, next) =>{
    // console.log(' in product middleware');
    console.log('req body : ', req.body);
    res.redirect('/');
});

app.use('/',(req, res, next) =>{
    // console.log(' in another middleware');
    res.send('<h1>Hello from Express</h1>');
});

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);


