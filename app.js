"use strict";

const weather = require('./weather.js');
const colors = require('colors');


let query = process.argv.slice(2);

//console.log(query);

//console.log(typeof query);

query.forEach(function (val, index, array) {
  weather.current(val);

});
