var express = require('express');
var app = express();

console.log('Hello World')

app.get("/", function(req, res){
    console.log('req:', req);
    res.send('Hello Express');
})

































 module.exports = app;
