// const db = require('./models')
// const express = require('express')
// const router = express.Router();

// //https://www.npmjs.com/package/node-geocoder

// const NodeGeocoder = require('node-geocoder');
 
// const options = {
//   provider: 'google',
 
//   // Optional depending on the providers
//   httpAdapter: 'https', // Default
//   //apiKey: '', // for Mapquest, OpenCage, Google Premier
//   formatter: null         // 'gpx', 'string', ...
// };

// router.get("/", async (request, response) => {
//     //if user has account send them to profile page
//     try {
//       const results = await db.Park.findAll({ raw: true });
//       console.log('parkssssssss===>>', results);
//       response.render("index", { parks: results, loggedInUser: request.user });
//     } catch (error) {
//       response.status(500).send("error occurred");
//       throw error;
//     }
//   });
  

// let geocoder = NodeGeocoder(options);

// geocoder.reverse({lat:45.767, lon:4.833})
//   .then(function(res) {
//     console.log(res);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });