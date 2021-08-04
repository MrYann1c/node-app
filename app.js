const express = require('express');
const bp = require('body-parser');
const port = 80;
const app = express();
const blog = require('./blog.js');
const { request } = require('express');

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

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(require('morgan')('dev'));
app.use('/blog', blog);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

// Pages | Routes
// Homepage
app.get("/", (req, res) => {
	var urls = require('url');
	var adr = req.protocol + '://' + req.get('host') + req.originalUrl;
	var q = urls.parse(adr, true);
	res.type('text/html');
	let data = {
		title: "Home",
		url: q.pathname,
		menu: menu
	}
	res.render('pages/index', data);
});

// Photos Page
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


// Videos Page
// app.get("/videos", (req, res) => {
// 	res.type('text/html');
// 	var title = "PHOTOS";
// 	res.render('pages/videos', {
// 		title: title
// 	});
// });
app.listen(port, () => {
	console.log("Express server listening on port " + port);
});
