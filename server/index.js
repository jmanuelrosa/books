'use strict';

var express = require('express');
var router  = express.Router();
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.set('views', path.join(__dirname));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../')));

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
});

router.get('', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('*', router);

app.listen(8000, function(){
    console.log('Express Running on %s', 8000);
});
