"use strict";

// -- Node/ExpressJS Application File --
// Variables
var compression = require('compression');

var fs = require('fs');

var http = require('http');

var https = require('https');

var express = require('express');

var bp = require('body-parser');

var port = 80;
var app = express();

var blog = require('./blog.js');

var _require = require('express'),
    request = _require.request; // Certificate


var privateKey = fs.readFileSync('/home/yannic/certs/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/home/yannic/certs/cert.pem', 'utf8');
var ca = fs.readFileSync('/home/yannic/certs/chain.pem', 'utf8');
var credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
}; // Menu Variables for Navigation

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
  //res.redirect('https://' + req.headers.host + req.url);
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
});
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
httpServer.listen(80, function () {
  console.log('HTTP Server running on port 80');
});
httpsServer.listen(443, function () {
  console.log('HTTPS Server running on port 443');
});