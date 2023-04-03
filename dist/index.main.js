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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Inconsolata.woff2 */ "./src/Inconsolata.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Inconsolata';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n* {\n  font-family: 'Inconsolata', 'Courier New', Courier, monospace;\n}\n\n\nbody {\n  height: 100vh;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n}\n\n#main {\n  display: grid;\n  grid-template-areas: \"sidebar content\";\n  grid-template-columns: clamp(225px, 20%, 275px) 1fr;\n  grid-auto-flow: column;\n  background-color: lightgreen;\n  height: 100%;\n  width: 100%;\n}\n\n#sidebar {\n  grid-area: sidebar;\n  \n  background-color: lightblue;\n  color: rgb(5, 15, 46);\n  display: grid;\n  grid-template-rows: 50px 1fr;\n  align-items: center;\n  grid-template-areas: \n    \"logo\" \n    \"project-list\";\n  gap: 30px;\n  height: 100%;\n}\n\n#sidebar>.logo {\n  padding: 0px 20px;\n  grid-area: logo;\n  font-size: 20px;\n  align-content: center;\n  display: grid;\n  grid-auto-flow: column;\n  gap: 5px;\n}\n\n#sidebar>.logo svg {\n  height: 20px;\n}\n\n#project-list {\n  padding: 0px 20px;\n  grid-area: project-list;\n  display: grid;\n  align-content: flex-start;\n  gap: 10px;\n  place-self: start;\n}\n\n#project-list>div:hover {\n  cursor: default;\n  color: blue;\n  text-decoration: underline;\n}\n\n#project-list>div.current-project {\n  font-weight: bold;\n}\n\n#project-list>div.current-project:before {\n  content: '\\02795'; /* Unicode character for \"plus\" sign (+) */\n  font-size: 13px;\n  color: white;\n  transform: translateX(-15px);\n  position: absolute;\n  display: inline-block;\n}\n\n#project-list-buttons {\n  padding-left: 0px;\n  position: sticky;\n  bottom: 0;\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n}\n\n#project-list-buttons>.project-button {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: auto 1fr;\n  place-items: center;\n  padding: 10px 5px;\n  gap: 10px;\n  cursor: default;\n}\n\ndiv.button-add-project {\n  background-color: greenyellow;\n}\n\ndiv.button-delete-project {\n  background-color: red;\n}\n\n#project-list-buttons svg {\n  height: 30px;\n}\n\n#content {\n  grid-area: content;\n  background-color: rgb(255, 255, 255);\n  padding: 100px;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  align-content: flex-start;\n  gap: 20px;\n}\n\n.collapsible {\n  background-color: #eee;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n\n  display: grid;\n  grid-template-areas: \"title dueDate\";\n  grid-auto-flow: column;\n  grid-template-columns: 1fr auto 60px;\n  align-items: center;\n}\n\n.active, .collapsible:hover {\n  background-color: #ccc;\n}\n\n.collapsible-content {\n  padding: 0 18px;\n  background-color: aqua;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto auto;\n  grid-template-areas: \n  \"description\"\n  \"priority\";\n}\n\n.collapsible:after {\n  content: '\\02795'; /* Unicode character for \"plus\" sign (+) */\n  font-size: 13px;\n  color: white;\n  float: right;\n  text-align: right;\n}\n\n.active:after {\n  content: \"\\2796\"; /* Unicode character for \"minus\" sign (-) */\n}\n\n.card .title {\n  font-size: 18px;\n  grid-area: title;\n\n}\n\n.card .description {\n  grid-area: description;\n  overflow-wrap: break-word;\n}\n\n.card .dueDate {\n  grid-area: dueDate;\n}\n\n.card .priority {\n  grid-area: priority;\n}\n\n.modal {\n  /* display: block; */\n  display: none;\n  position: fixed;\n  z-index: 2;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content {\n  background-color: lightcoral;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid lightcoral;\n  width: 600px;\n}\n\n#button-add-todo {\n  position: fixed;\n\twidth: 60px;\n\theight: 60px;\n\tbottom: 40px;\n\tright: 40px;\n\tbackground-color: #0C9;\n\tborder-radius: 50px;\n\tbox-shadow: 2px 2px 3px #999;\n  display: grid;\n  place-items: center;\n}\n\n#button-add-todo:hover {\n  background-color: rgb(1, 153, 115);\n}\n\n#button-add-todo:active {\n  background-color: #0C9;\n}\n\n#button-add-todo>svg {\n  fill:#FFF;\n  height: 40px;\n  width: 40px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Inconsolata';\n  font-style: normal;\n  font-weight: 400;\n  src: url(./Inconsolata.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n* {\n  font-family: 'Inconsolata', 'Courier New', Courier, monospace;\n}\n\n\nbody {\n  height: 100vh;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n}\n\n#main {\n  display: grid;\n  grid-template-areas: \"sidebar content\";\n  grid-template-columns: clamp(225px, 20%, 275px) 1fr;\n  grid-auto-flow: column;\n  background-color: lightgreen;\n  height: 100%;\n  width: 100%;\n}\n\n#sidebar {\n  grid-area: sidebar;\n  \n  background-color: lightblue;\n  color: rgb(5, 15, 46);\n  display: grid;\n  grid-template-rows: 50px 1fr;\n  align-items: center;\n  grid-template-areas: \n    \"logo\" \n    \"project-list\";\n  gap: 30px;\n  height: 100%;\n}\n\n#sidebar>.logo {\n  padding: 0px 20px;\n  grid-area: logo;\n  font-size: 20px;\n  align-content: center;\n  display: grid;\n  grid-auto-flow: column;\n  gap: 5px;\n}\n\n#sidebar>.logo svg {\n  height: 20px;\n}\n\n#project-list {\n  padding: 0px 20px;\n  grid-area: project-list;\n  display: grid;\n  align-content: flex-start;\n  gap: 10px;\n  place-self: start;\n}\n\n#project-list>div:hover {\n  cursor: default;\n  color: blue;\n  text-decoration: underline;\n}\n\n#project-list>div.current-project {\n  font-weight: bold;\n}\n\n#project-list>div.current-project:before {\n  content: '\\02795'; /* Unicode character for \"plus\" sign (+) */\n  font-size: 13px;\n  color: white;\n  transform: translateX(-15px);\n  position: absolute;\n  display: inline-block;\n}\n\n#project-list-buttons {\n  padding-left: 0px;\n  position: sticky;\n  bottom: 0;\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n}\n\n#project-list-buttons>.project-button {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: auto 1fr;\n  place-items: center;\n  padding: 10px 5px;\n  gap: 10px;\n  cursor: default;\n}\n\ndiv.button-add-project {\n  background-color: greenyellow;\n}\n\ndiv.button-delete-project {\n  background-color: red;\n}\n\n#project-list-buttons svg {\n  height: 30px;\n}\n\n#content {\n  grid-area: content;\n  background-color: rgb(255, 255, 255);\n  padding: 100px;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  align-content: flex-start;\n  gap: 20px;\n}\n\n.collapsible {\n  background-color: #eee;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n\n  display: grid;\n  grid-template-areas: \"title dueDate\";\n  grid-auto-flow: column;\n  grid-template-columns: 1fr auto 60px;\n  align-items: center;\n}\n\n.active, .collapsible:hover {\n  background-color: #ccc;\n}\n\n.collapsible-content {\n  padding: 0 18px;\n  background-color: aqua;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto auto;\n  grid-template-areas: \n  \"description\"\n  \"priority\";\n}\n\n.collapsible:after {\n  content: '\\02795'; /* Unicode character for \"plus\" sign (+) */\n  font-size: 13px;\n  color: white;\n  float: right;\n  text-align: right;\n}\n\n.active:after {\n  content: \"\\2796\"; /* Unicode character for \"minus\" sign (-) */\n}\n\n.card .title {\n  font-size: 18px;\n  grid-area: title;\n\n}\n\n.card .description {\n  grid-area: description;\n  overflow-wrap: break-word;\n}\n\n.card .dueDate {\n  grid-area: dueDate;\n}\n\n.card .priority {\n  grid-area: priority;\n}\n\n.modal {\n  /* display: block; */\n  display: none;\n  position: fixed;\n  z-index: 2;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content {\n  background-color: lightcoral;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid lightcoral;\n  width: 600px;\n}\n\n#button-add-todo {\n  position: fixed;\n\twidth: 60px;\n\theight: 60px;\n\tbottom: 40px;\n\tright: 40px;\n\tbackground-color: #0C9;\n\tborder-radius: 50px;\n\tbox-shadow: 2px 2px 3px #999;\n  display: grid;\n  place-items: center;\n}\n\n#button-add-todo:hover {\n  background-color: rgb(1, 153, 115);\n}\n\n#button-add-todo:active {\n  background-color: #0C9;\n}\n\n#button-add-todo>svg {\n  fill:#FFF;\n  height: 40px;\n  width: 40px;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "display": () => (/* binding */ display)
/* harmony export */ });
const display = (() => {
  const main = () => {
    let divContainer = document.createElement('div');
    divContainer.classList.add('main');
    divContainer.setAttribute('id', 'main');

    const divSidebar = document.createElement('div');
    divSidebar.classList.add('sidebar');
    divSidebar.setAttribute('id', 'sidebar');
    divContainer.appendChild(divSidebar);

    const divContent = document.createElement('div');
    divContent.classList.add('content');
    divContent.setAttribute('id', 'content');
    divContainer.appendChild(divContent);

    document.body.appendChild(divContainer);
    addSidebarContent();
  };

  const addSidebarContent = () => {
    const divSidebar = document.getElementById('sidebar');

    const divLogo = document.createElement('div');
    divLogo.classList.add('logo');
    const divIcon = document.createElement('div');
    divIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>notebook</title><path d="M19 2V20H18V21H4V20H3V18H1V16H3V12H1V10H3V6H1V4H3V2H4V1H18V2H19M14 9H13V8H12V9H11V10H10V3H7V19H17V3H15V10H14V9M3 4V6H5V4H3M5 10H3V12H5V10M5 16H3V18H5V16Z" /></svg>`;
    divLogo.appendChild(divIcon);
    const divName = document.createElement('div');
    divName.classList.add('name');
    divName.textContent = 'to do';
    divLogo.appendChild(divName)

    const divProjectList = document.createElement('div');
    divProjectList.setAttribute('id', 'project-list');

    const divButtonContainer = document.createElement('div');
    divButtonContainer.setAttribute('id', 'project-list-buttons');
        
    divSidebar.appendChild(divLogo);
    divSidebar.appendChild(divProjectList);
    divSidebar.appendChild(divButtonContainer);

    addProjectButtons();
  }

  const addProjectButtons = () => {
    const divAdd = document.createElement('div');
    divAdd.classList.add('project-button', 'button-add-project');
    const divAddIcon = document.createElement('div');
    divAddIcon.classList.add('button-add-project');
    divAddIcon.innerHTML = `<svg class='button-add-project' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>plus-box</title><path class='button-add-project' d="M12 16H10V12H6V10H10V6H12V10H16V12H12ZM18 20H4V19H3V18H2V4H3V3H4V2H18V3H19V4H20V18H19V19H18ZM17 18V17H18V5H17V4H5V5H4V17H5V18Z" /></svg>`;
    const divAddText = document.createElement('div');
    divAddText.classList.add('text', 'button-add-project');
    divAddText.textContent = 'Add New Project';
    
    const divDelete = document.createElement('div');
    divDelete.classList.add('project-button', 'button-delete-project');
    const divDeleteIcon = document.createElement('div');
    divDeleteIcon.classList.add('button-delete-project');
    divDeleteIcon.innerHTML = `<svg class='button-delete-project' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>trash</title><path class='button-delete-project' d="M10 7V16H8V7H10M12 7H14V16H12V7M8 2H14V3H19V5H18V19H17V20H5V19H4V5H3V3H8V2M6 5V18H16V5H6Z" /></svg>`;
    const divDeleteText = document.createElement('div');
    divDeleteText.classList.add('text', 'button-delete-project');
    divDeleteText.textContent = 'Delete Project';
    
    divAdd.appendChild(divAddIcon);
    divAdd.appendChild(divAddText);
    divDelete.appendChild(divDeleteIcon);
    divDelete.appendChild(divDeleteText);

    const divButtonContainer = document.getElementById('project-list-buttons');
    divButtonContainer.appendChild(divAdd);
    divButtonContainer.appendChild(divDelete);
  }

  const allTodos = (project) => {
    let divContent = document.getElementById('content');
    divContent.innerHTML = '';

    for (let [index, todo] of project.list.entries()) {
      const divCard = document.createElement('div');
      divCard.classList.add('card');

      const btnCollapsible = document.createElement('button');
      btnCollapsible.setAttribute('type', 'button');
      btnCollapsible.classList.add('collapsible', 'todo-item');
      const divTitle = document.createElement('div');
      divTitle.classList.add('title');
      divTitle.setAttribute('contenteditable', 'true');
      divTitle.setAttribute('index', index);
      divTitle.textContent = todo.title;
      btnCollapsible.appendChild(divTitle);
      const divDueDate = document.createElement('div');
      divDueDate.classList.add('dueDate');
      divDueDate.textContent = todo.dueDate;
      btnCollapsible.appendChild(divDueDate);

      const divCollapsible = document.createElement('div');
      divCollapsible.classList.add('collapsible-content');
      const divDescription = document.createElement('div');
      divDescription.classList.add('description');
      divDescription.setAttribute('index', index);
      divDescription.setAttribute('contenteditable', 'true');
      divDescription.textContent = todo.description;
      divCollapsible.appendChild(divDescription);
      const divPriority = document.createElement('div');
      divPriority.classList.add('priority');
      divPriority.textContent = todo.priority;
      divCollapsible.appendChild(divPriority);
      
      divCard.appendChild(btnCollapsible);
      divCard.appendChild(divCollapsible);

      divContent.appendChild(divCard);
    }
  };

  const projectTitles = (projectList, currentProjectIndex) => {
    let divProjectList = document.getElementById('project-list');
    divProjectList.innerHTML = '';

    for (let [index, project] of projectList.entries()) {
      let divProjectTitle = document.createElement('div');
      divProjectTitle.classList.add('title');
      divProjectTitle.setAttribute('index', index);
      if (index == currentProjectIndex) {
        divProjectTitle.classList.add('current-project');
      }
      divProjectTitle.textContent = project.title;
      divProjectList.appendChild(divProjectTitle);
    }
  };

  const hello = () => {
    console.log('hello');
  };

  const makeProjectModal = () => {
    let divModal = document.createElement('div');
    divModal.classList.add('modal');
    divModal.setAttribute('id', 'project-modal');
    
    const divModalContent = document.createElement('div');
    divModalContent.classList.add('modal-content');
    
    const divModalHeader = document.createElement('div');
    divModalHeader.classList.add('heading');
    divModalHeader.textContent = 'Add a new project';
    divModalContent.appendChild(divModalHeader);
    const spanClose = document.createElement('span');
    spanClose.classList.add('close');
    spanClose.setAttribute('id', 'close-project');
    spanClose.innerHTML = '&times';
    divModalContent.appendChild(spanClose);

    const form = document.createElement('form');
    form.setAttribute('id', 'form-project');
    form.setAttribute('action', 'index.html');
    form.setAttribute('method', 'post');

    const labelTitle = document.createElement('label');
    labelTitle.setAttribute('for', 'title');
    labelTitle.setAttribute('id', 'project-title-label');
    labelTitle.textContent = 'Project Title:';
    form.appendChild(labelTitle);
    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('name', 'title');
    inputTitle.setAttribute('id', 'project-title-input');
    form.appendChild(inputTitle);
    const btnSubmit = document.createElement('button');
    btnSubmit.setAttribute('type', 'submit');
    btnSubmit.setAttribute('id', 'project-submit');
    btnSubmit.textContent = 'Add Project';
    form.appendChild(btnSubmit);

    divModalContent.appendChild(form);

    divModal.appendChild(divModalContent);
    document.body.appendChild(divModal);
  };

  const addTodoButton = () => {
    const divAddTodo = document.createElement('a');
    divAddTodo.setAttribute('id', 'button-add-todo');
    divAddTodo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>plus</title><path d="M12 17H10V12H5V10H10V5H12V10H17V12H12Z" /></svg>`;
    document.body.appendChild(divAddTodo);
  }

  const showProjectModal = () => { 
    document.getElementById('project-modal').style.display = 'block';
    document.getElementById('project-title-input').value = '';
  }

  return { main, hello, allTodos, projectTitles, makeProjectModal, showProjectModal, addTodoButton };

})();



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  list = [];

  constructor(title = 'New Project') {
    this.title = title;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  addTodo(todo) {
    this.list.push(todo);
  }

  get list() {
    return this._list;
  }

  set list(value) {
    this._list = value;
  }
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* binding */ Item)
/* harmony export */ });
class Item {
  title = '';
  description = '';
  dueDate;
  priority = 0;

  constructor(title, dueDate, priority, description = '') {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get duedate() {
    return this._duedate;
  }

  set duedate(value) {
    this._duedate = value;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    this._priority = value;
  }
}



/***/ }),

/***/ "./src/Inconsolata.woff2":
/*!*******************************!*\
  !*** ./src/Inconsolata.woff2 ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b4b1c36297f2da1c3ac.woff2";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





let projectList = [];
let currentProjectIndex = 0;

//--TESTING--
console.log('start');

// let project = new Project('test project');

// project.addTodo(new Item('new todo', 11, 1));

// project.list[0].description = 'stan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loona';
// project.addTodo(new Item('new todo', 11, 1));
// project.list[1].description = 'stan loona';
// project.addTodo(new Item('new todo', 11, 1));
// project.list[2].description = 'stan loona';
// project.addTodo(new Item('new todo', 11, 1));
// project.list[3].description = 'stan loona';

// console.log(project.list);
//-----------

// startup
const start = () => {
  // make modals
  setProjectModal();
  setAddTodoButton();
 
  _display_js__WEBPACK_IMPORTED_MODULE_2__.display.main();
  makeNewProject(); // default project on startup
  
  // testing pit start

  makeNewProject('project 2');
  makeNewProject('project 3');
  
  projectList[0].addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Item('title1', 'date', '0', 'description'));
  projectList[0].addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Item('title2', 'date', '0', 'description'));
  projectList[0].addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Item('title3', 'date', '0', 'description'));

  projectList[1].addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Item('title1', 'date', '0', 'description'));
  projectList[1].addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Item('title2', 'date', '0', 'description'));
  projectList[1].addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Item('title3', 'date', '0', 'description'));
  projectList[1].addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Item('title4', 'date', '0', 'description'));

  projectList[2].addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Item('title1', 'date', '0', 'description'));
  projectList[2].addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Item('title2', 'date', '0', 'description'));
  currentProjectIndex = 1;

  setProjectButtonListener();
  // testing pit end
  setSidebarListener();
  
  // refresh display
  displayProjects();
  displayTodos();
};

const setTodoCollapsible = () => {
  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
};

const setSidebarListener = () => {
  const divProjectList = document.getElementById('project-list');

  divProjectList.addEventListener('click', (e) => {
    if(e.target.classList.contains('title')) {
      let index = e.target.getAttribute('index');
      currentProjectIndex = index;

      // reload displays
      displayProjects();
      displayTodos();
    }
  });
}

const setProjectButtonListener = () => {
  const divProjectButtons = document.getElementById('project-list-buttons');
  
  divProjectButtons.addEventListener('click', (e) => {
    if(e.target.classList.contains('button-add-project')){
      _display_js__WEBPACK_IMPORTED_MODULE_2__.display.showProjectModal();
    } else if(e.target.classList.contains('button-delete-project')){
      deleteProject(currentProjectIndex);
    }
  });
}

const deleteProject = (index) => {
  // alert if deleting last project
  if(projectList.length == 1) {
    alert('You can (not) delete');
  } else {
    projectList.splice(index, 1);
    // set new current project index
    currentProjectIndex = Math.max(0, currentProjectIndex - 1);
    displayProjects();
    displayTodos();
  }
}

const makeNewProject = (title = 'New Project') => {
  let project = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(title);
  projectList.push(project);
  currentProjectIndex = projectList.length - 1;
  displayProjects();
  displayTodos();
}

const setProjectModal = () => {
  _display_js__WEBPACK_IMPORTED_MODULE_2__.display.makeProjectModal();

  //set event listeners
  const form = document.querySelector(`#form-project`);
  const modal = document.getElementById('project-modal');
  const modalBtn = document.getElementById('btn-new-book'); // CHANGE THIS
  const modalClose = document.getElementById('close-project');

  modalClose.onclick = function() {
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    makeNewProject(form.elements['title'].value);
    modal.style.display = 'none';
    const content = document.getElementById('content');
    content.scrollTo(0, content.scrollHeight);
  });
};

const setAddTodoButton = () => {
  _display_js__WEBPACK_IMPORTED_MODULE_2__.display.addTodoButton();

  const divAddTodo = document.getElementById('button-add-todo');
  divAddTodo.addEventListener('click', (e) => {
    const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Item('New To Do Item', 'date~', 'yes', 'Add a description here!');
    projectList[currentProjectIndex].addTodo(newTodo);
    displayTodos();
  });
}

const displayTodos = () => {
  _display_js__WEBPACK_IMPORTED_MODULE_2__.display.allTodos(projectList[currentProjectIndex]);
  setTodoCollapsible();
  setEditingListeners();
}

const setEditingListeners = () => {
  const divContent = document.getElementById('content');

  const titles = divContent.getElementsByClassName('title');
  for (const divTitle of titles) {
    divTitle.addEventListener('focusout',(e) => {
      const index = e.target.getAttribute('index');
      const newTitle = e.target.textContent;
      projectList[currentProjectIndex].list[index].title = newTitle;
      displayTodos();
    });
  }

  const descriptions = divContent.getElementsByClassName('description');
  for (const divDescription of descriptions) {
    divDescription.addEventListener('focusout',(e) => {
      const index = e.target.getAttribute('index');
      const newDescription = e.target.textContent;
      projectList[currentProjectIndex].list[index].description = newDescription;
      displayTodos();
    });
  }
}

const displayProjects = () => {
  _display_js__WEBPACK_IMPORTED_MODULE_2__.display.projectTitles(projectList, currentProjectIndex);
}

start();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7O0FBRVgsQ0FBQzs7Ozs7Ozs7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O0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsRUFBRSw4REFBcUI7O0FBRXZCO0FBQ0E7QUFDQSx3QkFBd0IsMENBQUk7QUFDNUI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEVBQUUseURBQWdCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDhEQUFxQjtBQUN2Qjs7QUFFQSxRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9qcy10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMtdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2pzLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qcy10b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2pzLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2pzLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vSW5jb25zb2xhdGEud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbiNtYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwic2lkZWJhciBjb250ZW50XFxcIjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2xhbXAoMjI1cHgsIDIwJSwgMjc1cHgpIDFmcjtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgY29sb3I6IHJnYig1LCAxNSwgNDYpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJsb2dvXFxcIiBcXG4gICAgXFxcInByb2plY3QtbGlzdFxcXCI7XFxuICBnYXA6IDMwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzaWRlYmFyPi5sb2dvIHtcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgZ3JpZC1hcmVhOiBsb2dvO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuI3NpZGViYXI+LmxvZ28gc3ZnIHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuI3Byb2plY3QtbGlzdCB7XFxuICBwYWRkaW5nOiAwcHggMjBweDtcXG4gIGdyaWQtYXJlYTogcHJvamVjdC1saXN0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDEwcHg7XFxuICBwbGFjZS1zZWxmOiBzdGFydDtcXG59XFxuXFxuI3Byb2plY3QtbGlzdD5kaXY6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgY29sb3I6IGJsdWU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI3Byb2plY3QtbGlzdD5kaXYuY3VycmVudC1wcm9qZWN0IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0PmRpdi5jdXJyZW50LXByb2plY3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMDI3OTUnOyAvKiBVbmljb2RlIGNoYXJhY3RlciBmb3IgXFxcInBsdXNcXFwiIHNpZ24gKCspICovXFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0LWJ1dHRvbnMge1xcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0LWJ1dHRvbnM+LnByb2plY3QtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGdhcDogMTBweDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuZGl2LmJ1dHRvbi1hZGQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXFxuZGl2LmJ1dHRvbi1kZWxldGUtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNwcm9qZWN0LWxpc3QtYnV0dG9ucyBzdmcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBwYWRkaW5nOiAxMDBweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5jb2xsYXBzaWJsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgY29sb3I6ICM0NDQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwidGl0bGUgZHVlRGF0ZVxcXCI7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byA2MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFjdGl2ZSwgLmNvbGxhcHNpYmxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcblxcbi5jb2xsYXBzaWJsZS1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDAgMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImRlc2NyaXB0aW9uXFxcIlxcbiAgXFxcInByaW9yaXR5XFxcIjtcXG59XFxuXFxuLmNvbGxhcHNpYmxlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMDI3OTUnOyAvKiBVbmljb2RlIGNoYXJhY3RlciBmb3IgXFxcInBsdXNcXFwiIHNpZ24gKCspICovXFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmFjdGl2ZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcXDI3OTZcXFwiOyAvKiBVbmljb2RlIGNoYXJhY3RlciBmb3IgXFxcIm1pbnVzXFxcIiBzaWduICgtKSAqL1xcbn1cXG5cXG4uY2FyZCAudGl0bGUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG5cXG59XFxuXFxuLmNhcmQgLmRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uY2FyZCAuZHVlRGF0ZSB7XFxuICBncmlkLWFyZWE6IGR1ZURhdGU7XFxufVxcblxcbi5jYXJkIC5wcmlvcml0eSB7XFxuICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgLyogZGlzcGxheTogYmxvY2s7ICovXFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMjtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsO1xcbiAgd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4jYnV0dG9uLWFkZC10b2RvIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR3aWR0aDogNjBweDtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFx0Ym90dG9tOiA0MHB4O1xcblxcdHJpZ2h0OiA0MHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwQzk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTBweDtcXG5cXHRib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNidXR0b24tYWRkLXRvZG86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDE1MywgMTE1KTtcXG59XFxuXFxuI2J1dHRvbi1hZGQtdG9kbzphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBDOTtcXG59XFxuXFxuI2J1dHRvbi1hZGQtdG9kbz5zdmcge1xcbiAgZmlsbDojRkZGO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0REFBNkM7RUFDN0MseUtBQXlLO0FBQzNLOztBQUVBO0VBQ0UsNkRBQTZEO0FBQy9EOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbURBQW1EO0VBQ25ELHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQjs7a0JBRWdCO0VBQ2hCLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCLEVBQUUsMENBQTBDO0VBQzdELGVBQWU7RUFDZixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGNBQWM7O0VBRWQsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCx5QkFBeUI7RUFDekIsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlOztFQUVmLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCOztZQUVVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUIsRUFBRSwwQ0FBMEM7RUFDN0QsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCLEVBQUUsMkNBQTJDO0FBQy9EOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0NBQ2hCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osWUFBWTtDQUNaLFdBQVc7Q0FDWCxzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLDRCQUE0QjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybCguL0luY29uc29sYXRhLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbiNtYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwic2lkZWJhciBjb250ZW50XFxcIjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2xhbXAoMjI1cHgsIDIwJSwgMjc1cHgpIDFmcjtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgY29sb3I6IHJnYig1LCAxNSwgNDYpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJsb2dvXFxcIiBcXG4gICAgXFxcInByb2plY3QtbGlzdFxcXCI7XFxuICBnYXA6IDMwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzaWRlYmFyPi5sb2dvIHtcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgZ3JpZC1hcmVhOiBsb2dvO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuI3NpZGViYXI+LmxvZ28gc3ZnIHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuI3Byb2plY3QtbGlzdCB7XFxuICBwYWRkaW5nOiAwcHggMjBweDtcXG4gIGdyaWQtYXJlYTogcHJvamVjdC1saXN0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDEwcHg7XFxuICBwbGFjZS1zZWxmOiBzdGFydDtcXG59XFxuXFxuI3Byb2plY3QtbGlzdD5kaXY6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgY29sb3I6IGJsdWU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI3Byb2plY3QtbGlzdD5kaXYuY3VycmVudC1wcm9qZWN0IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0PmRpdi5jdXJyZW50LXByb2plY3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMDI3OTUnOyAvKiBVbmljb2RlIGNoYXJhY3RlciBmb3IgXFxcInBsdXNcXFwiIHNpZ24gKCspICovXFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0LWJ1dHRvbnMge1xcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0LWJ1dHRvbnM+LnByb2plY3QtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGdhcDogMTBweDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuZGl2LmJ1dHRvbi1hZGQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXFxuZGl2LmJ1dHRvbi1kZWxldGUtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNwcm9qZWN0LWxpc3QtYnV0dG9ucyBzdmcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBwYWRkaW5nOiAxMDBweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5jb2xsYXBzaWJsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgY29sb3I6ICM0NDQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwidGl0bGUgZHVlRGF0ZVxcXCI7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byA2MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFjdGl2ZSwgLmNvbGxhcHNpYmxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcblxcbi5jb2xsYXBzaWJsZS1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDAgMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImRlc2NyaXB0aW9uXFxcIlxcbiAgXFxcInByaW9yaXR5XFxcIjtcXG59XFxuXFxuLmNvbGxhcHNpYmxlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMDI3OTUnOyAvKiBVbmljb2RlIGNoYXJhY3RlciBmb3IgXFxcInBsdXNcXFwiIHNpZ24gKCspICovXFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmFjdGl2ZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcXDI3OTZcXFwiOyAvKiBVbmljb2RlIGNoYXJhY3RlciBmb3IgXFxcIm1pbnVzXFxcIiBzaWduICgtKSAqL1xcbn1cXG5cXG4uY2FyZCAudGl0bGUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG5cXG59XFxuXFxuLmNhcmQgLmRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uY2FyZCAuZHVlRGF0ZSB7XFxuICBncmlkLWFyZWE6IGR1ZURhdGU7XFxufVxcblxcbi5jYXJkIC5wcmlvcml0eSB7XFxuICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgLyogZGlzcGxheTogYmxvY2s7ICovXFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMjtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsO1xcbiAgd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4jYnV0dG9uLWFkZC10b2RvIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR3aWR0aDogNjBweDtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFx0Ym90dG9tOiA0MHB4O1xcblxcdHJpZ2h0OiA0MHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwQzk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTBweDtcXG5cXHRib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNidXR0b24tYWRkLXRvZG86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDE1MywgMTE1KTtcXG59XFxuXFxuI2J1dHRvbi1hZGQtdG9kbzphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBDOTtcXG59XFxuXFxuI2J1dHRvbi1hZGQtdG9kbz5zdmcge1xcbiAgZmlsbDojRkZGO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZGlzcGxheSA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSAoKSA9PiB7XG4gICAgbGV0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgZGl2Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuXG4gICAgY29uc3QgZGl2U2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdlNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICAgIGRpdlNpZGViYXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlYmFyJyk7XG4gICAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdlNpZGViYXIpO1xuXG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIGRpdkNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG4gICAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkNvbnRlbnQpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXZDb250YWluZXIpO1xuICAgIGFkZFNpZGViYXJDb250ZW50KCk7XG4gIH07XG5cbiAgY29uc3QgYWRkU2lkZWJhckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2U2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJyk7XG5cbiAgICBjb25zdCBkaXZMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2TG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgY29uc3QgZGl2SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjIgMjJcIj48dGl0bGU+bm90ZWJvb2s8L3RpdGxlPjxwYXRoIGQ9XCJNMTkgMlYyMEgxOFYyMUg0VjIwSDNWMThIMVYxNkgzVjEySDFWMTBIM1Y2SDFWNEgzVjJINFYxSDE4VjJIMTlNMTQgOUgxM1Y4SDEyVjlIMTFWMTBIMTBWM0g3VjE5SDE3VjNIMTVWMTBIMTRWOU0zIDRWNkg1VjRIM001IDEwSDNWMTJINVYxME01IDE2SDNWMThINVYxNlpcIiAvPjwvc3ZnPmA7XG4gICAgZGl2TG9nby5hcHBlbmRDaGlsZChkaXZJY29uKTtcbiAgICBjb25zdCBkaXZOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2TmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgZGl2TmFtZS50ZXh0Q29udGVudCA9ICd0byBkbyc7XG4gICAgZGl2TG9nby5hcHBlbmRDaGlsZChkaXZOYW1lKVxuXG4gICAgY29uc3QgZGl2UHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZQcm9qZWN0TGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtbGlzdCcpO1xuXG4gICAgY29uc3QgZGl2QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2QnV0dG9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1saXN0LWJ1dHRvbnMnKTtcbiAgICAgICAgXG4gICAgZGl2U2lkZWJhci5hcHBlbmRDaGlsZChkaXZMb2dvKTtcbiAgICBkaXZTaWRlYmFyLmFwcGVuZENoaWxkKGRpdlByb2plY3RMaXN0KTtcbiAgICBkaXZTaWRlYmFyLmFwcGVuZENoaWxkKGRpdkJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBhZGRQcm9qZWN0QnV0dG9ucygpO1xuICB9XG5cbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2QWRkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJywgJ2J1dHRvbi1hZGQtcHJvamVjdCcpO1xuICAgIGNvbnN0IGRpdkFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZBZGRJY29uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1hZGQtcHJvamVjdCcpO1xuICAgIGRpdkFkZEljb24uaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9J2J1dHRvbi1hZGQtcHJvamVjdCcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjIgMjJcIj48dGl0bGU+cGx1cy1ib3g8L3RpdGxlPjxwYXRoIGNsYXNzPSdidXR0b24tYWRkLXByb2plY3QnIGQ9XCJNMTIgMTZIMTBWMTJINlYxMEgxMFY2SDEyVjEwSDE2VjEySDEyWk0xOCAyMEg0VjE5SDNWMThIMlY0SDNWM0g0VjJIMThWM0gxOVY0SDIwVjE4SDE5VjE5SDE4Wk0xNyAxOFYxN0gxOFY1SDE3VjRINVY1SDRWMTdINVYxOFpcIiAvPjwvc3ZnPmA7XG4gICAgY29uc3QgZGl2QWRkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkFkZFRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcsICdidXR0b24tYWRkLXByb2plY3QnKTtcbiAgICBkaXZBZGRUZXh0LnRleHRDb250ZW50ID0gJ0FkZCBOZXcgUHJvamVjdCc7XG4gICAgXG4gICAgY29uc3QgZGl2RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2RGVsZXRlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJywgJ2J1dHRvbi1kZWxldGUtcHJvamVjdCcpO1xuICAgIGNvbnN0IGRpdkRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZEZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1kZWxldGUtcHJvamVjdCcpO1xuICAgIGRpdkRlbGV0ZUljb24uaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9J2J1dHRvbi1kZWxldGUtcHJvamVjdCcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjIgMjJcIj48dGl0bGU+dHJhc2g8L3RpdGxlPjxwYXRoIGNsYXNzPSdidXR0b24tZGVsZXRlLXByb2plY3QnIGQ9XCJNMTAgN1YxNkg4VjdIMTBNMTIgN0gxNFYxNkgxMlY3TTggMkgxNFYzSDE5VjVIMThWMTlIMTdWMjBINVYxOUg0VjVIM1YzSDhWMk02IDVWMThIMTZWNUg2WlwiIC8+PC9zdmc+YDtcbiAgICBjb25zdCBkaXZEZWxldGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2RGVsZXRlVGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0JywgJ2J1dHRvbi1kZWxldGUtcHJvamVjdCcpO1xuICAgIGRpdkRlbGV0ZVRleHQudGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuICAgIFxuICAgIGRpdkFkZC5hcHBlbmRDaGlsZChkaXZBZGRJY29uKTtcbiAgICBkaXZBZGQuYXBwZW5kQ2hpbGQoZGl2QWRkVGV4dCk7XG4gICAgZGl2RGVsZXRlLmFwcGVuZENoaWxkKGRpdkRlbGV0ZUljb24pO1xuICAgIGRpdkRlbGV0ZS5hcHBlbmRDaGlsZChkaXZEZWxldGVUZXh0KTtcblxuICAgIGNvbnN0IGRpdkJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWxpc3QtYnV0dG9ucycpO1xuICAgIGRpdkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZBZGQpO1xuICAgIGRpdkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZEZWxldGUpO1xuICB9XG5cbiAgY29uc3QgYWxsVG9kb3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBkaXZDb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgZm9yIChsZXQgW2luZGV4LCB0b2RvXSBvZiBwcm9qZWN0Lmxpc3QuZW50cmllcygpKSB7XG4gICAgICBjb25zdCBkaXZDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXZDYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICAgICAgY29uc3QgYnRuQ29sbGFwc2libGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ0bkNvbGxhcHNpYmxlLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgIGJ0bkNvbGxhcHNpYmxlLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNpYmxlJywgJ3RvZG8taXRlbScpO1xuICAgICAgY29uc3QgZGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICBkaXZUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICBkaXZUaXRsZS5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaW5kZXgpO1xuICAgICAgZGl2VGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgYnRuQ29sbGFwc2libGUuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgICAgY29uc3QgZGl2RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2RHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVEYXRlJyk7XG4gICAgICBkaXZEdWVEYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuICAgICAgYnRuQ29sbGFwc2libGUuYXBwZW5kQ2hpbGQoZGl2RHVlRGF0ZSk7XG5cbiAgICAgIGNvbnN0IGRpdkNvbGxhcHNpYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXZDb2xsYXBzaWJsZS5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzaWJsZS1jb250ZW50Jyk7XG4gICAgICBjb25zdCBkaXZEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgIGRpdkRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpbmRleCk7XG4gICAgICBkaXZEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICBkaXZEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICBkaXZDb2xsYXBzaWJsZS5hcHBlbmRDaGlsZChkaXZEZXNjcmlwdGlvbik7XG4gICAgICBjb25zdCBkaXZQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICAgIGRpdlByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgICAgIGRpdkNvbGxhcHNpYmxlLmFwcGVuZENoaWxkKGRpdlByaW9yaXR5KTtcbiAgICAgIFxuICAgICAgZGl2Q2FyZC5hcHBlbmRDaGlsZChidG5Db2xsYXBzaWJsZSk7XG4gICAgICBkaXZDYXJkLmFwcGVuZENoaWxkKGRpdkNvbGxhcHNpYmxlKTtcblxuICAgICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChkaXZDYXJkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdFRpdGxlcyA9IChwcm9qZWN0TGlzdCwgY3VycmVudFByb2plY3RJbmRleCkgPT4ge1xuICAgIGxldCBkaXZQcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWxpc3QnKTtcbiAgICBkaXZQcm9qZWN0TGlzdC5pbm5lckhUTUwgPSAnJztcblxuICAgIGZvciAobGV0IFtpbmRleCwgcHJvamVjdF0gb2YgcHJvamVjdExpc3QuZW50cmllcygpKSB7XG4gICAgICBsZXQgZGl2UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXZQcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgIGRpdlByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaW5kZXgpO1xuICAgICAgaWYgKGluZGV4ID09IGN1cnJlbnRQcm9qZWN0SW5kZXgpIHtcbiAgICAgICAgZGl2UHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcHJvamVjdCcpO1xuICAgICAgfVxuICAgICAgZGl2UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgIGRpdlByb2plY3RMaXN0LmFwcGVuZENoaWxkKGRpdlByb2plY3RUaXRsZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhlbGxvID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VQcm9qZWN0TW9kYWwgPSAoKSA9PiB7XG4gICAgbGV0IGRpdk1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2TW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICBkaXZNb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtbW9kYWwnKTtcbiAgICBcbiAgICBjb25zdCBkaXZNb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZNb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuICAgIFxuICAgIGNvbnN0IGRpdk1vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2TW9kYWxIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICAgIGRpdk1vZGFsSGVhZGVyLnRleHRDb250ZW50ID0gJ0FkZCBhIG5ldyBwcm9qZWN0JztcbiAgICBkaXZNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2TW9kYWxIZWFkZXIpO1xuICAgIGNvbnN0IHNwYW5DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuQ2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgICBzcGFuQ2xvc2Uuc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZS1wcm9qZWN0Jyk7XG4gICAgc3BhbkNsb3NlLmlubmVySFRNTCA9ICcmdGltZXMnO1xuICAgIGRpdk1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChzcGFuQ2xvc2UpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybS1wcm9qZWN0Jyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdpbmRleC5odG1sJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XG5cbiAgICBjb25zdCBsYWJlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbFRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgbGFiZWxUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtdGl0bGUtbGFiZWwnKTtcbiAgICBsYWJlbFRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3QgVGl0bGU6JztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsVGl0bGUpO1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpO1xuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LXRpdGxlLWlucHV0Jyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcbiAgICBjb25zdCBidG5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGJ0blN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3Qtc3VibWl0Jyk7XG4gICAgYnRuU3VibWl0LnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ0blN1Ym1pdCk7XG5cbiAgICBkaXZNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChkaXZNb2RhbENvbnRlbnQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2TW9kYWwpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvZG9CdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2QWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBkaXZBZGRUb2RvLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnV0dG9uLWFkZC10b2RvJyk7XG4gICAgZGl2QWRkVG9kby5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMiAyMlwiPjx0aXRsZT5wbHVzPC90aXRsZT48cGF0aCBkPVwiTTEyIDE3SDEwVjEySDVWMTBIMTBWNUgxMlYxMEgxN1YxMkgxMlpcIiAvPjwvc3ZnPmA7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXZBZGRUb2RvKTtcbiAgfVxuXG4gIGNvbnN0IHNob3dQcm9qZWN0TW9kYWwgPSAoKSA9PiB7IFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW1vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUtaW5wdXQnKS52YWx1ZSA9ICcnO1xuICB9XG5cbiAgcmV0dXJuIHsgbWFpbiwgaGVsbG8sIGFsbFRvZG9zLCBwcm9qZWN0VGl0bGVzLCBtYWtlUHJvamVjdE1vZGFsLCBzaG93UHJvamVjdE1vZGFsLCBhZGRUb2RvQnV0dG9uIH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IGRpc3BsYXkgfTsiLCJjbGFzcyBQcm9qZWN0IHtcbiAgbGlzdCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlID0gJ05ldyBQcm9qZWN0Jykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvKSB7XG4gICAgdGhpcy5saXN0LnB1c2godG9kbyk7XG4gIH1cblxuICBnZXQgbGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdDtcbiAgfVxuXG4gIHNldCBsaXN0KHZhbHVlKSB7XG4gICAgdGhpcy5fbGlzdCA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCB7IFByb2plY3QgfTsiLCJjbGFzcyBJdGVtIHtcbiAgdGl0bGUgPSAnJztcbiAgZGVzY3JpcHRpb24gPSAnJztcbiAgZHVlRGF0ZTtcbiAgcHJpb3JpdHkgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24gPSAnJykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR1ZWRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R1ZWRhdGU7XG4gIH1cblxuICBzZXQgZHVlZGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuX2R1ZWRhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cblxuICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCB7IEl0ZW0gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gJy4vZGlzcGxheS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubGV0IHByb2plY3RMaXN0ID0gW107XG5sZXQgY3VycmVudFByb2plY3RJbmRleCA9IDA7XG5cbi8vLS1URVNUSU5HLS1cbmNvbnNvbGUubG9nKCdzdGFydCcpO1xuXG4vLyBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KCd0ZXN0IHByb2plY3QnKTtcblxuLy8gcHJvamVjdC5hZGRUb2RvKG5ldyBJdGVtKCduZXcgdG9kbycsIDExLCAxKSk7XG5cbi8vIHByb2plY3QubGlzdFswXS5kZXNjcmlwdGlvbiA9ICdzdGFuIGxvb25hc3RhbiBsb29uYXN0YW4gbG9vbmFzdGFuIGxvb25hc3RhbiBsb29uYXN0YW4gbG9vbmFzdGFuIGxvb25hc3RhbiBsb29uYXN0YW4gbG9vbmFzdGFuIGxvb25hc3RhbiBsb29uYXN0YW4gbG9vbmFzdGFuIGxvb25hc3RhbiBsb29uYXN0YW4gbG9vbmFzdGFuIGxvb25hc3RhbiBsb29uYXN0YW4gbG9vbmFzdGFuIGxvb25hc3RhbiBsb29uYXN0YW4gbG9vbmFzdGFuIGxvb25hc3RhbiBsb29uYXN0YW4gbG9vbmFzdGFuIGxvb25hc3RhbiBsb29uYXN0YW4gbG9vbmFzdGFuIGxvb25hc3RhbiBsb29uYXN0YW4gbG9vbmFzdGFuIGxvb25hc3RhbiBsb29uYXN0YW4gbG9vbmFzdGFuIGxvb25hc3RhbiBsb29uYXN0YW4gbG9vbmFzdGFuIGxvb25hJztcbi8vIHByb2plY3QuYWRkVG9kbyhuZXcgSXRlbSgnbmV3IHRvZG8nLCAxMSwgMSkpO1xuLy8gcHJvamVjdC5saXN0WzFdLmRlc2NyaXB0aW9uID0gJ3N0YW4gbG9vbmEnO1xuLy8gcHJvamVjdC5hZGRUb2RvKG5ldyBJdGVtKCduZXcgdG9kbycsIDExLCAxKSk7XG4vLyBwcm9qZWN0Lmxpc3RbMl0uZGVzY3JpcHRpb24gPSAnc3RhbiBsb29uYSc7XG4vLyBwcm9qZWN0LmFkZFRvZG8obmV3IEl0ZW0oJ25ldyB0b2RvJywgMTEsIDEpKTtcbi8vIHByb2plY3QubGlzdFszXS5kZXNjcmlwdGlvbiA9ICdzdGFuIGxvb25hJztcblxuLy8gY29uc29sZS5sb2cocHJvamVjdC5saXN0KTtcbi8vLS0tLS0tLS0tLS1cblxuLy8gc3RhcnR1cFxuY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gIC8vIG1ha2UgbW9kYWxzXG4gIHNldFByb2plY3RNb2RhbCgpO1xuICBzZXRBZGRUb2RvQnV0dG9uKCk7XG4gXG4gIGRpc3BsYXkubWFpbigpO1xuICBtYWtlTmV3UHJvamVjdCgpOyAvLyBkZWZhdWx0IHByb2plY3Qgb24gc3RhcnR1cFxuICBcbiAgLy8gdGVzdGluZyBwaXQgc3RhcnRcblxuICBtYWtlTmV3UHJvamVjdCgncHJvamVjdCAyJyk7XG4gIG1ha2VOZXdQcm9qZWN0KCdwcm9qZWN0IDMnKTtcbiAgXG4gIHByb2plY3RMaXN0WzBdLmFkZFRvZG8obmV3IEl0ZW0oJ3RpdGxlMScsICdkYXRlJywgJzAnLCAnZGVzY3JpcHRpb24nKSk7XG4gIHByb2plY3RMaXN0WzBdLmFkZFRvZG8obmV3IEl0ZW0oJ3RpdGxlMicsICdkYXRlJywgJzAnLCAnZGVzY3JpcHRpb24nKSk7XG4gIHByb2plY3RMaXN0WzBdLmFkZFRvZG8obmV3IEl0ZW0oJ3RpdGxlMycsICdkYXRlJywgJzAnLCAnZGVzY3JpcHRpb24nKSk7XG5cbiAgcHJvamVjdExpc3RbMV0uYWRkVG9kbyhuZXcgSXRlbSgndGl0bGUxJywgJ2RhdGUnLCAnMCcsICdkZXNjcmlwdGlvbicpKTtcbiAgcHJvamVjdExpc3RbMV0uYWRkVG9kbyhuZXcgSXRlbSgndGl0bGUyJywgJ2RhdGUnLCAnMCcsICdkZXNjcmlwdGlvbicpKTtcbiAgcHJvamVjdExpc3RbMV0uYWRkVG9kbyhuZXcgSXRlbSgndGl0bGUzJywgJ2RhdGUnLCAnMCcsICdkZXNjcmlwdGlvbicpKTtcbiAgcHJvamVjdExpc3RbMV0uYWRkVG9kbyhuZXcgSXRlbSgndGl0bGU0JywgJ2RhdGUnLCAnMCcsICdkZXNjcmlwdGlvbicpKTtcblxuICBwcm9qZWN0TGlzdFsyXS5hZGRUb2RvKG5ldyBJdGVtKCd0aXRsZTEnLCAnZGF0ZScsICcwJywgJ2Rlc2NyaXB0aW9uJykpO1xuICBwcm9qZWN0TGlzdFsyXS5hZGRUb2RvKG5ldyBJdGVtKCd0aXRsZTInLCAnZGF0ZScsICcwJywgJ2Rlc2NyaXB0aW9uJykpO1xuICBjdXJyZW50UHJvamVjdEluZGV4ID0gMTtcblxuICBzZXRQcm9qZWN0QnV0dG9uTGlzdGVuZXIoKTtcbiAgLy8gdGVzdGluZyBwaXQgZW5kXG4gIHNldFNpZGViYXJMaXN0ZW5lcigpO1xuICBcbiAgLy8gcmVmcmVzaCBkaXNwbGF5XG4gIGRpc3BsYXlQcm9qZWN0cygpO1xuICBkaXNwbGF5VG9kb3MoKTtcbn07XG5cbmNvbnN0IHNldFRvZG9Db2xsYXBzaWJsZSA9ICgpID0+IHtcbiAgdmFyIGNvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29sbGFwc2libGVcIik7XG4gIHZhciBpO1xuICBcbiAgZm9yIChpID0gMDsgaSA8IGNvbGwubGVuZ3RoOyBpKyspIHtcbiAgICBjb2xsW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIHZhciBjb250ZW50ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpe1xuICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBzZXRTaWRlYmFyTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGRpdlByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbGlzdCcpO1xuXG4gIGRpdlByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RpdGxlJykpIHtcbiAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaW5kZXgnKTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXggPSBpbmRleDtcblxuICAgICAgLy8gcmVsb2FkIGRpc3BsYXlzXG4gICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgIGRpc3BsYXlUb2RvcygpO1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IHNldFByb2plY3RCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3QgZGl2UHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1saXN0LWJ1dHRvbnMnKTtcbiAgXG4gIGRpdlByb2plY3RCdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbi1hZGQtcHJvamVjdCcpKXtcbiAgICAgIGRpc3BsYXkuc2hvd1Byb2plY3RNb2RhbCgpO1xuICAgIH0gZWxzZSBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbi1kZWxldGUtcHJvamVjdCcpKXtcbiAgICAgIGRlbGV0ZVByb2plY3QoY3VycmVudFByb2plY3RJbmRleCk7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAvLyBhbGVydCBpZiBkZWxldGluZyBsYXN0IHByb2plY3RcbiAgaWYocHJvamVjdExpc3QubGVuZ3RoID09IDEpIHtcbiAgICBhbGVydCgnWW91IGNhbiAobm90KSBkZWxldGUnKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIC8vIHNldCBuZXcgY3VycmVudCBwcm9qZWN0IGluZGV4XG4gICAgY3VycmVudFByb2plY3RJbmRleCA9IE1hdGgubWF4KDAsIGN1cnJlbnRQcm9qZWN0SW5kZXggLSAxKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICBkaXNwbGF5VG9kb3MoKTtcbiAgfVxufVxuXG5jb25zdCBtYWtlTmV3UHJvamVjdCA9ICh0aXRsZSA9ICdOZXcgUHJvamVjdCcpID0+IHtcbiAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gIGN1cnJlbnRQcm9qZWN0SW5kZXggPSBwcm9qZWN0TGlzdC5sZW5ndGggLSAxO1xuICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgZGlzcGxheVRvZG9zKCk7XG59XG5cbmNvbnN0IHNldFByb2plY3RNb2RhbCA9ICgpID0+IHtcbiAgZGlzcGxheS5tYWtlUHJvamVjdE1vZGFsKCk7XG5cbiAgLy9zZXQgZXZlbnQgbGlzdGVuZXJzXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZm9ybS1wcm9qZWN0YCk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbW9kYWwnKTtcbiAgY29uc3QgbW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLW5ldy1ib29rJyk7IC8vIENIQU5HRSBUSElTXG4gIGNvbnN0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtcHJvamVjdCcpO1xuXG4gIG1vZGFsQ2xvc2Uub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBtYWtlTmV3UHJvamVjdChmb3JtLmVsZW1lbnRzWyd0aXRsZSddLnZhbHVlKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuc2Nyb2xsVG8oMCwgY29udGVudC5zY3JvbGxIZWlnaHQpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNldEFkZFRvZG9CdXR0b24gPSAoKSA9PiB7XG4gIGRpc3BsYXkuYWRkVG9kb0J1dHRvbigpO1xuXG4gIGNvbnN0IGRpdkFkZFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLWFkZC10b2RvJyk7XG4gIGRpdkFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgSXRlbSgnTmV3IFRvIERvIEl0ZW0nLCAnZGF0ZX4nLCAneWVzJywgJ0FkZCBhIGRlc2NyaXB0aW9uIGhlcmUhJyk7XG4gICAgcHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0uYWRkVG9kbyhuZXdUb2RvKTtcbiAgICBkaXNwbGF5VG9kb3MoKTtcbiAgfSk7XG59XG5cbmNvbnN0IGRpc3BsYXlUb2RvcyA9ICgpID0+IHtcbiAgZGlzcGxheS5hbGxUb2Rvcyhwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdEluZGV4XSk7XG4gIHNldFRvZG9Db2xsYXBzaWJsZSgpO1xuICBzZXRFZGl0aW5nTGlzdGVuZXJzKCk7XG59XG5cbmNvbnN0IHNldEVkaXRpbmdMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGNvbnN0IHRpdGxlcyA9IGRpdkNvbnRlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGl0bGUnKTtcbiAgZm9yIChjb25zdCBkaXZUaXRsZSBvZiB0aXRsZXMpIHtcbiAgICBkaXZUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsKGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbmRleCcpO1xuICAgICAgY29uc3QgbmV3VGl0bGUgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLmxpc3RbaW5kZXhdLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgICBkaXNwbGF5VG9kb3MoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGRlc2NyaXB0aW9ucyA9IGRpdkNvbnRlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVzY3JpcHRpb24nKTtcbiAgZm9yIChjb25zdCBkaXZEZXNjcmlwdGlvbiBvZiBkZXNjcmlwdGlvbnMpIHtcbiAgICBkaXZEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsKGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbmRleCcpO1xuICAgICAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLmxpc3RbaW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICBkaXNwbGF5VG9kb3MoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PiB7XG4gIGRpc3BsYXkucHJvamVjdFRpdGxlcyhwcm9qZWN0TGlzdCwgY3VycmVudFByb2plY3RJbmRleCk7XG59XG5cbnN0YXJ0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9