const https = require('https');
const api = require('./api.json');
const APIKEY = api.key;


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
          let string = `\t${json.name} has ${json.weather[0].description}, temp of ${Math.round(json.main.temp)}F, and humidity of ${json.main.humidity}%`;

          console.log(string.yellow);

        } else {
          console.error(`\t${json.message} for ${location}`.white.bgMagenta);
        }
      });
    }).on('error', error => {
      console.error(error.message.red);
    });

  } catch (error) {
    console.error(error.message.red);
  }
}



// Export function for use in app.js
module.exports.current = current;
