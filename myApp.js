require('dotenv').config()

var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get("/", function(req, res){
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})

app.get("/json", function(req, res){
    
    // if (process.env.MESSAGE_STYLE === 'uppercase'){
    //     res.json({
    //         "message": "HELLO JSON"
    //     })
    // } else {
    //     res.json({
    //         "message": "Hello json"
    //     })
    // }

    // method path - ip
    // GET /json - 

    const output = req.method + ' ' + req.path + ' - ' + req.ip;

    res.send({
             output
             })


})































 module.exports = app;
