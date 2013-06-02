var async = require('async');
var express = require('express');
var app = express();
var textblock = require('textblocks');
var html = require('pithy');
var formlib = require('./lib/formlib');

app.use(express.bodyParser());

app.get('/', function(req, res){
	var properties = {formtype: 'textarea'};
	var str = '<html><body><form>'
	str = str + formlib.makeForm(true, 'blah',properties, undefined);
	str = str + '</form></body></html>'
	res.send(str);
});

srv = app.listen(3000);
