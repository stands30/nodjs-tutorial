const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set Template Engine
// Template Engines : EJS, PUG Handlebars (Express Handlebars)
app.set('view engine','pug');
app.set('views','views');

const rootDir = require('./util/path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//  parse the body request
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(rootDir, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) =>{
    // res.sendFile(path.join(rootDir, 'views','404.html'));
    res.render('404', {
        docTitle: 'No Page Found',
        path: ''
    });
});


// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);


