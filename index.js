// const express = require('express');
// const nodeServer = express();
// const appServer = require('./app');
// const bodyParser =require('body-parser');
// const cors= require('cors');
// const connectDB = require('./dbconfig');
// connectDB();

// nodeServer.use(bodyParser.json());
// nodeServer.use(bodyParser.urlencoded({ extended: true }));
// nodeServer.use(cors());

// const allowedOrigins = ['https://frabjous-genie-8ba260.netlify.app'];

// nodeServer.use('/',appServer);


// const port = process.env.PORT || 8000;
// nodeServer.listen(port,()=>{
//     console.log(`Server started on port ${port}`);
// })


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./dbconfig');
const appServer = require('./app');

const nodeServer = express();
const port = process.env.PORT || 8000;

// Connect to the database
connectDB();

// Middleware
nodeServer.use(bodyParser.json());
nodeServer.use(bodyParser.urlencoded({ extended: true }));

// CORS configuration
const allowedOrigins = ['https://frabjous-genie-8ba260.netlify.app'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

nodeServer.use(cors(corsOptions));

// Routes
nodeServer.use('/', appServer);

// Start the server
nodeServer.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
