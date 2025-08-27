var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

// use res.render to load up an ejs view file

let branding_data = require('./views/data/_branding.json')

// index page
let index_data = require('./views/data/index.json')
app.get('/', function(req, res) {
  res.render('pages/index', {index_data: index_data, branding_data: branding_data});
});

// tools page
let tools_data = require('./views/data/tools.json')
app.get('/tools', function(req, res) {
  res.render('pages/tools', {tools_data: tools_data, branding_data: branding_data});
});

// resources page
let resources_data = require('./views/data/resources.json')
app.get('/resources', function(req, res) {
  res.render('pages/resources', {resources_data: resources_data, branding_data: branding_data});
});

// support page
let support_data = require('./views/data/support.json')
app.get('/support', function(req, res) {
    res.render('pages/support', {support_data: support_data, branding_data: branding_data});
});

// end of pages

app.listen(8080);
console.log('Server is listening on port 8080');