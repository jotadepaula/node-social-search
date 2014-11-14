var Client = require('node-rest-client').Client;
var client = new Client();

/**
 * @todo implentar todas as options da api (parametros da url)
 */
var GoogleService = function (api_key) {

    this.URL_API = "https://www.googleapis.com/plus/v1/activities?";

	if(!api_key){
		throw new Error("API_KEY not found");
	}
    this.getPublicPosts = function(query){

        if(!query){
            throw new Error("Insufficient params: " +query);
        }
//https://www.googleapis.com/plus/v1/activities?query=belfie&orderBy=best&key=AIzaSyAN0xwSZ0T2_FYwblJVw7qNuM_ez4kmiXA
        client.get(this.URL_API+query+"&orderBy=best&key="+api_key,function(data,response){
            return(data);
        });

    }
};
module.exports = GoogleService ;