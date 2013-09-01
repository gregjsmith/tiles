var express = require('express');
var path = require('path');
var api = require('./server/api.js');

var server = express();

server.use(express.compress());
server.use(express.bodyParser());
server.use(express.static(path.join(__dirname, "public")));
server.use(express.cookieParser())
server.use(express.session({secret: "113682e7-e197-434a-93ea-f91a671cefe2"}))
server.use(express.favicon())

server.get('/api/tiles', api.getTiles);
server.get('/api/tile', api.getTile);


server.get("/", function (req, res){
	console.log(req.session)
	res.send("public/index.html")
})


server.get("/session", function (req, res){
	
	var session = req.session;

	session.views = session.views || 0;

	session.views += 1;

	res.send(req.sessionID);
})

server.listen(process.env.port || 9999);

