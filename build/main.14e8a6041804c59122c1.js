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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.debounce = exports.clickHandler = exports.apiCall = exports.secondsArray = void 0;\nlet secondsArray = [];\nexports.secondsArray = secondsArray;\nconst URL = 'https://jsonplaceholder.typicode.com/posts';\n\nconst apiCall = (seconds, url = URL) => fetch(`${url}?seconds=${seconds}`, {\n  method: 'POST',\n  body: JSON.stringify(seconds)\n}).then(resp => {\n  if (!resp.ok) {\n    throw Error(`API Error: ${resp.statusText}`);\n  }\n\n  return resp.json();\n});\n\nexports.apiCall = apiCall;\n\nconst clickHandler = async () => {\n  const seconds = new Date().getSeconds();\n\n  if (secondsArray.includes(seconds)) {\n    console.warn(`seconds = ${seconds} is already captured!`);\n    return;\n  }\n\n  exports.secondsArray = secondsArray = secondsArray.concat(seconds);\n  await apiCall(seconds).then(data => console.log(`(Id ${data.id}, seconds ${seconds})`)).catch(error => {\n    console.error(`Api failed for seconds = ${seconds} with following error \\n ${error}`);\n    const index = secondsArray.indexOf(seconds);\n    exports.secondsArray = secondsArray = secondsArray.slice(0, index).concat(secondsArray.slice(index + 1, secondsArray.length));\n  });\n};\n\nexports.clickHandler = clickHandler;\n\nconst debounce = (callback, wait) => {\n  let timeout;\n  return (...args) => {\n    const context = void 0;\n    clearTimeout(timeout);\n    timeout = setTimeout(() => callback.apply(context, args), wait);\n  };\n}; //document.querySelector('#calcBtn').addEventListener('click', debounce(clickHandler, 1000));\n\n\nexports.debounce = debounce;\nvar el = document.querySelector('#calcBtn');\n\nif (el) {\n  el.addEventListener('click', debounce(clickHandler, 1000));\n}\n\n;\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });