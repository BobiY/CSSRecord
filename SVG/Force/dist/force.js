(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Force"] = factory();
	else
		root["Force"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Vector.js":
/*!***********************!*\
  !*** ./src/Vector.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector; });\n// 生成一个向量\nclass Vector {\n  constructor(x = 0, y = 0) {\n    this.x = x;\n    this.y = y;\n  } // 计算两个点形成的向量\n\n\n  static formPoints(point1, point2) {\n    return new Vector(point2.x - point1.x, point2.y - point1.y);\n  } // 向量相加;\n\n\n  add(point) {\n    return new Vector(this.x + point.x, this.y + point.y);\n  } // 获取向量的长度\n\n\n  length() {\n    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));\n  } // 向量标准化 ---》 将一个向量转换为单位向量\n\n\n  normalize() {\n    const length = this.length();\n    return new Vector(this.x / length, this.y / length);\n  } // 向量相乘\n\n\n  multiply(scale) {\n    // 乘法的思路是，先将初始向量单位化，然后在乘以新向量的长度，从而转换成新向量\n    return new Vector(this.x * scale, this.y * scale);\n  }\n\n}\n\n//# sourceURL=webpack://Force/./src/Vector.js?");

/***/ }),

/***/ "./src/constant.js":
/*!*************************!*\
  !*** ./src/constant.js ***!
  \*************************/
/*! exports provided: defaultCount, subductionCoefficient, SVG_NS, CIRCLE_R, DISTANCE, TIME_ADJUST_COEFFIC, COEFFICIENT_OF_ELASTICITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultCount\", function() { return defaultCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subductionCoefficient\", function() { return subductionCoefficient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SVG_NS\", function() { return SVG_NS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CIRCLE_R\", function() { return CIRCLE_R; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DISTANCE\", function() { return DISTANCE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TIME_ADJUST_COEFFIC\", function() { return TIME_ADJUST_COEFFIC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COEFFICIENT_OF_ELASTICITY\", function() { return COEFFICIENT_OF_ELASTICITY; });\n// 默认计算 1000 次达到平衡\nconst defaultCount = 1000; // 力的损耗系数 每次速度的消减系数\n\nconst subductionCoefficient = .98; // svg 的命名空间。创建 SVG 元素时需要使用\n\nconst SVG_NS = 'http://www.w3.org/2000/svg';\nconst CIRCLE_R = 15;\nconst DISTANCE = 200; //  在一定范围内，整体运动在稳定范围内， 越小，每个球的运动范围越大，越大，缩小的越快，稳定的越快\n\nconst TIME_ADJUST_COEFFIC = 500; // 默认的事件调整系数\n// 默认的弹簧弹力系数\n\nconst COEFFICIENT_OF_ELASTICITY = 0.5;\n\n//# sourceURL=webpack://Force/./src/constant.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Force; });\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ \"./src/Vector.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ \"./src/constant.js\");\n\n\nclass Force {\n  // root 根元素  eleCount 要生成的元素个数\n  constructor(root, eleCount) {\n    const boundBox = root.getBoundingClientRect();\n    this.update = this.update.bind(this);\n    this.lastFrameTime = +new Date();\n    this.count = 0;\n    this.root = root;\n    this.eleCount = eleCount;\n    this.rootSVG = document.createElementNS(_constant__WEBPACK_IMPORTED_MODULE_1__[\"SVG_NS\"], 'svg');\n    this.path = document.createElementNS(_constant__WEBPACK_IMPORTED_MODULE_1__[\"SVG_NS\"], 'path');\n    this.rootSVG.appendChild(this.path);\n    this.path.setAttribute(\"fill\", \"none\");\n    this.path.setAttribute('stroke', '#333');\n    this.rootSVG.setAttribute('width', \"100%\");\n    this.rootSVG.setAttribute('height', '100%');\n    this.root.appendChild(this.rootSVG);\n    this.xRange = [0, boundBox.width];\n    this.yRange = [0, boundBox.height];\n    this.circle = [];\n    new Array(eleCount).fill(1).forEach(item => {\n      this.createCircle();\n    });\n    this.start();\n  }\n\n  createCircle() {\n    const pos = this.randomPos();\n    const circle = document.createElementNS(_constant__WEBPACK_IMPORTED_MODULE_1__[\"SVG_NS\"], 'circle');\n    circle.setAttribute('cx', pos.x);\n    circle.setAttribute('cy', pos.y);\n    circle.setAttribute('r', _constant__WEBPACK_IMPORTED_MODULE_1__[\"CIRCLE_R\"]);\n    circle.setAttribute('fill', `hsl(${Math.random() * 240}, ${50 + Math.random() * 50}%, 60%)`);\n    circle.s = new _Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](pos.x, pos.y); // 初始位移向量\n\n    circle.v = new _Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); // 初始速度向量\n\n    circle.a = new _Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); // 初始加速度向量;\n\n    circle.x = pos.x; // 记录元素的横坐标\n\n    circle.y = pos.y; // 记录元素的纵坐标\n\n    this.circle.push(circle);\n    this.rootSVG.appendChild(circle);\n  }\n\n  randomPos() {\n    return {\n      x: Math.random() * (this.xRange[1] - this.xRange[0]),\n      y: Math.random() * (this.yRange[1] - this.yRange[0])\n    };\n  } // 计算两点之间力的合力\n\n\n  calcF(originF, circle1, circle2) {\n    const newPoints = _Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].formPoints(circle1, circle2);\n    const len = newPoints.length();\n    const dis = len - _constant__WEBPACK_IMPORTED_MODULE_1__[\"DISTANCE\"];\n    const f = newPoints.normalize().multiply(dis * _constant__WEBPACK_IMPORTED_MODULE_1__[\"COEFFICIENT_OF_ELASTICITY\"]);\n    return originF.add(f);\n  } // animate (动画)\n\n\n  update() {\n    this.count++;\n    var frameTime = +new Date();\n    var t = frameTime - this.lastFrameTime;\n    ;\n    this.lastFrameTime = frameTime;\n    t /= 500; // \n\n    this.circle.forEach(item => {\n      var originF = new _Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      this.circle.forEach(sub => {\n        if (item === sub) return;\n        originF = this.calcF(originF, item, sub);\n      }); // 这里计算的是瞬时加速度，模拟极端时间内，物体做的是匀加速运动\n\n      item.a = originF; // f = ma m=1(忽略质量对加速度的影响)\n\n      item.v = item.v.add(item.a.multiply(t)).multiply(_constant__WEBPACK_IMPORTED_MODULE_1__[\"subductionCoefficient\"]);\n      item.s = item.s.add(item.v.multiply(t));\n      item.setAttribute('cx', item.s.x);\n      item.setAttribute('cy', item.s.y);\n      item.x = item.s.x;\n      item.y = item.s.y;\n    });\n    this.link();\n\n    if (this.count <= _constant__WEBPACK_IMPORTED_MODULE_1__[\"defaultCount\"]) {\n      requestAnimationFrame(this.update);\n    }\n  }\n\n  link() {\n    // 连线的思路，点对点单条连线\n    const path = [];\n    this.circle.forEach(iA => {\n      this.circle.forEach(iB => {\n        if (iA == iB) {\n          return;\n        }\n\n        path.push(`M ${iA.x} ${iA.y}`);\n        path.push(`L ${iB.x} ${iB.y}`);\n      });\n    });\n    this.path.setAttribute('d', path.join(\",\"));\n  }\n\n  start() {\n    requestAnimationFrame(this.update);\n  }\n\n}\n\n//# sourceURL=webpack://Force/./src/index.js?");

/***/ })

/******/ })["default"];
});