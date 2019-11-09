const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', function(req, res){
 res.json({"OLA" : "Open Locations API"});
});
app.listen(port, function(){ console.log('OLA server running on port {port}');});