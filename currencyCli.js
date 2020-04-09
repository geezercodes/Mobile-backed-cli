//require request and readline to help us make requests to the api and readline to read the commandline arguments
const request = require('request');
const chalk = require('chalk');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

//Help menu to act as a guide to the user black and bgBlack
console.log(chalk.bgBlack.green(`
    Welcome to the Node.js Currency Inquiry ! 
    Author Meshack Mwaura
    Version: 1.0.0.
    Usage: The user will be 
    then asked to select their currency code  of choice.


    Please enter ISO 4217 currency code. Use the Following guide as an example:
    [1] KES or kes 
    [2] CVE or cve
    [3] DJF or djf
    [4] LYD or lyd
    `))

readline.question(chalk.blueBright(`Please enter Currency code you want to check: `), (name) => {

  //convert input to uppercase to cater for validation and match content in the DB
  let code = name.toUpperCase();

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
  readline.close()
})


//First implementation that was not as effective

// //require request to make requests to our API 
// //require argv to parse the arguments passed from the command line/terminal
// const request = require('request');
// const argv = require('yargs').argv;


// //parse the entered currency argument to upperCase so as to sanitize input and match data in the DB
// let code = argv.c.toUpperCase() || 'CDF';

// //url to our backend API
// let url = `http://localhost:3000/currencies/${code}`


// //make the get request with the arguments passed or if none is passed use the default
// request(url, function (err, response, body) {
//   if(err){
//     console.log('error:', error);
//   } else {
//     let code = JSON.parse(body)
//     // console.log(code);
//     let message = `${code.message} !`;
//     console.log(message);
//   }
// });