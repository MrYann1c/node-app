// -- Node/ExpressJS Application File --
// Variables / Requirements
const compression = require('compression');
const fs = require('fs');
const { request } = require('express');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const port = 80;
const app = express();
const blog = require('./blog.js');

// Login
var flash = require('express-flash');
var expressValidator = require('express-validator');
var cookieParser = require('cookie-parser');
const session = require('express-session');
const mysql = require('mysql');
const path = require('path');

app.use(cookieParser());

// Connect to MySQL
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'Docliadoc01!',
	database : 'nodelogin'
});
connection.connect(function(error){
	if(!!error){
	  console.log(error);
	}else{
	  console.log('Connected!:)');
	}
  });  
 module.exports = connection;

app.use(session({
	secret: '1234',
	resave: true,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}));

app.use(flash());

// Array Variables
const menu = [
	{   name: 'Home',
		url: '/' },
	{   name: 'Photos',
		url: '/photos' },
	{   name: 'Videos',
		url: '/videos' },
	{   name: 'Blog',
		url: '/blog' }
]
const imgs = [
	{   name: 'pano',
		slide: 'first',
		url: 'c_scale,q_100,w_1200/v1623912238/pano_ygatwa.webp' },
	{   name: 'pano2',
		url: 'c_scale,q_100,w_1200/v1623912238/pano2_cod7we.webp' },
	{   name: 'pano3',
		url: 'c_scale,q_100,w_1200/v1623912238/pano3_umyftr.webp' },
	{   name: 'pano4',
		url: 'c_scale,q_100,w_1200/v1623912245/pano4_js5tpp.webp' },
	{	name: 'pano5',
		url: 'c_scale,q_100,w_1200/v1623912243/pano5_yqprop.webp' }
]

// Application parameters
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('morgan')('dev'));
app.use(compression());
app.use('/blog', blog); // Integrate different controller (Blog page)
app.set('view engine', 'ejs'); // Set view engine to EJS to render EJS templates
app.use(express.static(__dirname + "/static")); // Set /static as default path

// ------------- LOGIN Procedure -------------
app.get("/login", (req, res) => {
	res.type('text/html');
	res.render('pages/login', {
		title: 'Login',
		username: '',
		password: ''  
	});
});

app.get('/logout', function (req, res) {
	req.session.destroy();
	res.redirect('/');
});

app.post('/auth', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
 
	connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(err, rows, fields) {
		if(err) throw err
			
		// if user not found
		if (rows.length <= 0) {
			req.flash('error', 'Incorrect!')
			res.redirect('/login')
		}
		else { // if user found
			req.session.loggedin = true;
			req.session.uid = username;
			res.redirect('/');
		}
	})  
})

// Pages | Routes
//////////////////////////////////////////////////////////////
// -- Homepage --
app.get("/", (req, res) => {
	var urls = require('url');
	var adr = req.protocol + '://' + req.get('host') + req.originalUrl;
	var q = urls.parse(adr, true);

	res.type('text/html');

	let data = {
		title: "Home",
		url: q.pathname,
		menu: menu,
		uid: req.session.uid
	}
	res.render('pages/index', data);
});
//////////////////////////////////////////////////////////////
// -- Photos Page --
app.get("/photos", (req, res) => {
	var urls = require('url');
	var adr = req.protocol + '://' + req.get('host') + req.originalUrl;
	var q = urls.parse(adr, true);

	res.type('text/html');

	let data = {
		title: "Photos",
		imgs: imgs,
		url: q.pathname,
		menu: menu,
		panotitle: "Panorama | Dji Mavic Air 2",
		uid: req.session.uid
	}
	res.render('pages/photos', data);
});
//////////////////////////////////////////////////////////////
// -- Videos Page --
app.get("/videos", (req, res) => {

	// Get url (relative Path)
	var urls = require('url');
	var adr = req.protocol + '://' + req.get('host') + req.originalUrl;
	var q = urls.parse(adr, true);

	res.type('text/html');

	let data = {
		title: "Videos",
		url: q.pathname,
		menu: menu,
	}
	res.render('pages/videos', data);
});
//////////////////////////////////////////////////////////////
const httpServer = http.createServer(app);

httpServer.listen(3000, () => {
	console.log('HTTP Server running on port 3000');
});