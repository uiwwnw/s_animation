/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--0-1!../node_modules/sass-loader/lib/loader.js??ref--0-2!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--0-1!../node_modules/sass-loader/lib/loader.js??ref--0-2!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(0);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = function () {
    function Event() {
        _classCallCheck(this, Event);
    }

    _createClass(Event, [{
        key: 'repeat_method',
        value: function repeat_method() {
            if (this._el[this._times] === undefined) {
                return false;
            }
            this._el[this._times].classList.add('active');
            if (this._el[this._times - 1] === undefined) {
                return false;
            }
            this._el[this._times - 1].classList.remove('active');
            // console.log(this._el);
        }
    }]);

    return Event;
}();

var Repeat = function (_Event) {
    _inherits(Repeat, _Event);

    function Repeat() {
        _classCallCheck(this, Repeat);

        var _this2 = _possibleConstructorReturn(this, (Repeat.__proto__ || Object.getPrototypeOf(Repeat)).call(this));

        _this2._sto;
        _this2._finTimes = 1;
        _this2._times = 0;
        _this2._done = false;
        return _this2;
    }

    _createClass(Repeat, [{
        key: 'repeat',
        value: function repeat() {
            if (!this._done === false || this._times < this._finTimes) {
                var _this = this;
                clearTimeout(_this._sto);
                _this._sto = setTimeout(function () {
                    // console.log(_this._times);
                    _this.repeat_method();
                    _this.repeat();
                    _this.return();
                    _this._times += 1;
                }, _this._arrAttr[this._times]);
            }
        }
    }, {
        key: 'return',
        value: function _return() {
            return this._times;
        }
    }]);

    return Repeat;
}(Event);

var Animation = function (_Repeat) {
    _inherits(Animation, _Repeat);

    function Animation() {
        _classCallCheck(this, Animation);

        var _this3 = _possibleConstructorReturn(this, (Animation.__proto__ || Object.getPrototypeOf(Animation)).call(this));

        _this3._arrAttr = [];
        _this3._el = document.getElementsByTagName('div');
        _this3._finTimes = _this3._el.length;
        return _this3;
    }

    _createClass(Animation, [{
        key: 'method',
        value: function method() {
            this.repeat();
        }
    }, {
        key: 'spoid',
        value: function spoid() {
            for (var i = 0; i < this._el.length; i++) {
                this._arrAttr[i] = this._el[i].getAttribute('data-time');
            }
            return this._arrAttr;
        }
    }]);

    return Animation;
}(Repeat);

// class sto extends active {
//     constructor() {
//         super();
//         this._sto = 0;
//         // this._time = 500;
//     }
//     return() {
//         const th = this;
//         // console.log(this.method());
//         clearTimeout(this._sto);
//         this._sto = setTimeout(function() {
//             th.method();
//         }, this._time);
//     }
// }

var start = new Animation();
start.method();
start.spoid();
// const e = new active;
// console.log(e)
// e.method(1000);
// const a = new sto();
// a.return()
// console.log(a.return())
// a.method()

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, ".active[data-transform*=\"scale(3)\"] {\n  transform: scale(3); }\n\n.active[data-transform*=\"scale(4)\"] {\n  transform: scale(4); }\n\n.active[data-transform*=\"scale(5)\"] {\n  transform: scale(5); }\n\n.active[data-transform*=\"scale(6)\"] {\n  transform: scale(6); }\n\n.active[data-transform*=\"scale(7)\"] {\n  transform: scale(7); }\n\n.active[data-transform*=\"scale(8)\"] {\n  transform: scale(8); }\n\n.active[data-transform*=\"scale(9)\"] {\n  transform: scale(9); }\n\n.active[data-transform*=\"scale(10)\"] {\n  transform: scale(10); }\n\n.active[data-transform*=\"scale(0.1)\"] {\n  transform: scale(0.1); }\n\n.active[data-transform*=\"scale(0.2)\"] {\n  transform: scale(0.2); }\n\n.active[data-transform*=\"scale(0.3)\"] {\n  transform: scale(0.3); }\n\n.active[data-transform*=\"scale(0.4)\"] {\n  transform: scale(0.4); }\n\n.active[data-transform*=\"scale(0.5)\"] {\n  transform: scale(0.5); }\n\n.active[data-transform*=\"scale(0.6)\"] {\n  transform: scale(0.6); }\n\n.active[data-transform*=\"scale(0.7)\"] {\n  transform: scale(0.7); }\n\n.active[data-transform*=\"scale(0.8)\"] {\n  transform: scale(0.8); }\n\n.active[data-transform*=\"scale(0.9)\"] {\n  transform: scale(0.9); }\n\n.active[data-transform*=\"scale(1)\"] {\n  transform: scale(1); }\n\n.active[data-transform*=\"scale(1.1)\"] {\n  transform: scale(1.1); }\n\n.active[data-transform*=\"scale(1.2)\"] {\n  transform: scale(1.2); }\n\n.active[data-transform*=\"scale(1.3)\"] {\n  transform: scale(1.3); }\n\n.active[data-transform*=\"scale(1.4)\"] {\n  transform: scale(1.4); }\n\n.active[data-transform*=\"scale(1.5)\"] {\n  transform: scale(1.5); }\n\n.active[data-transform*=\"scale(1.6)\"] {\n  transform: scale(1.6); }\n\n.active[data-transform*=\"scale(1.7)\"] {\n  transform: scale(1.7); }\n\n.active[data-transform*=\"scale(1.8)\"] {\n  transform: scale(1.8); }\n\n.active[data-transform*=\"scale(1.9)\"] {\n  transform: scale(1.9); }\n\n.active[data-transform*=\"scale(2)\"] {\n  transform: scale(2); }\n\n.active[data-transform*=\"skewX(-50deg)\"] {\n  transform: skewX(-50deg); }\n\n.active[data-transform*=\"skewY(-50deg)\"] {\n  transform: skewY(-50deg); }\n\n.active[data-transform*=\"skewX(-49deg)\"] {\n  transform: skewX(-49deg); }\n\n.active[data-transform*=\"skewY(-49deg)\"] {\n  transform: skewY(-49deg); }\n\n.active[data-transform*=\"skewX(-48deg)\"] {\n  transform: skewX(-48deg); }\n\n.active[data-transform*=\"skewY(-48deg)\"] {\n  transform: skewY(-48deg); }\n\n.active[data-transform*=\"skewX(-47deg)\"] {\n  transform: skewX(-47deg); }\n\n.active[data-transform*=\"skewY(-47deg)\"] {\n  transform: skewY(-47deg); }\n\n.active[data-transform*=\"skewX(-46deg)\"] {\n  transform: skewX(-46deg); }\n\n.active[data-transform*=\"skewY(-46deg)\"] {\n  transform: skewY(-46deg); }\n\n.active[data-transform*=\"skewX(-45deg)\"] {\n  transform: skewX(-45deg); }\n\n.active[data-transform*=\"skewY(-45deg)\"] {\n  transform: skewY(-45deg); }\n\n.active[data-transform*=\"skewX(-44deg)\"] {\n  transform: skewX(-44deg); }\n\n.active[data-transform*=\"skewY(-44deg)\"] {\n  transform: skewY(-44deg); }\n\n.active[data-transform*=\"skewX(-43deg)\"] {\n  transform: skewX(-43deg); }\n\n.active[data-transform*=\"skewY(-43deg)\"] {\n  transform: skewY(-43deg); }\n\n.active[data-transform*=\"skewX(-42deg)\"] {\n  transform: skewX(-42deg); }\n\n.active[data-transform*=\"skewY(-42deg)\"] {\n  transform: skewY(-42deg); }\n\n.active[data-transform*=\"skewX(-41deg)\"] {\n  transform: skewX(-41deg); }\n\n.active[data-transform*=\"skewY(-41deg)\"] {\n  transform: skewY(-41deg); }\n\n.active[data-transform*=\"skewX(-40deg)\"] {\n  transform: skewX(-40deg); }\n\n.active[data-transform*=\"skewY(-40deg)\"] {\n  transform: skewY(-40deg); }\n\n.active[data-transform*=\"skewX(-39deg)\"] {\n  transform: skewX(-39deg); }\n\n.active[data-transform*=\"skewY(-39deg)\"] {\n  transform: skewY(-39deg); }\n\n.active[data-transform*=\"skewX(-38deg)\"] {\n  transform: skewX(-38deg); }\n\n.active[data-transform*=\"skewY(-38deg)\"] {\n  transform: skewY(-38deg); }\n\n.active[data-transform*=\"skewX(-37deg)\"] {\n  transform: skewX(-37deg); }\n\n.active[data-transform*=\"skewY(-37deg)\"] {\n  transform: skewY(-37deg); }\n\n.active[data-transform*=\"skewX(-36deg)\"] {\n  transform: skewX(-36deg); }\n\n.active[data-transform*=\"skewY(-36deg)\"] {\n  transform: skewY(-36deg); }\n\n.active[data-transform*=\"skewX(-35deg)\"] {\n  transform: skewX(-35deg); }\n\n.active[data-transform*=\"skewY(-35deg)\"] {\n  transform: skewY(-35deg); }\n\n.active[data-transform*=\"skewX(-34deg)\"] {\n  transform: skewX(-34deg); }\n\n.active[data-transform*=\"skewY(-34deg)\"] {\n  transform: skewY(-34deg); }\n\n.active[data-transform*=\"skewX(-33deg)\"] {\n  transform: skewX(-33deg); }\n\n.active[data-transform*=\"skewY(-33deg)\"] {\n  transform: skewY(-33deg); }\n\n.active[data-transform*=\"skewX(-32deg)\"] {\n  transform: skewX(-32deg); }\n\n.active[data-transform*=\"skewY(-32deg)\"] {\n  transform: skewY(-32deg); }\n\n.active[data-transform*=\"skewX(-31deg)\"] {\n  transform: skewX(-31deg); }\n\n.active[data-transform*=\"skewY(-31deg)\"] {\n  transform: skewY(-31deg); }\n\n.active[data-transform*=\"skewX(-30deg)\"] {\n  transform: skewX(-30deg); }\n\n.active[data-transform*=\"skewY(-30deg)\"] {\n  transform: skewY(-30deg); }\n\n.active[data-transform*=\"skewX(-29deg)\"] {\n  transform: skewX(-29deg); }\n\n.active[data-transform*=\"skewY(-29deg)\"] {\n  transform: skewY(-29deg); }\n\n.active[data-transform*=\"skewX(-28deg)\"] {\n  transform: skewX(-28deg); }\n\n.active[data-transform*=\"skewY(-28deg)\"] {\n  transform: skewY(-28deg); }\n\n.active[data-transform*=\"skewX(-27deg)\"] {\n  transform: skewX(-27deg); }\n\n.active[data-transform*=\"skewY(-27deg)\"] {\n  transform: skewY(-27deg); }\n\n.active[data-transform*=\"skewX(-26deg)\"] {\n  transform: skewX(-26deg); }\n\n.active[data-transform*=\"skewY(-26deg)\"] {\n  transform: skewY(-26deg); }\n\n.active[data-transform*=\"skewX(-25deg)\"] {\n  transform: skewX(-25deg); }\n\n.active[data-transform*=\"skewY(-25deg)\"] {\n  transform: skewY(-25deg); }\n\n.active[data-transform*=\"skewX(-24deg)\"] {\n  transform: skewX(-24deg); }\n\n.active[data-transform*=\"skewY(-24deg)\"] {\n  transform: skewY(-24deg); }\n\n.active[data-transform*=\"skewX(-23deg)\"] {\n  transform: skewX(-23deg); }\n\n.active[data-transform*=\"skewY(-23deg)\"] {\n  transform: skewY(-23deg); }\n\n.active[data-transform*=\"skewX(-22deg)\"] {\n  transform: skewX(-22deg); }\n\n.active[data-transform*=\"skewY(-22deg)\"] {\n  transform: skewY(-22deg); }\n\n.active[data-transform*=\"skewX(-21deg)\"] {\n  transform: skewX(-21deg); }\n\n.active[data-transform*=\"skewY(-21deg)\"] {\n  transform: skewY(-21deg); }\n\n.active[data-transform*=\"skewX(-20deg)\"] {\n  transform: skewX(-20deg); }\n\n.active[data-transform*=\"skewY(-20deg)\"] {\n  transform: skewY(-20deg); }\n\n.active[data-transform*=\"skewX(-19deg)\"] {\n  transform: skewX(-19deg); }\n\n.active[data-transform*=\"skewY(-19deg)\"] {\n  transform: skewY(-19deg); }\n\n.active[data-transform*=\"skewX(-18deg)\"] {\n  transform: skewX(-18deg); }\n\n.active[data-transform*=\"skewY(-18deg)\"] {\n  transform: skewY(-18deg); }\n\n.active[data-transform*=\"skewX(-17deg)\"] {\n  transform: skewX(-17deg); }\n\n.active[data-transform*=\"skewY(-17deg)\"] {\n  transform: skewY(-17deg); }\n\n.active[data-transform*=\"skewX(-16deg)\"] {\n  transform: skewX(-16deg); }\n\n.active[data-transform*=\"skewY(-16deg)\"] {\n  transform: skewY(-16deg); }\n\n.active[data-transform*=\"skewX(-15deg)\"] {\n  transform: skewX(-15deg); }\n\n.active[data-transform*=\"skewY(-15deg)\"] {\n  transform: skewY(-15deg); }\n\n.active[data-transform*=\"skewX(-14deg)\"] {\n  transform: skewX(-14deg); }\n\n.active[data-transform*=\"skewY(-14deg)\"] {\n  transform: skewY(-14deg); }\n\n.active[data-transform*=\"skewX(-13deg)\"] {\n  transform: skewX(-13deg); }\n\n.active[data-transform*=\"skewY(-13deg)\"] {\n  transform: skewY(-13deg); }\n\n.active[data-transform*=\"skewX(-12deg)\"] {\n  transform: skewX(-12deg); }\n\n.active[data-transform*=\"skewY(-12deg)\"] {\n  transform: skewY(-12deg); }\n\n.active[data-transform*=\"skewX(-11deg)\"] {\n  transform: skewX(-11deg); }\n\n.active[data-transform*=\"skewY(-11deg)\"] {\n  transform: skewY(-11deg); }\n\n.active[data-transform*=\"skewX(-10deg)\"] {\n  transform: skewX(-10deg); }\n\n.active[data-transform*=\"skewY(-10deg)\"] {\n  transform: skewY(-10deg); }\n\n.active[data-transform*=\"skewX(-9deg)\"] {\n  transform: skewX(-9deg); }\n\n.active[data-transform*=\"skewY(-9deg)\"] {\n  transform: skewY(-9deg); }\n\n.active[data-transform*=\"skewX(-8deg)\"] {\n  transform: skewX(-8deg); }\n\n.active[data-transform*=\"skewY(-8deg)\"] {\n  transform: skewY(-8deg); }\n\n.active[data-transform*=\"skewX(-7deg)\"] {\n  transform: skewX(-7deg); }\n\n.active[data-transform*=\"skewY(-7deg)\"] {\n  transform: skewY(-7deg); }\n\n.active[data-transform*=\"skewX(-6deg)\"] {\n  transform: skewX(-6deg); }\n\n.active[data-transform*=\"skewY(-6deg)\"] {\n  transform: skewY(-6deg); }\n\n.active[data-transform*=\"skewX(-5deg)\"] {\n  transform: skewX(-5deg); }\n\n.active[data-transform*=\"skewY(-5deg)\"] {\n  transform: skewY(-5deg); }\n\n.active[data-transform*=\"skewX(-4deg)\"] {\n  transform: skewX(-4deg); }\n\n.active[data-transform*=\"skewY(-4deg)\"] {\n  transform: skewY(-4deg); }\n\n.active[data-transform*=\"skewX(-3deg)\"] {\n  transform: skewX(-3deg); }\n\n.active[data-transform*=\"skewY(-3deg)\"] {\n  transform: skewY(-3deg); }\n\n.active[data-transform*=\"skewX(-2deg)\"] {\n  transform: skewX(-2deg); }\n\n.active[data-transform*=\"skewY(-2deg)\"] {\n  transform: skewY(-2deg); }\n\n.active[data-transform*=\"skewX(-1deg)\"] {\n  transform: skewX(-1deg); }\n\n.active[data-transform*=\"skewY(-1deg)\"] {\n  transform: skewY(-1deg); }\n\n.active[data-transform*=\"skewX(0deg)\"] {\n  transform: skewX(0deg); }\n\n.active[data-transform*=\"skewY(0deg)\"] {\n  transform: skewY(0deg); }\n\n.active[data-transform*=\"skewX(1deg)\"] {\n  transform: skewX(1deg); }\n\n.active[data-transform*=\"skewY(1deg)\"] {\n  transform: skewY(1deg); }\n\n.active[data-transform*=\"skewX(2deg)\"] {\n  transform: skewX(2deg); }\n\n.active[data-transform*=\"skewY(2deg)\"] {\n  transform: skewY(2deg); }\n\n.active[data-transform*=\"skewX(3deg)\"] {\n  transform: skewX(3deg); }\n\n.active[data-transform*=\"skewY(3deg)\"] {\n  transform: skewY(3deg); }\n\n.active[data-transform*=\"skewX(4deg)\"] {\n  transform: skewX(4deg); }\n\n.active[data-transform*=\"skewY(4deg)\"] {\n  transform: skewY(4deg); }\n\n.active[data-transform*=\"skewX(5deg)\"] {\n  transform: skewX(5deg); }\n\n.active[data-transform*=\"skewY(5deg)\"] {\n  transform: skewY(5deg); }\n\n.active[data-transform*=\"skewX(6deg)\"] {\n  transform: skewX(6deg); }\n\n.active[data-transform*=\"skewY(6deg)\"] {\n  transform: skewY(6deg); }\n\n.active[data-transform*=\"skewX(7deg)\"] {\n  transform: skewX(7deg); }\n\n.active[data-transform*=\"skewY(7deg)\"] {\n  transform: skewY(7deg); }\n\n.active[data-transform*=\"skewX(8deg)\"] {\n  transform: skewX(8deg); }\n\n.active[data-transform*=\"skewY(8deg)\"] {\n  transform: skewY(8deg); }\n\n.active[data-transform*=\"skewX(9deg)\"] {\n  transform: skewX(9deg); }\n\n.active[data-transform*=\"skewY(9deg)\"] {\n  transform: skewY(9deg); }\n\n.active[data-transform*=\"skewX(10deg)\"] {\n  transform: skewX(10deg); }\n\n.active[data-transform*=\"skewY(10deg)\"] {\n  transform: skewY(10deg); }\n\n.active[data-transform*=\"skewX(11deg)\"] {\n  transform: skewX(11deg); }\n\n.active[data-transform*=\"skewY(11deg)\"] {\n  transform: skewY(11deg); }\n\n.active[data-transform*=\"skewX(12deg)\"] {\n  transform: skewX(12deg); }\n\n.active[data-transform*=\"skewY(12deg)\"] {\n  transform: skewY(12deg); }\n\n.active[data-transform*=\"skewX(13deg)\"] {\n  transform: skewX(13deg); }\n\n.active[data-transform*=\"skewY(13deg)\"] {\n  transform: skewY(13deg); }\n\n.active[data-transform*=\"skewX(14deg)\"] {\n  transform: skewX(14deg); }\n\n.active[data-transform*=\"skewY(14deg)\"] {\n  transform: skewY(14deg); }\n\n.active[data-transform*=\"skewX(15deg)\"] {\n  transform: skewX(15deg); }\n\n.active[data-transform*=\"skewY(15deg)\"] {\n  transform: skewY(15deg); }\n\n.active[data-transform*=\"skewX(16deg)\"] {\n  transform: skewX(16deg); }\n\n.active[data-transform*=\"skewY(16deg)\"] {\n  transform: skewY(16deg); }\n\n.active[data-transform*=\"skewX(17deg)\"] {\n  transform: skewX(17deg); }\n\n.active[data-transform*=\"skewY(17deg)\"] {\n  transform: skewY(17deg); }\n\n.active[data-transform*=\"skewX(18deg)\"] {\n  transform: skewX(18deg); }\n\n.active[data-transform*=\"skewY(18deg)\"] {\n  transform: skewY(18deg); }\n\n.active[data-transform*=\"skewX(19deg)\"] {\n  transform: skewX(19deg); }\n\n.active[data-transform*=\"skewY(19deg)\"] {\n  transform: skewY(19deg); }\n\n.active[data-transform*=\"skewX(20deg)\"] {\n  transform: skewX(20deg); }\n\n.active[data-transform*=\"skewY(20deg)\"] {\n  transform: skewY(20deg); }\n\n.active[data-transform*=\"skewX(21deg)\"] {\n  transform: skewX(21deg); }\n\n.active[data-transform*=\"skewY(21deg)\"] {\n  transform: skewY(21deg); }\n\n.active[data-transform*=\"skewX(22deg)\"] {\n  transform: skewX(22deg); }\n\n.active[data-transform*=\"skewY(22deg)\"] {\n  transform: skewY(22deg); }\n\n.active[data-transform*=\"skewX(23deg)\"] {\n  transform: skewX(23deg); }\n\n.active[data-transform*=\"skewY(23deg)\"] {\n  transform: skewY(23deg); }\n\n.active[data-transform*=\"skewX(24deg)\"] {\n  transform: skewX(24deg); }\n\n.active[data-transform*=\"skewY(24deg)\"] {\n  transform: skewY(24deg); }\n\n.active[data-transform*=\"skewX(25deg)\"] {\n  transform: skewX(25deg); }\n\n.active[data-transform*=\"skewY(25deg)\"] {\n  transform: skewY(25deg); }\n\n.active[data-transform*=\"skewX(26deg)\"] {\n  transform: skewX(26deg); }\n\n.active[data-transform*=\"skewY(26deg)\"] {\n  transform: skewY(26deg); }\n\n.active[data-transform*=\"skewX(27deg)\"] {\n  transform: skewX(27deg); }\n\n.active[data-transform*=\"skewY(27deg)\"] {\n  transform: skewY(27deg); }\n\n.active[data-transform*=\"skewX(28deg)\"] {\n  transform: skewX(28deg); }\n\n.active[data-transform*=\"skewY(28deg)\"] {\n  transform: skewY(28deg); }\n\n.active[data-transform*=\"skewX(29deg)\"] {\n  transform: skewX(29deg); }\n\n.active[data-transform*=\"skewY(29deg)\"] {\n  transform: skewY(29deg); }\n\n.active[data-transform*=\"skewX(30deg)\"] {\n  transform: skewX(30deg); }\n\n.active[data-transform*=\"skewY(30deg)\"] {\n  transform: skewY(30deg); }\n\n.active[data-transform*=\"skewX(31deg)\"] {\n  transform: skewX(31deg); }\n\n.active[data-transform*=\"skewY(31deg)\"] {\n  transform: skewY(31deg); }\n\n.active[data-transform*=\"skewX(32deg)\"] {\n  transform: skewX(32deg); }\n\n.active[data-transform*=\"skewY(32deg)\"] {\n  transform: skewY(32deg); }\n\n.active[data-transform*=\"skewX(33deg)\"] {\n  transform: skewX(33deg); }\n\n.active[data-transform*=\"skewY(33deg)\"] {\n  transform: skewY(33deg); }\n\n.active[data-transform*=\"skewX(34deg)\"] {\n  transform: skewX(34deg); }\n\n.active[data-transform*=\"skewY(34deg)\"] {\n  transform: skewY(34deg); }\n\n.active[data-transform*=\"skewX(35deg)\"] {\n  transform: skewX(35deg); }\n\n.active[data-transform*=\"skewY(35deg)\"] {\n  transform: skewY(35deg); }\n\n.active[data-transform*=\"skewX(36deg)\"] {\n  transform: skewX(36deg); }\n\n.active[data-transform*=\"skewY(36deg)\"] {\n  transform: skewY(36deg); }\n\n.active[data-transform*=\"skewX(37deg)\"] {\n  transform: skewX(37deg); }\n\n.active[data-transform*=\"skewY(37deg)\"] {\n  transform: skewY(37deg); }\n\n.active[data-transform*=\"skewX(38deg)\"] {\n  transform: skewX(38deg); }\n\n.active[data-transform*=\"skewY(38deg)\"] {\n  transform: skewY(38deg); }\n\n.active[data-transform*=\"skewX(39deg)\"] {\n  transform: skewX(39deg); }\n\n.active[data-transform*=\"skewY(39deg)\"] {\n  transform: skewY(39deg); }\n\n.active[data-transform*=\"skewX(40deg)\"] {\n  transform: skewX(40deg); }\n\n.active[data-transform*=\"skewY(40deg)\"] {\n  transform: skewY(40deg); }\n\n.active[data-transform*=\"skewX(41deg)\"] {\n  transform: skewX(41deg); }\n\n.active[data-transform*=\"skewY(41deg)\"] {\n  transform: skewY(41deg); }\n\n.active[data-transform*=\"skewX(42deg)\"] {\n  transform: skewX(42deg); }\n\n.active[data-transform*=\"skewY(42deg)\"] {\n  transform: skewY(42deg); }\n\n.active[data-transform*=\"skewX(43deg)\"] {\n  transform: skewX(43deg); }\n\n.active[data-transform*=\"skewY(43deg)\"] {\n  transform: skewY(43deg); }\n\n.active[data-transform*=\"skewX(44deg)\"] {\n  transform: skewX(44deg); }\n\n.active[data-transform*=\"skewY(44deg)\"] {\n  transform: skewY(44deg); }\n\n.active[data-transform*=\"skewX(45deg)\"] {\n  transform: skewX(45deg); }\n\n.active[data-transform*=\"skewY(45deg)\"] {\n  transform: skewY(45deg); }\n\n.active[data-transform*=\"skewX(46deg)\"] {\n  transform: skewX(46deg); }\n\n.active[data-transform*=\"skewY(46deg)\"] {\n  transform: skewY(46deg); }\n\n.active[data-transform*=\"skewX(47deg)\"] {\n  transform: skewX(47deg); }\n\n.active[data-transform*=\"skewY(47deg)\"] {\n  transform: skewY(47deg); }\n\n.active[data-transform*=\"skewX(48deg)\"] {\n  transform: skewX(48deg); }\n\n.active[data-transform*=\"skewY(48deg)\"] {\n  transform: skewY(48deg); }\n\n.active[data-transform*=\"skewX(49deg)\"] {\n  transform: skewX(49deg); }\n\n.active[data-transform*=\"skewY(49deg)\"] {\n  transform: skewY(49deg); }\n\n.active[data-transform*=\"skewX(50deg)\"] {\n  transform: skewX(50deg); }\n\n.active[data-transform*=\"skewY(50deg)\"] {\n  transform: skewY(50deg); }\n\n.active[data-transform*=\"rotate(-45deg)\"] {\n  transform: rotate(-45deg); }\n\n.active[data-transform*=\"rotate(-44deg)\"] {\n  transform: rotate(-44deg); }\n\n.active[data-transform*=\"rotate(-43deg)\"] {\n  transform: rotate(-43deg); }\n\n.active[data-transform*=\"rotate(-42deg)\"] {\n  transform: rotate(-42deg); }\n\n.active[data-transform*=\"rotate(-41deg)\"] {\n  transform: rotate(-41deg); }\n\n.active[data-transform*=\"rotate(-40deg)\"] {\n  transform: rotate(-40deg); }\n\n.active[data-transform*=\"rotate(-39deg)\"] {\n  transform: rotate(-39deg); }\n\n.active[data-transform*=\"rotate(-38deg)\"] {\n  transform: rotate(-38deg); }\n\n.active[data-transform*=\"rotate(-37deg)\"] {\n  transform: rotate(-37deg); }\n\n.active[data-transform*=\"rotate(-36deg)\"] {\n  transform: rotate(-36deg); }\n\n.active[data-transform*=\"rotate(-35deg)\"] {\n  transform: rotate(-35deg); }\n\n.active[data-transform*=\"rotate(-34deg)\"] {\n  transform: rotate(-34deg); }\n\n.active[data-transform*=\"rotate(-33deg)\"] {\n  transform: rotate(-33deg); }\n\n.active[data-transform*=\"rotate(-32deg)\"] {\n  transform: rotate(-32deg); }\n\n.active[data-transform*=\"rotate(-31deg)\"] {\n  transform: rotate(-31deg); }\n\n.active[data-transform*=\"rotate(-30deg)\"] {\n  transform: rotate(-30deg); }\n\n.active[data-transform*=\"rotate(-29deg)\"] {\n  transform: rotate(-29deg); }\n\n.active[data-transform*=\"rotate(-28deg)\"] {\n  transform: rotate(-28deg); }\n\n.active[data-transform*=\"rotate(-27deg)\"] {\n  transform: rotate(-27deg); }\n\n.active[data-transform*=\"rotate(-26deg)\"] {\n  transform: rotate(-26deg); }\n\n.active[data-transform*=\"rotate(-25deg)\"] {\n  transform: rotate(-25deg); }\n\n.active[data-transform*=\"rotate(-24deg)\"] {\n  transform: rotate(-24deg); }\n\n.active[data-transform*=\"rotate(-23deg)\"] {\n  transform: rotate(-23deg); }\n\n.active[data-transform*=\"rotate(-22deg)\"] {\n  transform: rotate(-22deg); }\n\n.active[data-transform*=\"rotate(-21deg)\"] {\n  transform: rotate(-21deg); }\n\n.active[data-transform*=\"rotate(-20deg)\"] {\n  transform: rotate(-20deg); }\n\n.active[data-transform*=\"rotate(-19deg)\"] {\n  transform: rotate(-19deg); }\n\n.active[data-transform*=\"rotate(-18deg)\"] {\n  transform: rotate(-18deg); }\n\n.active[data-transform*=\"rotate(-17deg)\"] {\n  transform: rotate(-17deg); }\n\n.active[data-transform*=\"rotate(-16deg)\"] {\n  transform: rotate(-16deg); }\n\n.active[data-transform*=\"rotate(-15deg)\"] {\n  transform: rotate(-15deg); }\n\n.active[data-transform*=\"rotate(-14deg)\"] {\n  transform: rotate(-14deg); }\n\n.active[data-transform*=\"rotate(-13deg)\"] {\n  transform: rotate(-13deg); }\n\n.active[data-transform*=\"rotate(-12deg)\"] {\n  transform: rotate(-12deg); }\n\n.active[data-transform*=\"rotate(-11deg)\"] {\n  transform: rotate(-11deg); }\n\n.active[data-transform*=\"rotate(-10deg)\"] {\n  transform: rotate(-10deg); }\n\n.active[data-transform*=\"rotate(-9deg)\"] {\n  transform: rotate(-9deg); }\n\n.active[data-transform*=\"rotate(-8deg)\"] {\n  transform: rotate(-8deg); }\n\n.active[data-transform*=\"rotate(-7deg)\"] {\n  transform: rotate(-7deg); }\n\n.active[data-transform*=\"rotate(-6deg)\"] {\n  transform: rotate(-6deg); }\n\n.active[data-transform*=\"rotate(-5deg)\"] {\n  transform: rotate(-5deg); }\n\n.active[data-transform*=\"rotate(-4deg)\"] {\n  transform: rotate(-4deg); }\n\n.active[data-transform*=\"rotate(-3deg)\"] {\n  transform: rotate(-3deg); }\n\n.active[data-transform*=\"rotate(-2deg)\"] {\n  transform: rotate(-2deg); }\n\n.active[data-transform*=\"rotate(-1deg)\"] {\n  transform: rotate(-1deg); }\n\n.active[data-transform*=\"rotate(0deg)\"] {\n  transform: rotate(0deg); }\n\n.active[data-transform*=\"rotate(1deg)\"] {\n  transform: rotate(1deg); }\n\n.active[data-transform*=\"rotate(2deg)\"] {\n  transform: rotate(2deg); }\n\n.active[data-transform*=\"rotate(3deg)\"] {\n  transform: rotate(3deg); }\n\n.active[data-transform*=\"rotate(4deg)\"] {\n  transform: rotate(4deg); }\n\n.active[data-transform*=\"rotate(5deg)\"] {\n  transform: rotate(5deg); }\n\n.active[data-transform*=\"rotate(6deg)\"] {\n  transform: rotate(6deg); }\n\n.active[data-transform*=\"rotate(7deg)\"] {\n  transform: rotate(7deg); }\n\n.active[data-transform*=\"rotate(8deg)\"] {\n  transform: rotate(8deg); }\n\n.active[data-transform*=\"rotate(9deg)\"] {\n  transform: rotate(9deg); }\n\n.active[data-transform*=\"rotate(10deg)\"] {\n  transform: rotate(10deg); }\n\n.active[data-transform*=\"rotate(11deg)\"] {\n  transform: rotate(11deg); }\n\n.active[data-transform*=\"rotate(12deg)\"] {\n  transform: rotate(12deg); }\n\n.active[data-transform*=\"rotate(13deg)\"] {\n  transform: rotate(13deg); }\n\n.active[data-transform*=\"rotate(14deg)\"] {\n  transform: rotate(14deg); }\n\n.active[data-transform*=\"rotate(15deg)\"] {\n  transform: rotate(15deg); }\n\n.active[data-transform*=\"rotate(16deg)\"] {\n  transform: rotate(16deg); }\n\n.active[data-transform*=\"rotate(17deg)\"] {\n  transform: rotate(17deg); }\n\n.active[data-transform*=\"rotate(18deg)\"] {\n  transform: rotate(18deg); }\n\n.active[data-transform*=\"rotate(19deg)\"] {\n  transform: rotate(19deg); }\n\n.active[data-transform*=\"rotate(20deg)\"] {\n  transform: rotate(20deg); }\n\n.active[data-transform*=\"rotate(21deg)\"] {\n  transform: rotate(21deg); }\n\n.active[data-transform*=\"rotate(22deg)\"] {\n  transform: rotate(22deg); }\n\n.active[data-transform*=\"rotate(23deg)\"] {\n  transform: rotate(23deg); }\n\n.active[data-transform*=\"rotate(24deg)\"] {\n  transform: rotate(24deg); }\n\n.active[data-transform*=\"rotate(25deg)\"] {\n  transform: rotate(25deg); }\n\n.active[data-transform*=\"rotate(26deg)\"] {\n  transform: rotate(26deg); }\n\n.active[data-transform*=\"rotate(27deg)\"] {\n  transform: rotate(27deg); }\n\n.active[data-transform*=\"rotate(28deg)\"] {\n  transform: rotate(28deg); }\n\n.active[data-transform*=\"rotate(29deg)\"] {\n  transform: rotate(29deg); }\n\n.active[data-transform*=\"rotate(30deg)\"] {\n  transform: rotate(30deg); }\n\n.active[data-transform*=\"rotate(31deg)\"] {\n  transform: rotate(31deg); }\n\n.active[data-transform*=\"rotate(32deg)\"] {\n  transform: rotate(32deg); }\n\n.active[data-transform*=\"rotate(33deg)\"] {\n  transform: rotate(33deg); }\n\n.active[data-transform*=\"rotate(34deg)\"] {\n  transform: rotate(34deg); }\n\n.active[data-transform*=\"rotate(35deg)\"] {\n  transform: rotate(35deg); }\n\n.active[data-transform*=\"rotate(36deg)\"] {\n  transform: rotate(36deg); }\n\n.active[data-transform*=\"rotate(37deg)\"] {\n  transform: rotate(37deg); }\n\n.active[data-transform*=\"rotate(38deg)\"] {\n  transform: rotate(38deg); }\n\n.active[data-transform*=\"rotate(39deg)\"] {\n  transform: rotate(39deg); }\n\n.active[data-transform*=\"rotate(40deg)\"] {\n  transform: rotate(40deg); }\n\n.active[data-transform*=\"rotate(41deg)\"] {\n  transform: rotate(41deg); }\n\n.active[data-transform*=\"rotate(42deg)\"] {\n  transform: rotate(42deg); }\n\n.active[data-transform*=\"rotate(43deg)\"] {\n  transform: rotate(43deg); }\n\n.active[data-transform*=\"rotate(44deg)\"] {\n  transform: rotate(44deg); }\n\n.active[data-transform*=\"rotate(45deg)\"] {\n  transform: rotate(45deg); }\n\n.active[data-transform*=\"rotate(46deg)\"] {\n  transform: rotate(46deg); }\n\n.active[data-transform*=\"rotate(47deg)\"] {\n  transform: rotate(47deg); }\n\n.active[data-transform*=\"rotate(48deg)\"] {\n  transform: rotate(48deg); }\n\n.active[data-transform*=\"rotate(49deg)\"] {\n  transform: rotate(49deg); }\n\n.active[data-transform*=\"rotate(50deg)\"] {\n  transform: rotate(50deg); }\n\n.active[data-transform*=\"rotate(51deg)\"] {\n  transform: rotate(51deg); }\n\n.active[data-transform*=\"rotate(52deg)\"] {\n  transform: rotate(52deg); }\n\n.active[data-transform*=\"rotate(53deg)\"] {\n  transform: rotate(53deg); }\n\n.active[data-transform*=\"rotate(54deg)\"] {\n  transform: rotate(54deg); }\n\n.active[data-transform*=\"rotate(55deg)\"] {\n  transform: rotate(55deg); }\n\n.active[data-transform*=\"rotate(56deg)\"] {\n  transform: rotate(56deg); }\n\n.active[data-transform*=\"rotate(57deg)\"] {\n  transform: rotate(57deg); }\n\n.active[data-transform*=\"rotate(58deg)\"] {\n  transform: rotate(58deg); }\n\n.active[data-transform*=\"rotate(59deg)\"] {\n  transform: rotate(59deg); }\n\n.active[data-transform*=\"rotate(60deg)\"] {\n  transform: rotate(60deg); }\n\n.active[data-transform*=\"rotate(61deg)\"] {\n  transform: rotate(61deg); }\n\n.active[data-transform*=\"rotate(62deg)\"] {\n  transform: rotate(62deg); }\n\n.active[data-transform*=\"rotate(63deg)\"] {\n  transform: rotate(63deg); }\n\n.active[data-transform*=\"rotate(64deg)\"] {\n  transform: rotate(64deg); }\n\n.active[data-transform*=\"rotate(65deg)\"] {\n  transform: rotate(65deg); }\n\n.active[data-transform*=\"rotate(66deg)\"] {\n  transform: rotate(66deg); }\n\n.active[data-transform*=\"rotate(67deg)\"] {\n  transform: rotate(67deg); }\n\n.active[data-transform*=\"rotate(68deg)\"] {\n  transform: rotate(68deg); }\n\n.active[data-transform*=\"rotate(69deg)\"] {\n  transform: rotate(69deg); }\n\n.active[data-transform*=\"rotate(70deg)\"] {\n  transform: rotate(70deg); }\n\n.active[data-transform*=\"rotate(71deg)\"] {\n  transform: rotate(71deg); }\n\n.active[data-transform*=\"rotate(72deg)\"] {\n  transform: rotate(72deg); }\n\n.active[data-transform*=\"rotate(73deg)\"] {\n  transform: rotate(73deg); }\n\n.active[data-transform*=\"rotate(74deg)\"] {\n  transform: rotate(74deg); }\n\n.active[data-transform*=\"rotate(75deg)\"] {\n  transform: rotate(75deg); }\n\n.active[data-transform*=\"rotate(76deg)\"] {\n  transform: rotate(76deg); }\n\n.active[data-transform*=\"rotate(77deg)\"] {\n  transform: rotate(77deg); }\n\n.active[data-transform*=\"rotate(78deg)\"] {\n  transform: rotate(78deg); }\n\n.active[data-transform*=\"rotate(79deg)\"] {\n  transform: rotate(79deg); }\n\n.active[data-transform*=\"rotate(80deg)\"] {\n  transform: rotate(80deg); }\n\n.active[data-transform*=\"rotate(81deg)\"] {\n  transform: rotate(81deg); }\n\n.active[data-transform*=\"rotate(82deg)\"] {\n  transform: rotate(82deg); }\n\n.active[data-transform*=\"rotate(83deg)\"] {\n  transform: rotate(83deg); }\n\n.active[data-transform*=\"rotate(84deg)\"] {\n  transform: rotate(84deg); }\n\n.active[data-transform*=\"rotate(85deg)\"] {\n  transform: rotate(85deg); }\n\n.active[data-transform*=\"rotate(86deg)\"] {\n  transform: rotate(86deg); }\n\n.active[data-transform*=\"rotate(87deg)\"] {\n  transform: rotate(87deg); }\n\n.active[data-transform*=\"rotate(88deg)\"] {\n  transform: rotate(88deg); }\n\n.active[data-transform*=\"rotate(89deg)\"] {\n  transform: rotate(89deg); }\n\n.active[data-transform*=\"rotate(90deg)\"] {\n  transform: rotate(90deg); }\n\n.active[data-transform*=\"rotate(91deg)\"] {\n  transform: rotate(91deg); }\n\n.active[data-transform*=\"rotate(92deg)\"] {\n  transform: rotate(92deg); }\n\n.active[data-transform*=\"rotate(93deg)\"] {\n  transform: rotate(93deg); }\n\n.active[data-transform*=\"rotate(94deg)\"] {\n  transform: rotate(94deg); }\n\n.active[data-transform*=\"rotate(95deg)\"] {\n  transform: rotate(95deg); }\n\n.active[data-transform*=\"rotate(96deg)\"] {\n  transform: rotate(96deg); }\n\n.active[data-transform*=\"rotate(97deg)\"] {\n  transform: rotate(97deg); }\n\n.active[data-transform*=\"rotate(98deg)\"] {\n  transform: rotate(98deg); }\n\n.active[data-transform*=\"rotate(99deg)\"] {\n  transform: rotate(99deg); }\n\n.active[data-transform*=\"rotate(100deg)\"] {\n  transform: rotate(100deg); }\n\n.active[data-transform*=\"rotate(101deg)\"] {\n  transform: rotate(101deg); }\n\n.active[data-transform*=\"rotate(102deg)\"] {\n  transform: rotate(102deg); }\n\n.active[data-transform*=\"rotate(103deg)\"] {\n  transform: rotate(103deg); }\n\n.active[data-transform*=\"rotate(104deg)\"] {\n  transform: rotate(104deg); }\n\n.active[data-transform*=\"rotate(105deg)\"] {\n  transform: rotate(105deg); }\n\n.active[data-transform*=\"rotate(106deg)\"] {\n  transform: rotate(106deg); }\n\n.active[data-transform*=\"rotate(107deg)\"] {\n  transform: rotate(107deg); }\n\n.active[data-transform*=\"rotate(108deg)\"] {\n  transform: rotate(108deg); }\n\n.active[data-transform*=\"rotate(109deg)\"] {\n  transform: rotate(109deg); }\n\n.active[data-transform*=\"rotate(110deg)\"] {\n  transform: rotate(110deg); }\n\n.active[data-transform*=\"rotate(111deg)\"] {\n  transform: rotate(111deg); }\n\n.active[data-transform*=\"rotate(112deg)\"] {\n  transform: rotate(112deg); }\n\n.active[data-transform*=\"rotate(113deg)\"] {\n  transform: rotate(113deg); }\n\n.active[data-transform*=\"rotate(114deg)\"] {\n  transform: rotate(114deg); }\n\n.active[data-transform*=\"rotate(115deg)\"] {\n  transform: rotate(115deg); }\n\n.active[data-transform*=\"rotate(116deg)\"] {\n  transform: rotate(116deg); }\n\n.active[data-transform*=\"rotate(117deg)\"] {\n  transform: rotate(117deg); }\n\n.active[data-transform*=\"rotate(118deg)\"] {\n  transform: rotate(118deg); }\n\n.active[data-transform*=\"rotate(119deg)\"] {\n  transform: rotate(119deg); }\n\n.active[data-transform*=\"rotate(120deg)\"] {\n  transform: rotate(120deg); }\n\n.active[data-transform*=\"rotate(121deg)\"] {\n  transform: rotate(121deg); }\n\n.active[data-transform*=\"rotate(122deg)\"] {\n  transform: rotate(122deg); }\n\n.active[data-transform*=\"rotate(123deg)\"] {\n  transform: rotate(123deg); }\n\n.active[data-transform*=\"rotate(124deg)\"] {\n  transform: rotate(124deg); }\n\n.active[data-transform*=\"rotate(125deg)\"] {\n  transform: rotate(125deg); }\n\n.active[data-transform*=\"rotate(126deg)\"] {\n  transform: rotate(126deg); }\n\n.active[data-transform*=\"rotate(127deg)\"] {\n  transform: rotate(127deg); }\n\n.active[data-transform*=\"rotate(128deg)\"] {\n  transform: rotate(128deg); }\n\n.active[data-transform*=\"rotate(129deg)\"] {\n  transform: rotate(129deg); }\n\n.active[data-transform*=\"rotate(130deg)\"] {\n  transform: rotate(130deg); }\n\n.active[data-transform*=\"rotate(131deg)\"] {\n  transform: rotate(131deg); }\n\n.active[data-transform*=\"rotate(132deg)\"] {\n  transform: rotate(132deg); }\n\n.active[data-transform*=\"rotate(133deg)\"] {\n  transform: rotate(133deg); }\n\n.active[data-transform*=\"rotate(134deg)\"] {\n  transform: rotate(134deg); }\n\n.active[data-transform*=\"rotate(135deg)\"] {\n  transform: rotate(135deg); }\n\n.active[data-transform*=\"rotate(136deg)\"] {\n  transform: rotate(136deg); }\n\n.active[data-transform*=\"rotate(137deg)\"] {\n  transform: rotate(137deg); }\n\n.active[data-transform*=\"rotate(138deg)\"] {\n  transform: rotate(138deg); }\n\n.active[data-transform*=\"rotate(139deg)\"] {\n  transform: rotate(139deg); }\n\n.active[data-transform*=\"rotate(140deg)\"] {\n  transform: rotate(140deg); }\n\n.active[data-transform*=\"rotate(141deg)\"] {\n  transform: rotate(141deg); }\n\n.active[data-transform*=\"rotate(142deg)\"] {\n  transform: rotate(142deg); }\n\n.active[data-transform*=\"rotate(143deg)\"] {\n  transform: rotate(143deg); }\n\n.active[data-transform*=\"rotate(144deg)\"] {\n  transform: rotate(144deg); }\n\n.active[data-transform*=\"rotate(145deg)\"] {\n  transform: rotate(145deg); }\n\n.active[data-transform*=\"rotate(146deg)\"] {\n  transform: rotate(146deg); }\n\n.active[data-transform*=\"rotate(147deg)\"] {\n  transform: rotate(147deg); }\n\n.active[data-transform*=\"rotate(148deg)\"] {\n  transform: rotate(148deg); }\n\n.active[data-transform*=\"rotate(149deg)\"] {\n  transform: rotate(149deg); }\n\n.active[data-transform*=\"rotate(150deg)\"] {\n  transform: rotate(150deg); }\n\n.active[data-transform*=\"rotate(151deg)\"] {\n  transform: rotate(151deg); }\n\n.active[data-transform*=\"rotate(152deg)\"] {\n  transform: rotate(152deg); }\n\n.active[data-transform*=\"rotate(153deg)\"] {\n  transform: rotate(153deg); }\n\n.active[data-transform*=\"rotate(154deg)\"] {\n  transform: rotate(154deg); }\n\n.active[data-transform*=\"rotate(155deg)\"] {\n  transform: rotate(155deg); }\n\n.active[data-transform*=\"rotate(156deg)\"] {\n  transform: rotate(156deg); }\n\n.active[data-transform*=\"rotate(157deg)\"] {\n  transform: rotate(157deg); }\n\n.active[data-transform*=\"rotate(158deg)\"] {\n  transform: rotate(158deg); }\n\n.active[data-transform*=\"rotate(159deg)\"] {\n  transform: rotate(159deg); }\n\n.active[data-transform*=\"rotate(160deg)\"] {\n  transform: rotate(160deg); }\n\n.active[data-transform*=\"rotate(161deg)\"] {\n  transform: rotate(161deg); }\n\n.active[data-transform*=\"rotate(162deg)\"] {\n  transform: rotate(162deg); }\n\n.active[data-transform*=\"rotate(163deg)\"] {\n  transform: rotate(163deg); }\n\n.active[data-transform*=\"rotate(164deg)\"] {\n  transform: rotate(164deg); }\n\n.active[data-transform*=\"rotate(165deg)\"] {\n  transform: rotate(165deg); }\n\n.active[data-transform*=\"rotate(166deg)\"] {\n  transform: rotate(166deg); }\n\n.active[data-transform*=\"rotate(167deg)\"] {\n  transform: rotate(167deg); }\n\n.active[data-transform*=\"rotate(168deg)\"] {\n  transform: rotate(168deg); }\n\n.active[data-transform*=\"rotate(169deg)\"] {\n  transform: rotate(169deg); }\n\n.active[data-transform*=\"rotate(170deg)\"] {\n  transform: rotate(170deg); }\n\n.active[data-transform*=\"rotate(171deg)\"] {\n  transform: rotate(171deg); }\n\n.active[data-transform*=\"rotate(172deg)\"] {\n  transform: rotate(172deg); }\n\n.active[data-transform*=\"rotate(173deg)\"] {\n  transform: rotate(173deg); }\n\n.active[data-transform*=\"rotate(174deg)\"] {\n  transform: rotate(174deg); }\n\n.active[data-transform*=\"rotate(175deg)\"] {\n  transform: rotate(175deg); }\n\n.active[data-transform*=\"rotate(176deg)\"] {\n  transform: rotate(176deg); }\n\n.active[data-transform*=\"rotate(177deg)\"] {\n  transform: rotate(177deg); }\n\n.active[data-transform*=\"rotate(178deg)\"] {\n  transform: rotate(178deg); }\n\n.active[data-transform*=\"rotate(179deg)\"] {\n  transform: rotate(179deg); }\n\n.active[data-transform*=\"rotate(180deg)\"] {\n  transform: rotate(180deg); }\n\n.active[data-transform*=\"translate(-9%, -9%)\"] {\n  transform: translate(-9%, -9%); }\n\n.active[data-transform*=\"translate(-9%, -8%)\"] {\n  transform: translate(-9%, -8%); }\n\n.active[data-transform*=\"translate(-9%, -7%)\"] {\n  transform: translate(-9%, -7%); }\n\n.active[data-transform*=\"translate(-9%, -6%)\"] {\n  transform: translate(-9%, -6%); }\n\n.active[data-transform*=\"translate(-9%, -5%)\"] {\n  transform: translate(-9%, -5%); }\n\n.active[data-transform*=\"translate(-9%, -4%)\"] {\n  transform: translate(-9%, -4%); }\n\n.active[data-transform*=\"translate(-9%, -3%)\"] {\n  transform: translate(-9%, -3%); }\n\n.active[data-transform*=\"translate(-9%, -2%)\"] {\n  transform: translate(-9%, -2%); }\n\n.active[data-transform*=\"translate(-9%, -1%)\"] {\n  transform: translate(-9%, -1%); }\n\n.active[data-transform*=\"translate(-9%, 0%)\"] {\n  transform: translate(-9%, 0%); }\n\n.active[data-transform*=\"translate(-9%, 1%)\"] {\n  transform: translate(-9%, 1%); }\n\n.active[data-transform*=\"translate(-9%, 2%)\"] {\n  transform: translate(-9%, 2%); }\n\n.active[data-transform*=\"translate(-9%, 3%)\"] {\n  transform: translate(-9%, 3%); }\n\n.active[data-transform*=\"translate(-9%, 4%)\"] {\n  transform: translate(-9%, 4%); }\n\n.active[data-transform*=\"translate(-9%, 5%)\"] {\n  transform: translate(-9%, 5%); }\n\n.active[data-transform*=\"translate(-9%, 6%)\"] {\n  transform: translate(-9%, 6%); }\n\n.active[data-transform*=\"translate(-9%, 7%)\"] {\n  transform: translate(-9%, 7%); }\n\n.active[data-transform*=\"translate(-9%, 8%)\"] {\n  transform: translate(-9%, 8%); }\n\n.active[data-transform*=\"translate(-9%, 9%)\"] {\n  transform: translate(-9%, 9%); }\n\n.active[data-transform*=\"translate(-8%, -9%)\"] {\n  transform: translate(-8%, -9%); }\n\n.active[data-transform*=\"translate(-8%, -8%)\"] {\n  transform: translate(-8%, -8%); }\n\n.active[data-transform*=\"translate(-8%, -7%)\"] {\n  transform: translate(-8%, -7%); }\n\n.active[data-transform*=\"translate(-8%, -6%)\"] {\n  transform: translate(-8%, -6%); }\n\n.active[data-transform*=\"translate(-8%, -5%)\"] {\n  transform: translate(-8%, -5%); }\n\n.active[data-transform*=\"translate(-8%, -4%)\"] {\n  transform: translate(-8%, -4%); }\n\n.active[data-transform*=\"translate(-8%, -3%)\"] {\n  transform: translate(-8%, -3%); }\n\n.active[data-transform*=\"translate(-8%, -2%)\"] {\n  transform: translate(-8%, -2%); }\n\n.active[data-transform*=\"translate(-8%, -1%)\"] {\n  transform: translate(-8%, -1%); }\n\n.active[data-transform*=\"translate(-8%, 0%)\"] {\n  transform: translate(-8%, 0%); }\n\n.active[data-transform*=\"translate(-8%, 1%)\"] {\n  transform: translate(-8%, 1%); }\n\n.active[data-transform*=\"translate(-8%, 2%)\"] {\n  transform: translate(-8%, 2%); }\n\n.active[data-transform*=\"translate(-8%, 3%)\"] {\n  transform: translate(-8%, 3%); }\n\n.active[data-transform*=\"translate(-8%, 4%)\"] {\n  transform: translate(-8%, 4%); }\n\n.active[data-transform*=\"translate(-8%, 5%)\"] {\n  transform: translate(-8%, 5%); }\n\n.active[data-transform*=\"translate(-8%, 6%)\"] {\n  transform: translate(-8%, 6%); }\n\n.active[data-transform*=\"translate(-8%, 7%)\"] {\n  transform: translate(-8%, 7%); }\n\n.active[data-transform*=\"translate(-8%, 8%)\"] {\n  transform: translate(-8%, 8%); }\n\n.active[data-transform*=\"translate(-8%, 9%)\"] {\n  transform: translate(-8%, 9%); }\n\n.active[data-transform*=\"translate(-7%, -9%)\"] {\n  transform: translate(-7%, -9%); }\n\n.active[data-transform*=\"translate(-7%, -8%)\"] {\n  transform: translate(-7%, -8%); }\n\n.active[data-transform*=\"translate(-7%, -7%)\"] {\n  transform: translate(-7%, -7%); }\n\n.active[data-transform*=\"translate(-7%, -6%)\"] {\n  transform: translate(-7%, -6%); }\n\n.active[data-transform*=\"translate(-7%, -5%)\"] {\n  transform: translate(-7%, -5%); }\n\n.active[data-transform*=\"translate(-7%, -4%)\"] {\n  transform: translate(-7%, -4%); }\n\n.active[data-transform*=\"translate(-7%, -3%)\"] {\n  transform: translate(-7%, -3%); }\n\n.active[data-transform*=\"translate(-7%, -2%)\"] {\n  transform: translate(-7%, -2%); }\n\n.active[data-transform*=\"translate(-7%, -1%)\"] {\n  transform: translate(-7%, -1%); }\n\n.active[data-transform*=\"translate(-7%, 0%)\"] {\n  transform: translate(-7%, 0%); }\n\n.active[data-transform*=\"translate(-7%, 1%)\"] {\n  transform: translate(-7%, 1%); }\n\n.active[data-transform*=\"translate(-7%, 2%)\"] {\n  transform: translate(-7%, 2%); }\n\n.active[data-transform*=\"translate(-7%, 3%)\"] {\n  transform: translate(-7%, 3%); }\n\n.active[data-transform*=\"translate(-7%, 4%)\"] {\n  transform: translate(-7%, 4%); }\n\n.active[data-transform*=\"translate(-7%, 5%)\"] {\n  transform: translate(-7%, 5%); }\n\n.active[data-transform*=\"translate(-7%, 6%)\"] {\n  transform: translate(-7%, 6%); }\n\n.active[data-transform*=\"translate(-7%, 7%)\"] {\n  transform: translate(-7%, 7%); }\n\n.active[data-transform*=\"translate(-7%, 8%)\"] {\n  transform: translate(-7%, 8%); }\n\n.active[data-transform*=\"translate(-7%, 9%)\"] {\n  transform: translate(-7%, 9%); }\n\n.active[data-transform*=\"translate(-6%, -9%)\"] {\n  transform: translate(-6%, -9%); }\n\n.active[data-transform*=\"translate(-6%, -8%)\"] {\n  transform: translate(-6%, -8%); }\n\n.active[data-transform*=\"translate(-6%, -7%)\"] {\n  transform: translate(-6%, -7%); }\n\n.active[data-transform*=\"translate(-6%, -6%)\"] {\n  transform: translate(-6%, -6%); }\n\n.active[data-transform*=\"translate(-6%, -5%)\"] {\n  transform: translate(-6%, -5%); }\n\n.active[data-transform*=\"translate(-6%, -4%)\"] {\n  transform: translate(-6%, -4%); }\n\n.active[data-transform*=\"translate(-6%, -3%)\"] {\n  transform: translate(-6%, -3%); }\n\n.active[data-transform*=\"translate(-6%, -2%)\"] {\n  transform: translate(-6%, -2%); }\n\n.active[data-transform*=\"translate(-6%, -1%)\"] {\n  transform: translate(-6%, -1%); }\n\n.active[data-transform*=\"translate(-6%, 0%)\"] {\n  transform: translate(-6%, 0%); }\n\n.active[data-transform*=\"translate(-6%, 1%)\"] {\n  transform: translate(-6%, 1%); }\n\n.active[data-transform*=\"translate(-6%, 2%)\"] {\n  transform: translate(-6%, 2%); }\n\n.active[data-transform*=\"translate(-6%, 3%)\"] {\n  transform: translate(-6%, 3%); }\n\n.active[data-transform*=\"translate(-6%, 4%)\"] {\n  transform: translate(-6%, 4%); }\n\n.active[data-transform*=\"translate(-6%, 5%)\"] {\n  transform: translate(-6%, 5%); }\n\n.active[data-transform*=\"translate(-6%, 6%)\"] {\n  transform: translate(-6%, 6%); }\n\n.active[data-transform*=\"translate(-6%, 7%)\"] {\n  transform: translate(-6%, 7%); }\n\n.active[data-transform*=\"translate(-6%, 8%)\"] {\n  transform: translate(-6%, 8%); }\n\n.active[data-transform*=\"translate(-6%, 9%)\"] {\n  transform: translate(-6%, 9%); }\n\n.active[data-transform*=\"translate(-5%, -9%)\"] {\n  transform: translate(-5%, -9%); }\n\n.active[data-transform*=\"translate(-5%, -8%)\"] {\n  transform: translate(-5%, -8%); }\n\n.active[data-transform*=\"translate(-5%, -7%)\"] {\n  transform: translate(-5%, -7%); }\n\n.active[data-transform*=\"translate(-5%, -6%)\"] {\n  transform: translate(-5%, -6%); }\n\n.active[data-transform*=\"translate(-5%, -5%)\"] {\n  transform: translate(-5%, -5%); }\n\n.active[data-transform*=\"translate(-5%, -4%)\"] {\n  transform: translate(-5%, -4%); }\n\n.active[data-transform*=\"translate(-5%, -3%)\"] {\n  transform: translate(-5%, -3%); }\n\n.active[data-transform*=\"translate(-5%, -2%)\"] {\n  transform: translate(-5%, -2%); }\n\n.active[data-transform*=\"translate(-5%, -1%)\"] {\n  transform: translate(-5%, -1%); }\n\n.active[data-transform*=\"translate(-5%, 0%)\"] {\n  transform: translate(-5%, 0%); }\n\n.active[data-transform*=\"translate(-5%, 1%)\"] {\n  transform: translate(-5%, 1%); }\n\n.active[data-transform*=\"translate(-5%, 2%)\"] {\n  transform: translate(-5%, 2%); }\n\n.active[data-transform*=\"translate(-5%, 3%)\"] {\n  transform: translate(-5%, 3%); }\n\n.active[data-transform*=\"translate(-5%, 4%)\"] {\n  transform: translate(-5%, 4%); }\n\n.active[data-transform*=\"translate(-5%, 5%)\"] {\n  transform: translate(-5%, 5%); }\n\n.active[data-transform*=\"translate(-5%, 6%)\"] {\n  transform: translate(-5%, 6%); }\n\n.active[data-transform*=\"translate(-5%, 7%)\"] {\n  transform: translate(-5%, 7%); }\n\n.active[data-transform*=\"translate(-5%, 8%)\"] {\n  transform: translate(-5%, 8%); }\n\n.active[data-transform*=\"translate(-5%, 9%)\"] {\n  transform: translate(-5%, 9%); }\n\n.active[data-transform*=\"translate(-4%, -9%)\"] {\n  transform: translate(-4%, -9%); }\n\n.active[data-transform*=\"translate(-4%, -8%)\"] {\n  transform: translate(-4%, -8%); }\n\n.active[data-transform*=\"translate(-4%, -7%)\"] {\n  transform: translate(-4%, -7%); }\n\n.active[data-transform*=\"translate(-4%, -6%)\"] {\n  transform: translate(-4%, -6%); }\n\n.active[data-transform*=\"translate(-4%, -5%)\"] {\n  transform: translate(-4%, -5%); }\n\n.active[data-transform*=\"translate(-4%, -4%)\"] {\n  transform: translate(-4%, -4%); }\n\n.active[data-transform*=\"translate(-4%, -3%)\"] {\n  transform: translate(-4%, -3%); }\n\n.active[data-transform*=\"translate(-4%, -2%)\"] {\n  transform: translate(-4%, -2%); }\n\n.active[data-transform*=\"translate(-4%, -1%)\"] {\n  transform: translate(-4%, -1%); }\n\n.active[data-transform*=\"translate(-4%, 0%)\"] {\n  transform: translate(-4%, 0%); }\n\n.active[data-transform*=\"translate(-4%, 1%)\"] {\n  transform: translate(-4%, 1%); }\n\n.active[data-transform*=\"translate(-4%, 2%)\"] {\n  transform: translate(-4%, 2%); }\n\n.active[data-transform*=\"translate(-4%, 3%)\"] {\n  transform: translate(-4%, 3%); }\n\n.active[data-transform*=\"translate(-4%, 4%)\"] {\n  transform: translate(-4%, 4%); }\n\n.active[data-transform*=\"translate(-4%, 5%)\"] {\n  transform: translate(-4%, 5%); }\n\n.active[data-transform*=\"translate(-4%, 6%)\"] {\n  transform: translate(-4%, 6%); }\n\n.active[data-transform*=\"translate(-4%, 7%)\"] {\n  transform: translate(-4%, 7%); }\n\n.active[data-transform*=\"translate(-4%, 8%)\"] {\n  transform: translate(-4%, 8%); }\n\n.active[data-transform*=\"translate(-4%, 9%)\"] {\n  transform: translate(-4%, 9%); }\n\n.active[data-transform*=\"translate(-3%, -9%)\"] {\n  transform: translate(-3%, -9%); }\n\n.active[data-transform*=\"translate(-3%, -8%)\"] {\n  transform: translate(-3%, -8%); }\n\n.active[data-transform*=\"translate(-3%, -7%)\"] {\n  transform: translate(-3%, -7%); }\n\n.active[data-transform*=\"translate(-3%, -6%)\"] {\n  transform: translate(-3%, -6%); }\n\n.active[data-transform*=\"translate(-3%, -5%)\"] {\n  transform: translate(-3%, -5%); }\n\n.active[data-transform*=\"translate(-3%, -4%)\"] {\n  transform: translate(-3%, -4%); }\n\n.active[data-transform*=\"translate(-3%, -3%)\"] {\n  transform: translate(-3%, -3%); }\n\n.active[data-transform*=\"translate(-3%, -2%)\"] {\n  transform: translate(-3%, -2%); }\n\n.active[data-transform*=\"translate(-3%, -1%)\"] {\n  transform: translate(-3%, -1%); }\n\n.active[data-transform*=\"translate(-3%, 0%)\"] {\n  transform: translate(-3%, 0%); }\n\n.active[data-transform*=\"translate(-3%, 1%)\"] {\n  transform: translate(-3%, 1%); }\n\n.active[data-transform*=\"translate(-3%, 2%)\"] {\n  transform: translate(-3%, 2%); }\n\n.active[data-transform*=\"translate(-3%, 3%)\"] {\n  transform: translate(-3%, 3%); }\n\n.active[data-transform*=\"translate(-3%, 4%)\"] {\n  transform: translate(-3%, 4%); }\n\n.active[data-transform*=\"translate(-3%, 5%)\"] {\n  transform: translate(-3%, 5%); }\n\n.active[data-transform*=\"translate(-3%, 6%)\"] {\n  transform: translate(-3%, 6%); }\n\n.active[data-transform*=\"translate(-3%, 7%)\"] {\n  transform: translate(-3%, 7%); }\n\n.active[data-transform*=\"translate(-3%, 8%)\"] {\n  transform: translate(-3%, 8%); }\n\n.active[data-transform*=\"translate(-3%, 9%)\"] {\n  transform: translate(-3%, 9%); }\n\n.active[data-transform*=\"translate(-2%, -9%)\"] {\n  transform: translate(-2%, -9%); }\n\n.active[data-transform*=\"translate(-2%, -8%)\"] {\n  transform: translate(-2%, -8%); }\n\n.active[data-transform*=\"translate(-2%, -7%)\"] {\n  transform: translate(-2%, -7%); }\n\n.active[data-transform*=\"translate(-2%, -6%)\"] {\n  transform: translate(-2%, -6%); }\n\n.active[data-transform*=\"translate(-2%, -5%)\"] {\n  transform: translate(-2%, -5%); }\n\n.active[data-transform*=\"translate(-2%, -4%)\"] {\n  transform: translate(-2%, -4%); }\n\n.active[data-transform*=\"translate(-2%, -3%)\"] {\n  transform: translate(-2%, -3%); }\n\n.active[data-transform*=\"translate(-2%, -2%)\"] {\n  transform: translate(-2%, -2%); }\n\n.active[data-transform*=\"translate(-2%, -1%)\"] {\n  transform: translate(-2%, -1%); }\n\n.active[data-transform*=\"translate(-2%, 0%)\"] {\n  transform: translate(-2%, 0%); }\n\n.active[data-transform*=\"translate(-2%, 1%)\"] {\n  transform: translate(-2%, 1%); }\n\n.active[data-transform*=\"translate(-2%, 2%)\"] {\n  transform: translate(-2%, 2%); }\n\n.active[data-transform*=\"translate(-2%, 3%)\"] {\n  transform: translate(-2%, 3%); }\n\n.active[data-transform*=\"translate(-2%, 4%)\"] {\n  transform: translate(-2%, 4%); }\n\n.active[data-transform*=\"translate(-2%, 5%)\"] {\n  transform: translate(-2%, 5%); }\n\n.active[data-transform*=\"translate(-2%, 6%)\"] {\n  transform: translate(-2%, 6%); }\n\n.active[data-transform*=\"translate(-2%, 7%)\"] {\n  transform: translate(-2%, 7%); }\n\n.active[data-transform*=\"translate(-2%, 8%)\"] {\n  transform: translate(-2%, 8%); }\n\n.active[data-transform*=\"translate(-2%, 9%)\"] {\n  transform: translate(-2%, 9%); }\n\n.active[data-transform*=\"translate(-1%, -9%)\"] {\n  transform: translate(-1%, -9%); }\n\n.active[data-transform*=\"translate(-1%, -8%)\"] {\n  transform: translate(-1%, -8%); }\n\n.active[data-transform*=\"translate(-1%, -7%)\"] {\n  transform: translate(-1%, -7%); }\n\n.active[data-transform*=\"translate(-1%, -6%)\"] {\n  transform: translate(-1%, -6%); }\n\n.active[data-transform*=\"translate(-1%, -5%)\"] {\n  transform: translate(-1%, -5%); }\n\n.active[data-transform*=\"translate(-1%, -4%)\"] {\n  transform: translate(-1%, -4%); }\n\n.active[data-transform*=\"translate(-1%, -3%)\"] {\n  transform: translate(-1%, -3%); }\n\n.active[data-transform*=\"translate(-1%, -2%)\"] {\n  transform: translate(-1%, -2%); }\n\n.active[data-transform*=\"translate(-1%, -1%)\"] {\n  transform: translate(-1%, -1%); }\n\n.active[data-transform*=\"translate(-1%, 0%)\"] {\n  transform: translate(-1%, 0%); }\n\n.active[data-transform*=\"translate(-1%, 1%)\"] {\n  transform: translate(-1%, 1%); }\n\n.active[data-transform*=\"translate(-1%, 2%)\"] {\n  transform: translate(-1%, 2%); }\n\n.active[data-transform*=\"translate(-1%, 3%)\"] {\n  transform: translate(-1%, 3%); }\n\n.active[data-transform*=\"translate(-1%, 4%)\"] {\n  transform: translate(-1%, 4%); }\n\n.active[data-transform*=\"translate(-1%, 5%)\"] {\n  transform: translate(-1%, 5%); }\n\n.active[data-transform*=\"translate(-1%, 6%)\"] {\n  transform: translate(-1%, 6%); }\n\n.active[data-transform*=\"translate(-1%, 7%)\"] {\n  transform: translate(-1%, 7%); }\n\n.active[data-transform*=\"translate(-1%, 8%)\"] {\n  transform: translate(-1%, 8%); }\n\n.active[data-transform*=\"translate(-1%, 9%)\"] {\n  transform: translate(-1%, 9%); }\n\n.active[data-transform*=\"translate(0%, -9%)\"] {\n  transform: translate(0%, -9%); }\n\n.active[data-transform*=\"translate(0%, -8%)\"] {\n  transform: translate(0%, -8%); }\n\n.active[data-transform*=\"translate(0%, -7%)\"] {\n  transform: translate(0%, -7%); }\n\n.active[data-transform*=\"translate(0%, -6%)\"] {\n  transform: translate(0%, -6%); }\n\n.active[data-transform*=\"translate(0%, -5%)\"] {\n  transform: translate(0%, -5%); }\n\n.active[data-transform*=\"translate(0%, -4%)\"] {\n  transform: translate(0%, -4%); }\n\n.active[data-transform*=\"translate(0%, -3%)\"] {\n  transform: translate(0%, -3%); }\n\n.active[data-transform*=\"translate(0%, -2%)\"] {\n  transform: translate(0%, -2%); }\n\n.active[data-transform*=\"translate(0%, -1%)\"] {\n  transform: translate(0%, -1%); }\n\n.active[data-transform*=\"translate(0%, 0%)\"] {\n  transform: translate(0%, 0%); }\n\n.active[data-transform*=\"translate(0%, 1%)\"] {\n  transform: translate(0%, 1%); }\n\n.active[data-transform*=\"translate(0%, 2%)\"] {\n  transform: translate(0%, 2%); }\n\n.active[data-transform*=\"translate(0%, 3%)\"] {\n  transform: translate(0%, 3%); }\n\n.active[data-transform*=\"translate(0%, 4%)\"] {\n  transform: translate(0%, 4%); }\n\n.active[data-transform*=\"translate(0%, 5%)\"] {\n  transform: translate(0%, 5%); }\n\n.active[data-transform*=\"translate(0%, 6%)\"] {\n  transform: translate(0%, 6%); }\n\n.active[data-transform*=\"translate(0%, 7%)\"] {\n  transform: translate(0%, 7%); }\n\n.active[data-transform*=\"translate(0%, 8%)\"] {\n  transform: translate(0%, 8%); }\n\n.active[data-transform*=\"translate(0%, 9%)\"] {\n  transform: translate(0%, 9%); }\n\n.active[data-transform*=\"translate(1%, -9%)\"] {\n  transform: translate(1%, -9%); }\n\n.active[data-transform*=\"translate(1%, -8%)\"] {\n  transform: translate(1%, -8%); }\n\n.active[data-transform*=\"translate(1%, -7%)\"] {\n  transform: translate(1%, -7%); }\n\n.active[data-transform*=\"translate(1%, -6%)\"] {\n  transform: translate(1%, -6%); }\n\n.active[data-transform*=\"translate(1%, -5%)\"] {\n  transform: translate(1%, -5%); }\n\n.active[data-transform*=\"translate(1%, -4%)\"] {\n  transform: translate(1%, -4%); }\n\n.active[data-transform*=\"translate(1%, -3%)\"] {\n  transform: translate(1%, -3%); }\n\n.active[data-transform*=\"translate(1%, -2%)\"] {\n  transform: translate(1%, -2%); }\n\n.active[data-transform*=\"translate(1%, -1%)\"] {\n  transform: translate(1%, -1%); }\n\n.active[data-transform*=\"translate(1%, 0%)\"] {\n  transform: translate(1%, 0%); }\n\n.active[data-transform*=\"translate(1%, 1%)\"] {\n  transform: translate(1%, 1%); }\n\n.active[data-transform*=\"translate(1%, 2%)\"] {\n  transform: translate(1%, 2%); }\n\n.active[data-transform*=\"translate(1%, 3%)\"] {\n  transform: translate(1%, 3%); }\n\n.active[data-transform*=\"translate(1%, 4%)\"] {\n  transform: translate(1%, 4%); }\n\n.active[data-transform*=\"translate(1%, 5%)\"] {\n  transform: translate(1%, 5%); }\n\n.active[data-transform*=\"translate(1%, 6%)\"] {\n  transform: translate(1%, 6%); }\n\n.active[data-transform*=\"translate(1%, 7%)\"] {\n  transform: translate(1%, 7%); }\n\n.active[data-transform*=\"translate(1%, 8%)\"] {\n  transform: translate(1%, 8%); }\n\n.active[data-transform*=\"translate(1%, 9%)\"] {\n  transform: translate(1%, 9%); }\n\n.active[data-transform*=\"translate(2%, -9%)\"] {\n  transform: translate(2%, -9%); }\n\n.active[data-transform*=\"translate(2%, -8%)\"] {\n  transform: translate(2%, -8%); }\n\n.active[data-transform*=\"translate(2%, -7%)\"] {\n  transform: translate(2%, -7%); }\n\n.active[data-transform*=\"translate(2%, -6%)\"] {\n  transform: translate(2%, -6%); }\n\n.active[data-transform*=\"translate(2%, -5%)\"] {\n  transform: translate(2%, -5%); }\n\n.active[data-transform*=\"translate(2%, -4%)\"] {\n  transform: translate(2%, -4%); }\n\n.active[data-transform*=\"translate(2%, -3%)\"] {\n  transform: translate(2%, -3%); }\n\n.active[data-transform*=\"translate(2%, -2%)\"] {\n  transform: translate(2%, -2%); }\n\n.active[data-transform*=\"translate(2%, -1%)\"] {\n  transform: translate(2%, -1%); }\n\n.active[data-transform*=\"translate(2%, 0%)\"] {\n  transform: translate(2%, 0%); }\n\n.active[data-transform*=\"translate(2%, 1%)\"] {\n  transform: translate(2%, 1%); }\n\n.active[data-transform*=\"translate(2%, 2%)\"] {\n  transform: translate(2%, 2%); }\n\n.active[data-transform*=\"translate(2%, 3%)\"] {\n  transform: translate(2%, 3%); }\n\n.active[data-transform*=\"translate(2%, 4%)\"] {\n  transform: translate(2%, 4%); }\n\n.active[data-transform*=\"translate(2%, 5%)\"] {\n  transform: translate(2%, 5%); }\n\n.active[data-transform*=\"translate(2%, 6%)\"] {\n  transform: translate(2%, 6%); }\n\n.active[data-transform*=\"translate(2%, 7%)\"] {\n  transform: translate(2%, 7%); }\n\n.active[data-transform*=\"translate(2%, 8%)\"] {\n  transform: translate(2%, 8%); }\n\n.active[data-transform*=\"translate(2%, 9%)\"] {\n  transform: translate(2%, 9%); }\n\n.active[data-transform*=\"translate(3%, -9%)\"] {\n  transform: translate(3%, -9%); }\n\n.active[data-transform*=\"translate(3%, -8%)\"] {\n  transform: translate(3%, -8%); }\n\n.active[data-transform*=\"translate(3%, -7%)\"] {\n  transform: translate(3%, -7%); }\n\n.active[data-transform*=\"translate(3%, -6%)\"] {\n  transform: translate(3%, -6%); }\n\n.active[data-transform*=\"translate(3%, -5%)\"] {\n  transform: translate(3%, -5%); }\n\n.active[data-transform*=\"translate(3%, -4%)\"] {\n  transform: translate(3%, -4%); }\n\n.active[data-transform*=\"translate(3%, -3%)\"] {\n  transform: translate(3%, -3%); }\n\n.active[data-transform*=\"translate(3%, -2%)\"] {\n  transform: translate(3%, -2%); }\n\n.active[data-transform*=\"translate(3%, -1%)\"] {\n  transform: translate(3%, -1%); }\n\n.active[data-transform*=\"translate(3%, 0%)\"] {\n  transform: translate(3%, 0%); }\n\n.active[data-transform*=\"translate(3%, 1%)\"] {\n  transform: translate(3%, 1%); }\n\n.active[data-transform*=\"translate(3%, 2%)\"] {\n  transform: translate(3%, 2%); }\n\n.active[data-transform*=\"translate(3%, 3%)\"] {\n  transform: translate(3%, 3%); }\n\n.active[data-transform*=\"translate(3%, 4%)\"] {\n  transform: translate(3%, 4%); }\n\n.active[data-transform*=\"translate(3%, 5%)\"] {\n  transform: translate(3%, 5%); }\n\n.active[data-transform*=\"translate(3%, 6%)\"] {\n  transform: translate(3%, 6%); }\n\n.active[data-transform*=\"translate(3%, 7%)\"] {\n  transform: translate(3%, 7%); }\n\n.active[data-transform*=\"translate(3%, 8%)\"] {\n  transform: translate(3%, 8%); }\n\n.active[data-transform*=\"translate(3%, 9%)\"] {\n  transform: translate(3%, 9%); }\n\n.active[data-transform*=\"translate(4%, -9%)\"] {\n  transform: translate(4%, -9%); }\n\n.active[data-transform*=\"translate(4%, -8%)\"] {\n  transform: translate(4%, -8%); }\n\n.active[data-transform*=\"translate(4%, -7%)\"] {\n  transform: translate(4%, -7%); }\n\n.active[data-transform*=\"translate(4%, -6%)\"] {\n  transform: translate(4%, -6%); }\n\n.active[data-transform*=\"translate(4%, -5%)\"] {\n  transform: translate(4%, -5%); }\n\n.active[data-transform*=\"translate(4%, -4%)\"] {\n  transform: translate(4%, -4%); }\n\n.active[data-transform*=\"translate(4%, -3%)\"] {\n  transform: translate(4%, -3%); }\n\n.active[data-transform*=\"translate(4%, -2%)\"] {\n  transform: translate(4%, -2%); }\n\n.active[data-transform*=\"translate(4%, -1%)\"] {\n  transform: translate(4%, -1%); }\n\n.active[data-transform*=\"translate(4%, 0%)\"] {\n  transform: translate(4%, 0%); }\n\n.active[data-transform*=\"translate(4%, 1%)\"] {\n  transform: translate(4%, 1%); }\n\n.active[data-transform*=\"translate(4%, 2%)\"] {\n  transform: translate(4%, 2%); }\n\n.active[data-transform*=\"translate(4%, 3%)\"] {\n  transform: translate(4%, 3%); }\n\n.active[data-transform*=\"translate(4%, 4%)\"] {\n  transform: translate(4%, 4%); }\n\n.active[data-transform*=\"translate(4%, 5%)\"] {\n  transform: translate(4%, 5%); }\n\n.active[data-transform*=\"translate(4%, 6%)\"] {\n  transform: translate(4%, 6%); }\n\n.active[data-transform*=\"translate(4%, 7%)\"] {\n  transform: translate(4%, 7%); }\n\n.active[data-transform*=\"translate(4%, 8%)\"] {\n  transform: translate(4%, 8%); }\n\n.active[data-transform*=\"translate(4%, 9%)\"] {\n  transform: translate(4%, 9%); }\n\n.active[data-transform*=\"translate(5%, -9%)\"] {\n  transform: translate(5%, -9%); }\n\n.active[data-transform*=\"translate(5%, -8%)\"] {\n  transform: translate(5%, -8%); }\n\n.active[data-transform*=\"translate(5%, -7%)\"] {\n  transform: translate(5%, -7%); }\n\n.active[data-transform*=\"translate(5%, -6%)\"] {\n  transform: translate(5%, -6%); }\n\n.active[data-transform*=\"translate(5%, -5%)\"] {\n  transform: translate(5%, -5%); }\n\n.active[data-transform*=\"translate(5%, -4%)\"] {\n  transform: translate(5%, -4%); }\n\n.active[data-transform*=\"translate(5%, -3%)\"] {\n  transform: translate(5%, -3%); }\n\n.active[data-transform*=\"translate(5%, -2%)\"] {\n  transform: translate(5%, -2%); }\n\n.active[data-transform*=\"translate(5%, -1%)\"] {\n  transform: translate(5%, -1%); }\n\n.active[data-transform*=\"translate(5%, 0%)\"] {\n  transform: translate(5%, 0%); }\n\n.active[data-transform*=\"translate(5%, 1%)\"] {\n  transform: translate(5%, 1%); }\n\n.active[data-transform*=\"translate(5%, 2%)\"] {\n  transform: translate(5%, 2%); }\n\n.active[data-transform*=\"translate(5%, 3%)\"] {\n  transform: translate(5%, 3%); }\n\n.active[data-transform*=\"translate(5%, 4%)\"] {\n  transform: translate(5%, 4%); }\n\n.active[data-transform*=\"translate(5%, 5%)\"] {\n  transform: translate(5%, 5%); }\n\n.active[data-transform*=\"translate(5%, 6%)\"] {\n  transform: translate(5%, 6%); }\n\n.active[data-transform*=\"translate(5%, 7%)\"] {\n  transform: translate(5%, 7%); }\n\n.active[data-transform*=\"translate(5%, 8%)\"] {\n  transform: translate(5%, 8%); }\n\n.active[data-transform*=\"translate(5%, 9%)\"] {\n  transform: translate(5%, 9%); }\n\n.active[data-transform*=\"translate(6%, -9%)\"] {\n  transform: translate(6%, -9%); }\n\n.active[data-transform*=\"translate(6%, -8%)\"] {\n  transform: translate(6%, -8%); }\n\n.active[data-transform*=\"translate(6%, -7%)\"] {\n  transform: translate(6%, -7%); }\n\n.active[data-transform*=\"translate(6%, -6%)\"] {\n  transform: translate(6%, -6%); }\n\n.active[data-transform*=\"translate(6%, -5%)\"] {\n  transform: translate(6%, -5%); }\n\n.active[data-transform*=\"translate(6%, -4%)\"] {\n  transform: translate(6%, -4%); }\n\n.active[data-transform*=\"translate(6%, -3%)\"] {\n  transform: translate(6%, -3%); }\n\n.active[data-transform*=\"translate(6%, -2%)\"] {\n  transform: translate(6%, -2%); }\n\n.active[data-transform*=\"translate(6%, -1%)\"] {\n  transform: translate(6%, -1%); }\n\n.active[data-transform*=\"translate(6%, 0%)\"] {\n  transform: translate(6%, 0%); }\n\n.active[data-transform*=\"translate(6%, 1%)\"] {\n  transform: translate(6%, 1%); }\n\n.active[data-transform*=\"translate(6%, 2%)\"] {\n  transform: translate(6%, 2%); }\n\n.active[data-transform*=\"translate(6%, 3%)\"] {\n  transform: translate(6%, 3%); }\n\n.active[data-transform*=\"translate(6%, 4%)\"] {\n  transform: translate(6%, 4%); }\n\n.active[data-transform*=\"translate(6%, 5%)\"] {\n  transform: translate(6%, 5%); }\n\n.active[data-transform*=\"translate(6%, 6%)\"] {\n  transform: translate(6%, 6%); }\n\n.active[data-transform*=\"translate(6%, 7%)\"] {\n  transform: translate(6%, 7%); }\n\n.active[data-transform*=\"translate(6%, 8%)\"] {\n  transform: translate(6%, 8%); }\n\n.active[data-transform*=\"translate(6%, 9%)\"] {\n  transform: translate(6%, 9%); }\n\n.active[data-transform*=\"translate(7%, -9%)\"] {\n  transform: translate(7%, -9%); }\n\n.active[data-transform*=\"translate(7%, -8%)\"] {\n  transform: translate(7%, -8%); }\n\n.active[data-transform*=\"translate(7%, -7%)\"] {\n  transform: translate(7%, -7%); }\n\n.active[data-transform*=\"translate(7%, -6%)\"] {\n  transform: translate(7%, -6%); }\n\n.active[data-transform*=\"translate(7%, -5%)\"] {\n  transform: translate(7%, -5%); }\n\n.active[data-transform*=\"translate(7%, -4%)\"] {\n  transform: translate(7%, -4%); }\n\n.active[data-transform*=\"translate(7%, -3%)\"] {\n  transform: translate(7%, -3%); }\n\n.active[data-transform*=\"translate(7%, -2%)\"] {\n  transform: translate(7%, -2%); }\n\n.active[data-transform*=\"translate(7%, -1%)\"] {\n  transform: translate(7%, -1%); }\n\n.active[data-transform*=\"translate(7%, 0%)\"] {\n  transform: translate(7%, 0%); }\n\n.active[data-transform*=\"translate(7%, 1%)\"] {\n  transform: translate(7%, 1%); }\n\n.active[data-transform*=\"translate(7%, 2%)\"] {\n  transform: translate(7%, 2%); }\n\n.active[data-transform*=\"translate(7%, 3%)\"] {\n  transform: translate(7%, 3%); }\n\n.active[data-transform*=\"translate(7%, 4%)\"] {\n  transform: translate(7%, 4%); }\n\n.active[data-transform*=\"translate(7%, 5%)\"] {\n  transform: translate(7%, 5%); }\n\n.active[data-transform*=\"translate(7%, 6%)\"] {\n  transform: translate(7%, 6%); }\n\n.active[data-transform*=\"translate(7%, 7%)\"] {\n  transform: translate(7%, 7%); }\n\n.active[data-transform*=\"translate(7%, 8%)\"] {\n  transform: translate(7%, 8%); }\n\n.active[data-transform*=\"translate(7%, 9%)\"] {\n  transform: translate(7%, 9%); }\n\n.active[data-transform*=\"translate(8%, -9%)\"] {\n  transform: translate(8%, -9%); }\n\n.active[data-transform*=\"translate(8%, -8%)\"] {\n  transform: translate(8%, -8%); }\n\n.active[data-transform*=\"translate(8%, -7%)\"] {\n  transform: translate(8%, -7%); }\n\n.active[data-transform*=\"translate(8%, -6%)\"] {\n  transform: translate(8%, -6%); }\n\n.active[data-transform*=\"translate(8%, -5%)\"] {\n  transform: translate(8%, -5%); }\n\n.active[data-transform*=\"translate(8%, -4%)\"] {\n  transform: translate(8%, -4%); }\n\n.active[data-transform*=\"translate(8%, -3%)\"] {\n  transform: translate(8%, -3%); }\n\n.active[data-transform*=\"translate(8%, -2%)\"] {\n  transform: translate(8%, -2%); }\n\n.active[data-transform*=\"translate(8%, -1%)\"] {\n  transform: translate(8%, -1%); }\n\n.active[data-transform*=\"translate(8%, 0%)\"] {\n  transform: translate(8%, 0%); }\n\n.active[data-transform*=\"translate(8%, 1%)\"] {\n  transform: translate(8%, 1%); }\n\n.active[data-transform*=\"translate(8%, 2%)\"] {\n  transform: translate(8%, 2%); }\n\n.active[data-transform*=\"translate(8%, 3%)\"] {\n  transform: translate(8%, 3%); }\n\n.active[data-transform*=\"translate(8%, 4%)\"] {\n  transform: translate(8%, 4%); }\n\n.active[data-transform*=\"translate(8%, 5%)\"] {\n  transform: translate(8%, 5%); }\n\n.active[data-transform*=\"translate(8%, 6%)\"] {\n  transform: translate(8%, 6%); }\n\n.active[data-transform*=\"translate(8%, 7%)\"] {\n  transform: translate(8%, 7%); }\n\n.active[data-transform*=\"translate(8%, 8%)\"] {\n  transform: translate(8%, 8%); }\n\n.active[data-transform*=\"translate(8%, 9%)\"] {\n  transform: translate(8%, 9%); }\n\n.active[data-transform*=\"translate(9%, -9%)\"] {\n  transform: translate(9%, -9%); }\n\n.active[data-transform*=\"translate(9%, -8%)\"] {\n  transform: translate(9%, -8%); }\n\n.active[data-transform*=\"translate(9%, -7%)\"] {\n  transform: translate(9%, -7%); }\n\n.active[data-transform*=\"translate(9%, -6%)\"] {\n  transform: translate(9%, -6%); }\n\n.active[data-transform*=\"translate(9%, -5%)\"] {\n  transform: translate(9%, -5%); }\n\n.active[data-transform*=\"translate(9%, -4%)\"] {\n  transform: translate(9%, -4%); }\n\n.active[data-transform*=\"translate(9%, -3%)\"] {\n  transform: translate(9%, -3%); }\n\n.active[data-transform*=\"translate(9%, -2%)\"] {\n  transform: translate(9%, -2%); }\n\n.active[data-transform*=\"translate(9%, -1%)\"] {\n  transform: translate(9%, -1%); }\n\n.active[data-transform*=\"translate(9%, 0%)\"] {\n  transform: translate(9%, 0%); }\n\n.active[data-transform*=\"translate(9%, 1%)\"] {\n  transform: translate(9%, 1%); }\n\n.active[data-transform*=\"translate(9%, 2%)\"] {\n  transform: translate(9%, 2%); }\n\n.active[data-transform*=\"translate(9%, 3%)\"] {\n  transform: translate(9%, 3%); }\n\n.active[data-transform*=\"translate(9%, 4%)\"] {\n  transform: translate(9%, 4%); }\n\n.active[data-transform*=\"translate(9%, 5%)\"] {\n  transform: translate(9%, 5%); }\n\n.active[data-transform*=\"translate(9%, 6%)\"] {\n  transform: translate(9%, 6%); }\n\n.active[data-transform*=\"translate(9%, 7%)\"] {\n  transform: translate(9%, 7%); }\n\n.active[data-transform*=\"translate(9%, 8%)\"] {\n  transform: translate(9%, 8%); }\n\n.active[data-transform*=\"translate(9%, 9%)\"] {\n  transform: translate(9%, 9%); }\n\ndiv {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  font-size: 0;\n  text-align: center; }\n  div.active p {\n    font-size: 10vmin; }\n  div.active[data-transition=\"0.5\"] {\n    transition: transform 1s; }\n  div.active[data-transition=\"1\"] {\n    transition: transform 2s; }\n  div.active[data-transition=\"1.5\"] {\n    transition: transform 3s; }\n  div.active[data-transition=\"2\"] {\n    transition: transform 4s; }\n  div.active[data-transition=\"2.5\"] {\n    transition: transform 5s; }\n  div.active[data-transition=\"3\"] {\n    transition: transform 6s; }\n  div.active[data-transition=\"3.5\"] {\n    transition: transform 7s; }\n  div.active[data-transition=\"4\"] {\n    transition: transform 8s; }\n  div.active[data-transition=\"4.5\"] {\n    transition: transform 9s; }\n  div.active[data-transition=\"5\"] {\n    transition: transform 10s; }\n  div:after {\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n    content: \"\"; }\n  div p {\n    display: inline-block;\n    margin: 0;\n    vertical-align: middle;\n    font-size: 0; }\n", "", {"version":3,"sources":["/Users/uiwwnwyoon/work/s_animation/src/src/_ani.scss","/Users/uiwwnwyoon/work/s_animation/src/src/style.scss"],"names":[],"mappings":"AAAA;EAGY,oBAAuB,EAC1B;;AAJT;EAGY,oBAAuB,EAC1B;;AAJT;EAGY,oBAAuB,EAC1B;;AAJT;EAGY,oBAAuB,EAC1B;;AAJT;EAGY,oBAAuB,EAC1B;;AAJT;EAGY,oBAAuB,EAC1B;;AAJT;EAGY,oBAAuB,EAC1B;;AAJT;EAGY,qBAAuB,EAC1B;;AAJT;EASY,sBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,oBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,sBAAuB,EAC1B;;AAVT;EASY,oBAAuB,EAC1B;;AAVT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,yBAA6B,EAChC;;AAfT;EAiBY,yBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,uBAA6B,EAChC;;AAfT;EAiBY,uBAA6B,EAChC;;AAlBT;EAcY,uBAA6B,EAChC;;AAfT;EAiBY,uBAA6B,EAChC;;AAlBT;EAcY,uBAA6B,EAChC;;AAfT;EAiBY,uBAA6B,EAChC;;AAlBT;EAcY,uBAA6B,EAChC;;AAfT;EAiBY,uBAA6B,EAChC;;AAlBT;EAcY,uBAA6B,EAChC;;AAfT;EAiBY,uBAA6B,EAChC;;AAlBT;EAcY,uBAA6B,EAChC;;AAfT;EAiBY,uBAA6B,EAChC;;AAlBT;EAcY,uBAA6B,EAChC;;AAfT;EAiBY,uBAA6B,EAChC;;AAlBT;EAcY,uBAA6B,EAChC;;AAfT;EAiBY,uBAA6B,EAChC;;AAlBT;EAcY,uBAA6B,EAChC;;AAfT;EAiBY,uBAA6B,EAChC;;AAlBT;EAcY,uBAA6B,EAChC;;AAfT;EAiBY,uBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAcY,wBAA6B,EAChC;;AAfT;EAiBY,wBAA6B,EAChC;;AAlBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,wBAA8B,EACjC;;AAvBT;EAsBY,wBAA8B,EACjC;;AAvBT;EAsBY,wBAA8B,EACjC;;AAvBT;EAsBY,wBAA8B,EACjC;;AAvBT;EAsBY,wBAA8B,EACjC;;AAvBT;EAsBY,wBAA8B,EACjC;;AAvBT;EAsBY,wBAA8B,EACjC;;AAvBT;EAsBY,wBAA8B,EACjC;;AAvBT;EAsBY,wBAA8B,EACjC;;AAvBT;EAsBY,wBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,yBAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EAsBY,0BAA8B,EACjC;;AAvBT;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,+BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,8BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AAhCb;EA+BgB,6BAAkC,EACrC;;AC7Bb;EACI,mBAAkB;EAClB,OAAM;EACN,SAAQ;EACR,UAAS;EACT,QAAO;EACP,aAAY;EACZ,mBAAkB,EA4BrB;EAnCD;IAWY,kBAAiB,EACpB;EAZT;IAiBgB,yBAA6B,EAChC;EAlBb;IAiBgB,yBAA6B,EAChC;EAlBb;IAiBgB,yBAA6B,EAChC;EAlBb;IAiBgB,yBAA6B,EAChC;EAlBb;IAiBgB,yBAA6B,EAChC;EAlBb;IAiBgB,yBAA6B,EAChC;EAlBb;IAiBgB,yBAA6B,EAChC;EAlBb;IAiBgB,yBAA6B,EAChC;EAlBb;IAiBgB,yBAA6B,EAChC;EAlBb;IAiBgB,0BAA6B,EAChC;EAlBb;IAuBQ,sBAAqB;IACrB,aAAY;IACZ,uBAAsB;IACtB,YAAW,EACd;EA3BL;IA8BQ,sBAAqB;IACrB,UAAS;IACT,uBAAsB;IACtB,aAAY,EACf","file":"style.scss","sourcesContent":[".active {\n    @for $i from 3 through 10 {\n        &[data-transform*=\"scale(#{$i})\"] {\n            transform: scale(#{$i});\n        }\n    }\n    @for $i from 1 through 20 {\n        $j: $i / 10;\n        &[data-transform*=\"scale(#{$j})\"] {\n            transform: scale(#{$j});\n        }\n    }\n    @for $i from -50 through 50 {\n        &[data-transform*=\"skewX(#{$i}deg)\"] {\n            transform: skewX(#{$i}deg);\n        }\n        &[data-transform*=\"skewY(#{$i}deg)\"] {\n            transform: skewY(#{$i}deg);\n        }\n    }\n    @for $i from -45 through 180 {\n        &[data-transform*=\"rotate(#{$i}deg)\"] {\n            transform: rotate(#{$i}deg);\n        }\n    }\n\n    @for $i from -9 through 9 {\n        $i: $i + '%';\n        @for $j from -9 through 9 {\n            $j: $j + '%';\n            &[data-transform*=\"translate(#{$i}, #{$j})\"] {\n                transform: translate(#{$i}, #{$j});\n            }\n        }\n    }\n}","@charset \"utf-8\";\n@import \"_ani\";\n\ndiv {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    font-size: 0;\n    text-align: center;\n\n    &.active {\n        p {\n            font-size: 10vmin;\n        }\n\n        @for $i from 1 through 10 {\n            $v : $i / 2;\n            &[data-transition=\"#{$v}\"]{\n                transition: transform #{$i}s;\n            }\n        }\n    }\n\n    &:after {\n        display: inline-block;\n        height: 100%;\n        vertical-align: middle;\n        content: \"\";\n    }\n\n    p {\n        display: inline-block;\n        margin: 0;\n        vertical-align: middle;\n        font-size: 0;\n    }\n}"],"sourceRoot":""}]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map