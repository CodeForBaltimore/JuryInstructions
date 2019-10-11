var express = require('express');
var bodyParser = require("body-parser");
var nunjucks = require('nunjucks');
var path = require('path');
var app = express();
var View = require("./views/Base");

app.set('views', __dirname + '/templates');
app.set('view engine', 'njk');
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

nunjucks.configure([
  'app/templates', 
  'app/templates/instruction-forms', 
  'app/templates/instruction-results'], {
  autoescape: true,
  express: app
});

app.get('/', function (req, res) {
  deliver(req, res, 'home'); 
});

app.post('/second', function (req, res) {
  deliver(req, res, 'second');
});

app.post('/third', function (req, res) {
  deliver(req, res, 'third');
})

function deliver(req, res, template) {
  var v = new View(res, template);
  v.render(req.body);
}

module.exports = app;