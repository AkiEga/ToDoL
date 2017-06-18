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
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ({

/***/ 86:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(86),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow;

var win = void 0;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadURL("file://" + __dirname + "/../../index.html ");
    win.on("closed", function () {
        win = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", function () {
    if (win === null) {
        createWindow();
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbWFpblxcaW5kZXguanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImFwcCIsIkJyb3dzZXJXaW5kb3ciLCJ3aW4iLCJjcmVhdGVXaW5kb3ciLCJ3aWR0aCIsImhlaWdodCIsImxvYWRVUkwiLCJfX2Rpcm5hbWUiLCJvbiIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsInF1aXQiXSwibWFwcGluZ3MiOiI7O2VBQStCQSxRQUFRLFVBQVIsQztJQUF2QkMsRyxZQUFBQSxHO0lBQUtDLGEsWUFBQUEsYTs7QUFDYixJQUFJQyxZQUFKOztBQUVBLFNBQVNDLFlBQVQsR0FBd0I7QUFDcEJELFVBQU0sSUFBSUQsYUFBSixDQUFrQjtBQUNwQkcsZUFBTyxHQURhO0FBRXBCQyxnQkFBUTtBQUZZLEtBQWxCLENBQU47QUFJQUgsUUFBS0ksT0FBTCxhQUF1QkMsU0FBdkI7QUFDQUwsUUFBS00sRUFBTCxDQUFRLFFBQVIsRUFBa0IsWUFBTTtBQUNwQk4sY0FBTSxJQUFOO0FBQ0gsS0FGRDtBQUdIOztBQUVERixJQUFJUSxFQUFKLENBQU8sT0FBUCxFQUFnQkwsWUFBaEI7O0FBRUFILElBQUlRLEVBQUosQ0FBTyxtQkFBUCxFQUE0QixZQUFNO0FBQzlCLFFBQUlDLFFBQVNDLFFBQVQsS0FBc0IsUUFBMUIsRUFBb0M7QUFDaENWLFlBQUtXLElBQUw7QUFDSDtBQUNKLENBSkQ7O0FBTUFYLElBQUlRLEVBQUosQ0FBTyxVQUFQLEVBQW1CLFlBQU07QUFDckIsUUFBSU4sUUFBUSxJQUFaLEVBQWtCO0FBQ2RDO0FBQ0g7QUFDSixDQUpEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkM6L3dvcmsvcmVwby9Ub0RvTCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgYXBwLCBCcm93c2VyV2luZG93IH0gPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7XHJcbmxldCB3aW47XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXaW5kb3coKSB7IFxyXG4gICAgd2luID0gbmV3IEJyb3dzZXJXaW5kb3coeyBcclxuICAgICAgICB3aWR0aDogODAwLCBcclxuICAgICAgICBoZWlnaHQ6IDYwMCBcclxuICAgIH0pO1xyXG4gICAgd2luLiBsb2FkVVJMKGBmaWxlOi8vJHtfX2Rpcm5hbWV9Ly4uLy4uL2luZGV4Lmh0bWwgYCk7IFxyXG4gICAgd2luLiBvbihcImNsb3NlZFwiLCAoKSA9PiB7IFxyXG4gICAgICAgIHdpbiA9IG51bGw7IFxyXG4gICAgfSk7IFxyXG59XHJcblxyXG5hcHAub24oXCJyZWFkeVwiLCBjcmVhdGVXaW5kb3cpO1xyXG5cclxuYXBwLm9uKFwid2luZG93LWFsbC1jbG9zZWRcIiwgKCkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuIHBsYXRmb3JtICE9PSBcImRhcndpblwiKSB7IFxyXG4gICAgICAgIGFwcC4gcXVpdCgpOyBcclxuICAgIH0gXHJcbn0pO1xyXG5cclxuYXBwLm9uKFwiYWN0aXZhdGVcIiwgKCkgPT4ge1xyXG4gICAgaWYgKHdpbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNyZWF0ZVdpbmRvdygpOyBcclxuICAgIH0gXHJcbn0pO1xyXG5cclxuXHJcbiJdfQ==

/***/ })

/******/ });
//# sourceMappingURL=index.js.map