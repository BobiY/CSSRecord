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

/***/ "./src/Drag/index.ts":
/*!***************************!*\
  !*** ./src/Drag/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Vector_1 = __webpack_require__(/*! ../Vector */ \"./src/Vector.ts\");\r\nconst index_1 = __webpack_require__(/*! ../EventListener/index */ \"./src/EventListener/index.ts\");\r\nconst event = index_1.default.getInstance();\r\nclass Drag {\r\n    constructor(ele) {\r\n        this.initX = 0;\r\n        this.initY = 0;\r\n        this.target = null;\r\n        this.down = false;\r\n        this.ele = ele;\r\n        this.mousedown = this.mousedown.bind(this);\r\n        this.mousemove = this.mousemove.bind(this);\r\n        this.mouseup = this.mouseup.bind(this);\r\n        ele.addEventListener('mousedown', this.mousedown);\r\n        document.addEventListener('mouseup', this.mouseup);\r\n        document.addEventListener('mousemove', this.mousemove);\r\n    }\r\n    mousedown(e) {\r\n        // 鼠标落下事件\r\n        if (e.target !== this.ele.getEle()) {\r\n            return;\r\n        }\r\n        this.target = e.target;\r\n        // 当触发鼠标落下事件时，将原有的动画直接停止\r\n        // event.emit('end');\r\n        if (this.ele && this.ele.eventMap.has('mousedown')) {\r\n            this.ele.eventMap.get('mousedown').callback();\r\n        }\r\n        this.initX = e.layerX;\r\n        this.initY = e.layerY;\r\n        this.down = true;\r\n    }\r\n    mouseup(e) {\r\n        // 鼠标抬起事件\r\n        if (this.target !== this.ele.getEle()) {\r\n            return;\r\n        }\r\n        this.down = false;\r\n        this.initY = 0;\r\n        this.initX = 0;\r\n        this.target = null;\r\n        if (this.ele && this.ele.eventMap.has('mouseup')) {\r\n            this.ele.eventMap.get('mouseup').callback();\r\n        }\r\n        // event.emit('start');\r\n    }\r\n    mousemove(e) {\r\n        // 鼠标移动\r\n        if (!this.down) {\r\n            return;\r\n        }\r\n        const dx = e.layerX - this.initX;\r\n        const dy = e.layerY - this.initY;\r\n        this.ele.x += dx;\r\n        this.ele.y += dy;\r\n        this.initX = e.layerX;\r\n        this.initY = e.layerY;\r\n        this.ele.setAttribute('cx', this.ele.x);\r\n        this.ele.setAttribute('cy', this.ele.y);\r\n        this.ele.s = new Vector_1.default(this.ele.x, this.ele.y); // 放置 s 不更新使元素重回原来位置\r\n        // 更新其他元素位置\r\n        // event.emit('start1', this.ele);\r\n        if (this.ele && this.ele.eventMap.has('mousemove')) {\r\n            this.ele.eventMap.get('mousemove').callback();\r\n        }\r\n    }\r\n}\r\nexports.default = Drag;\r\n\n\n//# sourceURL=webpack://Force/./src/Drag/index.ts?");

/***/ }),

/***/ "./src/EventListener/index.ts":
/*!************************************!*\
  !*** ./src/EventListener/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Event {\r\n    constructor() {\r\n        this.listener = new Map();\r\n    }\r\n    static getInstance() {\r\n        if (!Event.instance) {\r\n            Event.instance = new Event();\r\n        }\r\n        return Event.instance;\r\n    }\r\n    addEvent(name, callback, content) {\r\n        const event = {\r\n            eventName: name,\r\n            callback,\r\n            content\r\n        };\r\n        this.listener.set(name, event);\r\n    }\r\n    emit(name, ...rest) {\r\n        const event = this.listener.get(name) || {\r\n            eventName: \"\",\r\n            callback: () => false,\r\n            content: null\r\n        };\r\n        event.callback.bind(event.content)(...rest);\r\n    }\r\n    remove(name) {\r\n        if (this.listener.has(name)) {\r\n            return this.listener.delete(name);\r\n        }\r\n        return true;\r\n    }\r\n    replace(name, callback, content) {\r\n        this.addEvent(name, callback, content);\r\n        return true;\r\n    }\r\n}\r\nexports.default = Event;\r\n/**\r\n * Event.addListener('end', () => {}, 'content');\r\n * Event.emit('end', paramList);\r\n */ \r\n\n\n//# sourceURL=webpack://Force/./src/EventListener/index.ts?");

/***/ }),

/***/ "./src/SVGGraph/IBaseGraph/circle.ts":
/*!*******************************************!*\
  !*** ./src/SVGGraph/IBaseGraph/circle.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// 圆形类的接口\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// 圆包含的必要参数\r\nexports.PARAM = ['cx', 'cy', 'r', 'fill', 'stroke'];\r\n\n\n//# sourceURL=webpack://Force/./src/SVGGraph/IBaseGraph/circle.ts?");

/***/ }),

/***/ "./src/SVGGraph/baseGraph/circle.ts":
/*!******************************************!*\
  !*** ./src/SVGGraph/baseGraph/circle.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// 圆形\r\nconst circle_1 = __webpack_require__(/*! ../IBaseGraph/circle */ \"./src/SVGGraph/IBaseGraph/circle.ts\");\r\nconst SVG_NS = 'http://www.w3.org/2000/svg';\r\nclass Circle {\r\n    constructor(option) {\r\n        this.cx = 0;\r\n        this.cy = 0;\r\n        this.r = 0;\r\n        this.fill = 'none';\r\n        this.stroke = '#333';\r\n        this.strokeWidth = '2';\r\n        this.circle = null;\r\n        const { cx, cy, r, fill, stroke } = option;\r\n        this.cx = cx;\r\n        this.cy = cy;\r\n        this.r = r;\r\n        this.fill = fill;\r\n        this.stroke = stroke;\r\n        this.circle = null;\r\n        this.eventMap = new Map();\r\n        // 初始化元素\r\n        this.createCircle();\r\n    }\r\n    createCircle() {\r\n        this.circle = document.createElementNS(SVG_NS, 'circle');\r\n        // 设置圆的必要参数参数\r\n        circle_1.PARAM.forEach((item) => { this.setAttribute(item, `${this[item]}`); });\r\n    }\r\n    setAttribute(type, value) {\r\n        this.circle.setAttribute(type, value);\r\n    }\r\n    getAttribute(type) {\r\n        return this.circle.getAttribute(type);\r\n    }\r\n    addEvent(name, value) {\r\n        const event = {\r\n            name: name,\r\n            callback: value,\r\n            content: this\r\n        };\r\n        this.eventMap.set(name, event);\r\n    }\r\n    addEventListener(name, callback) {\r\n        console.log(name);\r\n        this.circle.addEventListener(name, callback);\r\n    }\r\n    getEle() {\r\n        return this.circle;\r\n    }\r\n}\r\nexports.default = Circle;\r\n\n\n//# sourceURL=webpack://Force/./src/SVGGraph/baseGraph/circle.ts?");

/***/ }),

/***/ "./src/Utils.ts":
/*!**********************!*\
  !*** ./src/Utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// 工具函数\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Utils {\r\n    constructor() {\r\n        this.getColor = this.getColor.bind(this);\r\n    }\r\n    static getInstance() {\r\n        if (!Utils.instance) {\r\n            Utils.instance = new Utils();\r\n        }\r\n        return Utils.instance;\r\n    }\r\n    getRandom(...rest) {\r\n        // 必须传参数，而且参数只能是两个\r\n        if (!rest || rest.length !== 2) {\r\n            return 0;\r\n        }\r\n        return Math.random() * (rest[1] - rest[0]) + rest[0];\r\n    }\r\n    getColor(colorCount) {\r\n        if (!isFinite(colorCount)) {\r\n            return [];\r\n        }\r\n        return Array(colorCount).fill(0).map((item) => `hsl(${this.getRandom(0, 360)}, 100%, 60%)`);\r\n    }\r\n}\r\nexports.default = Utils;\r\n\n\n//# sourceURL=webpack://Force/./src/Utils.ts?");

/***/ }),

/***/ "./src/Vector.ts":
/*!***********************!*\
  !*** ./src/Vector.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Vector {\r\n    constructor(x = 0, y = 0) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    // 计算两个点形成的向量\r\n    static formPoints(point1, point2) {\r\n        return new Vector(point2.x - point1.x, point2.y - point1.y);\r\n    }\r\n    // 向量相加;\r\n    add(point) {\r\n        return new Vector(this.x + point.x, this.y + point.y);\r\n    }\r\n    // 获取向量的长度\r\n    length() {\r\n        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));\r\n    }\r\n    // 向量标准化 ---》 将一个向量转换为单位向量\r\n    normalize() {\r\n        const length = this.length();\r\n        return new Vector(this.x / length, this.y / length);\r\n    }\r\n    // 向量相乘\r\n    multiply(scale) {\r\n        // 乘法的思路是，先将初始向量单位化，然后在乘以新向量的长度，从而转换成新向量\r\n        return new Vector(this.x * scale, this.y * scale);\r\n    }\r\n}\r\nexports.default = Vector;\r\n\n\n//# sourceURL=webpack://Force/./src/Vector.ts?");

/***/ }),

/***/ "./src/constant.js":
/*!*************************!*\
  !*** ./src/constant.js ***!
  \*************************/
/*! exports provided: defaultCount, subductionCoefficient, SVG_NS, CIRCLE_R, DISTANCE, TIME_ADJUST_COEFFIC, COEFFICIENT_OF_ELASTICITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultCount\", function() { return defaultCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subductionCoefficient\", function() { return subductionCoefficient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SVG_NS\", function() { return SVG_NS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CIRCLE_R\", function() { return CIRCLE_R; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DISTANCE\", function() { return DISTANCE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TIME_ADJUST_COEFFIC\", function() { return TIME_ADJUST_COEFFIC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COEFFICIENT_OF_ELASTICITY\", function() { return COEFFICIENT_OF_ELASTICITY; });\n// 默认计算 1000 次达到平衡\nconst defaultCount = 1300; // 力的损耗系数 每次速度的消减系数\n\nconst subductionCoefficient = .98; // svg 的命名空间。创建 SVG 元素时需要使用\n\nconst SVG_NS = 'http://www.w3.org/2000/svg';\nconst CIRCLE_R = 15;\nconst DISTANCE = 200; //  在一定范围内，整体运动在稳定范围内， 越小，每个球的运动范围越大，越大，缩小的越快，稳定的越快\n\nconst TIME_ADJUST_COEFFIC = 500; // 默认的事件调整系数\n// 默认的弹簧弹力系数\n\nconst COEFFICIENT_OF_ELASTICITY = 0.5;\n\n//# sourceURL=webpack://Force/./src/constant.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Force; });\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ \"./src/Vector.ts\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Vector__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ \"./src/constant.js\");\n/* harmony import */ var _Drag_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drag/index */ \"./src/Drag/index.ts\");\n/* harmony import */ var _Drag_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Drag_index__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.ts\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Utils__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _EventListener_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventListener/index */ \"./src/EventListener/index.ts\");\n/* harmony import */ var _EventListener_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_EventListener_index__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _SVGGraph_baseGraph_circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SVGGraph/baseGraph/circle */ \"./src/SVGGraph/baseGraph/circle.ts\");\n/* harmony import */ var _SVGGraph_baseGraph_circle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SVGGraph_baseGraph_circle__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst event = _EventListener_index__WEBPACK_IMPORTED_MODULE_4___default.a.getInstance();\nclass Force {\n  // root 根元素  eleCount 要生成的元素个数\n  constructor(root, eleCount) {\n    this.update = this.update.bind(this);\n    this.count = 0;\n    this.root = root;\n    this.eleCount = eleCount;\n    this.circle = [];\n    this.paused = false;\n    const boundBox = root.getBoundingClientRect();\n    this.xRange = [0, boundBox.width];\n    this.yRange = [0, boundBox.height];\n    this.path = this.initPath();\n    this.rootSVG = this.initRoot();\n    this.rootSVG.appendChild(this.path);\n    this.root.appendChild(this.rootSVG);\n    this.initMoveEle(eleCount);\n    this.initEvent();\n    this.start();\n  } // 初始化 SVG 元素\n\n\n  initRoot() {\n    const svg = this.rootSVG = document.createElementNS(_constant__WEBPACK_IMPORTED_MODULE_1__[\"SVG_NS\"], 'svg');\n    svg.setAttribute('width', \"100%\");\n    svg.setAttribute('height', '100%');\n    return svg;\n  } // 初始化页面元素\n\n\n  initMoveEle(num) {\n    return new Array(num).fill(1).forEach(item => {\n      this.createCircle();\n    });\n  } // 初始化连线的 path\n\n\n  initPath() {\n    const path = document.createElementNS(_constant__WEBPACK_IMPORTED_MODULE_1__[\"SVG_NS\"], 'path');\n    path.setAttribute(\"fill\", \"none\");\n    path.setAttribute('stroke', '#333');\n    return path;\n  }\n\n  createCircle() {\n    const pos = this.randomPos();\n    const circle = new _SVGGraph_baseGraph_circle__WEBPACK_IMPORTED_MODULE_5___default.a({\n      cx: pos.x,\n      cy: pos.y,\n      r: _constant__WEBPACK_IMPORTED_MODULE_1__[\"CIRCLE_R\"],\n      fill: `hsl(${Math.random() * 240}, ${50 + Math.random() * 50}%, 60%)`\n    });\n    circle.addEvent('mousedown', () => {\n      event.emit('end');\n    });\n    circle.addEvent('mousemove', () => {\n      event.emit('start1', circle);\n    });\n    circle.addEvent('mouseup', () => {\n      event.emit('start');\n    });\n    circle.s = new _Vector__WEBPACK_IMPORTED_MODULE_0___default.a(pos.x, pos.y); // 初始位移向量\n\n    circle.v = new _Vector__WEBPACK_IMPORTED_MODULE_0___default.a(); // 初始速度向量\n\n    circle.a = new _Vector__WEBPACK_IMPORTED_MODULE_0___default.a(); // 初始加速度向量;\n\n    circle.x = pos.x; // 记录元素的横坐标\n\n    circle.y = pos.y; // 记录元素的纵坐标\n\n    circle.idx = Math.random();\n    this.circle.push(circle);\n    this.rootSVG.appendChild(circle.getEle()); // 初始化拖拽\n\n    new _Drag_index__WEBPACK_IMPORTED_MODULE_2___default.a(circle);\n  }\n\n  initEvent() {\n    // 注册时间，可以在其他地方调用\n    event.addEvent('start', this.start, this);\n    event.addEvent('start1', this.start1, this);\n    event.addEvent('end', this.end, this);\n  }\n\n  randomPos() {\n    const ins = _Utils__WEBPACK_IMPORTED_MODULE_3___default.a.getInstance().getRandom;\n    return {\n      x: ins(...this.xRange),\n      y: ins(...this.yRange)\n    };\n  } // 计算两点之间力的合力\n\n\n  calcF(originF, circle1, circle2) {\n    const newPoints = _Vector__WEBPACK_IMPORTED_MODULE_0___default.a.formPoints(circle1, circle2);\n    const len = newPoints.length();\n    const dis = len - _constant__WEBPACK_IMPORTED_MODULE_1__[\"DISTANCE\"]; // 基于弹簧模型\n\n    const f = newPoints.normalize().multiply(dis * _constant__WEBPACK_IMPORTED_MODULE_1__[\"COEFFICIENT_OF_ELASTICITY\"]);\n    return originF.add(f);\n  } // animate (动画)\n\n\n  update() {\n    this.count++;\n    var frameTime = +new Date();\n    var t = frameTime - this.lastFrameTime;\n    ;\n    this.lastFrameTime = frameTime;\n    t /= 500; // \n\n    this.circle.forEach(item => {\n      var originF = new _Vector__WEBPACK_IMPORTED_MODULE_0___default.a();\n      this.circle.forEach(sub => {\n        if (item === sub) return;\n        originF = this.calcF(originF, item, sub);\n      }); // 这里计算的是瞬时加速度，模拟极端时间内，物体做的是匀加速运动\n\n      item.a = originF; // f = ma m=1(忽略质量对加速度的影响)\n\n      item.v = item.v.add(item.a.multiply(t)).multiply(_constant__WEBPACK_IMPORTED_MODULE_1__[\"subductionCoefficient\"]);\n      item.s = item.s.add(item.v.multiply(t));\n      item.setAttribute('cx', item.s.x);\n      item.setAttribute('cy', item.s.y);\n      item.x = item.s.x;\n      item.y = item.s.y;\n    });\n    this.link();\n    console.log(this.count);\n\n    if (this.count <= _constant__WEBPACK_IMPORTED_MODULE_1__[\"defaultCount\"]) {\n      requestAnimationFrame(this.update);\n    }\n  }\n\n  link() {\n    // 连线的思路，点对点单条连线\n    const path = [];\n    this.circle.forEach(iA => {\n      this.circle.forEach(iB => {\n        if (iA == iB) {\n          return;\n        }\n\n        path.push(`M ${iA.x} ${iA.y}`);\n        path.push(`L ${iB.x} ${iB.y}`);\n      });\n    });\n    this.path.setAttribute('d', path.join(\",\"));\n  }\n\n  start() {\n    this.count = 0;\n    this.lastFrameTime = +new Date();\n    requestAnimationFrame(this.update);\n  } // animate (动画)\n\n\n  start1(ele) {\n    // 鼠标拖动时执行的动画\n    // 目前存在的问题是，拖动一次移动一次，停止拖拽则不动了\n    this.lastFrameTime = +new Date();\n    requestAnimationFrame(this.update1.bind(this, ele));\n  }\n\n  update1(ele) {\n    var frameTime = +new Date();\n    var t = frameTime - this.lastFrameTime;\n    ;\n    t /= 480; // ele 作为轴心元素 其他\n\n    this.circle.forEach(item => {\n      if (item.idx === ele.idx) return;\n      var originF = new _Vector__WEBPACK_IMPORTED_MODULE_0___default.a();\n      this.circle.forEach(sub => {\n        if (item.idx === sub.idx) return;\n        originF = this.calcF(originF, item, sub);\n      }); // 这里计算的是瞬时加速度，模拟极端时间内，物体做的是匀加速运动\n\n      item.a = originF; // f = ma m=1(忽略质量对加速度的影响)\n\n      item.v = item.v.add(item.a.multiply(t));\n      item.s = item.s.add(item.v.multiply(t));\n      item.setAttribute('cx', item.s.x);\n      item.setAttribute('cy', item.s.y);\n      item.x = item.s.x;\n      item.y = item.s.y;\n    });\n    this.link();\n  } // 动画暂停\n\n\n  paused() {\n    this.paused = true;\n  } // restart 暂停后重新执行\n\n\n  restart() {\n    this.paused = false;\n  } // 动画终止\n\n\n  end() {\n    this.count = _constant__WEBPACK_IMPORTED_MODULE_1__[\"defaultCount\"] + 200;\n    this.updateCount = _constant__WEBPACK_IMPORTED_MODULE_1__[\"defaultCount\"] + 200;\n  }\n\n}\n\n//# sourceURL=webpack://Force/./src/index.js?");

/***/ })

/******/ })["default"];
});