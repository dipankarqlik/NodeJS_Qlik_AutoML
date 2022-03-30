var request = require('request');
var fs = require('fs');
var options = {
  'method': 'POST',
  'url': 'https://api.bigsquid.com/predictionapi/analyses/<ID>',
  'headers': {
    'Accept': 'text/csv',
    'Authorization': 'token <ID>'
  },
  formData: {
    'data': {
      'value': fs.createReadStream('/Users/bed/Downloads/test_flight.csv'),
      'options': {
        'filename': 'test_flight.csv',
        'contentType': 'text/csv'
      }
    }
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
