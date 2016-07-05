var express = require("express");
var app = express();
var path = require("path");

//Mongo Database require variables
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/GuessWho";

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.get("/api/characters", function(req, res) {
	MongoClient.connect(url, function(err, db) {
		var collection = db.collection("GuessWho");
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
