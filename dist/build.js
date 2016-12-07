(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Api = function () {
	    function Api($http, $httpParamSerializerJQLike) {
	        'ngInject';

	        _classCallCheck(this, Api);

	        this.$http = $http;
	    }

	    _createClass(Api, [{
	        key: 'TEST',
	        value: function TEST(url) {
	            return url;
	        }

	        /* On your controller, call:
	            this.Api.GET(url).then(
	                (response) => {},
	                (error) => {}
	            );
	        */

	    }, {
	        key: 'GET',
	        value: function GET(url) {
	            return this.$http.get(url);
	        }

	        /* On your controller, call:
	            this.Api.POST(url, data).then(
	                (response) => {},
	                (error) => {}
	            );
	        */

	    }, {
	        key: 'POST',
	        value: function POST(url, data) {
	            return this.$http.post(url,

	            // Content-Type application/json
	            JSON.stringify(data));

	            // Content-Type application/x-www-form-urlencoded; charset=UTF-8
	            //this.$httpParamSerializerJQLike(data));
	        }

	        /* On your controller, call:
	            this.Api.PUT(url, data).then(
	                (response) => {},
	                (error) => {}
	            );
	        */

	    }, {
	        key: 'PUT',
	        value: function PUT(url, data) {
	            return this.$http.post(url,

	            // Content-Type application/json
	            JSON.stringify(data));

	            // Content-Type application/x-www-form-urlencoded; charset=UTF-8
	            //this.$httpParamSerializerJQLike(data));
	        }

	        /* On your controller, call:
	            this.Api.DELETE(url, index).then(
	                (response) => {},
	                (error) => {}
	            );
	        */

	    }, {
	        key: 'DELETE',
	        value: function DELETE(url, index) {
	            return this.$http.delete(url + index);
	        }
	    }]);

	    return Api;
	}();

	exports.default = Api;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;