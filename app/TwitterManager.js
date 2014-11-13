module.exports = function (app) {

	var Twitter = require('../lib/Twitter');	
	var twitterConfig = require('../config/twitterConfig');
	var twitterSearchClient = new Twitter.SearchClient(

		twitterConfig.CONSUMER_KEY,
		twitterConfig.CONSUMER_SECRET,
		twitterConfig.TOKEN,
		twitterConfig.TOKEN_SECRET       
		);
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
}