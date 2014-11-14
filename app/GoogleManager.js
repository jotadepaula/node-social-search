var Client = require('node-rest-client').Client;
var client = new Client();

module.exports = function (app) {
//google = require('GoogleService');


	app.get('/google/search',function(req,res){
		//https://www.googleapis.com/plus/v1/activities?query=belfie&orderBy=best&key=AIzaSyAN0xwSZ0T2_FYwblJVw7qNuM_ez4kmiXA
        client.get("https://www.googleapis.com/plus/v1/activities?query=belfie&orderBy=best&key=AIzaSyAN0xwSZ0T2_FYwblJVw7qNuM_ez4kmiXA",function(data,response){
            res.send(data);
        });
	});
};