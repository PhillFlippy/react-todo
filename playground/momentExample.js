var moment = require('moment');

console.log(moment().format());


var now = moment();
console.log('current timestap',now.unix());

var timestamp = 1486870130;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMMM Do YYYY @ h : mm A'));
