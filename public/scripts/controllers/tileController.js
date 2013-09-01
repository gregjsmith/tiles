var tileService = require('../services/tileService')

module.exports = function($scope, tileService){
	
	var groupsOfThree = function(arr){

		var groups = []

		while(arr.length > 0){
			var n = arr.splice(0,3);
			groups.push(n)
		}

		return groups;
	}

	tileService.getTile(function(data){
		var tile = data;
		tile.groups = groupsOfThree(tile.sections);
		console.log(tile.groups)
		$scope.tile = tile;
	})
}