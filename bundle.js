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
    height: 40%;
  }
  
  .project img {
    width: 100%;
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
  
    .nav {
      font-size: 1rem;
    }
  
    .hero {
      width: 85%;
    }
  }
  
  /* LAPTOPS */
  @media (max-width: 1024px) {
    .hero {
      width: 70%;
    }
  
    form {
      width: 30%;
    }
  }
  
  
  /* TABLETS */
  @media (max-width:768px) {
    .nav {
      width: 100%;
      justify-content: space-around;
      margin: 0;
    }
  
    .name {
      display: none;
    }
  
    .hero {
      text-align: center;
    }
  
    form {
      width: 50%;
    }
  }
  
  /* PHONES */
  
  @media (max-width:480px) {
    .hero {
      font-size: 2.5rem;
      text-align: center;
    }
  
  }
  
  /* ANIMATIONS */
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes fadeInUP {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY();
    }
  }
  
  @-webkit-keyframes fadeInUP {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY();
    }
  }
  
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @-webkit-keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @-webkit-keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  
  .fadeIn-animation {
    animation: 4.5s fadeIn;
    animation-iteration-count: infinite;
  }
  
  .fadeInUp-animation {
    animation: 3s fadeInUP;
  }
  
  .fadeInLeft-animation {
    animation: 3s fadeInLeft;
  }
  
  .fadeInRight-animation {
    animation: 3s fadeInRight;
  }
  
  
  /* JAVASCRIPT */
  .display {
    display: flex;
  }`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --main-color: #002029;\n    --font-color: #FFFFFF;\n    --secondary-color: #14353d;\n    --accent-color: #3e7bfa;\n    font-family: 'Courier Prime', monospace;\n    scroll-behavior: smooth;\n  }\n  \n  * {\n    margin: 0;\n    padding: 0;\n  }\n  \n  body {\n    background-color: var(--main-color);\n    color: var(--font-color);\n  }\n  \n  section {\n    padding: 20px;\n    margin-bottom: 5%;\n  }\n  \n  .about {\n    height: 100vh;\n    font-size: 2rem;\n  }\n  \n  .header {\n    display: flex;\n    justify-content: space-around;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    position: fixed;\n    padding: 15px;\n    font-size: 1.5rem;\n    background-color: rgba(255, 255, 255, 0.87);\n    transition: all 1s;\n    opacity: 0;\n  }\n  \n  .display-header {\n    opacity: 1;\n  }\n  \n  .name {\n    width: 50%;\n    display: flex;\n    justify-content: left;\n    margin-left: 5%;\n    text-align: left;\n    color: var(--main-color);\n  }\n  \n  .nav {\n    width: 50%;\n    display: flex;\n    justify-content: right;\n    margin-right: 5%;\n    font-size: 1.5rem;\n  }\n  \n  .nav-header>ul {\n    list-style: none;\n    display: flex;\n    gap: 1em;\n  }\n  \n  .nav-header>ul>li {\n    cursor: pointer;\n  }\n  \n  .container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    height: 100%;\n  }\n  \n  .hero-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 10%;\n  }\n  \n  .hero {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 75%;\n    font-size: 3rem;\n  }\n  \n  .arrow-container {\n    display: none;\n    justify-content: center;\n    gap: 1em;\n    margin-top: 10%;\n    padding: 5px;\n    cursor: pointer;\n    user-select: none;\n  }\n  \n  .arrow-container img {\n    max-height: 30px;\n    max-width: 30px;\n    padding: 0;\n  }\n  \n  /* WORK */\n  .work {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  .work>nav {\n    text-align: center;\n    padding: 10px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    background-color: #002029b4;\n    font-size: 1.5rem;\n    margin-bottom: 2%;\n  }\n  \n  .work>nav>ul {\n    display: flex;\n    list-style: none;\n    gap: 2em;\n  }\n  \n  .work h2 {\n    margin-bottom: 3%;\n  }\n  \n  .project-container {\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    gap: 2em;\n    text-align: center;\n  }\n  \n  .project {\n    border: 2px solid black;\n    border-radius: 10px;\n    height: 300px;\n    width: 300px;\n    background-color: var(--secondary-color);\n    font-size: .75rem;\n  }\n  \n  .project:hover {\n    border: 2px solid yellow;\n    transition: ease-in-out 0.1s;\n    \n  }\n  \n  .project-img {\n    width: 100%;\n    height: 40%;\n  }\n  \n  .project img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n  }\n  \n  .project-info {\n    padding: 15px;\n  }\n  \n  /* STACK */\n  .stack {\n    text-align: center;\n  }\n  \n  .stack-img {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 4em;\n  }\n  \n  .stack-img img {\n    max-width: 75px;\n    height: auto;\n  }\n  \n  /* CONTACT */\n  .contact {\n    text-align: center;\n  }\n  \n  .form-container {\n    display: flex;\n    justify-content: center;\n  }\n  \n  form {\n    text-align: left;\n    display: flex;\n    flex-direction: column;\n    width: 20%;\n  }\n  \n  label {\n    margin: 3% 0 0 0;\n  }\n  \n  input {\n    height: 30px;\n    background-color: var(--secondary-color);\n    color: var(--font-color);\n    padding: 5px;\n    border: none;\n    border-radius: 5px;\n    margin: 2% 0 0 0;\n  }\n  \n  textarea {\n    padding: 5px;\n    background-color: var(--secondary-color);\n    color: var(--font-color);\n    font-size: 1.25rem;\n    border: none;\n    border-radius: 5px;\n  }\n  \n  .project a:link {\n    text-decoration: none;\n    color: var(--font-color);\n  }\n  \n  .project a:visited {\n    color: var(--font-color);\n  \n  }\n  \n  .project a:active {\n    color: yellow;\n  }\n  \n  .project a:hover {\n    text-decoration: underline;\n  }\n  \n  .nav a:link {\n    text-decoration: none;\n    color: var(--main-color);\n  }\n  \n  .nav a:visited {\n    color: var(--main-color);\n  \n  }\n  .nav a:active {\n    color: yellow;\n  }\n  \n  .nav a:hover {\n    color: var(--font-color);\n  }\n  \n  @media (max-width: 1200px) {\n    section {\n      margin-left: auto;\n      margin-right: auto;\n    }\n  \n    .nav {\n      font-size: 1rem;\n    }\n  \n    .hero {\n      width: 85%;\n    }\n  }\n  \n  /* LAPTOPS */\n  @media (max-width: 1024px) {\n    .hero {\n      width: 70%;\n    }\n  \n    form {\n      width: 30%;\n    }\n  }\n  \n  \n  /* TABLETS */\n  @media (max-width:768px) {\n    .nav {\n      width: 100%;\n      justify-content: space-around;\n      margin: 0;\n    }\n  \n    .name {\n      display: none;\n    }\n  \n    .hero {\n      text-align: center;\n    }\n  \n    form {\n      width: 50%;\n    }\n  }\n  \n  /* PHONES */\n  \n  @media (max-width:480px) {\n    .hero {\n      font-size: 2.5rem;\n      text-align: center;\n    }\n  \n  }\n  \n  /* ANIMATIONS */\n  \n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  \n  @-webkit-keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  \n  @keyframes fadeInUP {\n    0% {\n      opacity: 0;\n      transform: translateY(100%);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY();\n    }\n  }\n  \n  @-webkit-keyframes fadeInUP {\n    0% {\n      opacity: 0;\n      transform: translateY(100%);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY();\n    }\n  }\n  \n  @keyframes fadeInLeft {\n    0% {\n      opacity: 0;\n      transform: translateX(-100%);\n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  }\n  \n  @-webkit-keyframes fadeInLeft {\n    0% {\n      opacity: 0;\n      transform: translateX(-100%);\n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  }\n  \n  @keyframes fadeInRight {\n    0% {\n      opacity: 0;\n      transform: translateX(100%);\n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  }\n  \n  @-webkit-keyframes fadeInRight {\n    0% {\n      opacity: 0;\n      transform: translateX(100%);\n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  }\n  \n  \n  .fadeIn-animation {\n    animation: 4.5s fadeIn;\n    animation-iteration-count: infinite;\n  }\n  \n  .fadeInUp-animation {\n    animation: 3s fadeInUP;\n  }\n  \n  .fadeInLeft-animation {\n    animation: 3s fadeInLeft;\n  }\n  \n  .fadeInRight-animation {\n    animation: 3s fadeInRight;\n  }\n  \n  \n  /* JAVASCRIPT */\n  .display {\n    display: flex;\n  }"],"sourceRoot":""}]);
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

    // content
    workSection.innerHTML = '<h2>Projects</h2>'

    // append 
    workSection.appendChild(projectsContainer);

    // dynamically create projects
    projectsContainer.innerHTML = '';
    for (let i = 0; i < project.length; i++) {
        let title = project[i].title;
        let image = project[i].imgage;
        let link = project[i].link;
        let description = project[i].description

        console.log(title)
        let projectDiv = document.createElement('div')
        projectDiv.innerHTML = `
        <div class="project-img">
            <img src="#" alt="#">
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
/* harmony export */   cssIMG: () => (/* binding */ cssIMG),
/* harmony export */   gitIMG: () => (/* binding */ gitIMG),
/* harmony export */   htmlIMG: () => (/* binding */ htmlIMG),
/* harmony export */   jsIMG: () => (/* binding */ jsIMG),
/* harmony export */   linuxIMG: () => (/* binding */ linuxIMG),
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

cssIMG.src = _img_skill_css_3_png__WEBPACK_IMPORTED_MODULE_0__
htmlIMG.src = _img_skill_html_5_png__WEBPACK_IMPORTED_MODULE_2__
jsIMG.src = _img_skill_js_png__WEBPACK_IMPORTED_MODULE_3__
webpackIMG.src = _img_skill_webpack_png__WEBPACK_IMPORTED_MODULE_5__
gitIMG.src = _img_skill_git_png__WEBPACK_IMPORTED_MODULE_1__
linuxIMG.src = _img_skill_linux_platform_png__WEBPACK_IMPORTED_MODULE_4__

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
        image: 'heres a link',
        link: 'https://dmychel.github.io/weather-app/',
        description: 'This is a simple weather app that uses a API from weatherapi. This app includes the ability to search cities and change the weather information from fahrenheit to celsius. The app has a couple of other features worth reading about in the README on the github repo.'
    };

    const videGameArchive = {
        title: 'Video Game Archive',
        src: '/',
        link: 'https://dmychel.github.io/dyloncrowley-portfolio/pages/terminal.html',
        description: 'Introducing a user-friendly archive that captures essential details about your games. You can add any game from any generation,console, and genre. You even have the ability to add a picture for coverart.'
    };

    const projects = [weatherAPP, videGameArchive]

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsT0FBTyxzRkFBc0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxX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Q0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQ2M7O0FBRXhDLHNEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvLy4vc3JjL3NjcmlwdHMvZHluYW1pY1VJLmpzIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vLi9zcmMvc2NyaXB0cy9pbWcuanMiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby8uL3NyYy9zY3JpcHRzL3VpLmpzIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLW1haW4tY29sb3I6ICMwMDIwMjk7XG4gICAgLS1mb250LWNvbG9yOiAjRkZGRkZGO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMTQzNTNkO1xuICAgIC0tYWNjZW50LWNvbG9yOiAjM2U3YmZhO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBQcmltZScsIG1vbm9zcGFjZTtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgfVxuICBcbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgfVxuICBcbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxuICBcbiAgLmFib3V0IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICBcbiAgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmRpc3BsYXktaGVhZGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuICAubmFtZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIH1cbiAgXG4gIC5uYXYge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgXG4gIC5uYXYtaGVhZGVyPnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxZW07XG4gIH1cbiAgXG4gIC5uYXYtaGVhZGVyPnVsPmxpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5oZXJvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgfVxuICBcbiAgLmhlcm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNzUlO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuICBcbiAgLmFycm93LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDFlbTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICBcbiAgLmFycm93LWNvbnRhaW5lciBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDMwcHg7XG4gICAgbWF4LXdpZHRoOiAzMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC8qIFdPUksgKi9cbiAgLndvcmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAud29yaz5uYXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjAyOWI0O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICB9XG4gIFxuICAud29yaz5uYXY+dWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBnYXA6IDJlbTtcbiAgfVxuICBcbiAgLndvcmsgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICB9XG4gIFxuICAucHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLnByb2plY3Qge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBmb250LXNpemU6IC43NXJlbTtcbiAgfVxuICBcbiAgLnByb2plY3Q6aG92ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjFzO1xuICAgIFxuICB9XG4gIFxuICAucHJvamVjdC1pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAlO1xuICB9XG4gIFxuICAucHJvamVjdCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgfVxuICBcbiAgLnByb2plY3QtaW5mbyB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICBcbiAgLyogU1RBQ0sgKi9cbiAgLnN0YWNrIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5zdGFjay1pbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogNGVtO1xuICB9XG4gIFxuICAuc3RhY2staW1nIGltZyB7XG4gICAgbWF4LXdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgLyogQ09OVEFDVCAqL1xuICAuY29udGFjdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuZm9ybS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIGZvcm0ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbiAgXG4gIGxhYmVsIHtcbiAgICBtYXJnaW46IDMlIDAgMCAwO1xuICB9XG4gIFxuICBpbnB1dCB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMiUgMCAwIDA7XG4gIH1cbiAgXG4gIHRleHRhcmVhIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgXG4gIC5wcm9qZWN0IGE6bGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgfVxuICBcbiAgLnByb2plY3QgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIFxuICB9XG4gIFxuICAucHJvamVjdCBhOmFjdGl2ZSB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgfVxuICBcbiAgLnByb2plY3QgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgXG4gIC5uYXYgYTpsaW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICB9XG4gIFxuICAubmF2IGE6dmlzaXRlZCB7XG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBcbiAgfVxuICAubmF2IGE6YWN0aXZlIHtcbiAgICBjb2xvcjogeWVsbG93O1xuICB9XG4gIFxuICAubmF2IGE6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIHNlY3Rpb24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuICBcbiAgICAubmF2IHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gIFxuICAgIC5oZXJvIHtcbiAgICAgIHdpZHRoOiA4NSU7XG4gICAgfVxuICB9XG4gIFxuICAvKiBMQVBUT1BTICovXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuaGVybyB7XG4gICAgICB3aWR0aDogNzAlO1xuICAgIH1cbiAgXG4gICAgZm9ybSB7XG4gICAgICB3aWR0aDogMzAlO1xuICAgIH1cbiAgfVxuICBcbiAgXG4gIC8qIFRBQkxFVFMgKi9cbiAgQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpIHtcbiAgICAubmF2IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICBcbiAgICAubmFtZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgXG4gICAgLmhlcm8ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgXG4gICAgZm9ybSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgfVxuICBcbiAgLyogUEhPTkVTICovXG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDo0ODBweCkge1xuICAgIC5oZXJvIHtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgXG4gIH1cbiAgXG4gIC8qIEFOSU1BVElPTlMgKi9cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZhZGVJblVQIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoKTtcbiAgICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5VUCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluTGVmdCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgfVxuICBcbiAgXG4gIC5mYWRlSW4tYW5pbWF0aW9uIHtcbiAgICBhbmltYXRpb246IDQuNXMgZmFkZUluO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICB9XG4gIFxuICAuZmFkZUluVXAtYW5pbWF0aW9uIHtcbiAgICBhbmltYXRpb246IDNzIGZhZGVJblVQO1xuICB9XG4gIFxuICAuZmFkZUluTGVmdC1hbmltYXRpb24ge1xuICAgIGFuaW1hdGlvbjogM3MgZmFkZUluTGVmdDtcbiAgfVxuICBcbiAgLmZhZGVJblJpZ2h0LWFuaW1hdGlvbiB7XG4gICAgYW5pbWF0aW9uOiAzcyBmYWRlSW5SaWdodDtcbiAgfVxuICBcbiAgXG4gIC8qIEpBVkFTQ1JJUFQgKi9cbiAgLmRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsdUNBQXVDO0lBQ3ZDLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxtQ0FBbUM7SUFDbkMsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7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Vix3QkFBd0I7SUFDMUI7RUFDRjs7O0VBR0E7SUFDRSxzQkFBc0I7SUFDdEIsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOzs7RUFHQSxlQUFlO0VBQ2Y7SUFDRSxhQUFhO0VBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLW1haW4tY29sb3I6ICMwMDIwMjk7XFxuICAgIC0tZm9udC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMxNDM1M2Q7XFxuICAgIC0tYWNjZW50LWNvbG9yOiAjM2U3YmZhO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgUHJpbWUnLCBtb25vc3BhY2U7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgfVxcbiAgXFxuICAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgXFxuICBib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIH1cXG4gIFxcbiAgc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbiAgfVxcbiAgXFxuICAuYWJvdXQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuICBcXG4gIC5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICBcXG4gIC5kaXNwbGF5LWhlYWRlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICBcXG4gIC5uYW1lIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIH1cXG4gIFxcbiAgLm5hdiB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgXFxuICAubmF2LWhlYWRlcj51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMWVtO1xcbiAgfVxcbiAgXFxuICAubmF2LWhlYWRlcj51bD5saSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICBcXG4gIC5oZXJvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxuICB9XFxuICBcXG4gIC5oZXJvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG4gIFxcbiAgLmFycm93LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFlbTtcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB9XFxuICBcXG4gIC5hcnJvdy1jb250YWluZXIgaW1nIHtcXG4gICAgbWF4LWhlaWdodDogMzBweDtcXG4gICAgbWF4LXdpZHRoOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgXFxuICAvKiBXT1JLICovXFxuICAud29yayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC53b3JrPm5hdiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMDI5YjQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcXG4gIH1cXG4gIFxcbiAgLndvcms+bmF2PnVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZ2FwOiAyZW07XFxuICB9XFxuICBcXG4gIC53b3JrIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XFxuICB9XFxuICBcXG4gIC5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxuICB9XFxuICBcXG4gIC5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjFzO1xcbiAgICBcXG4gIH1cXG4gIFxcbiAgLnByb2plY3QtaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDAlO1xcbiAgfVxcbiAgXFxuICAucHJvamVjdCBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgfVxcbiAgXFxuICAucHJvamVjdC1pbmZvIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gIH1cXG4gIFxcbiAgLyogU1RBQ0sgKi9cXG4gIC5zdGFjayB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLnN0YWNrLWltZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNGVtO1xcbiAgfVxcbiAgXFxuICAuc3RhY2staW1nIGltZyB7XFxuICAgIG1heC13aWR0aDogNzVweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAvKiBDT05UQUNUICovXFxuICAuY29udGFjdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIGZvcm0ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgfVxcbiAgXFxuICBsYWJlbCB7XFxuICAgIG1hcmdpbjogMyUgMCAwIDA7XFxuICB9XFxuICBcXG4gIGlucHV0IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbjogMiUgMCAwIDA7XFxuICB9XFxuICBcXG4gIHRleHRhcmVhIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuICBcXG4gIC5wcm9qZWN0IGE6bGluayB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgfVxcbiAgXFxuICAucHJvamVjdCBhOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBcXG4gIH1cXG4gIFxcbiAgLnByb2plY3QgYTphY3RpdmUge1xcbiAgICBjb2xvcjogeWVsbG93O1xcbiAgfVxcbiAgXFxuICAucHJvamVjdCBhOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxuICBcXG4gIC5uYXYgYTpsaW5rIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICB9XFxuICBcXG4gIC5uYXYgYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgXFxuICB9XFxuICAubmF2IGE6YWN0aXZlIHtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gIH1cXG4gIFxcbiAgLm5hdiBhOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgfVxcbiAgXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAgIHNlY3Rpb24ge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgfVxcbiAgXFxuICAgIC5uYXYge1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcbiAgXFxuICAgIC5oZXJvIHtcXG4gICAgICB3aWR0aDogODUlO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIC8qIExBUFRPUFMgKi9cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLmhlcm8ge1xcbiAgICAgIHdpZHRoOiA3MCU7XFxuICAgIH1cXG4gIFxcbiAgICBmb3JtIHtcXG4gICAgICB3aWR0aDogMzAlO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIFxcbiAgLyogVEFCTEVUUyAqL1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpIHtcXG4gICAgLm5hdiB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICBcXG4gICAgLm5hbWUge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gIFxcbiAgICAuaGVybyB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICBcXG4gICAgZm9ybSB7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICAvKiBQSE9ORVMgKi9cXG4gIFxcbiAgQG1lZGlhIChtYXgtd2lkdGg6NDgwcHgpIHtcXG4gICAgLmhlcm8ge1xcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgXFxuICB9XFxuICBcXG4gIC8qIEFOSU1BVElPTlMgKi9cXG4gIFxcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgZmFkZUluVVAge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVVAge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcXG4gICAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcXG4gICAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodCB7XFxuICAgIDAlIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBcXG4gIC5mYWRlSW4tYW5pbWF0aW9uIHtcXG4gICAgYW5pbWF0aW9uOiA0LjVzIGZhZGVJbjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICB9XFxuICBcXG4gIC5mYWRlSW5VcC1hbmltYXRpb24ge1xcbiAgICBhbmltYXRpb246IDNzIGZhZGVJblVQO1xcbiAgfVxcbiAgXFxuICAuZmFkZUluTGVmdC1hbmltYXRpb24ge1xcbiAgICBhbmltYXRpb246IDNzIGZhZGVJbkxlZnQ7XFxuICB9XFxuICBcXG4gIC5mYWRlSW5SaWdodC1hbmltYXRpb24ge1xcbiAgICBhbmltYXRpb246IDNzIGZhZGVJblJpZ2h0O1xcbiAgfVxcbiAgXFxuICBcXG4gIC8qIEpBVkFTQ1JJUFQgKi9cXG4gIC5kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZVdvcmsgfSBmcm9tIFwiLi91aVwiO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3QocHJvamVjdCkge1xuICAgIC8vIGNyZWF0ZSBlbGVtZW50c1xuICAgIGNvbnN0IHdvcmtTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dvcmsnKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy8gY29udGVudFxuICAgIHdvcmtTZWN0aW9uLmlubmVySFRNTCA9ICc8aDI+UHJvamVjdHM8L2gyPidcblxuICAgIC8vIGFwcGVuZCBcbiAgICB3b3JrU2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG5cbiAgICAvLyBkeW5hbWljYWxseSBjcmVhdGUgcHJvamVjdHNcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRpdGxlID0gcHJvamVjdFtpXS50aXRsZTtcbiAgICAgICAgbGV0IGltYWdlID0gcHJvamVjdFtpXS5pbWdhZ2U7XG4gICAgICAgIGxldCBsaW5rID0gcHJvamVjdFtpXS5saW5rO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBwcm9qZWN0W2ldLmRlc2NyaXB0aW9uXG5cbiAgICAgICAgY29uc29sZS5sb2codGl0bGUpXG4gICAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdERpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIjXCIgYWx0PVwiI1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW5mb1wiPlxuICAgICAgICAgICAgPGgyPjxhIGhyZWY9XCIke2xpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHt0aXRsZX08L2E+PC9oMj5cbiAgICAgICAgICAgIDxwPiR7ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5gXG5cbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdilcbiAgICB9O1xufVxuXG4iLCJpbXBvcnQgY3NzUE5HIGZyb20gJy4uL2ltZy9za2lsbC9jc3MtMy5wbmcnXG5pbXBvcnQgZ2l0UE5HIGZyb20gJy4uL2ltZy9za2lsbC9naXQucG5nJ1xuaW1wb3J0IGh0bWxQTkcgZnJvbSAnLi4vaW1nL3NraWxsL2h0bWwtNS5wbmcnXG5pbXBvcnQganNQTkcgZnJvbSAnLi4vaW1nL3NraWxsL2pzLnBuZydcbmltcG9ydCBsaW51eFBORyBmcm9tICcuLi9pbWcvc2tpbGwvbGludXgtcGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHdlYnBhY2tQTkcgZnJvbSAnLi4vaW1nL3NraWxsL3dlYnBhY2sucG5nJ1xuaW1wb3J0IGNhbGN1bGF0b3IgZnJvbSAnLi4vaW1nL3RodW1ibmFpbC9jYWxjdWxhdG9yLXRodW1ibWFpbC5wbmcnXG5pbXBvcnQgZ2FtZUFyY2hpdmUgZnJvbSAnLi4vaW1nL3RodW1ibmFpbC9nYW1lLWFyY2hpdmUuanBnJ1xuaW1wb3J0IHN0cmVldEZpZ2h0ZXJDb21iYXQgZnJvbSAnLi4vaW1nL3RodW1ibmFpbC9zdHJlZXQtY29tYmF0LXRodW1ibmFpbC5wbmcnXG5pbXBvcnQgdGVybWluYWwgZnJvbSAnLi4vaW1nL3RodW1ibmFpbC90ZXJtaW5hbC10aHVtYm5haWwuanBnJ1xuaW1wb3J0IHdlYXRoZXIgZnJvbSAnLi4vaW1nL3RodW1ibmFpbC93ZWF0aGVyLWFwcC10aHVtYm5haWwuanBnJ1xuXG5leHBvcnQgY29uc3QgY3NzSU1HID0gbmV3IEltYWdlKClcbmV4cG9ydCBjb25zdCBodG1sSU1HID0gbmV3IEltYWdlKClcbmV4cG9ydCBjb25zdCBqc0lNRyA9IG5ldyBJbWFnZSgpXG5leHBvcnQgY29uc3Qgd2VicGFja0lNRyA9IG5ldyBJbWFnZSgpXG5leHBvcnQgY29uc3QgZ2l0SU1HID0gbmV3IEltYWdlKClcbmV4cG9ydCBjb25zdCBsaW51eElNRyA9IG5ldyBJbWFnZSgpXG5cbmNzc0lNRy5zcmMgPSBjc3NQTkdcbmh0bWxJTUcuc3JjID0gaHRtbFBOR1xuanNJTUcuc3JjID0ganNQTkdcbndlYnBhY2tJTUcuc3JjID0gd2VicGFja1BOR1xuZ2l0SU1HLnNyYyA9IGdpdFBOR1xubGludXhJTUcuc3JjID0gbGludXhQTkciLCJpbXBvcnQgeyByZW5kZXJQcm9qZWN0IH0gZnJvbSBcIi4vZHluYW1pY1VJXCI7XG5pbXBvcnQgeyBodG1sSU1HIH0gZnJvbSBcIi4vaW1nXCI7XG5pbXBvcnQgeyBjc3NJTUcgfSBmcm9tIFwiLi9pbWdcIjtcbmltcG9ydCB7IGpzSU1HIH0gZnJvbSBcIi4vaW1nXCI7XG5pbXBvcnQgeyBnaXRJTUcgfSBmcm9tIFwiLi9pbWdcIjtcbmltcG9ydCB7IHdlYnBhY2tJTUcgfSBmcm9tIFwiLi9pbWdcIjtcbmltcG9ydCB7IGxpbnV4SU1HIH0gZnJvbSBcIi4vaW1nXCI7XG5cbi8vIGNyZWF0ZSBlbGVtZW50c1xuY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuY29uc3Qgd29ya1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5jb25zdCBzdGFja1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5jb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURPTSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG5cbiAgICAvLyBhc3NpZ24gY2xhc3MgYW5kIGlkc1xuICAgIHdvcmtTZWN0aW9uLmNsYXNzTGlzdCA9ICd3b3JrJ1xuICAgIHdvcmtTZWN0aW9uLmlkID0gJ3dvcmsnXG4gICAgc3RhY2tTZWN0aW9uLmNsYXNzTGlzdCA9ICdzdGFjaydcbiAgICBzdGFja1NlY3Rpb24uaWQgPSAnc3RhY2snXG4gICAgY29udGFjdFNlY3Rpb24uY2xhc3NMaXN0ID0gJ2NvbnRhY3QnXG4gICAgY29udGFjdFNlY3Rpb24uaWQgPSAnY29udGFjdCdcblxuXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3b3JrU2VjdGlvbik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChzdGFja1NlY3Rpb24pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24pO1xuXG4gICAgY3JlYXRlV29yaygpXG4gICAgY3JlYXRlU3RhY2soKVxuICAgIGNyZWF0ZUNvbnRhY3QoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV29yaygpIHtcbiAgICBjb25zdCB3ZWF0aGVyQVBQID0ge1xuICAgICAgICB0aXRsZTogJ1dlYXRoZXIgQXBwJyxcbiAgICAgICAgaW1hZ2U6ICdoZXJlcyBhIGxpbmsnLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kbXljaGVsLmdpdGh1Yi5pby93ZWF0aGVyLWFwcC8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBzaW1wbGUgd2VhdGhlciBhcHAgdGhhdCB1c2VzIGEgQVBJIGZyb20gd2VhdGhlcmFwaS4gVGhpcyBhcHAgaW5jbHVkZXMgdGhlIGFiaWxpdHkgdG8gc2VhcmNoIGNpdGllcyBhbmQgY2hhbmdlIHRoZSB3ZWF0aGVyIGluZm9ybWF0aW9uIGZyb20gZmFocmVuaGVpdCB0byBjZWxzaXVzLiBUaGUgYXBwIGhhcyBhIGNvdXBsZSBvZiBvdGhlciBmZWF0dXJlcyB3b3J0aCByZWFkaW5nIGFib3V0IGluIHRoZSBSRUFETUUgb24gdGhlIGdpdGh1YiByZXBvLidcbiAgICB9O1xuXG4gICAgY29uc3QgdmlkZUdhbWVBcmNoaXZlID0ge1xuICAgICAgICB0aXRsZTogJ1ZpZGVvIEdhbWUgQXJjaGl2ZScsXG4gICAgICAgIHNyYzogJy8nLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kbXljaGVsLmdpdGh1Yi5pby9keWxvbmNyb3dsZXktcG9ydGZvbGlvL3BhZ2VzL3Rlcm1pbmFsLmh0bWwnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0ludHJvZHVjaW5nIGEgdXNlci1mcmllbmRseSBhcmNoaXZlIHRoYXQgY2FwdHVyZXMgZXNzZW50aWFsIGRldGFpbHMgYWJvdXQgeW91ciBnYW1lcy4gWW91IGNhbiBhZGQgYW55IGdhbWUgZnJvbSBhbnkgZ2VuZXJhdGlvbixjb25zb2xlLCBhbmQgZ2VucmUuIFlvdSBldmVuIGhhdmUgdGhlIGFiaWxpdHkgdG8gYWRkIGEgcGljdHVyZSBmb3IgY292ZXJhcnQuJ1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IFt3ZWF0aGVyQVBQLCB2aWRlR2FtZUFyY2hpdmVdXG5cbiAgICByZW5kZXJQcm9qZWN0KHByb2plY3RzKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGFjaygpIHtcbiAgICBzdGFja1NlY3Rpb24uaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDI+IFN0YWNrPC9oMiA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGFjay1pbWdcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtodG1sSU1HLnNyY31cIiBhbHQ9XCJIVE1MIDVcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtjc3NJTUcuc3JjfVwiIGFsdD1cIkNTU1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2pzSU1HLnNyY31cIiBhbHQ9XCJKYXZhc2NyaXB0XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7Z2l0SU1HLnNyY31cIiBhbHQ9XCJHaXRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt3ZWJwYWNrSU1HLnNyY31cIiBhbHQ9XCJXZWJwYWNrXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7bGludXhJTUcuc3JjfVwiIGFsdD1cIkdOVSBMaW51eFwiPlxuICAgICAgICA8L2Rpdj5gXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgY29udGFjdFNlY3Rpb24uaW5uZXJIVE1MID0gYFxuICAgIDxoMj5Db250YWN0PC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIHJlcXVpcmVkPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwieW91ckVtYWlsQG1haWwuY29tXCIgcmVxdWlyZWQ+XG5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdWJqZWN0XCI+U3ViamVjdDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3ViamVjdFwiIGlkPVwic3ViamVjdFwiIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiIHJlcXVpcmVkPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlXCIgaWQ9XCJtZXNzYWdlXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT5cblxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwic3VibWl0XCIgaWQ9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+YFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJ1xuaW1wb3J0IHsgY3JlYXRlRE9NIH0gZnJvbSAnLi9zY3JpcHRzL3VpJ1xuXG5jcmVhdGVET00oKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=