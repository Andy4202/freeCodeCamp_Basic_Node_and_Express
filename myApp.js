require('dotenv').config()

var express = require('express');
var app = express();

console.log('Hello World')

app.use('/public', express.static(__dirname + '/public'));

app.get("/", function(req, res){
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})

app.get("/json", function(req, res){
    let response = 'Hello World'
    if (process.env.MESSAGE_STYLE === 'uppercase'){
        response = response.toUpperCase()
    }
    res.send({
        "message": response
    })
})































 module.exports = app;
