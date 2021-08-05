// -- Node/ExpressJS Application File --
// Variables
const compression = require('compression');
const express = require('express');
const bp = require('body-parser');
const port = 80;
const app = express();
const blog = require('./blog.js');
const { request } = require('express');

// Menu Variables for Navigation
const menu = [
	{
		name: 'Home',
		url: '/'
	},
	{
		name: 'Photos',
		url: '/photos'
	},
	{
		name: 'Videos',
		url: '/videos'
	},
	{
		name: 'Blog',
		url: '/blog'
	}
]

// Application parameters
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(require('morgan')('dev'));
app.use(compression());
// Integrate different controller (Blog page)
app.use('/blog', blog);
// Set view engine to EJS to render EJS templates
app.set('view engine', 'ejs');
// Set /static as default path
app.use(express.static(__dirname + "/static"));

// Pages | Routes

// -- Homepage --
app.get("/", (req, res) => {

	// Get url (relative Path)
	var urls = require('url');
	var adr = req.protocol + '://' + req.get('host') + req.originalUrl;
	var q = urls.parse(adr, true);

	// Headers
	res.type('text/html');

	// Variables sent to page
	let data = {
		title: "Home",
		url: q.pathname,
		menu: menu
	}
	
	// Render Page
	res.render('pages/index', data);
});

// -- Photos Page --
app.get("/photos", (req, res) => {

	// Get url (relative Path)
	var urls = require('url');
	var adr = req.protocol + '://' + req.get('host') + req.originalUrl;
	var q = urls.parse(adr, true);

	// Headers
	res.type('text/html');

	// Variables
	let data = {
		title: "Photos",
		url: q.pathname,
		menu: menu
	}

	// Render Page
	res.render('pages/photos', data);
});

// -- Videos Page --
app.get("/videos", (req, res) => {

	// Get url (relative Path)
	var urls = require('url');
	var adr = req.protocol + '://' + req.get('host') + req.originalUrl;
	var q = urls.parse(adr, true);

	// Headers
	res.type('text/html');

	// Variables
	let data = {
		title: "Videos",
		url: q.pathname,
		menu: menu
	}

	// Render Page
	res.render('pages/videos', data);
});

// Success Log
app.listen(port, () => {
	console.log("Express server listening on port " + port);
});
