var express = require("express");
var app = express();
var path = require("path");

//Mongo Database require variables
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/comment_application";

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.get("/api/characters", function(req, res) {
	MongoClient.connect(url, function(err, db) {
		var collection = db.collection("characters");
		collection.find({}).toArray(function(err, docs) {
			res.json(docs);
			db.close();
		});
	});
});

app.use(express.static("client/build"));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

// FIXME: Need to require in mongodb from NPM to run and parse the information from our database.
