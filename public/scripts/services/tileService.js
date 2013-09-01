module.exports = function($http){
	return{
		getTile: function(callback){
			$http({method: "GET", url: "/api/tile"}).
				success(function(data, status){
					callback(data);
				}).
				error(function(data, status){
					callback(status)
				})
		}
	}
}