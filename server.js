// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var server     = express();                 // define our server using express
var path = __dirname + '/public/views/';

// Save if we need to render things via templating engines
//server.set('views', __dirname + '/public/views'); 
//server.engine('html', require('ejs').renderFile); 
//server.set('view engine', 'html'); 

// ROUTES FOR OUR APP
// =============================================================================

var router = express.Router();   // get an instance of the express Router

// get the homepage
server.get('/', function(req, res) {
  res.sendFile( path + 'index.html'); // load our public/index.html file
});

// START THE SERVER
// =============================================================================

server.use('/', router);
server.use(express.static(__dirname + '/public'));
server.listen(process.env.PORT, process.env.IP);
console.log('Magic happens on port ' + process.env.PORT);
console.log('IP being served is ' + process.env.IP);