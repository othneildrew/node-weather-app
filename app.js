"use strict";

const weather = require('./weather.js');
const colors = require('colors');
let query = process.argv.slice(2);



function getQueryType (query) {
  if ((/(^[0-9]{1,}$)/gi).test(query)) {
    return 'zip';
  } else {
    return 'city';
  }
}



query.forEach(function (val, index, array) {
  weather.current(val, getQueryType(val));
});
