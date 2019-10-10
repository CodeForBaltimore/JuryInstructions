var express = require('express');
var bodyParser = require("body-parser");
var nunjucks = require('nunjucks');
var path = require('path');
var app = express();
var Home = require('./controllers/Home');
var Second = require('./controllers/Second');
var Third = require('./controllers/Third');

app.set('views', __dirname + '/templates');
app.set('view engine', 'njk');
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

nunjucks.configure(['app/templates','app/templates/instruction-forms','app/templates/instruction-results'], {
  autoescape: true,
  express: app
});

app.get('/', function(req, res) {
  Home.run(req, res);
});

app.post('/second', function(req, res) {
  Second.run(req, res);
});

app.post('/third', function(req, res) {
  Third.run(req,res);
})
 
module.exports = app;