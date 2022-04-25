var express = require('express');
var app = express();

console.log('Hello World')

app.use('/public', express.static(__dirname + '/public'));

app.get("/", function(req, res){
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})

app.get("/json", function(req, res){
    res.send({
        "message":"Hello json"
    })
})































 module.exports = app;
