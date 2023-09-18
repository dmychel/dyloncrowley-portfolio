/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --main-color: #002029;
    --font-color: #FFFFFF;
    --secondary-color: #14353d;
    --accent-color: #3e7bfa;
    font-family: 'Courier Prime', monospace;
    scroll-behavior: smooth;
  }
  
  * {
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: var(--main-color);
    color: var(--font-color);
  }
  
  section {
    padding: 20px;
    margin-bottom: 5%;
  }
  
  .about {
    height: 100vh;
    font-size: 2rem;
  }
  
  .header {
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    padding: 15px;
    font-size: 1.5rem;
    background-color: rgba(255, 255, 255, 0.87);
    transition: all 1s;
    opacity: 0;
  }
  
  .display-header {
    opacity: 1;
  }
  
  .name {
    width: 50%;
    display: flex;
    justify-content: left;
    margin-left: 5%;
    text-align: left;
    color: var(--main-color);
  }
  
  .nav {
    width: 50%;
    display: flex;
    justify-content: right;
    margin-right: 5%;
    font-size: 1.5rem;
  }
  
  .nav-header>ul {
    list-style: none;
    display: flex;
    gap: 1em;
  }
  
  .nav-header>ul>li {
    cursor: pointer;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }
  
  .hero-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
  }
  
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    font-size: 3rem;
  }
  
  .arrow-container {
    display: none;
    justify-content: center;
    gap: 1em;
    margin-top: 10%;
    padding: 5px;
    cursor: pointer;
    user-select: none;
  }
  
  .arrow-container img {
    max-height: 30px;
    max-width: 30px;
    padding: 0;
  }
  
  /* WORK */
  .work {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .work>nav {
    text-align: center;
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #002029b4;
    font-size: 1.5rem;
    margin-bottom: 2%;
  }
  
  .work>nav>ul {
    display: flex;
    list-style: none;
    gap: 2em;
  }
  
  .work h2 {
    margin-bottom: 3%;
  }
  
  .project-container {
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    flex-wrap: wrap;
    gap: 2em;
    text-align: center;
  }
  
  .project {
    border: 2px solid black;
    border-radius: 10px;
    height: 300px;
    width: 300px;
    background-color: var(--secondary-color);
    font-size: .75rem;
  }
  
  .project:hover {
    border: 2px solid yellow;
    transition: ease-in-out 0.1s;
    
  }
  
  .project-img {
    width: 100%;
    height: 60%;
  }
  
  .project-img img {
    width: 50%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  
  .project-info {
    padding: 15px;
  }
  
  /* STACK */
  .stack {
    text-align: center;
  }
  
  .stack-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4em;
    padding: 50px;
  }
  
  .stack-img img {
    max-width: 75px;
    height: auto;
  }
  
  /* CONTACT */
  .contact {
    text-align: center;
  }
  
  .form-container {
    display: flex;
    justify-content: center;
  }
  
  form {
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 20%;
  }
  
  label {
    margin: 3% 0 0 0;
  }
  
  input {
    height: 30px;
    background-color: var(--secondary-color);
    color: var(--font-color);
    padding: 5px;
    border: none;
    border-radius: 5px;
    margin: 2% 0 0 0;
  }
  
  textarea {
    padding: 5px;
    background-color: var(--secondary-color);
    color: var(--font-color);
    font-size: 1.25rem;
    border: none;
    border-radius: 5px;
  }
  
  .project a:link {
    text-decoration: none;
    color: var(--font-color);
  }
  
  .project a:visited {
    color: var(--font-color);
  
  }
  
  .project a:active {
    color: yellow;
  }
  
  .project a:hover {
    text-decoration: underline;
  }
  
  .nav a:link {
    text-decoration: none;
    color: var(--main-color);
  }
  
  .nav a:visited {
    color: var(--main-color);
  
  }
  .nav a:active {
    color: yellow;
  }
  
  .nav a:hover {
    color: var(--font-color);
  }
  
  @media (max-width: 1200px) {
    section {
      margin-left: auto;
      margin-right: auto;
    }
  }
  
  /* LAPTOPS */
  @media (max-width: 1024px) {
    form {
      width: 30%;
    }
  }
  
  
  /* TABLETS */
  @media (max-width:768px) {
    .project-container {
      display: flex;
      flex-direction: column;
      width: 100%
    }

    form {
      width: 50%;
    }
  }
  `, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --main-color: #002029;\n    --font-color: #FFFFFF;\n    --secondary-color: #14353d;\n    --accent-color: #3e7bfa;\n    font-family: 'Courier Prime', monospace;\n    scroll-behavior: smooth;\n  }\n  \n  * {\n    margin: 0;\n    padding: 0;\n  }\n  \n  body {\n    background-color: var(--main-color);\n    color: var(--font-color);\n  }\n  \n  section {\n    padding: 20px;\n    margin-bottom: 5%;\n  }\n  \n  .about {\n    height: 100vh;\n    font-size: 2rem;\n  }\n  \n  .header {\n    display: flex;\n    justify-content: space-around;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    position: fixed;\n    padding: 15px;\n    font-size: 1.5rem;\n    background-color: rgba(255, 255, 255, 0.87);\n    transition: all 1s;\n    opacity: 0;\n  }\n  \n  .display-header {\n    opacity: 1;\n  }\n  \n  .name {\n    width: 50%;\n    display: flex;\n    justify-content: left;\n    margin-left: 5%;\n    text-align: left;\n    color: var(--main-color);\n  }\n  \n  .nav {\n    width: 50%;\n    display: flex;\n    justify-content: right;\n    margin-right: 5%;\n    font-size: 1.5rem;\n  }\n  \n  .nav-header>ul {\n    list-style: none;\n    display: flex;\n    gap: 1em;\n  }\n  \n  .nav-header>ul>li {\n    cursor: pointer;\n  }\n  \n  .container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    height: 100%;\n  }\n  \n  .hero-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 10%;\n  }\n  \n  .hero {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 75%;\n    font-size: 3rem;\n  }\n  \n  .arrow-container {\n    display: none;\n    justify-content: center;\n    gap: 1em;\n    margin-top: 10%;\n    padding: 5px;\n    cursor: pointer;\n    user-select: none;\n  }\n  \n  .arrow-container img {\n    max-height: 30px;\n    max-width: 30px;\n    padding: 0;\n  }\n  \n  /* WORK */\n  .work {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  .work>nav {\n    text-align: center;\n    padding: 10px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    background-color: #002029b4;\n    font-size: 1.5rem;\n    margin-bottom: 2%;\n  }\n  \n  .work>nav>ul {\n    display: flex;\n    list-style: none;\n    gap: 2em;\n  }\n  \n  .work h2 {\n    margin-bottom: 3%;\n  }\n  \n  .project-container {\n    display: flex;\n    justify-content: space-evenly;\n    width: 50%;\n    flex-wrap: wrap;\n    gap: 2em;\n    text-align: center;\n  }\n  \n  .project {\n    border: 2px solid black;\n    border-radius: 10px;\n    height: 300px;\n    width: 300px;\n    background-color: var(--secondary-color);\n    font-size: .75rem;\n  }\n  \n  .project:hover {\n    border: 2px solid yellow;\n    transition: ease-in-out 0.1s;\n    \n  }\n  \n  .project-img {\n    width: 100%;\n    height: 60%;\n  }\n  \n  .project-img img {\n    width: 50%;\n    height: 100%;\n    object-fit: cover;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n  }\n  \n  .project-info {\n    padding: 15px;\n  }\n  \n  /* STACK */\n  .stack {\n    text-align: center;\n  }\n  \n  .stack-img {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 4em;\n    padding: 50px;\n  }\n  \n  .stack-img img {\n    max-width: 75px;\n    height: auto;\n  }\n  \n  /* CONTACT */\n  .contact {\n    text-align: center;\n  }\n  \n  .form-container {\n    display: flex;\n    justify-content: center;\n  }\n  \n  form {\n    text-align: left;\n    display: flex;\n    flex-direction: column;\n    width: 20%;\n  }\n  \n  label {\n    margin: 3% 0 0 0;\n  }\n  \n  input {\n    height: 30px;\n    background-color: var(--secondary-color);\n    color: var(--font-color);\n    padding: 5px;\n    border: none;\n    border-radius: 5px;\n    margin: 2% 0 0 0;\n  }\n  \n  textarea {\n    padding: 5px;\n    background-color: var(--secondary-color);\n    color: var(--font-color);\n    font-size: 1.25rem;\n    border: none;\n    border-radius: 5px;\n  }\n  \n  .project a:link {\n    text-decoration: none;\n    color: var(--font-color);\n  }\n  \n  .project a:visited {\n    color: var(--font-color);\n  \n  }\n  \n  .project a:active {\n    color: yellow;\n  }\n  \n  .project a:hover {\n    text-decoration: underline;\n  }\n  \n  .nav a:link {\n    text-decoration: none;\n    color: var(--main-color);\n  }\n  \n  .nav a:visited {\n    color: var(--main-color);\n  \n  }\n  .nav a:active {\n    color: yellow;\n  }\n  \n  .nav a:hover {\n    color: var(--font-color);\n  }\n  \n  @media (max-width: 1200px) {\n    section {\n      margin-left: auto;\n      margin-right: auto;\n    }\n  }\n  \n  /* LAPTOPS */\n  @media (max-width: 1024px) {\n    form {\n      width: 30%;\n    }\n  }\n  \n  \n  /* TABLETS */\n  @media (max-width:768px) {\n    .project-container {\n      display: flex;\n      flex-direction: column;\n      width: 100%\n    }\n\n    form {\n      width: 50%;\n    }\n  }\n  "],"sourceRoot":""}]);
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

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/scripts/dynamicUI.js":
/*!**********************************!*\
  !*** ./src/scripts/dynamicUI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderProject: () => (/* binding */ renderProject)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/scripts/ui.js");


function renderProject(project) {
    // create elements
    const workSection = document.querySelector('#work');
    const projectsContainer = document.createElement('div');
    projectsContainer.classList = 'project-container'

    // content
    workSection.innerHTML = '<h2>Projects</h2>'

    // append 
    workSection.appendChild(projectsContainer);

    // dynamically create projects
    projectsContainer.innerHTML = '';
    for (let i = 0; i < project.length; i++) {
        let title = project[i].title;
        let image = project[i].image;
        let link = project[i].link;
        let description = project[i].description

        console.log(title)
        let projectDiv = document.createElement('div')
        projectDiv.innerHTML = `
        <div class="project-img">
            <img src="${image}" alt="thumbnail">
        </div>
        <div class="project-info">
            <h2><a href="${link}" target="_blank">${title}</a></h2>
            <p>${description}</p>
        </div>`

        projectsContainer.appendChild(projectDiv)
    };
}



/***/ }),

/***/ "./src/scripts/img.js":
/*!****************************!*\
  !*** ./src/scripts/img.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculatorIMG: () => (/* binding */ calculatorIMG),
/* harmony export */   cssIMG: () => (/* binding */ cssIMG),
/* harmony export */   gameArchiveIMG: () => (/* binding */ gameArchiveIMG),
/* harmony export */   gitIMG: () => (/* binding */ gitIMG),
/* harmony export */   htmlIMG: () => (/* binding */ htmlIMG),
/* harmony export */   jsIMG: () => (/* binding */ jsIMG),
/* harmony export */   linuxIMG: () => (/* binding */ linuxIMG),
/* harmony export */   streetFighterCombatIMG: () => (/* binding */ streetFighterCombatIMG),
/* harmony export */   terminalIMG: () => (/* binding */ terminalIMG),
/* harmony export */   weatherIMG: () => (/* binding */ weatherIMG),
/* harmony export */   webpackIMG: () => (/* binding */ webpackIMG)
/* harmony export */ });
/* harmony import */ var _img_skill_css_3_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/skill/css-3.png */ "./src/img/skill/css-3.png");
/* harmony import */ var _img_skill_git_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/skill/git.png */ "./src/img/skill/git.png");
/* harmony import */ var _img_skill_html_5_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/skill/html-5.png */ "./src/img/skill/html-5.png");
/* harmony import */ var _img_skill_js_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/skill/js.png */ "./src/img/skill/js.png");
/* harmony import */ var _img_skill_linux_platform_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/skill/linux-platform.png */ "./src/img/skill/linux-platform.png");
/* harmony import */ var _img_skill_webpack_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/skill/webpack.png */ "./src/img/skill/webpack.png");
/* harmony import */ var _img_thumbnail_calculator_thumbmail_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/thumbnail/calculator-thumbmail.png */ "./src/img/thumbnail/calculator-thumbmail.png");
/* harmony import */ var _img_thumbnail_game_archive_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/thumbnail/game-archive.jpg */ "./src/img/thumbnail/game-archive.jpg");
/* harmony import */ var _img_thumbnail_street_combat_thumbnail_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/thumbnail/street-combat-thumbnail.png */ "./src/img/thumbnail/street-combat-thumbnail.png");
/* harmony import */ var _img_thumbnail_terminal_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/thumbnail/terminal-thumbnail.jpg */ "./src/img/thumbnail/terminal-thumbnail.jpg");
/* harmony import */ var _img_thumbnail_weather_app_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/thumbnail/weather-app-thumbnail.jpg */ "./src/img/thumbnail/weather-app-thumbnail.jpg");












const cssIMG = new Image()
const htmlIMG = new Image()
const jsIMG = new Image()
const webpackIMG = new Image()
const gitIMG = new Image()
const linuxIMG = new Image()

const calculatorIMG = new Image()
const gameArchiveIMG = new Image()
const streetFighterCombatIMG = new Image()
const terminalIMG = new Image()
const weatherIMG = new Image()

cssIMG.src = _img_skill_css_3_png__WEBPACK_IMPORTED_MODULE_0__
htmlIMG.src = _img_skill_html_5_png__WEBPACK_IMPORTED_MODULE_2__
jsIMG.src = _img_skill_js_png__WEBPACK_IMPORTED_MODULE_3__
webpackIMG.src = _img_skill_webpack_png__WEBPACK_IMPORTED_MODULE_5__
gitIMG.src = _img_skill_git_png__WEBPACK_IMPORTED_MODULE_1__
linuxIMG.src = _img_skill_linux_platform_png__WEBPACK_IMPORTED_MODULE_4__

calculatorIMG.src = _img_thumbnail_calculator_thumbmail_png__WEBPACK_IMPORTED_MODULE_6__
gameArchiveIMG.src = _img_thumbnail_game_archive_jpg__WEBPACK_IMPORTED_MODULE_7__
streetFighterCombatIMG.src = _img_thumbnail_street_combat_thumbnail_png__WEBPACK_IMPORTED_MODULE_8__
terminalIMG.src = _img_thumbnail_terminal_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_9__
weatherIMG.src = _img_thumbnail_weather_app_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_10__

/***/ }),

/***/ "./src/scripts/ui.js":
/*!***************************!*\
  !*** ./src/scripts/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDOM: () => (/* binding */ createDOM),
/* harmony export */   createWork: () => (/* binding */ createWork)
/* harmony export */ });
/* harmony import */ var _dynamicUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamicUI */ "./src/scripts/dynamicUI.js");
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img */ "./src/scripts/img.js");












// create elements
const aboutSection = document.createElement('section');
const workSection = document.createElement('section');
const stackSection = document.createElement('section');
const contactSection = document.createElement('section');

function createDOM() {
    const main = document.querySelector('main')

    // assign class and ids
    workSection.classList = 'work'
    workSection.id = 'work'
    stackSection.classList = 'stack'
    stackSection.id = 'stack'
    contactSection.classList = 'contact'
    contactSection.id = 'contact'


    main.appendChild(workSection);
    main.appendChild(stackSection);
    main.appendChild(contactSection);

    createWork()
    createStack()
    createContact()
}

function createWork() {
    const weatherAPP = {
        title: 'Weather App',
        image: `${_img__WEBPACK_IMPORTED_MODULE_1__.weatherIMG.src}`,
        link: 'https://dmychel.github.io/weather-app/',
        description: 'This is a simple weather app that uses a API from weatherapi. This app includes the ability to search cities and change the weather information from fahrenheit to celsius. The app has a couple of other features worth reading about in the README on the github repo.'
    };

    const videGameArchive = {
        title: 'Video Game Archive',
        image: `${_img__WEBPACK_IMPORTED_MODULE_1__.gameArchiveIMG.src}`,
        link: 'https://dmychel.github.io/game-archive/',
        description: 'Introducing a user-friendly archive that captures essential details about your games. You can add any game from any generation,console, and genre. You even have the ability to add a picture for coverart.'
    };

    const terminal = {
        title: 'Terminal Portfolio',
        image: `${_img__WEBPACK_IMPORTED_MODULE_1__.terminalIMG.src}`,
        link: 'https://dmychel.github.io/terminal-portfolio/',
        description: 'One of my favorite projects - my portfolio in a terminal-style interface! As a GNU Linux enthusiast, creating this mock terminal has been an exhilarating experience. The interface boasts an array of terminal commands, thoughtfully implemented using a comprehensive switch statement.'
    }

    const streetFighterCombat = {
        title: 'Street Fighter Combat',
        image: `${_img__WEBPACK_IMPORTED_MODULE_1__.streetFighterCombatIMG.src}`,
        link: 'https://dmychel.github.io/street-fighter-combat/',
        description: '  This project is an engaging and innovative take on the traditional Rock Paper Scissors game. It features a dynamic and interactive user interface with turn-based combat elements, character selections, and health bars, all achieved through dynamic DOM manipulation.'
    }

    const projects = [weatherAPP, videGameArchive, terminal, streetFighterCombat]

    ;(0,_dynamicUI__WEBPACK_IMPORTED_MODULE_0__.renderProject)(projects)
}

function createStack() {
    stackSection.innerHTML = `
        <h2> Stack</h2 >
        <div class="stack-img">
            <img src="${_img__WEBPACK_IMPORTED_MODULE_1__.htmlIMG.src}" alt="HTML 5">
            <img src="${_img__WEBPACK_IMPORTED_MODULE_1__.cssIMG.src}" alt="CSS">
            <img src="${_img__WEBPACK_IMPORTED_MODULE_1__.jsIMG.src}" alt="Javascript">
            <img src="${_img__WEBPACK_IMPORTED_MODULE_1__.gitIMG.src}" alt="Git">
            <img src="${_img__WEBPACK_IMPORTED_MODULE_1__.webpackIMG.src}" alt="Webpack">
            <img src="${_img__WEBPACK_IMPORTED_MODULE_1__.linuxIMG.src}" alt="GNU Linux">
        </div>`
}

function createContact() {
    contactSection.innerHTML = `
    <h2>Contact</h2>
    <div class="form-container">
        <form action="">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Your Name" required>

            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="yourEmail@mail.com" required>

            <label for="subject">Subject</label>
            <input type="text" name="subject" id="subject" placeholder="Subject" required>

            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>

            <input type="submit" name="submit" id="submit" value="Submit">
        </form>
    </div>`
}


/***/ }),

/***/ "./src/img/skill/css-3.png":
/*!*********************************!*\
  !*** ./src/img/skill/css-3.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "463e319bad8e0edf1ef7.png";

/***/ }),

/***/ "./src/img/skill/git.png":
/*!*******************************!*\
  !*** ./src/img/skill/git.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfdd0989ffe0184bdd68.png";

/***/ }),

/***/ "./src/img/skill/html-5.png":
/*!**********************************!*\
  !*** ./src/img/skill/html-5.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10d2d67c31150b390181.png";

/***/ }),

/***/ "./src/img/skill/js.png":
/*!******************************!*\
  !*** ./src/img/skill/js.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3dfb665e058d08c99f28.png";

/***/ }),

/***/ "./src/img/skill/linux-platform.png":
/*!******************************************!*\
  !*** ./src/img/skill/linux-platform.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "111090843d7b5e310639.png";

/***/ }),

/***/ "./src/img/skill/webpack.png":
/*!***********************************!*\
  !*** ./src/img/skill/webpack.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47692505d122dbcae490.png";

/***/ }),

/***/ "./src/img/thumbnail/calculator-thumbmail.png":
/*!****************************************************!*\
  !*** ./src/img/thumbnail/calculator-thumbmail.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ee6b8af296733001690.png";

/***/ }),

/***/ "./src/img/thumbnail/game-archive.jpg":
/*!********************************************!*\
  !*** ./src/img/thumbnail/game-archive.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b2e548045525f7ae4aa.jpg";

/***/ }),

/***/ "./src/img/thumbnail/street-combat-thumbnail.png":
/*!*******************************************************!*\
  !*** ./src/img/thumbnail/street-combat-thumbnail.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "173f92b84dc931a31ed2.png";

/***/ }),

/***/ "./src/img/thumbnail/terminal-thumbnail.jpg":
/*!**************************************************!*\
  !*** ./src/img/thumbnail/terminal-thumbnail.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4615987ad28aaa9d2b41.jpg";

/***/ }),

/***/ "./src/img/thumbnail/weather-app-thumbnail.jpg":
/*!*****************************************************!*\
  !*** ./src/img/thumbnail/weather-app-thumbnail.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "588acff40d5355f86610.jpg";

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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _scripts_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/ui */ "./src/scripts/ui.js");



(0,_scripts_ui__WEBPACK_IMPORTED_MODULE_1__.createDOM)()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNGQUFzRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNjOztBQUV4QyxzREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvLy4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby8uL3NyYy9zY3JpcHRzL2R5bmFtaWNVSS5qcyIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvLy4vc3JjL3NjcmlwdHMvaW1nLmpzIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vLi9zcmMvc2NyaXB0cy91aS5qcyIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1tYWluLWNvbG9yOiAjMDAyMDI5O1xuICAgIC0tZm9udC1jb2xvcjogI0ZGRkZGRjtcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzE0MzUzZDtcbiAgICAtLWFjY2VudC1jb2xvcjogIzNlN2JmYTtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgUHJpbWUnLCBtb25vc3BhY2U7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIH1cbiAgXG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIH1cbiAgXG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIH1cbiAgXG4gIC5hYm91dCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgXG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5kaXNwbGF5LWhlYWRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBcbiAgLm5hbWUge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICB9XG4gIFxuICAubmF2IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIFxuICAubmF2LWhlYWRlcj51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMWVtO1xuICB9XG4gIFxuICAubmF2LWhlYWRlcj51bD5saSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAuaGVyby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gIH1cbiAgXG4gIC5oZXJvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbiAgXG4gIC5hcnJvdy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxZW07XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIC5hcnJvdy1jb250YWluZXIgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xuICAgIG1heC13aWR0aDogMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAvKiBXT1JLICovXG4gIC53b3JrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLndvcms+bmF2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDIwMjliNDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgfVxuICBcbiAgLndvcms+bmF2PnVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZ2FwOiAyZW07XG4gIH1cbiAgXG4gIC53b3JrIGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgfVxuICBcbiAgLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLnByb2plY3Qge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBmb250LXNpemU6IC43NXJlbTtcbiAgfVxuICBcbiAgLnByb2plY3Q6aG92ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjFzO1xuICAgIFxuICB9XG4gIFxuICAucHJvamVjdC1pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAlO1xuICB9XG4gIFxuICAucHJvamVjdC1pbWcgaW1nIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgfVxuICBcbiAgLnByb2plY3QtaW5mbyB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICBcbiAgLyogU1RBQ0sgKi9cbiAgLnN0YWNrIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5zdGFjay1pbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogNGVtO1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gIH1cbiAgXG4gIC5zdGFjay1pbWcgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICAvKiBDT05UQUNUICovXG4gIC5jb250YWN0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgZm9ybSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICBcbiAgbGFiZWwge1xuICAgIG1hcmdpbjogMyUgMCAwIDA7XG4gIH1cbiAgXG4gIGlucHV0IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiAyJSAwIDAgMDtcbiAgfVxuICBcbiAgdGV4dGFyZWEge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICBcbiAgLnByb2plY3QgYTpsaW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICB9XG4gIFxuICAucHJvamVjdCBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgXG4gIH1cbiAgXG4gIC5wcm9qZWN0IGE6YWN0aXZlIHtcbiAgICBjb2xvcjogeWVsbG93O1xuICB9XG4gIFxuICAucHJvamVjdCBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICBcbiAgLm5hdiBhOmxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIH1cbiAgXG4gIC5uYXYgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIFxuICB9XG4gIC5uYXYgYTphY3RpdmUge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gIH1cbiAgXG4gIC5uYXYgYTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG4gIH1cbiAgXG4gIC8qIExBUFRPUFMgKi9cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIGZvcm0ge1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICB9XG4gIH1cbiAgXG4gIFxuICAvKiBUQUJMRVRTICovXG4gIEBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCVcbiAgICB9XG5cbiAgICBmb3JtIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICB9XG4gIGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2Qix1Q0FBdUM7SUFDdkMsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLG1DQUFtQztJQUNuQyx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiwyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQTtJQUNF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O0VBQ0Y7O0VBRUEsWUFBWTtFQUNaO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7O0VBR0EsWUFBWTtFQUNaO0lBQ0U7TUFDRSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCO0lBQ0Y7O0lBRUE7TUFDRSxVQUFVO0lBQ1o7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tbWFpbi1jb2xvcjogIzAwMjAyOTtcXG4gICAgLS1mb250LWNvbG9yOiAjRkZGRkZGO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzE0MzUzZDtcXG4gICAgLS1hY2NlbnQtY29sb3I6ICMzZTdiZmE7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBQcmltZScsIG1vbm9zcGFjZTtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICB9XFxuICBcXG4gICoge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICBcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgfVxcbiAgXFxuICBzZWN0aW9uIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICB9XFxuICBcXG4gIC5hYm91dCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG4gIFxcbiAgLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nyk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIFxcbiAgLmRpc3BsYXktaGVhZGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIFxcbiAgLm5hbWUge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgfVxcbiAgXFxuICAubmF2IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICBcXG4gIC5uYXYtaGVhZGVyPnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxZW07XFxuICB9XFxuICBcXG4gIC5uYXYtaGVhZGVyPnVsPmxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgXFxuICAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLmhlcm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gIH1cXG4gIFxcbiAgLmhlcm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcbiAgXFxuICAuYXJyb3ctY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMWVtO1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLmFycm93LWNvbnRhaW5lciBpbWcge1xcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXgtd2lkdGg6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICBcXG4gIC8qIFdPUksgKi9cXG4gIC53b3JrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLndvcms+bmF2IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDIwMjliNDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xcbiAgfVxcbiAgXFxuICAud29yaz5uYXY+dWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBnYXA6IDJlbTtcXG4gIH1cXG4gIFxcbiAgLndvcmsgaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcXG4gIH1cXG4gIFxcbiAgLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLnByb2plY3Qge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBmb250LXNpemU6IC43NXJlbTtcXG4gIH1cXG4gIFxcbiAgLnByb2plY3Q6aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuMXM7XFxuICAgIFxcbiAgfVxcbiAgXFxuICAucHJvamVjdC1pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICB9XFxuICBcXG4gIC5wcm9qZWN0LWltZyBpbWcge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICB9XFxuICBcXG4gIC5wcm9qZWN0LWluZm8ge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgfVxcbiAgXFxuICAvKiBTVEFDSyAqL1xcbiAgLnN0YWNrIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuc3RhY2staW1nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA0ZW07XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICB9XFxuICBcXG4gIC5zdGFjay1pbWcgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuICBcXG4gIC8qIENPTlRBQ1QgKi9cXG4gIC5jb250YWN0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgZm9ybSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAyMCU7XFxuICB9XFxuICBcXG4gIGxhYmVsIHtcXG4gICAgbWFyZ2luOiAzJSAwIDAgMDtcXG4gIH1cXG4gIFxcbiAgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiAyJSAwIDAgMDtcXG4gIH1cXG4gIFxcbiAgdGV4dGFyZWEge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG4gIFxcbiAgLnByb2plY3QgYTpsaW5rIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICB9XFxuICBcXG4gIC5wcm9qZWN0IGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIFxcbiAgfVxcbiAgXFxuICAucHJvamVjdCBhOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxuICB9XFxuICBcXG4gIC5wcm9qZWN0IGE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG4gIFxcbiAgLm5hdiBhOmxpbmsge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIH1cXG4gIFxcbiAgLm5hdiBhOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBcXG4gIH1cXG4gIC5uYXYgYTphY3RpdmUge1xcbiAgICBjb2xvcjogeWVsbG93O1xcbiAgfVxcbiAgXFxuICAubmF2IGE6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICB9XFxuICBcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgc2VjdGlvbiB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIC8qIExBUFRPUFMgKi9cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgZm9ybSB7XFxuICAgICAgd2lkdGg6IDMwJTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBcXG4gIC8qIFRBQkxFVFMgKi9cXG4gIEBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KSB7XFxuICAgIC5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIHdpZHRoOiAxMDAlXFxuICAgIH1cXG5cXG4gICAgZm9ybSB7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgfVxcbiAgfVxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVXb3JrIH0gZnJvbSBcIi4vdWlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3QocHJvamVjdCkge1xuICAgIC8vIGNyZWF0ZSBlbGVtZW50c1xuICAgIGNvbnN0IHdvcmtTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dvcmsnKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdwcm9qZWN0LWNvbnRhaW5lcidcblxuICAgIC8vIGNvbnRlbnRcbiAgICB3b3JrU2VjdGlvbi5pbm5lckhUTUwgPSAnPGgyPlByb2plY3RzPC9oMj4nXG5cbiAgICAvLyBhcHBlbmQgXG4gICAgd29ya1NlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xuXG4gICAgLy8gZHluYW1pY2FsbHkgY3JlYXRlIHByb2plY3RzXG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHByb2plY3RbaV0udGl0bGU7XG4gICAgICAgIGxldCBpbWFnZSA9IHByb2plY3RbaV0uaW1hZ2U7XG4gICAgICAgIGxldCBsaW5rID0gcHJvamVjdFtpXS5saW5rO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBwcm9qZWN0W2ldLmRlc2NyaXB0aW9uXG5cbiAgICAgICAgY29uc29sZS5sb2codGl0bGUpXG4gICAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdERpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlfVwiIGFsdD1cInRodW1ibmFpbFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW5mb1wiPlxuICAgICAgICAgICAgPGgyPjxhIGhyZWY9XCIke2xpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHt0aXRsZX08L2E+PC9oMj5cbiAgICAgICAgICAgIDxwPiR7ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5gXG5cbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdilcbiAgICB9O1xufVxuXG4iLCJpbXBvcnQgY3NzUE5HIGZyb20gJy4uL2ltZy9za2lsbC9jc3MtMy5wbmcnXG5pbXBvcnQgZ2l0UE5HIGZyb20gJy4uL2ltZy9za2lsbC9naXQucG5nJ1xuaW1wb3J0IGh0bWxQTkcgZnJvbSAnLi4vaW1nL3NraWxsL2h0bWwtNS5wbmcnXG5pbXBvcnQganNQTkcgZnJvbSAnLi4vaW1nL3NraWxsL2pzLnBuZydcbmltcG9ydCBsaW51eFBORyBmcm9tICcuLi9pbWcvc2tpbGwvbGludXgtcGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHdlYnBhY2tQTkcgZnJvbSAnLi4vaW1nL3NraWxsL3dlYnBhY2sucG5nJ1xuaW1wb3J0IGNhbGN1bGF0b3IgZnJvbSAnLi4vaW1nL3RodW1ibmFpbC9jYWxjdWxhdG9yLXRodW1ibWFpbC5wbmcnXG5pbXBvcnQgZ2FtZUFyY2hpdmUgZnJvbSAnLi4vaW1nL3RodW1ibmFpbC9nYW1lLWFyY2hpdmUuanBnJ1xuaW1wb3J0IHN0cmVldEZpZ2h0ZXJDb21iYXQgZnJvbSAnLi4vaW1nL3RodW1ibmFpbC9zdHJlZXQtY29tYmF0LXRodW1ibmFpbC5wbmcnXG5pbXBvcnQgdGVybWluYWwgZnJvbSAnLi4vaW1nL3RodW1ibmFpbC90ZXJtaW5hbC10aHVtYm5haWwuanBnJ1xuaW1wb3J0IHdlYXRoZXIgZnJvbSAnLi4vaW1nL3RodW1ibmFpbC93ZWF0aGVyLWFwcC10aHVtYm5haWwuanBnJ1xuXG5leHBvcnQgY29uc3QgY3NzSU1HID0gbmV3IEltYWdlKClcbmV4cG9ydCBjb25zdCBodG1sSU1HID0gbmV3IEltYWdlKClcbmV4cG9ydCBjb25zdCBqc0lNRyA9IG5ldyBJbWFnZSgpXG5leHBvcnQgY29uc3Qgd2VicGFja0lNRyA9IG5ldyBJbWFnZSgpXG5leHBvcnQgY29uc3QgZ2l0SU1HID0gbmV3IEltYWdlKClcbmV4cG9ydCBjb25zdCBsaW51eElNRyA9IG5ldyBJbWFnZSgpXG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdG9ySU1HID0gbmV3IEltYWdlKClcbmV4cG9ydCBjb25zdCBnYW1lQXJjaGl2ZUlNRyA9IG5ldyBJbWFnZSgpXG5leHBvcnQgY29uc3Qgc3RyZWV0RmlnaHRlckNvbWJhdElNRyA9IG5ldyBJbWFnZSgpXG5leHBvcnQgY29uc3QgdGVybWluYWxJTUcgPSBuZXcgSW1hZ2UoKVxuZXhwb3J0IGNvbnN0IHdlYXRoZXJJTUcgPSBuZXcgSW1hZ2UoKVxuXG5jc3NJTUcuc3JjID0gY3NzUE5HXG5odG1sSU1HLnNyYyA9IGh0bWxQTkdcbmpzSU1HLnNyYyA9IGpzUE5HXG53ZWJwYWNrSU1HLnNyYyA9IHdlYnBhY2tQTkdcbmdpdElNRy5zcmMgPSBnaXRQTkdcbmxpbnV4SU1HLnNyYyA9IGxpbnV4UE5HXG5cbmNhbGN1bGF0b3JJTUcuc3JjID0gY2FsY3VsYXRvclxuZ2FtZUFyY2hpdmVJTUcuc3JjID0gZ2FtZUFyY2hpdmVcbnN0cmVldEZpZ2h0ZXJDb21iYXRJTUcuc3JjID0gc3RyZWV0RmlnaHRlckNvbWJhdFxudGVybWluYWxJTUcuc3JjID0gdGVybWluYWxcbndlYXRoZXJJTUcuc3JjID0gd2VhdGhlciIsImltcG9ydCB7IHJlbmRlclByb2plY3QgfSBmcm9tIFwiLi9keW5hbWljVUlcIjtcbmltcG9ydCB7IGh0bWxJTUcgfSBmcm9tIFwiLi9pbWdcIjtcbmltcG9ydCB7IGNzc0lNRyB9IGZyb20gXCIuL2ltZ1wiO1xuaW1wb3J0IHsganNJTUcgfSBmcm9tIFwiLi9pbWdcIjtcbmltcG9ydCB7IGdpdElNRyB9IGZyb20gXCIuL2ltZ1wiO1xuaW1wb3J0IHsgd2VicGFja0lNRyB9IGZyb20gXCIuL2ltZ1wiO1xuaW1wb3J0IHsgbGludXhJTUcgfSBmcm9tIFwiLi9pbWdcIjtcbmltcG9ydCB7IHdlYXRoZXJJTUcgfSBmcm9tIFwiLi9pbWdcIjtcbmltcG9ydCB7IGdhbWVBcmNoaXZlSU1HIH0gZnJvbSBcIi4vaW1nXCI7XG5pbXBvcnQgeyB0ZXJtaW5hbElNRyB9IGZyb20gXCIuL2ltZ1wiO1xuaW1wb3J0IHsgc3RyZWV0RmlnaHRlckNvbWJhdElNRyB9IGZyb20gXCIuL2ltZ1wiO1xuXG4vLyBjcmVhdGUgZWxlbWVudHNcbmNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmNvbnN0IHdvcmtTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuY29uc3Qgc3RhY2tTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVET00oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuXG4gICAgLy8gYXNzaWduIGNsYXNzIGFuZCBpZHNcbiAgICB3b3JrU2VjdGlvbi5jbGFzc0xpc3QgPSAnd29yaydcbiAgICB3b3JrU2VjdGlvbi5pZCA9ICd3b3JrJ1xuICAgIHN0YWNrU2VjdGlvbi5jbGFzc0xpc3QgPSAnc3RhY2snXG4gICAgc3RhY2tTZWN0aW9uLmlkID0gJ3N0YWNrJ1xuICAgIGNvbnRhY3RTZWN0aW9uLmNsYXNzTGlzdCA9ICdjb250YWN0J1xuICAgIGNvbnRhY3RTZWN0aW9uLmlkID0gJ2NvbnRhY3QnXG5cblxuICAgIG1haW4uYXBwZW5kQ2hpbGQod29ya1NlY3Rpb24pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoc3RhY2tTZWN0aW9uKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RTZWN0aW9uKTtcblxuICAgIGNyZWF0ZVdvcmsoKVxuICAgIGNyZWF0ZVN0YWNrKClcbiAgICBjcmVhdGVDb250YWN0KClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdvcmsoKSB7XG4gICAgY29uc3Qgd2VhdGhlckFQUCA9IHtcbiAgICAgICAgdGl0bGU6ICdXZWF0aGVyIEFwcCcsXG4gICAgICAgIGltYWdlOiBgJHt3ZWF0aGVySU1HLnNyY31gLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kbXljaGVsLmdpdGh1Yi5pby93ZWF0aGVyLWFwcC8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBzaW1wbGUgd2VhdGhlciBhcHAgdGhhdCB1c2VzIGEgQVBJIGZyb20gd2VhdGhlcmFwaS4gVGhpcyBhcHAgaW5jbHVkZXMgdGhlIGFiaWxpdHkgdG8gc2VhcmNoIGNpdGllcyBhbmQgY2hhbmdlIHRoZSB3ZWF0aGVyIGluZm9ybWF0aW9uIGZyb20gZmFocmVuaGVpdCB0byBjZWxzaXVzLiBUaGUgYXBwIGhhcyBhIGNvdXBsZSBvZiBvdGhlciBmZWF0dXJlcyB3b3J0aCByZWFkaW5nIGFib3V0IGluIHRoZSBSRUFETUUgb24gdGhlIGdpdGh1YiByZXBvLidcbiAgICB9O1xuXG4gICAgY29uc3QgdmlkZUdhbWVBcmNoaXZlID0ge1xuICAgICAgICB0aXRsZTogJ1ZpZGVvIEdhbWUgQXJjaGl2ZScsXG4gICAgICAgIGltYWdlOiBgJHtnYW1lQXJjaGl2ZUlNRy5zcmN9YCxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZG15Y2hlbC5naXRodWIuaW8vZ2FtZS1hcmNoaXZlLycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSW50cm9kdWNpbmcgYSB1c2VyLWZyaWVuZGx5IGFyY2hpdmUgdGhhdCBjYXB0dXJlcyBlc3NlbnRpYWwgZGV0YWlscyBhYm91dCB5b3VyIGdhbWVzLiBZb3UgY2FuIGFkZCBhbnkgZ2FtZSBmcm9tIGFueSBnZW5lcmF0aW9uLGNvbnNvbGUsIGFuZCBnZW5yZS4gWW91IGV2ZW4gaGF2ZSB0aGUgYWJpbGl0eSB0byBhZGQgYSBwaWN0dXJlIGZvciBjb3ZlcmFydC4nXG4gICAgfTtcblxuICAgIGNvbnN0IHRlcm1pbmFsID0ge1xuICAgICAgICB0aXRsZTogJ1Rlcm1pbmFsIFBvcnRmb2xpbycsXG4gICAgICAgIGltYWdlOiBgJHt0ZXJtaW5hbElNRy5zcmN9YCxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZG15Y2hlbC5naXRodWIuaW8vdGVybWluYWwtcG9ydGZvbGlvLycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnT25lIG9mIG15IGZhdm9yaXRlIHByb2plY3RzIC0gbXkgcG9ydGZvbGlvIGluIGEgdGVybWluYWwtc3R5bGUgaW50ZXJmYWNlISBBcyBhIEdOVSBMaW51eCBlbnRodXNpYXN0LCBjcmVhdGluZyB0aGlzIG1vY2sgdGVybWluYWwgaGFzIGJlZW4gYW4gZXhoaWxhcmF0aW5nIGV4cGVyaWVuY2UuIFRoZSBpbnRlcmZhY2UgYm9hc3RzIGFuIGFycmF5IG9mIHRlcm1pbmFsIGNvbW1hbmRzLCB0aG91Z2h0ZnVsbHkgaW1wbGVtZW50ZWQgdXNpbmcgYSBjb21wcmVoZW5zaXZlIHN3aXRjaCBzdGF0ZW1lbnQuJ1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmVldEZpZ2h0ZXJDb21iYXQgPSB7XG4gICAgICAgIHRpdGxlOiAnU3RyZWV0IEZpZ2h0ZXIgQ29tYmF0JyxcbiAgICAgICAgaW1hZ2U6IGAke3N0cmVldEZpZ2h0ZXJDb21iYXRJTUcuc3JjfWAsXG4gICAgICAgIGxpbms6ICdodHRwczovL2RteWNoZWwuZ2l0aHViLmlvL3N0cmVldC1maWdodGVyLWNvbWJhdC8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJyAgVGhpcyBwcm9qZWN0IGlzIGFuIGVuZ2FnaW5nIGFuZCBpbm5vdmF0aXZlIHRha2Ugb24gdGhlIHRyYWRpdGlvbmFsIFJvY2sgUGFwZXIgU2Npc3NvcnMgZ2FtZS4gSXQgZmVhdHVyZXMgYSBkeW5hbWljIGFuZCBpbnRlcmFjdGl2ZSB1c2VyIGludGVyZmFjZSB3aXRoIHR1cm4tYmFzZWQgY29tYmF0IGVsZW1lbnRzLCBjaGFyYWN0ZXIgc2VsZWN0aW9ucywgYW5kIGhlYWx0aCBiYXJzLCBhbGwgYWNoaWV2ZWQgdGhyb3VnaCBkeW5hbWljIERPTSBtYW5pcHVsYXRpb24uJ1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RzID0gW3dlYXRoZXJBUFAsIHZpZGVHYW1lQXJjaGl2ZSwgdGVybWluYWwsIHN0cmVldEZpZ2h0ZXJDb21iYXRdXG5cbiAgICByZW5kZXJQcm9qZWN0KHByb2plY3RzKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGFjaygpIHtcbiAgICBzdGFja1NlY3Rpb24uaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDI+IFN0YWNrPC9oMiA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGFjay1pbWdcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtodG1sSU1HLnNyY31cIiBhbHQ9XCJIVE1MIDVcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtjc3NJTUcuc3JjfVwiIGFsdD1cIkNTU1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2pzSU1HLnNyY31cIiBhbHQ9XCJKYXZhc2NyaXB0XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7Z2l0SU1HLnNyY31cIiBhbHQ9XCJHaXRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt3ZWJwYWNrSU1HLnNyY31cIiBhbHQ9XCJXZWJwYWNrXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7bGludXhJTUcuc3JjfVwiIGFsdD1cIkdOVSBMaW51eFwiPlxuICAgICAgICA8L2Rpdj5gXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgY29udGFjdFNlY3Rpb24uaW5uZXJIVE1MID0gYFxuICAgIDxoMj5Db250YWN0PC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIHJlcXVpcmVkPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwieW91ckVtYWlsQG1haWwuY29tXCIgcmVxdWlyZWQ+XG5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdWJqZWN0XCI+U3ViamVjdDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3ViamVjdFwiIGlkPVwic3ViamVjdFwiIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiIHJlcXVpcmVkPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlXCIgaWQ9XCJtZXNzYWdlXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT5cblxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwic3VibWl0XCIgaWQ9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+YFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJ1xuaW1wb3J0IHsgY3JlYXRlRE9NIH0gZnJvbSAnLi9zY3JpcHRzL3VpJ1xuXG5jcmVhdGVET00oKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=