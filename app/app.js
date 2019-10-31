var express = require('express');
var bodyParser = require("body-parser");
var nunjucks = require('nunjucks');
var path = require('path');
var app = express();
var View = require("./views/Base");

var pandoc = require('node-pandoc')

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

// adding post route for pandoc download

app.post('/docx', function(req, res) {

  // variables for pandoc
  let src,args,callback

  src = req.body.docx
  args = `-f html -t docx -o app/userFiles/${req.body.filename}.docx`

  callback = function (err, result) {
    if (err) console.log(err)
    else {
      console.log(result)
      let path = `./app/userFiles/${req.body.filename}.docx`
      res.download(path)
    }
  }

  // create doc then send download link to user
  pandoc(src,args,callback)

})

function deliver(req, res, template) {
  var v = new View(res, template);
  v.render(req.body);
}

module.exports = app;
