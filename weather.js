const https = require('https');
const api = require('./api.json');
const APIKEY = api.key;


function current (location) {




  try {

    https.get(`https://api.openweathermap.org/data/2.5/weather?zip=${location}&units=imperial&APPID=${APIKEY}`, (response) => {



      let body = '';

      response.on('data', data => {

        body += data;


      });


      response.on('end', () => {

        let json = JSON.parse(body);

        //console.log(body);

        if (json.cod === 200) {

          let string = `\t${json.name} \t ${json.weather[0].description} \t  ${Math.round(json.main.temp)}F`;

          console.log(string.toUpperCase());

        } else {
          console.error(json.message);
        }




      });


    }).on('error', error => {

      console.error(error);

    });

  } catch (error) {

    console.error(error.message);

  }
}


function checkInputType () {

}

module.exports.current = current;
