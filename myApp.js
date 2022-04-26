require('dotenv').config();

var bodyParser = require('body-parser');
var express = require('express');
var app = express();


app.use('/', bodyParser.urlencoded({extended: false}))


app.use('/public', express.static(__dirname + '/public'));

app.get("/", function(req, res){
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})

app.use(function(req, res, next) {
    const output = req.method + ' ' + req.path + ' - ' + req.ip;
    console.log(output);
    next();  
});

//chaining function
app.get('/now', function(req, res, next){
    req.time = new Date().toString()
    next();
}, function(req, res){
    res.send({
        time :req.time   
    })
})

//Get route parameter input from the client
app.get('/:word/echo', function(req, res){
    res.json({
        echo : req.params.word
    })
})

//Get query parameter input from the client
app.get('/name', function(req, res){
    console.log(req.query)
    res.json({
        name : `${req.query.first} ${req.query.last}`
    })
})

app.get("/json", function(req, res, next){
    if (process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({
            "message": "HELLO JSON"
        })
    } else {
        res.json({
            "message": "Hello json"
        })
    }
})































 module.exports = app;
