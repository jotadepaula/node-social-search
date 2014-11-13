module.exports = function (app) {

	var Client = require('node-rest-client').Client;
	client = new Client();

	app.get('/google/search',function(req,res){
		client.get('https://www.googleapis.com/plus/v1/activities?query=belfie&orderBy=best&key=AIzaSyCmfUNZwWzZTsL2UF8kUB7OaYlUGWevpVc',function(data,response){
			if(data){
				console.log('GET GOOGLE SEARCH');
				res.send(data);
			}
		});
	});
}