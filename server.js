// BASE SETUP
// =============================================================================
'use strict';
// call the packages we need
var express = require('express'); // call express
var server = express(); // define our server using express
var path = __dirname + '/public/views/';
var bodyParser = require('body-parser');
server.use( bodyParser.json() );  
// Save if we need to render things via templating engines
//server.set('views', __dirname + '/public/views'); 
//server.engine('html', require('ejs').renderFile); 
//server.set('view engine', 'html'); 

// ROUTES FOR OUR APP
// =============================================================================

var router = express.Router(); // get an instance of the express Router

// get the homepage
server.get('/', function(req, res) {
    res.sendFile(path + 'index.html'); // load our public/index.html file
});

server.post('/email', function(req, res) {
    var helper = require('sendgrid').mail;
    var fromEmail = new helper.Email(req.body.email);
    var toEmail = new helper.Email('luke@routerchowder.com');
    var subject = 'New Router Chowder Contact Request';
    var content = new helper.Content('text/plain', req.body.name + ' is interested in ' + req.body.select);
    var mail = new helper.Mail(fromEmail, subject, toEmail, content);

    var sg = require('sendgrid')('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');
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });

    sg.API(request, function(error, response) {
        if (error) {
            console.log(error);
            return error;
        }
        console.log(response);
        return response.statusCode;
    });

});

// START THE SERVER
// =============================================================================

server.use('/', router);
server.use(express.static(__dirname + '/public'));
server.listen(process.env.PORT, process.env.IP);
console.log('Magic happens on port ' + process.env.PORT);
console.log('IP being served is ' + process.env.IP);