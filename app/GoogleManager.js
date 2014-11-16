var options =  require('../config/googleConfig');
var Client = require('node-rest-client').Client;
var client = new Client();
var QUERY = "belfie";
module.exports = function (app) {

    app.get('/google/search',function(req,res){

        function urlFactory(options){
            var url = "https://www.googleapis.com/plus/v1/activities?";

            var
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

        }
        var data = client.get(urlFactory(options),function(data){
            res.send(data);
        });
    });
};