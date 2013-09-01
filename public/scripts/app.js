var angular = require('../shims/angular.shim'),
	createTileController = require('./controllers/createTileController'),
	tileController = require('./controllers/tileController'),
	tileService = require('./services/tileService.js')

var ngconfig = require('./ngconfig');

var tilesApp = angular.module("tilesApp", []);

tilesApp.config(ngconfig)
tilesApp.factory('tileService', tileService)
tilesApp.controllers = [createTileController, tileController]

