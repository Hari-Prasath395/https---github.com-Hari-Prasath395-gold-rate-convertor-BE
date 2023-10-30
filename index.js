// const express = require('express');
// const nodeServer = express();
// const appServer = require('./app');
// const bodyParser =require('body-parser');
// const cors= require('cors');
// require('./dbconfig');

// nodeServer.use(bodyParser.json());
// nodeServer.use(bodyParser.urlencoded({ extended: true }));
// nodeServer.use(cors());

// nodeServer.use('/',appServer);


// const port = 8000;
// nodeServer.listen(port,()=>{
//     console.log(`Server started on port ${port}`);
// })


const express = require('express');
const nodeServer = express();
const appServer = require('./app');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./dbconfig'); // Import your database configuration

// Use the bodyParser middleware
nodeServer.use(bodyParser.json());
nodeServer.use(bodyParser.urlencoded({ extended: true }));

// CORS configuration to allow requests from your Render frontend
const allowedOrigins = ['https://gold-rate-convertor.onrender.com'];
nodeServer.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

// Use your appServer
nodeServer.use('/', appServer);

const port = process.env.PORT || 8000; // Use the PORT environment variable for production
nodeServer.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
