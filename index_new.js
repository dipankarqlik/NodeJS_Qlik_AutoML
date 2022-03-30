var request = require('request');
var data_new = {
"FL_DATE": "2/27/18",
"OP_CARRIER": "Southwest Airlines",
"ORIGIN": "DEN",
"DEST": "CLE",
"CRS_DEP_TIME": 3,
"DEP_DELAY": 2,
"TAXI_OUT": 14,
"WHEELS_OFF": 3,
"WHEELS_ON": 4,
"TAXI_IN": 5,
"CRS_ARR_TIME": 4,
"ARR_DELAY": -13,
"CRS_ELAPSED_TIME": 160,
"ACTUAL_ELAPSED_TIME": 145,
"AIR_TIME": 126,
"DISTANCE": 1201
}
var options = {
  'method': 'POST',
  'url': 'https://api.bigsquid.com/predictionapi/analyses/<ID>',
  'headers': {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'token <ID>'
  },
  body: JSON.stringify({
    // "data": [
    //   {
    //     "FL_DATE": "2/27/18",
    //     "OP_CARRIER": "Southwest Airlines",
    //     "ORIGIN": "DEN",
    //     "DEST": "CLE",
    //     "CRS_DEP_TIME": 3,
    //     "DEP_DELAY": 2,
    //     "TAXI_OUT": 14,
    //     "WHEELS_OFF": 3,
    //     "WHEELS_ON": 4,
    //     "TAXI_IN": 5,
    //     "CRS_ARR_TIME": 4,
    //     "ARR_DELAY": -13,
    //     "CRS_ELAPSED_TIME": 160,
    //     "ACTUAL_ELAPSED_TIME": 145,
    //     "AIR_TIME": 126,
    //     "DISTANCE": 1201
    //   }
    // ]
    "data": [data_new] // check if this can be replaced by hypercubes from Engine using Enigma.js
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
