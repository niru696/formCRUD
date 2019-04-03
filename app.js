

//var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
var passport = require('passport');


const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
//require('./restapi/models/db');
require('./restapi/config/passport');



const dbConfig = require('./config/db.js');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});




const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


var routesApi = require('./restapi/routes/index');
app.use(passport.initialize());
app.use('/api', routesApi);

const employee = require('./restapi/routes/formRoute.js'); // Imports routes for the employee
//const employee1 = require('./restapi/routes/userRoute.js'); // Imports routes for the employee
app.use(cors());
app.use('/emp', employee);
//app.use('/emp', employee1);
let port = 1235;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

