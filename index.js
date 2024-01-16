const express = require('express');
const nodeServer = express();
const appServer = require('./app');
const bodyParser =require('body-parser');
const cors= require('cors');
const connectDB = require('./dbconfig');
connectDB();

nodeServer.use(bodyParser.json());
nodeServer.use(bodyParser.urlencoded({ extended: true }));
nodeServer.use(cors());

nodeServer.use('/',appServer);


const port = 5000;
nodeServer.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})


// const express = require('express');
// const nodeServer = express();
// const appServer = require('./app');
// const bodyParser = require('body-parser');
// require('./dbconfig');
// const cors = require('cors'); // Import the cors middleware

// // Set up CORS configuration to allow requests from your frontend
// const allowedOrigins = ['https://frabjous-genie-8ba260.netlify.app']; // Add your frontend URL here

// nodeServer.use(bodyParser.json());
// nodeServer.use(bodyParser.urlencoded({ extended: true }));

// nodeServer.use(
//   cors({
//     origin: function (origin, callback) {
//       if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//   })
// );

// nodeServer.use('/', appServer);

// const port = process.env.PORT || 8000;
// nodeServer.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
