var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://admin:admin@ds029828.mongolab.com:29828/demodb", function(err, db){
	if (!err) {
		console.log("Connected")
	};

	db.collection('test', function(err, collection){
		var doc1 = {"hello": "doc1"};
		var doc2 = {"hello": "doc2"};

		var lots = [{"hello": "doc3"}, {"hello": "doc4"}]

		collection.insert(doc1, function(err, result){});

		collection.insert(doc2, {w:1}, function(err, result){})
		collection.insert(lots, {w:1}, function(err, result){})
	});

	
})

