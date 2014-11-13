module.exports = function (app) {
	var Instagram = require('instagram-node').instagram();
	var instagramConfig = require('../config/instagramConfig');

	Instagram.use({ 
		client_id 		: instagramConfig.CLIENT_ID,
		client_secret	: instagramConfig.CLIENT_SECRET
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

}