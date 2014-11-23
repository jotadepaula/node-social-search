var express = require('express');
var session = require('express-session');
var fbgraph = require('fbgraphapi');
var http    = require('http');
var app = express();
var cookieParser = require('cookie-parser');
var port= process.env.PORT || 9000;

require('./app/TwitterManager')(app);
require('./app/InstagramManager')(app);
require('./app/GoogleManager')(app);
require('./app/FacebookManager')(app);

app.use(cookieParser());
app.use(session({secret : "SECRET"}));
app.use(fbgraph.auth( {
        appId : "1566917776868350",
        appSecret : "88d0705ca5995eadc18c89837e8af50c",
        redirectUri : "http://localhost:9000/facebook"
    }));
app.get('/login', function(req, res) {
    console.log('Start login');
    fbgraph.redirectLoginForm(req, res);    
});

app.get('/facebook', function(req, res) {
    if (!req.hasOwnProperty('facebook')) {
        console.log('You are not logged in');
        return res.redirect('/login');
    }
    console.log("O BONDE PASSOU");
    /* See http://developers.facebook.com/docs/reference/api/ for more */
    req.facebook.graph('/me', function(err, me) {
        console.log(me);
    });

    req.facebook.graph('/me?fields=id,name', function(err, me) {
        console.log(me);
    });

    req.facebook.me(function(err, me) {
        console.log(me);
    });

    // /me/likes
    req.facebook.my.likes(function(err, likes) {
        console.log(likes);
    });

    res.end("Check console output");
});
app.listen(port);
console.log('The magic happens on port ' + port);