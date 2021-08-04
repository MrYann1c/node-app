// Blog route module

const express = require('express');
const router = express.Router();

// Home
router.get('/', function(req, res) {
	res.send('<a href="/blog/1">Here to blog nummero uno</a>');
});
// First blog
router.get('/1', function(req, res) {
	res.send('blogue 1');
});

module.exports = router;