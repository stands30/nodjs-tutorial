const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const rootDir = require('./util/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//  parse the body request
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(rootDir, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views','404.html'));
});


// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);


