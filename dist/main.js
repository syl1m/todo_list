/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.hidden {\n  display: none;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n/* Header */\nheader {\n  display: flex;\n  justify-content: space-between;\n  background-color: yellow;\n  position: sticky;\n  top: 0;\n  padding: 1rem;\n}\n\n.leftside_header {\n  display: flex;\n  gap: 1rem;\n}\n\n/* Main content */\n.main_content {\n  display: flex;\n  flex: 1;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  width: 15rem;\n  padding: 1rem;\n  background-color: aqua;\n}\n\n.project_section {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.task_container {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 1rem;\n  background-color: plum;\n  gap: 0.5rem;\n}\n\n/* Buttons */\n.addTaskBtn {\n  padding: 0 1rem;\n}\n\n/* Add Task Form */\nbutton,\ninput,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n}\n\ninput {\n  appearance: none;\n}\n\ntextarea {\n  resize: none;\n}\n\n.add_task_form_div {\n  padding: 0 1rem;\n}\n\n.add_task_form {\n  display: flex;\n  flex-direction: column;\n}\n\n.task_priority {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 0;\n}\n\n.priority_switch {\n  position: relative;\n  width: 16rem;\n  display: flex;\n  justify-content: center;\n}\n\n.priority_switch:before {\n  background-color: grey;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  height: 1.5rem;\n  border-radius: 30px;\n}\n\n.label_priority {\n  width: 4.5rem;\n  padding: 0.5rem;\n  font-size: 0.8rem;\n  text-align: center;\n  cursor: pointer;\n  transition: color 200ms ease-out;\n  z-index: 1;\n}\n\n.label_priority:hover {\n  color: white;\n}\n\n.switch_indicator {\n  background-color: palegreen;\n  opacity: 0.5;\n  width: 3.5rem;\n  height: 3.5rem;\n  position: absolute;\n  left: 1.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97),\n    background 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);\n}\n\n#low:checked ~ .switch_indicator {\n  background: palegreen;\n}\n\n#medium:checked ~ .switch_indicator {\n  background: palegoldenrod;\n  transform: translate(4.5rem, -50%);\n}\n\n#high:checked ~ .switch_indicator {\n  background: palevioletred;\n  transform: translate(9rem, -50%);\n}\n\n/* Add Project Form */\n/* Project Render */\n.projectDivUI {\n  display: grid;\n  grid-template-columns: 1fr 5rem 1fr;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  word-wrap: break-word;\n  align-items: center;\n  background-color: red;\n}\n\n/* Task Render */\n.directory_header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.25rem;\n  font-weight: bold;\n  padding: 1rem;\n}\n\n.task_list {\n  padding: 0 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.taskDivUI {\n  background-color: purple;\n  display: grid;\n  grid-template-columns: 1fr 15fr 3fr 3fr 1fr 1fr;\n  padding: 1rem;\n  gap: 1rem;\n  align-items: center;\n  position: relative;\n}\n\n.low-priority {\n  border-left: 0.5rem solid green;\n}\n\n.medium-priority {\n  border-left: 0.5rem solid yellow;\n}\n\n.high-priority {\n  border-left: 0.5rem solid red;\n}\n\ninput[type=\"checkbox\"] {\n  height: 1rem;\n  width: 1rem;\n  border-radius: 4px;\n  background-color: white;\n  cursor: pointer;\n}\n\ninput[type=\"checkbox\"]:hover {\n  background-color: grey;\n}\n\ninput[type=\"checkbox\"]:checked {\n  background-color: blue;\n}\n\ninput[type=\"checkbox\"]:after {\n  content: \"\";\n  display: none;\n  position: absolute;\n  left: 1.25rem;\n  width: 0.25rem;\n  height: 0.5rem;\n  border: solid white;\n  border-width: 0 0.2rem 0.2rem 0;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\ninput[type=\"checkbox\"]:checked:after {\n  display: block;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA,WAAW;AACX;EACE,aAAa;EACb,8BAA8B;EAC9B,wBAAwB;EACxB,gBAAgB;EAChB,MAAM;EACN,aAAa;AACf;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,OAAO;AACT;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA,YAAY;AACZ;EACE,eAAe;AACjB;;AAEA,kBAAkB;AAClB;;;EAGE,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,2BAA2B;EAC3B,WAAW;EACX,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,gCAAgC;EAChC,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,QAAQ;EACR,2BAA2B;EAC3B,kBAAkB;EAClB;yDACuD;AACzD;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA,qBAAqB;AACrB,mBAAmB;AACnB;EACE,aAAa;EACb,mCAAmC;EACnC,WAAW;EACX,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,+CAA+C;EAC/C,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,cAAc;EACd,cAAc;EACd,mBAAmB;EACnB,+BAA+B;EAC/B,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA;EACE,cAAc;AAChB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.hidden {\n  display: none;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n/* Header */\nheader {\n  display: flex;\n  justify-content: space-between;\n  background-color: yellow;\n  position: sticky;\n  top: 0;\n  padding: 1rem;\n}\n\n.leftside_header {\n  display: flex;\n  gap: 1rem;\n}\n\n/* Main content */\n.main_content {\n  display: flex;\n  flex: 1;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  width: 15rem;\n  padding: 1rem;\n  background-color: aqua;\n}\n\n.project_section {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.task_container {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 1rem;\n  background-color: plum;\n  gap: 0.5rem;\n}\n\n/* Buttons */\n.addTaskBtn {\n  padding: 0 1rem;\n}\n\n/* Add Task Form */\nbutton,\ninput,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n}\n\ninput {\n  appearance: none;\n}\n\ntextarea {\n  resize: none;\n}\n\n.add_task_form_div {\n  padding: 0 1rem;\n}\n\n.add_task_form {\n  display: flex;\n  flex-direction: column;\n}\n\n.task_priority {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 0;\n}\n\n.priority_switch {\n  position: relative;\n  width: 16rem;\n  display: flex;\n  justify-content: center;\n}\n\n.priority_switch:before {\n  background-color: grey;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  height: 1.5rem;\n  border-radius: 30px;\n}\n\n.label_priority {\n  width: 4.5rem;\n  padding: 0.5rem;\n  font-size: 0.8rem;\n  text-align: center;\n  cursor: pointer;\n  transition: color 200ms ease-out;\n  z-index: 1;\n}\n\n.label_priority:hover {\n  color: white;\n}\n\n.switch_indicator {\n  background-color: palegreen;\n  opacity: 0.5;\n  width: 3.5rem;\n  height: 3.5rem;\n  position: absolute;\n  left: 1.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97),\n    background 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);\n}\n\n#low:checked ~ .switch_indicator {\n  background: palegreen;\n}\n\n#medium:checked ~ .switch_indicator {\n  background: palegoldenrod;\n  transform: translate(4.5rem, -50%);\n}\n\n#high:checked ~ .switch_indicator {\n  background: palevioletred;\n  transform: translate(9rem, -50%);\n}\n\n/* Add Project Form */\n/* Project Render */\n.projectDivUI {\n  display: grid;\n  grid-template-columns: 1fr 5rem 1fr;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  word-wrap: break-word;\n  align-items: center;\n  background-color: red;\n}\n\n/* Task Render */\n.directory_header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.25rem;\n  font-weight: bold;\n  padding: 1rem;\n}\n\n.task_list {\n  padding: 0 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.taskDivUI {\n  background-color: purple;\n  display: grid;\n  grid-template-columns: 1fr 15fr 3fr 3fr 1fr 1fr;\n  padding: 1rem;\n  gap: 1rem;\n  align-items: center;\n  position: relative;\n}\n\n.low-priority {\n  border-left: 0.5rem solid green;\n}\n\n.medium-priority {\n  border-left: 0.5rem solid yellow;\n}\n\n.high-priority {\n  border-left: 0.5rem solid red;\n}\n\ninput[type=\"checkbox\"] {\n  height: 1rem;\n  width: 1rem;\n  border-radius: 4px;\n  background-color: white;\n  cursor: pointer;\n}\n\ninput[type=\"checkbox\"]:hover {\n  background-color: grey;\n}\n\ninput[type=\"checkbox\"]:checked {\n  background-color: blue;\n}\n\ninput[type=\"checkbox\"]:after {\n  content: \"\";\n  display: none;\n  position: absolute;\n  left: 1.25rem;\n  width: 0.25rem;\n  height: 0.5rem;\n  border: solid white;\n  border-width: 0 0.2rem 0.2rem 0;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\ninput[type=\"checkbox\"]:checked:after {\n  display: block;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkFormValidity": () => (/* binding */ checkFormValidity),
/* harmony export */   "displayElement": () => (/* binding */ displayElement),
/* harmony export */   "hideElement": () => (/* binding */ hideElement),
/* harmony export */   "renderNonProjectsUI": () => (/* binding */ renderNonProjectsUI),
/* harmony export */   "renderProjectsUI": () => (/* binding */ renderProjectsUI),
/* harmony export */   "renderTasksUI": () => (/* binding */ renderTasksUI)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");


function hideElement(element) {
  element.classList.add("hidden");
}

function displayElement(element) {
  element.classList.remove("hidden");
}

function setPriorityStyling(priority, taskDiv) {
  if (priority === "low") {
    taskDiv.classList.add("low-priority");
  } else if (priority === "medium") {
    taskDiv.classList.add("medium-priority");
  } else if (priority === "high") {
    taskDiv.classList.add("high-priority");
  }
}

function countTasksInProject(project, tasksArray) {
  let projectTaskCount = "";
  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].project === project && tasksArray[i].completed === "no")
      projectTaskCount++;
  }

  return projectTaskCount;
}

function countTasksInHome(tasksArray) {
  let taskCount = "";
  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].completed === "no") taskCount++;
  }

  return taskCount;
}

function countTasksInToday(tasksArray) {
  let taskCount = "";
  const todayDate = new Date();

  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].completed === "no") {
      const taskDueDate = tasksArray[i].dueDate;
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(todayDate, taskDueDate) === 0) taskCount++;
    }
  }

  return taskCount;
}

// Render Tasks in DOM
function renderTasksUI(tasksArray, currentProject) {
  const directoryName = document.querySelector(".directoryName");
  const taskList = document.querySelector(".task_list");
  if (currentProject) directoryName.textContent = `${currentProject}`;
  taskList.textContent = "";

  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].project === currentProject) {
      const taskDiv = document.createElement("div");
      taskDiv.dataset.index = i;
      taskDiv.classList.add("taskDivUI");

      const checkbox = document.createElement("input");
      const title = document.createElement("div");
      const details = document.createElement("div");
      const dueDate = document.createElement("div");
      const editIcon = document.createElement("div");
      const deleteIcon = document.createElement("div");

      checkbox.setAttribute("type", "checkbox");
      title.textContent = `${tasksArray[i].title}`;
      details.textContent = "DETAILS";
      dueDate.textContent = `${tasksArray[i].dueDate}`;
      editIcon.textContent = "edit";
      deleteIcon.textContent = "delete";

      const priority = `${tasksArray[i].priority}`;
      setPriorityStyling(priority, taskDiv);

      taskDiv.appendChild(checkbox);
      taskDiv.appendChild(title);
      taskDiv.appendChild(details);
      taskDiv.appendChild(dueDate);
      taskDiv.appendChild(editIcon);
      taskDiv.appendChild(deleteIcon);

      taskList.appendChild(taskDiv);
      // add event listeners for checkbox, details, edit, and delete
    }
  }
}

// Render Projects in DOM
function renderProjectsUI(projectsArray, tasksArray) {
  const projectDirectory = document.querySelector(".project_directory");
  projectDirectory.textContent = "";

  for (let i = 0; i < projectsArray.length; i++) {
    const projectDiv = document.createElement("div");
    projectDiv.dataset.index = i;
    projectDiv.classList.add("projectDivUI");

    const totalTasks = document.createElement("div");
    const name = document.createElement("div");
    const optionsIcon = document.createElement("div");
    const editIcon = document.createElement("div");
    const deleteProject = document.createElement("div");

    totalTasks.textContent = countTasksInProject(
      projectsArray[i].projectName,
      tasksArray
    );
    name.textContent = `${projectsArray[i].projectName}`;
    name.classList.add("projectNameEventListener");
    name.dataset.index = i;
    optionsIcon.textContent = ":";
    editIcon.textContent = "i";
    deleteProject.textContent = "X";

    projectDiv.appendChild(totalTasks);
    projectDiv.appendChild(name);
    projectDiv.appendChild(optionsIcon);
    optionsIcon.appendChild(editIcon);
    optionsIcon.appendChild(deleteProject);

    projectDirectory.appendChild(projectDiv);
    // Add event listener to options icon, hidden until hover over projectdiv element
    // Add event listeners for edit name and delete project
  }
}

// Render Non Project directories sidebar and tasks list
function renderNonProjectsUI(tasksArray) {
  const homeTaskCount = document.querySelector(".home .taskCount");
  const todayTaskCount = document.querySelector(".today .taskCount");
  const weekTaskCount = document.querySelector(".week .taskCount");
  const importantTaskCount = document.querySelector(".important .taskCount");

  homeTaskCount.textContent = countTasksInHome(tasksArray);
  todayTaskCount.textContent = countTasksInToday(tasksArray);
}

// Function to check form validity
function checkFormValidity(formElementName) {
  const element = document.querySelector(`input[name="${formElementName}"]`);
  return element.checkValidity();
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDupProjectName": () => (/* binding */ checkDupProjectName),
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
class Project {
  constructor(projectName) {
    this.projectName = projectName;
  }

  projectToArray(array) {
    array.push(this);
  }
}

// Function to create project from form
function createProject() {
  const projectName = document
    .querySelector('input[name="project_name"]')
    .value.trim();

  return new Project(projectName);
}

// Function to edit project name
// Function to prevent duplicate Project names
function checkDupProjectName(projectsArray) {
  const name = document
    .querySelector('input[name="project_name"]')
    .value.trim();

  for (let i = 0; i < projectsArray.length; i++) {
    if (name === projectsArray[i].projectName) {
      return true;
    }
  }

  return false;
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
class Task {
  constructor(title, details, dueDate, priority, project) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.completed = "no";
  }

  taskToArray(array) {
    array.push(this);
  }
}

// Function to get value from radio button
function getRadioCheckedValue(inputName) {
  const radioElements = document.getElementsByName(inputName);
  let checkedValue = "";

  for (let i = 0; i < radioElements.length; i++) {
    if (radioElements[i].checked) {
      checkedValue = radioElements[i].value;
      break;
    }
  }

  return checkedValue;
}

// Function to create task from form
function createTask(currentProject) {
  const title = document.querySelector('input[name="title"]').value.trim();
  const details = document
    .querySelector('textarea[name="task_details"]')
    .value.trim();
  const dueDate = document.querySelector('input[name="dueDate"]').value;
  const priority = getRadioCheckedValue("priority");
  const project = `${currentProject}`;

  return new Task(title, details, dueDate, priority, project);
}

// Function to edit task
// Function to mark task as complete


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* eslint-disable no-use-before-define */





const tasksArray = [];
const projectsArray = [];
let currentProject = "";

// Project Form Query Selectors
const addProjectBtn = document.querySelector(".add_project button");
const addProjectFormDiv = document.querySelector(".add_project_form_div");
const addProjectForm = document.querySelector(".add_project_form");
const submitProjectBtn = document.querySelector("button.addProjectBtn");
const cancelProjectBtn = document.querySelector("button.cancelProjectBtn");

// Task Form Query Selectors
const addTaskBtn = document.querySelector(".addTaskBtn button");
const addTaskFormDiv = document.querySelector(".add_task_form_div");
const addTaskForm = document.querySelector(".add_task_form");
const submitTaskBtn = document.querySelector("button.addTaskFormBtn");
const cancelTaskBtn = document.querySelector("button.cancelTaskFormBtn");

// Event listeners
addProjectBtn.addEventListener("click", () => {
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.displayElement)(addProjectFormDiv);
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.hideElement)(addProjectBtn);
  document.querySelector('input[name="project_name"]').focus();
});

submitProjectBtn.addEventListener("click", (e) => {
  if (!(0,_UI__WEBPACK_IMPORTED_MODULE_3__.checkFormValidity)("project_name")) return;
  e.preventDefault();
  if ((0,_project__WEBPACK_IMPORTED_MODULE_2__.checkDupProjectName)(projectsArray)) {
    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.displayElement)(document.querySelector(".duplicateNameErrorMessage"));
    return;
  }

  const project = (0,_project__WEBPACK_IMPORTED_MODULE_2__["default"])();
  project.projectToArray(projectsArray);
  currentProject = project.projectName;
  addProjectForm.reset();

  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.displayElement)(addProjectBtn);
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.hideElement)(addProjectFormDiv);
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.hideElement)(document.querySelector(".duplicateNameErrorMessage"));
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.renderProjectsUI)(projectsArray, tasksArray);
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.renderTasksUI)(tasksArray, currentProject);
  createProjectEventListeners();

  console.log(projectsArray);
});

cancelProjectBtn.addEventListener("click", () => {
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.displayElement)(addProjectBtn);
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.hideElement)(addProjectFormDiv);
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.hideElement)(document.querySelector(".duplicateNameErrorMessage"));
});

addTaskBtn.addEventListener("click", () => {
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.displayElement)(addTaskFormDiv);
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.hideElement)(addTaskBtn);
  document.querySelector('input[name="title"]').focus();
});

submitTaskBtn.addEventListener("click", (e) => {
  if (!(0,_UI__WEBPACK_IMPORTED_MODULE_3__.checkFormValidity)("title")) return;
  e.preventDefault();

  const task = (0,_task__WEBPACK_IMPORTED_MODULE_1__["default"])(currentProject);
  task.taskToArray(tasksArray);
  addTaskForm.reset();

  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.displayElement)(addTaskBtn);
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.hideElement)(addTaskFormDiv);
  if (currentProject) {
    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.renderProjectsUI)(projectsArray, tasksArray);
    createProjectEventListeners();
  }
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.renderTasksUI)(tasksArray, currentProject);

  console.log(tasksArray);
});

cancelTaskBtn.addEventListener("click", () => {
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.displayElement)(addTaskBtn);
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.hideElement)(addTaskFormDiv);
});

// Functions
function createProjectEventListeners() {
  const projects = document.querySelectorAll(".projectNameEventListener");
  projects.forEach((project) =>
    project.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      const name = projectsArray[i].projectName;

      currentProject = name;
      (0,_UI__WEBPACK_IMPORTED_MODULE_3__.renderTasksUI)(tasksArray, currentProject);
    })
  );
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVmO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsbURBQWM7QUFDaEIsRUFBRSxnREFBVztBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLGtEQUFhO0FBQ25CLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ubGVmdHNpZGVfaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi8qIE1haW4gY29udGVudCAqL1xcbi5tYWluX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5wcm9qZWN0X3NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4udGFza19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBsdW07XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLyogQnV0dG9ucyAqL1xcbi5hZGRUYXNrQnRuIHtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLyogQWRkIFRhc2sgRm9ybSAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuaW5wdXQge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uYWRkX3Rhc2tfZm9ybV9kaXYge1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4uYWRkX3Rhc2tfZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2tfcHJpb3JpdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi5wcmlvcml0eV9zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE2cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHlfc3dpdGNoOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXFxuLmxhYmVsX3ByaW9yaXR5IHtcXG4gIHdpZHRoOiA0LjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2Utb3V0O1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmxhYmVsX3ByaW9yaXR5OmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN3aXRjaF9pbmRpY2F0b3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGFsZWdyZWVuO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgd2lkdGg6IDMuNXJlbTtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMS43NXJlbTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDYwMG1zIGN1YmljLWJlemllcigwLjAyLCAwLjk0LCAwLjA5LCAwLjk3KSxcXG4gICAgYmFja2dyb3VuZCAzMDBtcyBjdWJpYy1iZXppZXIoMC4xNywgMC42NywgMC4xNCwgMS4wMyk7XFxufVxcblxcbiNsb3c6Y2hlY2tlZCB+IC5zd2l0Y2hfaW5kaWNhdG9yIHtcXG4gIGJhY2tncm91bmQ6IHBhbGVncmVlbjtcXG59XFxuXFxuI21lZGl1bTpjaGVja2VkIH4gLnN3aXRjaF9pbmRpY2F0b3Ige1xcbiAgYmFja2dyb3VuZDogcGFsZWdvbGRlbnJvZDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQuNXJlbSwgLTUwJSk7XFxufVxcblxcbiNoaWdoOmNoZWNrZWQgfiAuc3dpdGNoX2luZGljYXRvciB7XFxuICBiYWNrZ3JvdW5kOiBwYWxldmlvbGV0cmVkO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOXJlbSwgLTUwJSk7XFxufVxcblxcbi8qIEFkZCBQcm9qZWN0IEZvcm0gKi9cXG4vKiBQcm9qZWN0IFJlbmRlciAqL1xcbi5wcm9qZWN0RGl2VUkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVyZW0gMWZyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi8qIFRhc2sgUmVuZGVyICovXFxuLmRpcmVjdG9yeV9oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRhc2tfbGlzdCB7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udGFza0RpdlVJIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxNWZyIDNmciAzZnIgMWZyIDFmcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBnYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubG93LXByaW9yaXR5IHtcXG4gIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgZ3JlZW47XFxufVxcblxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCB5ZWxsb3c7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgcmVkO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMS4yNXJlbTtcXG4gIHdpZHRoOiAwLjI1cmVtO1xcbiAgaGVpZ2h0OiAwLjVyZW07XFxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDAuMnJlbSAwLjJyZW0gMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBLFlBQVk7QUFDWjtFQUNFLGVBQWU7QUFDakI7O0FBRUEsa0JBQWtCO0FBQ2xCOzs7RUFHRSxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEI7eURBQ3VEO0FBQ3pEOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUEscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQjtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0MsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmxlZnRzaWRlX2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQgKi9cXG4ubWFpbl9jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4ucHJvamVjdF9zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnRhc2tfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwbHVtO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi8qIEJ1dHRvbnMgKi9cXG4uYWRkVGFza0J0biB7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi8qIEFkZCBUYXNrIEZvcm0gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbmlucHV0IHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmFkZF90YXNrX2Zvcm1fZGl2IHtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLmFkZF90YXNrX2Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrX3ByaW9yaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4ucHJpb3JpdHlfc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxNnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5X3N3aXRjaDpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbi5sYWJlbF9wcmlvcml0eSB7XFxuICB3aWR0aDogNC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLW91dDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5sYWJlbF9wcmlvcml0eTpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zd2l0Y2hfaW5kaWNhdG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGVncmVlbjtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHdpZHRoOiAzLjVyZW07XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEuNzVyZW07XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA2MDBtcyBjdWJpYy1iZXppZXIoMC4wMiwgMC45NCwgMC4wOSwgMC45NyksXFxuICAgIGJhY2tncm91bmQgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuNjcsIDAuMTQsIDEuMDMpO1xcbn1cXG5cXG4jbG93OmNoZWNrZWQgfiAuc3dpdGNoX2luZGljYXRvciB7XFxuICBiYWNrZ3JvdW5kOiBwYWxlZ3JlZW47XFxufVxcblxcbiNtZWRpdW06Y2hlY2tlZCB+IC5zd2l0Y2hfaW5kaWNhdG9yIHtcXG4gIGJhY2tncm91bmQ6IHBhbGVnb2xkZW5yb2Q7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0LjVyZW0sIC01MCUpO1xcbn1cXG5cXG4jaGlnaDpjaGVja2VkIH4gLnN3aXRjaF9pbmRpY2F0b3Ige1xcbiAgYmFja2dyb3VuZDogcGFsZXZpb2xldHJlZDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDlyZW0sIC01MCUpO1xcbn1cXG5cXG4vKiBBZGQgUHJvamVjdCBGb3JtICovXFxuLyogUHJvamVjdCBSZW5kZXIgKi9cXG4ucHJvamVjdERpdlVJIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1cmVtIDFmcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBUYXNrIFJlbmRlciAqL1xcbi5kaXJlY3RvcnlfaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50YXNrX2xpc3Qge1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2tEaXZVSSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTVmciAzZnIgM2ZyIDFmciAxZnI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogMC41cmVtIHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4ubWVkaXVtLXByaW9yaXR5IHtcXG4gIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgeWVsbG93O1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogMC41cmVtIHNvbGlkIHJlZDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEuMjVyZW07XFxuICB3aWR0aDogMC4yNXJlbTtcXG4gIGhlaWdodDogMC41cmVtO1xcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci13aWR0aDogMCAwLjJyZW0gMC4ycmVtIDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFkZERheXMsIGNvbXBhcmVBc2MgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUVsZW1lbnQoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIHNldFByaW9yaXR5U3R5bGluZyhwcmlvcml0eSwgdGFza0Rpdikge1xuICBpZiAocHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJsb3ctcHJpb3JpdHlcIik7XG4gIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09IFwibWVkaXVtXCIpIHtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0tcHJpb3JpdHlcIik7XG4gIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGlnaC1wcmlvcml0eVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3VudFRhc2tzSW5Qcm9qZWN0KHByb2plY3QsIHRhc2tzQXJyYXkpIHtcbiAgbGV0IHByb2plY3RUYXNrQ291bnQgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGFza3NBcnJheVtpXS5wcm9qZWN0ID09PSBwcm9qZWN0ICYmIHRhc2tzQXJyYXlbaV0uY29tcGxldGVkID09PSBcIm5vXCIpXG4gICAgICBwcm9qZWN0VGFza0NvdW50Kys7XG4gIH1cblxuICByZXR1cm4gcHJvamVjdFRhc2tDb3VudDtcbn1cblxuZnVuY3Rpb24gY291bnRUYXNrc0luSG9tZSh0YXNrc0FycmF5KSB7XG4gIGxldCB0YXNrQ291bnQgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGFza3NBcnJheVtpXS5jb21wbGV0ZWQgPT09IFwibm9cIikgdGFza0NvdW50Kys7XG4gIH1cblxuICByZXR1cm4gdGFza0NvdW50O1xufVxuXG5mdW5jdGlvbiBjb3VudFRhc2tzSW5Ub2RheSh0YXNrc0FycmF5KSB7XG4gIGxldCB0YXNrQ291bnQgPSBcIlwiO1xuICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0YXNrc0FycmF5W2ldLmNvbXBsZXRlZCA9PT0gXCJub1wiKSB7XG4gICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2tzQXJyYXlbaV0uZHVlRGF0ZTtcbiAgICAgIGlmIChjb21wYXJlQXNjKHRvZGF5RGF0ZSwgdGFza0R1ZURhdGUpID09PSAwKSB0YXNrQ291bnQrKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFza0NvdW50O1xufVxuXG4vLyBSZW5kZXIgVGFza3MgaW4gRE9NXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFza3NVSSh0YXNrc0FycmF5LCBjdXJyZW50UHJvamVjdCkge1xuICBjb25zdCBkaXJlY3RvcnlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXJlY3RvcnlOYW1lXCIpO1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza19saXN0XCIpO1xuICBpZiAoY3VycmVudFByb2plY3QpIGRpcmVjdG9yeU5hbWUudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50UHJvamVjdH1gO1xuICB0YXNrTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRhc2tzQXJyYXlbaV0ucHJvamVjdCA9PT0gY3VycmVudFByb2plY3QpIHtcbiAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza0Rpdi5kYXRhc2V0LmluZGV4ID0gaTtcbiAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tEaXZVSVwiKTtcblxuICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7dGFza3NBcnJheVtpXS50aXRsZX1gO1xuICAgICAgZGV0YWlscy50ZXh0Q29udGVudCA9IFwiREVUQUlMU1wiO1xuICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3Rhc2tzQXJyYXlbaV0uZHVlRGF0ZX1gO1xuICAgICAgZWRpdEljb24udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcbiAgICAgIGRlbGV0ZUljb24udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGAke3Rhc2tzQXJyYXlbaV0ucHJpb3JpdHl9YDtcbiAgICAgIHNldFByaW9yaXR5U3R5bGluZyhwcmlvcml0eSwgdGFza0Rpdik7XG5cbiAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRldGFpbHMpO1xuICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzIGZvciBjaGVja2JveCwgZGV0YWlscywgZWRpdCwgYW5kIGRlbGV0ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBSZW5kZXIgUHJvamVjdHMgaW4gRE9NXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHNVSShwcm9qZWN0c0FycmF5LCB0YXNrc0FycmF5KSB7XG4gIGNvbnN0IHByb2plY3REaXJlY3RvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RfZGlyZWN0b3J5XCIpO1xuICBwcm9qZWN0RGlyZWN0b3J5LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RGl2LmRhdGFzZXQuaW5kZXggPSBpO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3REaXZVSVwiKTtcblxuICAgIGNvbnN0IHRvdGFsVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG9wdGlvbnNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICB0b3RhbFRhc2tzLnRleHRDb250ZW50ID0gY291bnRUYXNrc0luUHJvamVjdChcbiAgICAgIHByb2plY3RzQXJyYXlbaV0ucHJvamVjdE5hbWUsXG4gICAgICB0YXNrc0FycmF5XG4gICAgKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNBcnJheVtpXS5wcm9qZWN0TmFtZX1gO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3ROYW1lRXZlbnRMaXN0ZW5lclwiKTtcbiAgICBuYW1lLmRhdGFzZXQuaW5kZXggPSBpO1xuICAgIG9wdGlvbnNJY29uLnRleHRDb250ZW50ID0gXCI6XCI7XG4gICAgZWRpdEljb24udGV4dENvbnRlbnQgPSBcImlcIjtcbiAgICBkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRvdGFsVGFza3MpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChvcHRpb25zSWNvbik7XG4gICAgb3B0aW9uc0ljb24uYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgIG9wdGlvbnNJY29uLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xuXG4gICAgcHJvamVjdERpcmVjdG9yeS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gb3B0aW9ucyBpY29uLCBoaWRkZW4gdW50aWwgaG92ZXIgb3ZlciBwcm9qZWN0ZGl2IGVsZW1lbnRcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIGZvciBlZGl0IG5hbWUgYW5kIGRlbGV0ZSBwcm9qZWN0XG4gIH1cbn1cblxuLy8gUmVuZGVyIE5vbiBQcm9qZWN0IGRpcmVjdG9yaWVzIHNpZGViYXIgYW5kIHRhc2tzIGxpc3RcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJOb25Qcm9qZWN0c1VJKHRhc2tzQXJyYXkpIHtcbiAgY29uc3QgaG9tZVRhc2tDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZSAudGFza0NvdW50XCIpO1xuICBjb25zdCB0b2RheVRhc2tDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXkgLnRhc2tDb3VudFwiKTtcbiAgY29uc3Qgd2Vla1Rhc2tDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VlayAudGFza0NvdW50XCIpO1xuICBjb25zdCBpbXBvcnRhbnRUYXNrQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltcG9ydGFudCAudGFza0NvdW50XCIpO1xuXG4gIGhvbWVUYXNrQ291bnQudGV4dENvbnRlbnQgPSBjb3VudFRhc2tzSW5Ib21lKHRhc2tzQXJyYXkpO1xuICB0b2RheVRhc2tDb3VudC50ZXh0Q29udGVudCA9IGNvdW50VGFza3NJblRvZGF5KHRhc2tzQXJyYXkpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjaGVjayBmb3JtIHZhbGlkaXR5XG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGb3JtVmFsaWRpdHkoZm9ybUVsZW1lbnROYW1lKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiJHtmb3JtRWxlbWVudE5hbWV9XCJdYCk7XG4gIHJldHVybiBlbGVtZW50LmNoZWNrVmFsaWRpdHkoKTtcbn1cbiIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSkge1xuICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgfVxuXG4gIHByb2plY3RUb0FycmF5KGFycmF5KSB7XG4gICAgYXJyYXkucHVzaCh0aGlzKTtcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgcHJvamVjdCBmcm9tIGZvcm1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByb2plY3RfbmFtZVwiXScpXG4gICAgLnZhbHVlLnRyaW0oKTtcblxuICByZXR1cm4gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBlZGl0IHByb2plY3QgbmFtZVxuLy8gRnVuY3Rpb24gdG8gcHJldmVudCBkdXBsaWNhdGUgUHJvamVjdCBuYW1lc1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRHVwUHJvamVjdE5hbWUocHJvamVjdHNBcnJheSkge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByb2plY3RfbmFtZVwiXScpXG4gICAgLnZhbHVlLnRyaW0oKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobmFtZSA9PT0gcHJvamVjdHNBcnJheVtpXS5wcm9qZWN0TmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwiY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBcIm5vXCI7XG4gIH1cblxuICB0YXNrVG9BcnJheShhcnJheSkge1xuICAgIGFycmF5LnB1c2godGhpcyk7XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gZ2V0IHZhbHVlIGZyb20gcmFkaW8gYnV0dG9uXG5mdW5jdGlvbiBnZXRSYWRpb0NoZWNrZWRWYWx1ZShpbnB1dE5hbWUpIHtcbiAgY29uc3QgcmFkaW9FbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGlucHV0TmFtZSk7XG4gIGxldCBjaGVja2VkVmFsdWUgPSBcIlwiO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmFkaW9FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyYWRpb0VsZW1lbnRzW2ldLmNoZWNrZWQpIHtcbiAgICAgIGNoZWNrZWRWYWx1ZSA9IHJhZGlvRWxlbWVudHNbaV0udmFsdWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hlY2tlZFZhbHVlO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgdGFzayBmcm9tIGZvcm1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2soY3VycmVudFByb2plY3QpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGl0bGVcIl0nKS52YWx1ZS50cmltKCk7XG4gIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPVwidGFza19kZXRhaWxzXCJdJylcbiAgICAudmFsdWUudHJpbSgpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImR1ZURhdGVcIl0nKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBnZXRSYWRpb0NoZWNrZWRWYWx1ZShcInByaW9yaXR5XCIpO1xuICBjb25zdCBwcm9qZWN0ID0gYCR7Y3VycmVudFByb2plY3R9YDtcblxuICByZXR1cm4gbmV3IFRhc2sodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZWRpdCB0YXNrXG4vLyBGdW5jdGlvbiB0byBtYXJrIHRhc2sgYXMgY29tcGxldGVcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCwgeyBjaGVja0R1cFByb2plY3ROYW1lIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHtcbiAgaGlkZUVsZW1lbnQsXG4gIGRpc3BsYXlFbGVtZW50LFxuICBjaGVja0Zvcm1WYWxpZGl0eSxcbiAgcmVuZGVyUHJvamVjdHNVSSxcbiAgcmVuZGVyVGFza3NVSSxcbn0gZnJvbSBcIi4vVUlcIjtcblxuY29uc3QgdGFza3NBcnJheSA9IFtdO1xuY29uc3QgcHJvamVjdHNBcnJheSA9IFtdO1xubGV0IGN1cnJlbnRQcm9qZWN0ID0gXCJcIjtcblxuLy8gUHJvamVjdCBGb3JtIFF1ZXJ5IFNlbGVjdG9yc1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Byb2plY3QgYnV0dG9uXCIpO1xuY29uc3QgYWRkUHJvamVjdEZvcm1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZF9wcm9qZWN0X2Zvcm1fZGl2XCIpO1xuY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZF9wcm9qZWN0X2Zvcm1cIik7XG5jb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGRQcm9qZWN0QnRuXCIpO1xuY29uc3QgY2FuY2VsUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uY2FuY2VsUHJvamVjdEJ0blwiKTtcblxuLy8gVGFzayBGb3JtIFF1ZXJ5IFNlbGVjdG9yc1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza0J0biBidXR0b25cIik7XG5jb25zdCBhZGRUYXNrRm9ybURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Rhc2tfZm9ybV9kaXZcIik7XG5jb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Rhc2tfZm9ybVwiKTtcbmNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZFRhc2tGb3JtQnRuXCIpO1xuY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uY2FuY2VsVGFza0Zvcm1CdG5cIik7XG5cbi8vIEV2ZW50IGxpc3RlbmVyc1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaXNwbGF5RWxlbWVudChhZGRQcm9qZWN0Rm9ybURpdik7XG4gIGhpZGVFbGVtZW50KGFkZFByb2plY3RCdG4pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJvamVjdF9uYW1lXCJdJykuZm9jdXMoKTtcbn0pO1xuXG5zdWJtaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoIWNoZWNrRm9ybVZhbGlkaXR5KFwicHJvamVjdF9uYW1lXCIpKSByZXR1cm47XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKGNoZWNrRHVwUHJvamVjdE5hbWUocHJvamVjdHNBcnJheSkpIHtcbiAgICBkaXNwbGF5RWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1cGxpY2F0ZU5hbWVFcnJvck1lc3NhZ2VcIikpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KCk7XG4gIHByb2plY3QucHJvamVjdFRvQXJyYXkocHJvamVjdHNBcnJheSk7XG4gIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcblxuICBkaXNwbGF5RWxlbWVudChhZGRQcm9qZWN0QnRuKTtcbiAgaGlkZUVsZW1lbnQoYWRkUHJvamVjdEZvcm1EaXYpO1xuICBoaWRlRWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1cGxpY2F0ZU5hbWVFcnJvck1lc3NhZ2VcIikpO1xuICByZW5kZXJQcm9qZWN0c1VJKHByb2plY3RzQXJyYXksIHRhc2tzQXJyYXkpO1xuICByZW5kZXJUYXNrc1VJKHRhc2tzQXJyYXksIGN1cnJlbnRQcm9qZWN0KTtcbiAgY3JlYXRlUHJvamVjdEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG59KTtcblxuY2FuY2VsUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaXNwbGF5RWxlbWVudChhZGRQcm9qZWN0QnRuKTtcbiAgaGlkZUVsZW1lbnQoYWRkUHJvamVjdEZvcm1EaXYpO1xuICBoaWRlRWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1cGxpY2F0ZU5hbWVFcnJvck1lc3NhZ2VcIikpO1xufSk7XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGlzcGxheUVsZW1lbnQoYWRkVGFza0Zvcm1EaXYpO1xuICBoaWRlRWxlbWVudChhZGRUYXNrQnRuKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRpdGxlXCJdJykuZm9jdXMoKTtcbn0pO1xuXG5zdWJtaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoIWNoZWNrRm9ybVZhbGlkaXR5KFwidGl0bGVcIikpIHJldHVybjtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKGN1cnJlbnRQcm9qZWN0KTtcbiAgdGFzay50YXNrVG9BcnJheSh0YXNrc0FycmF5KTtcbiAgYWRkVGFza0Zvcm0ucmVzZXQoKTtcblxuICBkaXNwbGF5RWxlbWVudChhZGRUYXNrQnRuKTtcbiAgaGlkZUVsZW1lbnQoYWRkVGFza0Zvcm1EaXYpO1xuICBpZiAoY3VycmVudFByb2plY3QpIHtcbiAgICByZW5kZXJQcm9qZWN0c1VJKHByb2plY3RzQXJyYXksIHRhc2tzQXJyYXkpO1xuICAgIGNyZWF0ZVByb2plY3RFdmVudExpc3RlbmVycygpO1xuICB9XG4gIHJlbmRlclRhc2tzVUkodGFza3NBcnJheSwgY3VycmVudFByb2plY3QpO1xuXG4gIGNvbnNvbGUubG9nKHRhc2tzQXJyYXkpO1xufSk7XG5cbmNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGlzcGxheUVsZW1lbnQoYWRkVGFza0J0bik7XG4gIGhpZGVFbGVtZW50KGFkZFRhc2tGb3JtRGl2KTtcbn0pO1xuXG4vLyBGdW5jdGlvbnNcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFdmVudExpc3RlbmVycygpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3ROYW1lRXZlbnRMaXN0ZW5lclwiKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgaSA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBjb25zdCBuYW1lID0gcHJvamVjdHNBcnJheVtpXS5wcm9qZWN0TmFtZTtcblxuICAgICAgY3VycmVudFByb2plY3QgPSBuYW1lO1xuICAgICAgcmVuZGVyVGFza3NVSSh0YXNrc0FycmF5LCBjdXJyZW50UHJvamVjdCk7XG4gICAgfSlcbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==