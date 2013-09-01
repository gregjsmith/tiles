var db = require('./db')

module.exports.getTiles = function(request, response){
	
	var tiles = [
		{
			name: "Todos",
			count: 4,
			sections: [
				{
					name: "Now"
				},
				{
					name: "Later"
				},
				{
					name: "Never"
				},
				{
					name: "Done"
				}
			],
			Owner: "donjohn@dave.com"
		}
	];

	response.send(tiles)

};


module.exports.getTile = function(req, res){
	res.send(db.getById(1))
}
