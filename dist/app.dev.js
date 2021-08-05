"use strict";

// -- Node/ExpressJS Application File --
// Variables
var compression = require('compression');

var express = require('express');

var bp = require('body-parser');

var port = 80;
var app = express();

var blog = require('./blog.js');

var _require = require('express'),
    request = _require.request; // Menu Variables for Navigation


var menu = [{
  name: 'Home',
  url: '/'
}, {
  name: 'Photos',
  url: '/photos'
}, {
  name: 'Videos',
  url: '/videos'
}, {
  name: 'Blog',
  url: '/blog'
}]; // Application parameters

app.use(bp.urlencoded({
  extended: false
}));
app.use(bp.json());
app.use(require('morgan')('dev'));
app.use(compression()); // Integrate different controller (Blog page)

app.use('/blog', blog); // Set view engine to EJS to render EJS templates

app.set('view engine', 'ejs'); // Set /static as default path

app.use(express["static"](__dirname + "/static")); // Pages | Routes
// -- Homepage --

app.get("/", function (req, res) {
  // Get url (relative Path)
  var urls = require('url');

  var adr = req.protocol + '://' + req.get('host') + req.originalUrl;
  var q = urls.parse(adr, true); // Headers

  res.type('text/html'); // Variables sent to page

  var data = {
    title: "Home",
    url: q.pathname,
    menu: menu
  }; // Render Page

  res.render('pages/index', data);
}); // -- Photos Page --

app.get("/photos", function (req, res) {
  // Get url (relative Path)
  var urls = require('url');

  var adr = req.protocol + '://' + req.get('host') + req.originalUrl;
  var q = urls.parse(adr, true); // Headers

  res.type('text/html'); // Variables

  var data = {
    title: "Photos",
    url: q.pathname,
    menu: menu
  }; // Render Page

  res.render('pages/photos', data);
}); // -- Videos Page --

app.get("/videos", function (req, res) {
  // Get url (relative Path)
  var urls = require('url');

  var adr = req.protocol + '://' + req.get('host') + req.originalUrl;
  var q = urls.parse(adr, true); // Headers

  res.type('text/html'); // Variables

  var data = {
    title: "Videos",
    url: q.pathname,
    menu: menu
  }; // Render Page

  res.render('pages/videos', data);
}); // Success Log

app.listen(port, function () {
  console.log("Express server listening on port " + port);
});