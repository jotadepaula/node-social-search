var Client = require('node-rest-client').Client;
var client = new Client();
var googleConfig = require('../config/googleConfig');

/**
 * @todo implentar todas as options da api (parametros da url)
 */
function google (options) {

    function urlFactory(options){
        var url = "https://www.googleapis.com/plus/v1/activities?";

        var QUERY       = options.QUERY,
            ORDER_BY    = options.ORDER_BY,
            FIELDS      = options.FIELDS,
            MAX_RESULTS = options.MAX_RESULTS,
            API_KEY     = options.API_KEY;

        if(!QUERY || !API_KEY){
            throw new Error("Params not found");
        }
//https://www.googleapis.com/plus/v1/activities?query=belfie&maxResults=1&orderBy=recent&fields=items(actor(id%2Cimage%2Cname%2Curl)%2Cobject(actor%2Cattachments(fullImage%2Cimage)))%2Ctitle&key={YOUR_API_KEY}
        url+="query="+QUERY;
        if(MAX_RESULTS){
            url+="&maxResults="+MAX_RESULTS;
        }
        if(ORDER_BY){
            url+="&orderBy"+ORDER_BY;
        }
        if(FIELDS){
            url+="&fields="+FIELDS;
        }
        url+="&key="+API_KEY;

        return url;

    };
    this.getPublicPosts = function(options) {

        if (!options) {
            throw new Error("Insufficient params: " + options);
        }

        client.get(urlFactory(api_key, options), function (data, response) {
            return(data);
        });

    };
}
module.exports = google(googleConfig);