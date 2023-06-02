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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.hidden {\n  display: none;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n/* Header */\nheader {\n  display: flex;\n  justify-content: space-between;\n  background-color: yellow;\n  position: sticky;\n  top: 0;\n  padding: 1rem;\n}\n\n.leftside_header {\n  display: flex;\n  gap: 1rem;\n}\n\n/* Main content */\n.main_content {\n  display: flex;\n  flex: 1;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  width: 15rem;\n  padding: 1rem;\n  background-color: aqua;\n}\n\n.project_section {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.task_container {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 1rem;\n  background-color: plum;\n}\n\n/* Add Task Form */\nbutton,\ninput,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n}\n\ninput {\n  appearance: none;\n}\n\ntextarea {\n  resize: none;\n}\n\n.add_task_form_div {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.add_task_form {\n  display: flex;\n  flex-direction: column;\n}\n\n.task_priority {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 0;\n}\n\n.priority_switch {\n  position: relative;\n  width: 16rem;\n  display: flex;\n  justify-content: center;\n}\n\n.priority_switch:before {\n  background-color: grey;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: -1;\n  width: 100%;\n  height: 1.5rem;\n  border-radius: 30px;\n}\n\n.label_priority {\n  width: 4.5rem;\n  padding: 0.5rem;\n  font-size: 0.8rem;\n  text-align: center;\n  cursor: pointer;\n  transition: color 200ms ease-out;\n}\n\n.label_priority:hover {\n  color: white;\n}\n\n.switch_indicator {\n  background-color: palegreen;\n  opacity: 0.5;\n  width: 4rem;\n  height: 4rem;\n  position: absolute;\n  left: 1.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97),\n    background 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);\n}\n\n#low:checked ~ .switch_indicator {\n  background: palegreen;\n}\n\n#medium:checked ~ .switch_indicator {\n  background: palegoldenrod;\n  transform: translate(4.5rem, -50%);\n}\n\n#high:checked ~ .switch_indicator {\n  background: palevioletred;\n  transform: translate(9rem, -50%);\n}\n\n/* Add Project Form */\n/* Project Render */\n.projectDivUI {\n  display: grid;\n  grid-template-columns: 1fr 5rem 1fr;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  word-wrap: break-word;\n  align-items: center;\n  background-color: red;\n}\n\n/* Task Render */\n.directory_header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.25rem;\n  font-weight: bold;\n  padding: 1rem;\n}\n\n.task_list {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.taskDivUI {\n  background-color: purple;\n  display: grid;\n  grid-template-columns: 1fr 15fr 3fr 3fr 1fr 1fr;\n  padding: 1rem;\n  gap: 1rem;\n  align-items: center;\n  position: relative;\n}\n\n.low-priority {\n  border-left: 0.5rem solid green;\n}\n\n.medium-priority {\n  border-left: 0.5rem solid yellow;\n}\n\n.high-priority {\n  border-left: 0.5rem solid red;\n}\n\ninput[type=\"checkbox\"] {\n  height: 1rem;\n  width: 1rem;\n  border-radius: 4px;\n  background-color: white;\n  cursor: pointer;\n}\n\ninput[type=\"checkbox\"]:hover {\n  background-color: grey;\n}\n\ninput[type=\"checkbox\"]:checked {\n  background-color: blue;\n}\n\ninput[type=\"checkbox\"]:after {\n  content: \"\";\n  display: none;\n  position: absolute;\n  left: 1.25rem;\n  width: 0.25rem;\n  height: 0.5rem;\n  border: solid white;\n  border-width: 0 0.2rem 0.2rem 0;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\ninput[type=\"checkbox\"]:checked:after {\n  display: block;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA,WAAW;AACX;EACE,aAAa;EACb,8BAA8B;EAC9B,wBAAwB;EACxB,gBAAgB;EAChB,MAAM;EACN,aAAa;AACf;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,OAAO;AACT;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;EACP,aAAa;EACb,sBAAsB;AACxB;;AAEA,kBAAkB;AAClB;;;EAGE,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,2BAA2B;EAC3B,WAAW;EACX,WAAW;EACX,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,QAAQ;EACR,2BAA2B;EAC3B,kBAAkB;EAClB;yDACuD;AACzD;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA,qBAAqB;AACrB,mBAAmB;AACnB;EACE,aAAa;EACb,mCAAmC;EACnC,WAAW;EACX,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,+CAA+C;EAC/C,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,cAAc;EACd,cAAc;EACd,mBAAmB;EACnB,+BAA+B;EAC/B,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA;EACE,cAAc;AAChB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.hidden {\n  display: none;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n/* Header */\nheader {\n  display: flex;\n  justify-content: space-between;\n  background-color: yellow;\n  position: sticky;\n  top: 0;\n  padding: 1rem;\n}\n\n.leftside_header {\n  display: flex;\n  gap: 1rem;\n}\n\n/* Main content */\n.main_content {\n  display: flex;\n  flex: 1;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  width: 15rem;\n  padding: 1rem;\n  background-color: aqua;\n}\n\n.project_section {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.task_container {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 1rem;\n  background-color: plum;\n}\n\n/* Add Task Form */\nbutton,\ninput,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n}\n\ninput {\n  appearance: none;\n}\n\ntextarea {\n  resize: none;\n}\n\n.add_task_form_div {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.add_task_form {\n  display: flex;\n  flex-direction: column;\n}\n\n.task_priority {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 0;\n}\n\n.priority_switch {\n  position: relative;\n  width: 16rem;\n  display: flex;\n  justify-content: center;\n}\n\n.priority_switch:before {\n  background-color: grey;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: -1;\n  width: 100%;\n  height: 1.5rem;\n  border-radius: 30px;\n}\n\n.label_priority {\n  width: 4.5rem;\n  padding: 0.5rem;\n  font-size: 0.8rem;\n  text-align: center;\n  cursor: pointer;\n  transition: color 200ms ease-out;\n}\n\n.label_priority:hover {\n  color: white;\n}\n\n.switch_indicator {\n  background-color: palegreen;\n  opacity: 0.5;\n  width: 4rem;\n  height: 4rem;\n  position: absolute;\n  left: 1.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97),\n    background 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);\n}\n\n#low:checked ~ .switch_indicator {\n  background: palegreen;\n}\n\n#medium:checked ~ .switch_indicator {\n  background: palegoldenrod;\n  transform: translate(4.5rem, -50%);\n}\n\n#high:checked ~ .switch_indicator {\n  background: palevioletred;\n  transform: translate(9rem, -50%);\n}\n\n/* Add Project Form */\n/* Project Render */\n.projectDivUI {\n  display: grid;\n  grid-template-columns: 1fr 5rem 1fr;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  word-wrap: break-word;\n  align-items: center;\n  background-color: red;\n}\n\n/* Task Render */\n.directory_header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.25rem;\n  font-weight: bold;\n  padding: 1rem;\n}\n\n.task_list {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.taskDivUI {\n  background-color: purple;\n  display: grid;\n  grid-template-columns: 1fr 15fr 3fr 3fr 1fr 1fr;\n  padding: 1rem;\n  gap: 1rem;\n  align-items: center;\n  position: relative;\n}\n\n.low-priority {\n  border-left: 0.5rem solid green;\n}\n\n.medium-priority {\n  border-left: 0.5rem solid yellow;\n}\n\n.high-priority {\n  border-left: 0.5rem solid red;\n}\n\ninput[type=\"checkbox\"] {\n  height: 1rem;\n  width: 1rem;\n  border-radius: 4px;\n  background-color: white;\n  cursor: pointer;\n}\n\ninput[type=\"checkbox\"]:hover {\n  background-color: grey;\n}\n\ninput[type=\"checkbox\"]:checked {\n  background-color: blue;\n}\n\ninput[type=\"checkbox\"]:after {\n  content: \"\";\n  display: none;\n  position: absolute;\n  left: 1.25rem;\n  width: 0.25rem;\n  height: 0.5rem;\n  border: solid white;\n  border-width: 0 0.2rem 0.2rem 0;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\ninput[type=\"checkbox\"]:checked:after {\n  display: block;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "renderProjectsUI": () => (/* binding */ renderProjectsUI),
/* harmony export */   "renderTasksUI": () => (/* binding */ renderTasksUI)
/* harmony export */ });
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
function renderProjectsUI(projectsArray) {
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

    totalTasks.textContent = "123";
    name.textContent = `${projectsArray[i].projectName}`;
    optionsIcon.textContent = ":";
    editIcon.textContent = "i";
    deleteProject.textContent = "X";

    // Add event listener to options icon, hidden until hover over projectdiv element
    // Add event listeners for edit name and delete project
    projectDiv.appendChild(totalTasks);
    projectDiv.appendChild(name);
    projectDiv.appendChild(optionsIcon);
    optionsIcon.appendChild(editIcon);
    optionsIcon.appendChild(deleteProject);

    projectDirectory.appendChild(projectDiv);
  }
}

// Create event listeners for tasks and project elements

// Associate task and project DOM elements with index of array using data attribute

// Render Non Project directories in sidebar

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
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.renderProjectsUI)(projectsArray);
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.renderTasksUI)(tasksArray, currentProject);

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
  if (currentProject) (0,_UI__WEBPACK_IMPORTED_MODULE_3__.renderProjectsUI)(projectsArray);
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.renderTasksUI)(tasksArray, currentProject);

  console.log(tasksArray);
});

cancelTaskBtn.addEventListener("click", () => {
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.displayElement)(addTaskBtn);
  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.hideElement)(addTaskFormDiv);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNXO0FBQytCO0FBT2pEOztBQUVkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLG1EQUFjO0FBQ2hCLEVBQUUsZ0RBQVc7QUFDYjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxPQUFPLHNEQUFpQjtBQUN4QjtBQUNBLE1BQU0sNkRBQW1CO0FBQ3pCLElBQUksbURBQWM7QUFDbEI7QUFDQTs7QUFFQSxrQkFBa0Isb0RBQWE7QUFDL0I7QUFDQTtBQUNBOztBQUVBLEVBQUUsbURBQWM7QUFDaEIsRUFBRSxnREFBVztBQUNiLEVBQUUsZ0RBQVc7QUFDYixFQUFFLHFEQUFnQjtBQUNsQixFQUFFLGtEQUFhOztBQUVmO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsbURBQWM7QUFDaEIsRUFBRSxnREFBVztBQUNiLEVBQUUsZ0RBQVc7QUFDYixDQUFDOztBQUVEO0FBQ0EsRUFBRSxtREFBYztBQUNoQixFQUFFLGdEQUFXO0FBQ2I7QUFDQSxDQUFDOztBQUVEO0FBQ0EsT0FBTyxzREFBaUI7QUFDeEI7O0FBRUEsZUFBZSxpREFBVTtBQUN6QjtBQUNBOztBQUVBLEVBQUUsbURBQWM7QUFDaEIsRUFBRSxnREFBVztBQUNiLHNCQUFzQixxREFBZ0I7QUFDdEMsRUFBRSxrREFBYTs7QUFFZjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxFQUFFLG1EQUFjO0FBQ2hCLEVBQUUsZ0RBQVc7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmxlZnRzaWRlX2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQgKi9cXG4ubWFpbl9jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4ucHJvamVjdF9zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnRhc2tfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwbHVtO1xcbn1cXG5cXG4vKiBBZGQgVGFzayBGb3JtICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5hZGRfdGFza19mb3JtX2RpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uYWRkX3Rhc2tfZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2tfcHJpb3JpdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi5wcmlvcml0eV9zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE2cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHlfc3dpdGNoOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG5cXG4ubGFiZWxfcHJpb3JpdHkge1xcbiAgd2lkdGg6IDQuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZS1vdXQ7XFxufVxcblxcbi5sYWJlbF9wcmlvcml0eTpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zd2l0Y2hfaW5kaWNhdG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGVncmVlbjtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMS41cmVtO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNjAwbXMgY3ViaWMtYmV6aWVyKDAuMDIsIDAuOTQsIDAuMDksIDAuOTcpLFxcbiAgICBiYWNrZ3JvdW5kIDMwMG1zIGN1YmljLWJlemllcigwLjE3LCAwLjY3LCAwLjE0LCAxLjAzKTtcXG59XFxuXFxuI2xvdzpjaGVja2VkIH4gLnN3aXRjaF9pbmRpY2F0b3Ige1xcbiAgYmFja2dyb3VuZDogcGFsZWdyZWVuO1xcbn1cXG5cXG4jbWVkaXVtOmNoZWNrZWQgfiAuc3dpdGNoX2luZGljYXRvciB7XFxuICBiYWNrZ3JvdW5kOiBwYWxlZ29sZGVucm9kO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNC41cmVtLCAtNTAlKTtcXG59XFxuXFxuI2hpZ2g6Y2hlY2tlZCB+IC5zd2l0Y2hfaW5kaWNhdG9yIHtcXG4gIGJhY2tncm91bmQ6IHBhbGV2aW9sZXRyZWQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg5cmVtLCAtNTAlKTtcXG59XFxuXFxuLyogQWRkIFByb2plY3QgRm9ybSAqL1xcbi8qIFByb2plY3QgUmVuZGVyICovXFxuLnByb2plY3REaXZVSSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNXJlbSAxZnI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLyogVGFzayBSZW5kZXIgKi9cXG4uZGlyZWN0b3J5X2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udGFza19saXN0IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udGFza0RpdlVJIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxNWZyIDNmciAzZnIgMWZyIDFmcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBnYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubG93LXByaW9yaXR5IHtcXG4gIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgZ3JlZW47XFxufVxcblxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCB5ZWxsb3c7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgcmVkO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMS4yNXJlbTtcXG4gIHdpZHRoOiAwLjI1cmVtO1xcbiAgaGVpZ2h0OiAwLjVyZW07XFxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDAuMnJlbSAwLjJyZW0gMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUEsa0JBQWtCO0FBQ2xCOzs7RUFHRSxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQjt5REFDdUQ7QUFDekQ7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdDQUFnQztBQUNsQzs7QUFFQSxxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLCtDQUErQztFQUMvQyxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2QsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ubGVmdHNpZGVfaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi8qIE1haW4gY29udGVudCAqL1xcbi5tYWluX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5wcm9qZWN0X3NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4udGFza19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBsdW07XFxufVxcblxcbi8qIEFkZCBUYXNrIEZvcm0gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbmlucHV0IHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmFkZF90YXNrX2Zvcm1fZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5hZGRfdGFza19mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFza19wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLnByaW9yaXR5X3N3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTZyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eV9zd2l0Y2g6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbi5sYWJlbF9wcmlvcml0eSB7XFxuICB3aWR0aDogNC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLW91dDtcXG59XFxuXFxuLmxhYmVsX3ByaW9yaXR5OmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN3aXRjaF9pbmRpY2F0b3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGFsZWdyZWVuO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxLjVyZW07XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA2MDBtcyBjdWJpYy1iZXppZXIoMC4wMiwgMC45NCwgMC4wOSwgMC45NyksXFxuICAgIGJhY2tncm91bmQgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuNjcsIDAuMTQsIDEuMDMpO1xcbn1cXG5cXG4jbG93OmNoZWNrZWQgfiAuc3dpdGNoX2luZGljYXRvciB7XFxuICBiYWNrZ3JvdW5kOiBwYWxlZ3JlZW47XFxufVxcblxcbiNtZWRpdW06Y2hlY2tlZCB+IC5zd2l0Y2hfaW5kaWNhdG9yIHtcXG4gIGJhY2tncm91bmQ6IHBhbGVnb2xkZW5yb2Q7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0LjVyZW0sIC01MCUpO1xcbn1cXG5cXG4jaGlnaDpjaGVja2VkIH4gLnN3aXRjaF9pbmRpY2F0b3Ige1xcbiAgYmFja2dyb3VuZDogcGFsZXZpb2xldHJlZDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDlyZW0sIC01MCUpO1xcbn1cXG5cXG4vKiBBZGQgUHJvamVjdCBGb3JtICovXFxuLyogUHJvamVjdCBSZW5kZXIgKi9cXG4ucHJvamVjdERpdlVJIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1cmVtIDFmcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBUYXNrIFJlbmRlciAqL1xcbi5kaXJlY3RvcnlfaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50YXNrX2xpc3Qge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50YXNrRGl2VUkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE1ZnIgM2ZyIDNmciAxZnIgMWZyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCBncmVlbjtcXG59XFxuXFxuLm1lZGl1bS1wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogMC41cmVtIHNvbGlkIHllbGxvdztcXG59XFxuXFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCByZWQ7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxLjI1cmVtO1xcbiAgd2lkdGg6IDAuMjVyZW07XFxuICBoZWlnaHQ6IDAuNXJlbTtcXG4gIGJvcmRlcjogc29saWQgd2hpdGU7XFxuICBib3JkZXItd2lkdGg6IDAgMC4ycmVtIDAuMnJlbSAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gaGlkZUVsZW1lbnQoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5RWxlbWVudChlbGVtZW50KSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn1cblxuZnVuY3Rpb24gc2V0UHJpb3JpdHlTdHlsaW5nKHByaW9yaXR5LCB0YXNrRGl2KSB7XG4gIGlmIChwcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImxvdy1wcmlvcml0eVwiKTtcbiAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcIm1lZGl1bS1wcmlvcml0eVwiKTtcbiAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpO1xuICB9XG59XG5cbi8vIFJlbmRlciBUYXNrcyBpbiBET01cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUYXNrc1VJKHRhc2tzQXJyYXksIGN1cnJlbnRQcm9qZWN0KSB7XG4gIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpcmVjdG9yeU5hbWVcIik7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrX2xpc3RcIik7XG4gIGlmIChjdXJyZW50UHJvamVjdCkgZGlyZWN0b3J5TmFtZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRQcm9qZWN0fWA7XG4gIHRhc2tMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGFza3NBcnJheVtpXS5wcm9qZWN0ID09PSBjdXJyZW50UHJvamVjdCkge1xuICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0YXNrRGl2LmRhdGFzZXQuaW5kZXggPSBpO1xuICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza0RpdlVJXCIpO1xuXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHt0YXNrc0FycmF5W2ldLnRpdGxlfWA7XG4gICAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gXCJERVRBSUxTXCI7XG4gICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gYCR7dGFza3NBcnJheVtpXS5kdWVEYXRlfWA7XG4gICAgICBlZGl0SWNvbi50ZXh0Q29udGVudCA9IFwiZWRpdFwiO1xuICAgICAgZGVsZXRlSWNvbi50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gYCR7dGFza3NBcnJheVtpXS5wcmlvcml0eX1gO1xuICAgICAgc2V0UHJpb3JpdHlTdHlsaW5nKHByaW9yaXR5LCB0YXNrRGl2KTtcblxuICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG4gICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIGNoZWNrYm94LCBkZXRhaWxzLCBlZGl0LCBhbmQgZGVsZXRlXG4gICAgfVxuICB9XG59XG5cbi8vIFJlbmRlciBQcm9qZWN0cyBpbiBET01cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0c1VJKHByb2plY3RzQXJyYXkpIHtcbiAgY29uc3QgcHJvamVjdERpcmVjdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9kaXJlY3RvcnlcIik7XG4gIHByb2plY3REaXJlY3RvcnkudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3REaXYuZGF0YXNldC5pbmRleCA9IGk7XG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERpdlVJXCIpO1xuXG4gICAgY29uc3QgdG90YWxUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgb3B0aW9uc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHRvdGFsVGFza3MudGV4dENvbnRlbnQgPSBcIjEyM1wiO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c0FycmF5W2ldLnByb2plY3ROYW1lfWA7XG4gICAgb3B0aW9uc0ljb24udGV4dENvbnRlbnQgPSBcIjpcIjtcbiAgICBlZGl0SWNvbi50ZXh0Q29udGVudCA9IFwiaVwiO1xuICAgIGRlbGV0ZVByb2plY3QudGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBvcHRpb25zIGljb24sIGhpZGRlbiB1bnRpbCBob3ZlciBvdmVyIHByb2plY3RkaXYgZWxlbWVudFxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIGVkaXQgbmFtZSBhbmQgZGVsZXRlIHByb2plY3RcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRvdGFsVGFza3MpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChvcHRpb25zSWNvbik7XG4gICAgb3B0aW9uc0ljb24uYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgIG9wdGlvbnNJY29uLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xuXG4gICAgcHJvamVjdERpcmVjdG9yeS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgfVxufVxuXG4vLyBDcmVhdGUgZXZlbnQgbGlzdGVuZXJzIGZvciB0YXNrcyBhbmQgcHJvamVjdCBlbGVtZW50c1xuXG4vLyBBc3NvY2lhdGUgdGFzayBhbmQgcHJvamVjdCBET00gZWxlbWVudHMgd2l0aCBpbmRleCBvZiBhcnJheSB1c2luZyBkYXRhIGF0dHJpYnV0ZVxuXG4vLyBSZW5kZXIgTm9uIFByb2plY3QgZGlyZWN0b3JpZXMgaW4gc2lkZWJhclxuXG4vLyBGdW5jdGlvbiB0byBjaGVjayBmb3JtIHZhbGlkaXR5XG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGb3JtVmFsaWRpdHkoZm9ybUVsZW1lbnROYW1lKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiJHtmb3JtRWxlbWVudE5hbWV9XCJdYCk7XG4gIHJldHVybiBlbGVtZW50LmNoZWNrVmFsaWRpdHkoKTtcbn1cbiIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSkge1xuICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgfVxuXG4gIHByb2plY3RUb0FycmF5KGFycmF5KSB7XG4gICAgYXJyYXkucHVzaCh0aGlzKTtcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgcHJvamVjdCBmcm9tIGZvcm1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByb2plY3RfbmFtZVwiXScpXG4gICAgLnZhbHVlLnRyaW0oKTtcblxuICByZXR1cm4gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBlZGl0IHByb2plY3QgbmFtZVxuLy8gRnVuY3Rpb24gdG8gcHJldmVudCBkdXBsaWNhdGUgUHJvamVjdCBuYW1lc1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRHVwUHJvamVjdE5hbWUocHJvamVjdHNBcnJheSkge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByb2plY3RfbmFtZVwiXScpXG4gICAgLnZhbHVlLnRyaW0oKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobmFtZSA9PT0gcHJvamVjdHNBcnJheVtpXS5wcm9qZWN0TmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwiY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBcIm5vXCI7XG4gIH1cblxuICB0YXNrVG9BcnJheShhcnJheSkge1xuICAgIGFycmF5LnB1c2godGhpcyk7XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gZ2V0IHZhbHVlIGZyb20gcmFkaW8gYnV0dG9uXG5mdW5jdGlvbiBnZXRSYWRpb0NoZWNrZWRWYWx1ZShpbnB1dE5hbWUpIHtcbiAgY29uc3QgcmFkaW9FbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGlucHV0TmFtZSk7XG4gIGxldCBjaGVja2VkVmFsdWUgPSBcIlwiO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmFkaW9FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyYWRpb0VsZW1lbnRzW2ldLmNoZWNrZWQpIHtcbiAgICAgIGNoZWNrZWRWYWx1ZSA9IHJhZGlvRWxlbWVudHNbaV0udmFsdWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hlY2tlZFZhbHVlO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgdGFzayBmcm9tIGZvcm1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2soY3VycmVudFByb2plY3QpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGl0bGVcIl0nKS52YWx1ZS50cmltKCk7XG4gIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPVwidGFza19kZXRhaWxzXCJdJylcbiAgICAudmFsdWUudHJpbSgpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImR1ZURhdGVcIl0nKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBnZXRSYWRpb0NoZWNrZWRWYWx1ZShcInByaW9yaXR5XCIpO1xuICBjb25zdCBwcm9qZWN0ID0gYCR7Y3VycmVudFByb2plY3R9YDtcblxuICByZXR1cm4gbmV3IFRhc2sodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZWRpdCB0YXNrXG4vLyBGdW5jdGlvbiB0byBtYXJrIHRhc2sgYXMgY29tcGxldGVcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCwgeyBjaGVja0R1cFByb2plY3ROYW1lIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHtcbiAgaGlkZUVsZW1lbnQsXG4gIGRpc3BsYXlFbGVtZW50LFxuICBjaGVja0Zvcm1WYWxpZGl0eSxcbiAgcmVuZGVyUHJvamVjdHNVSSxcbiAgcmVuZGVyVGFza3NVSSxcbn0gZnJvbSBcIi4vVUlcIjtcblxuY29uc3QgdGFza3NBcnJheSA9IFtdO1xuY29uc3QgcHJvamVjdHNBcnJheSA9IFtdO1xubGV0IGN1cnJlbnRQcm9qZWN0ID0gXCJcIjtcblxuLy8gUHJvamVjdCBGb3JtIFF1ZXJ5IFNlbGVjdG9yc1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Byb2plY3QgYnV0dG9uXCIpO1xuY29uc3QgYWRkUHJvamVjdEZvcm1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZF9wcm9qZWN0X2Zvcm1fZGl2XCIpO1xuY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZF9wcm9qZWN0X2Zvcm1cIik7XG5jb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGRQcm9qZWN0QnRuXCIpO1xuY29uc3QgY2FuY2VsUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uY2FuY2VsUHJvamVjdEJ0blwiKTtcblxuLy8gVGFzayBGb3JtIFF1ZXJ5IFNlbGVjdG9yc1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza0J0biBidXR0b25cIik7XG5jb25zdCBhZGRUYXNrRm9ybURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Rhc2tfZm9ybV9kaXZcIik7XG5jb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Rhc2tfZm9ybVwiKTtcbmNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZFRhc2tGb3JtQnRuXCIpO1xuY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uY2FuY2VsVGFza0Zvcm1CdG5cIik7XG5cbi8vIEV2ZW50IGxpc3RlbmVyc1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaXNwbGF5RWxlbWVudChhZGRQcm9qZWN0Rm9ybURpdik7XG4gIGhpZGVFbGVtZW50KGFkZFByb2plY3RCdG4pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJvamVjdF9uYW1lXCJdJykuZm9jdXMoKTtcbn0pO1xuXG5zdWJtaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoIWNoZWNrRm9ybVZhbGlkaXR5KFwicHJvamVjdF9uYW1lXCIpKSByZXR1cm47XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKGNoZWNrRHVwUHJvamVjdE5hbWUocHJvamVjdHNBcnJheSkpIHtcbiAgICBkaXNwbGF5RWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1cGxpY2F0ZU5hbWVFcnJvck1lc3NhZ2VcIikpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KCk7XG4gIHByb2plY3QucHJvamVjdFRvQXJyYXkocHJvamVjdHNBcnJheSk7XG4gIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcblxuICBkaXNwbGF5RWxlbWVudChhZGRQcm9qZWN0QnRuKTtcbiAgaGlkZUVsZW1lbnQoYWRkUHJvamVjdEZvcm1EaXYpO1xuICBoaWRlRWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1cGxpY2F0ZU5hbWVFcnJvck1lc3NhZ2VcIikpO1xuICByZW5kZXJQcm9qZWN0c1VJKHByb2plY3RzQXJyYXkpO1xuICByZW5kZXJUYXNrc1VJKHRhc2tzQXJyYXksIGN1cnJlbnRQcm9qZWN0KTtcblxuICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbn0pO1xuXG5jYW5jZWxQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRpc3BsYXlFbGVtZW50KGFkZFByb2plY3RCdG4pO1xuICBoaWRlRWxlbWVudChhZGRQcm9qZWN0Rm9ybURpdik7XG4gIGhpZGVFbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVwbGljYXRlTmFtZUVycm9yTWVzc2FnZVwiKSk7XG59KTtcblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaXNwbGF5RWxlbWVudChhZGRUYXNrRm9ybURpdik7XG4gIGhpZGVFbGVtZW50KGFkZFRhc2tCdG4pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGl0bGVcIl0nKS5mb2N1cygpO1xufSk7XG5cbnN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmICghY2hlY2tGb3JtVmFsaWRpdHkoXCJ0aXRsZVwiKSkgcmV0dXJuO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2soY3VycmVudFByb2plY3QpO1xuICB0YXNrLnRhc2tUb0FycmF5KHRhc2tzQXJyYXkpO1xuICBhZGRUYXNrRm9ybS5yZXNldCgpO1xuXG4gIGRpc3BsYXlFbGVtZW50KGFkZFRhc2tCdG4pO1xuICBoaWRlRWxlbWVudChhZGRUYXNrRm9ybURpdik7XG4gIGlmIChjdXJyZW50UHJvamVjdCkgcmVuZGVyUHJvamVjdHNVSShwcm9qZWN0c0FycmF5KTtcbiAgcmVuZGVyVGFza3NVSSh0YXNrc0FycmF5LCBjdXJyZW50UHJvamVjdCk7XG5cbiAgY29uc29sZS5sb2codGFza3NBcnJheSk7XG59KTtcblxuY2FuY2VsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaXNwbGF5RWxlbWVudChhZGRUYXNrQnRuKTtcbiAgaGlkZUVsZW1lbnQoYWRkVGFza0Zvcm1EaXYpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=