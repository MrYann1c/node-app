// -- Node/ExpressJS Application File --
// Variables
const compression = require('compression');
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const bp = require('body-parser');
const port = 80;
const app = express();
const blog = require('./blog.js');
const { request } = require('express');

// Certificate
// const privateKey = fs.readFileSync('/home/yannic/certs/privkey.pem', 'utf8');
// const certificate = fs.readFileSync('/home/yannic/certs/cert.pem', 'utf8');
// const ca = fs.readFileSync('/home/yannic/certs/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

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
		menu: menu,
	}

	// Render Page
	res.render('pages/videos', data);
});


const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

httpServer.listen(3000, () => {
	console.log('HTTP Server running on port 3000');
});

// httpsServer.listen(3001, () => {
// 	console.log('HTTPS Server running on port 3001');
// });