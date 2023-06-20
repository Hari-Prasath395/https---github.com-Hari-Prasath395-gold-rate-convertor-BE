const express = require('express');
const appServer = express();

const usersController = require('./Routes/Users');
const contactusController = require('./Routes/ContactUs');

appServer.use('/user',usersController);
appServer.use('/contact-us',contactusController);

module.exports = appServer;




