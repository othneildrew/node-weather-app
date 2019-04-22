const https = require('https');
const api = require('./api.json');
const APIKEY = api.key;


function showError (error) {
  console.error(error.white.bgRed);
}


function current (location, queryType) {
  const units = 'imperial';
  const query = queryType === 'zip' ? 'zip' : 'q';


  try {

    https.get(`https://api.openweathermap.org/data/2.5/weather?${query}=${location}&units=${units}&APPID=${APIKEY}`, (response) => {

      let body = '';

      // Get all chunks of data and add together
      response.on('data', data => {
        body += data;
      });

      // Once retrieval completed, parse data
      response.on('end', () => {
        let json = JSON.parse(body);

        if (json.cod === 200) {
          // Return weather if response is success (200)
          let string = `${json.name} has ${json.weather[0].description}, temp of ${Math.round(json.main.temp)}F, and humidity of ${json.main.humidity}%`;

          console.log(string.yellow);

        } else {
          showError(`${json.message} for ${location}`);
        }
      });
    }).on('error', error => {
      showError(error.message);
    });

  } catch (error) {
    showError(error.message);
  }
}



// Export function for use in app.js
module.exports.current = current;
