var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

const fs = require('fs');

// use res.render to load up an ejs view file

let branding_data = require('./views/data/_branding.json')

// index page
let index_data = require('./views/data/index.json')
app.render('pages/index', {index_data: index_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/index.html')
        fs.writeFile(__dirname + '/index.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

// tools page
let tools_data = require('./views/data/tools.json')
app.render('pages/tools', {tools_data: tools_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/tools.html')
        fs.writeFile(__dirname + '/tools.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

// resources page
let resources_data = require('./views/data/resources.json')
app.render('pages/resources', {resources_data: resources_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/resources.html')
        fs.writeFile(__dirname + '/resources.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

// support page
let support_data = require('./views/data/support.json')
app.render('pages/support', {support_data: support_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/support.html')
        fs.writeFile(__dirname + '/support.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

// end of pages

console.log('Static files generated.');