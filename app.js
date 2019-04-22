"use strict";

const weather = require('./weather.js');


let query = process.argv.slice(2);

//console.log(query);

//console.log(typeof query);

query.forEach(function (val, index, array) {
  weather.current(val);

});
