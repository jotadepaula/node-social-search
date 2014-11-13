var express = require('express');
var app = express();
var port= process.env.PORT || 9000;
require('./app/TwitterManager')(app);
require('./app/InstagramManager')(app);
require('./app/GoogleManager')(app);
app.listen(port);
console.log('The magic happens on port ' + port);