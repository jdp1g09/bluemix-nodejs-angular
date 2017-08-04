/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com

var express = require('express');
var path = require('path');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

var bodyParser = require('body-parser');

// create a new express server
var app = express();

// require
require('./api/routes')(app);

// serve the files out of ./public as our main files
//app.use(express.static(__dirname + '/public'));

// static - all our js, css, images, etc go into the assets path
app.use('/app', express.static(path.join(__dirname, '../public', 'app')));
app.use('/bower_components', express.static(path.join(__dirname, '../public', 'bower_components')));
app.use('/assets', express.static(path.join(__dirname, '../public', 'assets')));
app.use('/stylesheets', express.static(path.join(__dirname, '../public', 'stylesheets')));

// This route deals enables HTML5Mode by forwarding missing files to the index.html
app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.use(bodyParser.json());

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, function() {

    // print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});
