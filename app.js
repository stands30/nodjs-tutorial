const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine','ejs');
app.set('views','views');

const rootDir = require('./util/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

//  parse the body request
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(rootDir, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Page);


// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);


