var Twitter = require('./lib/Twitter');
var Instagram = require('instagram-node').instagram();

var twitterConfig = require('./config/twitterConfig');
var instagramConfig = require('./config/instagramConfig');
var express = require('express');

var app = express();
var port= process.env.PORT || 9000;


var twitterSearchClient = new Twitter.SearchClient(

    twitterConfig.CONSUMER_KEY,
    twitterConfig.CONSUMER_SECRET,
    twitterConfig.TOKEN,
    twitterConfig.TOKEN_SECRET       
);

Instagram.use({ 
	client_id 		: instagramConfig.CLIENT_ID,
	client_secret	: instagramConfig.CLIENT_SECRET
});


//Get search on Twitter 

app.get('/twitter/search',function(req,res){

	twitterSearchClient.search({'q': 'query'}, function(error, result) {
	    if (error){
	        console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
	    }

	    if (result){
	        console.log("GET TWITETR SEARCH");
	        res.send(result);
	    }
	});
});

//Get search on Instagram

app.get('/instagram/search',function(req,res){

	Instagram.tag_media_recent('query', function(err, result) {

		if(err){
			console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
		}
		if(result){
			console.log("GET INSTAGRAM SEARCH");
			res.send(result);
		}
	});
});

app.listen(port);

console.log('The magic happens on port ' + port);