//require request to make requests to our API 
//require argv to parse the arguments passed from the command line/terminal
const request = require('request');
const argv = require('yargs').argv;

let code = argv.c.toUpperCase() || 'CDF';
//url to our backend API
let url = `http://localhost:3000/currencies/${code}`


//make the get request with the arguments passed or if none is passed use the default
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let code = JSON.parse(body)
    // console.log(code);
    let message = `${code.message} !`;
    console.log(message);
  }
});