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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArcanysApiClient = function () {
	    function ArcanysApiClient() {
	        _classCallCheck(this, ArcanysApiClient);

	        this.$http = null;
	        this.contentType = 'application/json';
	    }

	    _createClass(ArcanysApiClient, [{
	        key: 'TEST',
	        value: function TEST(url) {
	            return url;
	        }
	    }, {
	        key: 'setHttp',
	        value: function setHttp($http) {
	            return this.$http = $http;
	        }
	    }, {
	        key: 'getHttp',
	        value: function getHttp() {
	            return this.$http;
	        }
	    }, {
	        key: 'setContentType',
	        value: function setContentType(contentType) {
	            return this.contentType = contentType;
	        }
	    }, {
	        key: 'getContentType',
	        value: function getContentType() {
	            return this.contentType;
	        }
	    }, {
	        key: 'GET',
	        value: function GET(url) {
	            return this.getHttp().get(url);
	        }
	    }, {
	        key: 'POST',
	        value: function POST(url, data) {
	            return this.getHttp().post(url, JSON.stringify(data), {
	                headers: { 'Content-Type': this.getContentType() }
	            });
	        }
	    }, {
	        key: 'PUT',
	        value: function PUT(url, data) {
	            return this.getHttp().put(url, JSON.stringify(data), {
	                headers: { 'Content-Type': this.getContentType() }
	            });
	        }
	    }, {
	        key: 'DELETE',
	        value: function DELETE(url, index) {
	            return this.getHttp().delete(url + index);
	        }
	    }]);

	    return ArcanysApiClient;
	}();

	exports.default = ArcanysApiClient;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var User = function (_ArcanysApiClient) {
	    _inherits(User, _ArcanysApiClient);

	    function User() {
	        _classCallCheck(this, User);

	        var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this));

	        _this.loginUrl = null;
	        _this.confirmUrl = null;
	        _this.registerUrl = null;
	        _this.sendEmailUrl = null;
	        _this.recoverUrl = null;
	        _this.resetPassUrl = null;
	        return _this;
	    }

	    /* LOGIN */


	    _createClass(User, [{
	        key: 'setLoginUrl',
	        value: function setLoginUrl(url) {
	            return this.loginUrl = url;
	        }
	    }, {
	        key: 'getLoginUrl',
	        value: function getLoginUrl() {
	            return this.loginUrl;
	        }
	    }, {
	        key: 'login',
	        value: function login(data) {
	            return this.POST(this.getLoginUrl(), data);
	        }

	        /* CONFIRM ACCOUNT */

	    }, {
	        key: 'setConfirmUrl',
	        value: function setConfirmUrl(url) {
	            return this.confirmUrl = url;
	        }
	    }, {
	        key: 'getConfirmUrl',
	        value: function getConfirmUrl() {
	            return this.confirmUrl;
	        }
	    }, {
	        key: 'confirm',
	        value: function confirm(data) {
	            return this.POST(this.getConfirmUrl(), data);
	        }

	        /* REGISTER */

	    }, {
	        key: 'setRegisterUrl',
	        value: function setRegisterUrl(url) {
	            return this.registerUrl = url;
	        }
	    }, {
	        key: 'getRegisterUrl',
	        value: function getRegisterUrl() {
	            return this.registerUrl;
	        }
	    }, {
	        key: 'register',
	        value: function register(data) {
	            return this.POST(this.getRegisterUrl(), data);
	        }

	        /* SEND EMAIL */

	    }, {
	        key: 'setSendEmailUrl',
	        value: function setSendEmailUrl(url) {
	            return this.sendEmailUrl = url;
	        }
	    }, {
	        key: 'getSendEmailUrl',
	        value: function getSendEmailUrl() {
	            return this.sendEmailUrl;
	        }
	    }, {
	        key: 'sendEmail',
	        value: function sendEmail(data) {
	            return this.POST(this.getSendEmailUrl(), data);
	        }

	        /* RECOVER PASSWORD */

	    }, {
	        key: 'setRecoverUrl',
	        value: function setRecoverUrl(url) {
	            return this.recoverUrl = url;
	        }
	    }, {
	        key: 'getRecoverUrl',
	        value: function getRecoverUrl() {
	            return this.recoverUrl;
	        }
	    }, {
	        key: 'recoverPass',
	        value: function recoverPass(url, data) {
	            return this.POST(this.getRecoverUrl(), data);
	        }

	        /* RESET PASSWORD */

	    }, {
	        key: 'setResetPassUrl',
	        value: function setResetPassUrl(url) {
	            return this.resetPassUrl = url;
	        }
	    }, {
	        key: 'getResetPassUrl',
	        value: function getResetPassUrl() {
	            return this.resetPassUrl;
	        }
	    }, {
	        key: 'resetPass',
	        value: function resetPass(data) {
	            return this.POST(this.getResetPassUrl(), data);
	        }
	    }]);

	    return User;
	}(_index2.default);

	exports.default = User;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;