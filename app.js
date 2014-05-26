
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

//var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
//var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
/*app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('superfinesecretforwedding'));
app.use(express.session()); */
app.use(app.router);
app.use(express.static(path.join(__dirname, 'app')));

// app.get('/', routes.index);
app.get('/populacja', routes.populacja);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
