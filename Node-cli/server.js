const express = require('express');
const bodyparser = require('body-parser');

//create express app
const app = express();

//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended: true}));

//parse requests of content-type - application/json which will be the case with our application
app.use(bodyparser.json());

//define a simple route

app.get('/', (req,res) => {
    res.json({"message":"Welcome to the CLI REST API "})
});

//listen for requests 
app.listen(3000, ()=> {
    console.log("Server is listening on port 3000");
});