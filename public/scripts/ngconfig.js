var createTileController = require('./controllers/createTileController')
var tileController = require('./controllers/tileController')

module.exports = function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: "../templates/start.html"
		})
		.when("/new-tile", {
			templateUrl: "../templates/new-tile.html",
			controller: createTileController
		})
		.when('/tiles', {
			templateUrl: "../templates/tile.html",
			controller: tileController
		})

};