/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  var workSection = document.querySelector('#work');
  var projectsContainer = document.createElement('div');
  projectsContainer.classList = 'project-container';

  // content
  workSection.innerHTML = '<h2>Projects</h2>';

  // append 
  workSection.appendChild(projectsContainer);

  // dynamically create projects
  projectsContainer.innerHTML = '';
  for (var i = 0; i < project.length; i++) {
    var title = project[i].title;
    var image = project[i].image;
    var link = project[i].link;
    var description = project[i].description;
    console.log(title);
    var projectDiv = document.createElement('div');
    projectDiv.innerHTML = "\n        <div class=\"project-img\">\n            <img src=\"".concat(image, "\" alt=\"thumbnail\">\n        </div>\n        <div class=\"project-info\">\n            <h2><a href=\"").concat(link, "\" target=\"_blank\">").concat(title, "</a></h2>\n            <p>").concat(description, "</p>\n        </div>");
    projectDiv.classList = 'card';
    projectsContainer.appendChild(projectDiv);
  }
  ;
}

/***/ }),

/***/ "./src/scripts/img.js":
/*!****************************!*\
  !*** ./src/scripts/img.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundIMG: () => (/* binding */ backgroundIMG),
/* harmony export */   calculatorIMG: () => (/* binding */ calculatorIMG),
/* harmony export */   cssIMG: () => (/* binding */ cssIMG),
/* harmony export */   gameArchiveIMG: () => (/* binding */ gameArchiveIMG),
/* harmony export */   gitIMG: () => (/* binding */ gitIMG),
/* harmony export */   heroIMG: () => (/* binding */ heroIMG),
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
/* harmony import */ var _img_hero_JPG__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/hero.JPG */ "./src/img/hero.JPG");












var cssIMG = new Image();
var htmlIMG = new Image();
var jsIMG = new Image();
var webpackIMG = new Image();
var gitIMG = new Image();
var linuxIMG = new Image();
var calculatorIMG = new Image();
var gameArchiveIMG = new Image();
var streetFighterCombatIMG = new Image();
var terminalIMG = new Image();
var weatherIMG = new Image();
var heroIMG = new Image();
var backgroundIMG = new Image();
cssIMG.src = _img_skill_css_3_png__WEBPACK_IMPORTED_MODULE_0__;
htmlIMG.src = _img_skill_html_5_png__WEBPACK_IMPORTED_MODULE_2__;
jsIMG.src = _img_skill_js_png__WEBPACK_IMPORTED_MODULE_3__;
webpackIMG.src = _img_skill_webpack_png__WEBPACK_IMPORTED_MODULE_5__;
gitIMG.src = _img_skill_git_png__WEBPACK_IMPORTED_MODULE_1__;
linuxIMG.src = _img_skill_linux_platform_png__WEBPACK_IMPORTED_MODULE_4__;
calculatorIMG.src = _img_thumbnail_calculator_thumbmail_png__WEBPACK_IMPORTED_MODULE_6__;
gameArchiveIMG.src = _img_thumbnail_game_archive_jpg__WEBPACK_IMPORTED_MODULE_7__;
streetFighterCombatIMG.src = _img_thumbnail_street_combat_thumbnail_png__WEBPACK_IMPORTED_MODULE_8__;
terminalIMG.src = _img_thumbnail_terminal_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_9__;
weatherIMG.src = _img_thumbnail_weather_app_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_10__;
heroIMG.src = _img_hero_JPG__WEBPACK_IMPORTED_MODULE_11__;

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
var body = document.querySelector('body');
var header = document.createElement('header');
var aboutSection = document.createElement('section');
var workSection = document.createElement('section');
var stackSection = document.createElement('section');
var contactSection = document.createElement('section');
function createDOM() {
  var main = document.querySelector('main');

  // assign class and ids
  aboutSection.classList = 'about';
  aboutSection.id = 'about';
  workSection.classList = 'work';
  workSection.id = 'work';
  stackSection.classList = 'stack';
  stackSection.id = 'stack';
  contactSection.classList = 'contact';
  contactSection.id = 'contact';
  body.appendChild(header);
  main.appendChild(aboutSection);
  main.appendChild(workSection);
  main.appendChild(stackSection);
  main.appendChild(contactSection);
  createAbout();
  createWork();
  createStack();
  createContact();
}
function createAbout() {
  aboutSection.innerHTML = "\n        <div class=\"left-about\">\n            <h1>Hi, I'm<br><span class=\"about-name\">Dylon</span></h1>\n            <p>\n                A self taught web developer with a burning passion to learn and create. All of my coding projects are built form the ground up, from coding to UI design.\n            </p>\n        </div>\n        <div class=\"right-about\">\n            <img src=\"".concat(_img__WEBPACK_IMPORTED_MODULE_1__.heroIMG.src, "\" alt=\"hero image\">\n        </div>");
}
;
function createWork() {
  var weatherAPP = {
    title: 'Weather App',
    image: "".concat(_img__WEBPACK_IMPORTED_MODULE_1__.weatherIMG.src),
    link: 'https://dmychel.github.io/weather-app/',
    description: 'This is a simple weather app that uses a API from weatherapi. This app includes the ability to search cities and change the weather information from fahrenheit to celsius. The app has a couple of other features worth reading about in the README on the github repo.'
  };
  var videGameArchive = {
    title: 'Video Game Archive',
    image: "".concat(_img__WEBPACK_IMPORTED_MODULE_1__.gameArchiveIMG.src),
    link: 'https://dmychel.github.io/game-archive/',
    description: 'Introducing a user-friendly archive that captures essential details about your games. You can add any game from any generation,console, and genre. You even have the ability to add a picture for coverart.'
  };
  var terminal = {
    title: 'Terminal Portfolio',
    image: "".concat(_img__WEBPACK_IMPORTED_MODULE_1__.terminalIMG.src),
    link: 'https://dmychel.github.io/terminal-portfolio/',
    description: 'One of my favorite projects - my portfolio in a terminal-style interface! As a GNU Linux enthusiast, creating this mock terminal has been an exhilarating experience. The interface boasts an array of terminal commands, thoughtfully implemented using a comprehensive switch statement.'
  };
  var streetFighterCombat = {
    title: 'Street Fighter Combat',
    image: "".concat(_img__WEBPACK_IMPORTED_MODULE_1__.streetFighterCombatIMG.src),
    link: 'https://dmychel.github.io/street-fighter-combat/',
    description: '  This project is an engaging and innovative take on the traditional Rock Paper Scissors game. It features a dynamic and interactive user interface with turn-based combat elements, character selections, and health bars, all achieved through dynamic DOM manipulation.'
  };
  var projects = [weatherAPP, videGameArchive, terminal, streetFighterCombat];
  (0,_dynamicUI__WEBPACK_IMPORTED_MODULE_0__.renderProject)(projects);
}
;
function createStack() {
  stackSection.innerHTML = "\n        <h2> Stack</h2 >\n        <div class=\"stack-img\">\n            <img src=\"".concat(_img__WEBPACK_IMPORTED_MODULE_1__.htmlIMG.src, "\" alt=\"HTML 5\">\n            <img src=\"").concat(_img__WEBPACK_IMPORTED_MODULE_1__.cssIMG.src, "\" alt=\"CSS\">\n            <img src=\"").concat(_img__WEBPACK_IMPORTED_MODULE_1__.jsIMG.src, "\" alt=\"Javascript\">\n            <img src=\"").concat(_img__WEBPACK_IMPORTED_MODULE_1__.gitIMG.src, "\" alt=\"Git\">\n            <img src=\"").concat(_img__WEBPACK_IMPORTED_MODULE_1__.webpackIMG.src, "\" alt=\"Webpack\">\n            <img src=\"").concat(_img__WEBPACK_IMPORTED_MODULE_1__.linuxIMG.src, "\" alt=\"GNU Linux\">\n        </div>");
}
function createContact() {
  contactSection.innerHTML = "\n    <h2>Contact</h2>\n    <div class=\"form-container\">\n        <form action=\"\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Your Name\" required>\n\n            <label for=\"email\">Email</label>\n            <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"yourEmail@mail.com\" required>\n\n            <label for=\"subject\">Subject</label>\n            <input type=\"text\" name=\"subject\" id=\"subject\" placeholder=\"Subject\" required>\n\n            <label for=\"message\">Message</label>\n            <textarea name=\"message\" id=\"message\" cols=\"30\" rows=\"10\"></textarea>\n\n            <input type=\"submit\" name=\"submit\" id=\"submit\" value=\"Submit\">\n        </form>\n    </div>";
}
;

/***/ }),

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
  --font-color: #D0E7D2;
  --secondary-color: #2f492f;
  --accent-color: #ece81efa;
  font-family: 'Courier Prime', monospace;
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  transition: all 0.25s ease-out;
  box-sizing: border-box;
}

body {
  color: var(--font-color);
}

section {
  padding: 20px;
  margin-bottom: 5%;
}


.about {
  display: flex;
  height: 100vh;
  font-size: 1.5rem;
}

.left-about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 1.5em;
  z-index: 1;
}

.left-about h1 {
  width: 85%;
}

.left-about p {
  width: 85%;
}

.right-about {
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
}

.right-about img {
  height: 300px;
  width: 300px;
  object-fit:cover;
  object-position: -.5%;
  border-radius: 50%;
  filter: drop-shadow(0 0 0.75rem rgba(11, 233, 200, 0.233));
}

.about-name {
  font-size: 3rem;
  color: var(--accent-color);
}


/* WORK */
.work {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  gap: 5em;
  text-align: center;
}

.card {
  border-radius: 10px;
  height: 400px;
  width: 400px;
  background-color: var(--secondary-color);
  font-size: .75rem;
  filter: drop-shadow(0 0 0.75rem rgb(10, 44, 39));
}

.project-img {
  width: 100%;
  height: 60%;

}

.project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.project-info {
  padding: 15px;
}

.project-info>h2 {
  font-size: 1.25rem;
}


a {
  background-image: linear-gradient(to right,
      black,
      black 50%,
      var(--font-color) 50%);
  background-size: 200% 100%;
  background-position: -100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
}

a:before {
  content: '';
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
}

a:visited {
  color: var(--font-color);
}

a:hover::before {
  width: 100%;
}

a:hover {
  background-position: 0;
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

/* background animation*/
body {
  background: linear-gradient(125deg, rgb(0, 0, 0) 11.2%, rgb(16, 151, 167) 91.1%);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100%;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
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
  .about {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    border: 2px solid;
  }

  .left-about {
    width: 100%;
  }

  .left-about p {
    width: 100%;
  }

  .right-about {
    width: 100%;
  }

  .right-about img {
    max-height: 250px;
    max-width: 250px;
  }

  .project-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%
  }

  .card {
    width: 350px;
  }

  form {
    width: 50%;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --font-color: #D0E7D2;\n  --secondary-color: #2f492f;\n  --accent-color: #ece81efa;\n  font-family: 'Courier Prime', monospace;\n  scroll-behavior: smooth;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  transition: all 0.25s ease-out;\n  box-sizing: border-box;\n}\n\nbody {\n  color: var(--font-color);\n}\n\nsection {\n  padding: 20px;\n  margin-bottom: 5%;\n}\n\n\n.about {\n  display: flex;\n  height: 100vh;\n  font-size: 1.5rem;\n}\n\n.left-about {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  gap: 1.5em;\n  z-index: 1;\n}\n\n.left-about h1 {\n  width: 85%;\n}\n\n.left-about p {\n  width: 85%;\n}\n\n.right-about {\n  display: flex;\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n}\n\n.right-about img {\n  height: 300px;\n  width: 300px;\n  object-fit:cover;\n  object-position: -.5%;\n  border-radius: 50%;\n  filter: drop-shadow(0 0 0.75rem rgba(11, 233, 200, 0.233));\n}\n\n.about-name {\n  font-size: 3rem;\n  color: var(--accent-color);\n}\n\n\n/* WORK */\n.work {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.work>nav {\n  text-align: center;\n  padding: 10px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: #002029b4;\n  font-size: 1.5rem;\n  margin-bottom: 2%;\n}\n\n.work>nav>ul {\n  display: flex;\n  list-style: none;\n  gap: 2em;\n}\n\n.work h2 {\n  margin-bottom: 3%;\n}\n\n.project-container {\n  display: flex;\n  justify-content: space-evenly;\n  width: 50%;\n  flex-wrap: wrap;\n  gap: 5em;\n  text-align: center;\n}\n\n.card {\n  border-radius: 10px;\n  height: 400px;\n  width: 400px;\n  background-color: var(--secondary-color);\n  font-size: .75rem;\n  filter: drop-shadow(0 0 0.75rem rgb(10, 44, 39));\n}\n\n.project-img {\n  width: 100%;\n  height: 60%;\n\n}\n\n.project-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.project-info {\n  padding: 15px;\n}\n\n.project-info>h2 {\n  font-size: 1.25rem;\n}\n\n\na {\n  background-image: linear-gradient(to right,\n      black,\n      black 50%,\n      var(--font-color) 50%);\n  background-size: 200% 100%;\n  background-position: -100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  transition: all 0.3s ease-in-out;\n  text-decoration: none;\n}\n\na:before {\n  content: '';\n  display: block;\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  width: 0;\n  height: 3px;\n}\n\na:visited {\n  color: var(--font-color);\n}\n\na:hover::before {\n  width: 100%;\n}\n\na:hover {\n  background-position: 0;\n}\n\n/* STACK */\n.stack {\n  text-align: center;\n}\n\n.stack-img {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 4em;\n  padding: 50px;\n}\n\n.stack-img img {\n  max-width: 75px;\n  height: auto;\n}\n\n/* CONTACT */\n.contact {\n  text-align: center;\n}\n\n.form-container {\n  display: flex;\n  justify-content: center;\n}\n\nform {\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n}\n\nlabel {\n  margin: 3% 0 0 0;\n}\n\ninput {\n  height: 30px;\n  background-color: var(--secondary-color);\n  color: var(--font-color);\n  padding: 5px;\n  border: none;\n  border-radius: 5px;\n  margin: 2% 0 0 0;\n}\n\ntextarea {\n  padding: 5px;\n  background-color: var(--secondary-color);\n  color: var(--font-color);\n  font-size: 1.25rem;\n  border: none;\n  border-radius: 5px;\n}\n\n.project a:link {\n  text-decoration: none;\n  color: var(--font-color);\n}\n\n.project a:visited {\n  color: var(--font-color);\n\n}\n\n.project a:active {\n  color: yellow;\n}\n\n.project a:hover {\n  text-decoration: underline;\n}\n\n.nav a:link {\n  text-decoration: none;\n  color: var(--main-color);\n}\n\n.nav a:visited {\n  color: var(--main-color);\n\n}\n\n.nav a:active {\n  color: yellow;\n}\n\n.nav a:hover {\n  color: var(--font-color);\n}\n\n/* background animation*/\nbody {\n  background: linear-gradient(125deg, rgb(0, 0, 0) 11.2%, rgb(16, 151, 167) 91.1%);\n\tbackground-size: 400% 400%;\n\tanimation: gradient 15s ease infinite;\n\theight: 100%;\n}\n\n@keyframes gradient {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n\n@media (max-width: 1200px) {\n  section {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n/* LAPTOPS */\n@media (max-width: 1024px) {\n  form {\n    width: 30%;\n  }\n}\n\n\n/* TABLETS */\n@media (max-width:768px) {\n  .about {\n    flex-direction: column-reverse;\n    justify-content: space-evenly;\n    border: 2px solid;\n  }\n\n  .left-about {\n    width: 100%;\n  }\n\n  .left-about p {\n    width: 100%;\n  }\n\n  .right-about {\n    width: 100%;\n  }\n\n  .right-about img {\n    max-height: 250px;\n    max-width: 250px;\n  }\n\n  .project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%\n  }\n\n  .card {\n    width: 350px;\n  }\n\n  form {\n    width: 50%;\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./src/img/hero.JPG":
/*!**************************!*\
  !*** ./src/img/hero.JPG ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7de21f9c81e8e49c869.JPG";

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


(0,_scripts_ui__WEBPACK_IMPORTED_MODULE_1__.createDOM)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzRkFBc0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLE9BQU8sT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxPQUFPLFVBQVUsS0FBSyxLQUFL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QTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQ2M7QUFFeEM0QyxzREFBUyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vLi9zcmMvc2NyaXB0cy9keW5hbWljVUkuanMiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby8uL3NyYy9zY3JpcHRzL2ltZy5qcyIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvLy4vc3JjL3NjcmlwdHMvdWkuanMiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2R5bG9uY3Jvd2xleS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHlsb25jcm93bGV5LXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9keWxvbmNyb3dsZXktcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVdvcmsgfSBmcm9tIFwiLi91aVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdChwcm9qZWN0KSB7XG4gICAgLy8gY3JlYXRlIGVsZW1lbnRzXG4gICAgY29uc3Qgd29ya1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd29yaycpO1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0ID0gJ3Byb2plY3QtY29udGFpbmVyJ1xuXG4gICAgLy8gY29udGVudFxuICAgIHdvcmtTZWN0aW9uLmlubmVySFRNTCA9ICc8aDI+UHJvamVjdHM8L2gyPidcblxuICAgIC8vIGFwcGVuZCBcbiAgICB3b3JrU2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG5cbiAgICAvLyBkeW5hbWljYWxseSBjcmVhdGUgcHJvamVjdHNcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRpdGxlID0gcHJvamVjdFtpXS50aXRsZTtcbiAgICAgICAgbGV0IGltYWdlID0gcHJvamVjdFtpXS5pbWFnZTtcbiAgICAgICAgbGV0IGxpbmsgPSBwcm9qZWN0W2ldLmxpbms7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IHByb2plY3RbaV0uZGVzY3JpcHRpb25cblxuICAgICAgICBjb25zb2xlLmxvZyh0aXRsZSlcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0RGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW1nXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2V9XCIgYWx0PVwidGh1bWJuYWlsXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbmZvXCI+XG4gICAgICAgICAgICA8aDI+PGEgaHJlZj1cIiR7bGlua31cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke3RpdGxlfTwvYT48L2gyPlxuICAgICAgICAgICAgPHA+JHtkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PmBcblxuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdCA9ICdjYXJkJ1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KVxuICAgIH07XG59XG5cbiIsImltcG9ydCBjc3NQTkcgZnJvbSAnLi4vaW1nL3NraWxsL2Nzcy0zLnBuZydcbmltcG9ydCBnaXRQTkcgZnJvbSAnLi4vaW1nL3NraWxsL2dpdC5wbmcnXG5pbXBvcnQgaHRtbFBORyBmcm9tICcuLi9pbWcvc2tpbGwvaHRtbC01LnBuZydcbmltcG9ydCBqc1BORyBmcm9tICcuLi9pbWcvc2tpbGwvanMucG5nJ1xuaW1wb3J0IGxpbnV4UE5HIGZyb20gJy4uL2ltZy9za2lsbC9saW51eC1wbGF0Zm9ybS5wbmcnXG5pbXBvcnQgd2VicGFja1BORyBmcm9tICcuLi9pbWcvc2tpbGwvd2VicGFjay5wbmcnXG5pbXBvcnQgY2FsY3VsYXRvciBmcm9tICcuLi9pbWcvdGh1bWJuYWlsL2NhbGN1bGF0b3ItdGh1bWJtYWlsLnBuZydcbmltcG9ydCBnYW1lQXJjaGl2ZSBmcm9tICcuLi9pbWcvdGh1bWJuYWlsL2dhbWUtYXJjaGl2ZS5qcGcnXG5pbXBvcnQgc3RyZWV0RmlnaHRlckNvbWJhdCBmcm9tICcuLi9pbWcvdGh1bWJuYWlsL3N0cmVldC1jb21iYXQtdGh1bWJuYWlsLnBuZydcbmltcG9ydCB0ZXJtaW5hbCBmcm9tICcuLi9pbWcvdGh1bWJuYWlsL3Rlcm1pbmFsLXRodW1ibmFpbC5qcGcnXG5pbXBvcnQgd2VhdGhlciBmcm9tICcuLi9pbWcvdGh1bWJuYWlsL3dlYXRoZXItYXBwLXRodW1ibmFpbC5qcGcnXG5pbXBvcnQgaGVybyBmcm9tICcuLi9pbWcvaGVyby5KUEcnXG5cbmV4cG9ydCBjb25zdCBjc3NJTUcgPSBuZXcgSW1hZ2UoKVxuZXhwb3J0IGNvbnN0IGh0bWxJTUcgPSBuZXcgSW1hZ2UoKVxuZXhwb3J0IGNvbnN0IGpzSU1HID0gbmV3IEltYWdlKClcbmV4cG9ydCBjb25zdCB3ZWJwYWNrSU1HID0gbmV3IEltYWdlKClcbmV4cG9ydCBjb25zdCBnaXRJTUcgPSBuZXcgSW1hZ2UoKVxuZXhwb3J0IGNvbnN0IGxpbnV4SU1HID0gbmV3IEltYWdlKClcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0b3JJTUcgPSBuZXcgSW1hZ2UoKVxuZXhwb3J0IGNvbnN0IGdhbWVBcmNoaXZlSU1HID0gbmV3IEltYWdlKClcbmV4cG9ydCBjb25zdCBzdHJlZXRGaWdodGVyQ29tYmF0SU1HID0gbmV3IEltYWdlKClcbmV4cG9ydCBjb25zdCB0ZXJtaW5hbElNRyA9IG5ldyBJbWFnZSgpXG5leHBvcnQgY29uc3Qgd2VhdGhlcklNRyA9IG5ldyBJbWFnZSgpXG5cbmV4cG9ydCBjb25zdCBoZXJvSU1HID0gbmV3IEltYWdlKClcbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kSU1HID0gbmV3IEltYWdlKClcblxuY3NzSU1HLnNyYyA9IGNzc1BOR1xuaHRtbElNRy5zcmMgPSBodG1sUE5HXG5qc0lNRy5zcmMgPSBqc1BOR1xud2VicGFja0lNRy5zcmMgPSB3ZWJwYWNrUE5HXG5naXRJTUcuc3JjID0gZ2l0UE5HXG5saW51eElNRy5zcmMgPSBsaW51eFBOR1xuXG5jYWxjdWxhdG9ySU1HLnNyYyA9IGNhbGN1bGF0b3JcbmdhbWVBcmNoaXZlSU1HLnNyYyA9IGdhbWVBcmNoaXZlXG5zdHJlZXRGaWdodGVyQ29tYmF0SU1HLnNyYyA9IHN0cmVldEZpZ2h0ZXJDb21iYXRcbnRlcm1pbmFsSU1HLnNyYyA9IHRlcm1pbmFsXG53ZWF0aGVySU1HLnNyYyA9IHdlYXRoZXJcblxuaGVyb0lNRy5zcmMgPSBoZXJvIiwiaW1wb3J0IHsgcmVuZGVyUHJvamVjdCB9IGZyb20gXCIuL2R5bmFtaWNVSVwiO1xuaW1wb3J0IHsgaHRtbElNRyB9IGZyb20gXCIuL2ltZ1wiO1xuaW1wb3J0IHsgY3NzSU1HIH0gZnJvbSBcIi4vaW1nXCI7XG5pbXBvcnQgeyBqc0lNRyB9IGZyb20gXCIuL2ltZ1wiO1xuaW1wb3J0IHsgZ2l0SU1HIH0gZnJvbSBcIi4vaW1nXCI7XG5pbXBvcnQgeyB3ZWJwYWNrSU1HIH0gZnJvbSBcIi4vaW1nXCI7XG5pbXBvcnQgeyBsaW51eElNRyB9IGZyb20gXCIuL2ltZ1wiO1xuaW1wb3J0IHsgd2VhdGhlcklNRyB9IGZyb20gXCIuL2ltZ1wiO1xuaW1wb3J0IHsgZ2FtZUFyY2hpdmVJTUcgfSBmcm9tIFwiLi9pbWdcIjtcbmltcG9ydCB7IHRlcm1pbmFsSU1HIH0gZnJvbSBcIi4vaW1nXCI7XG5pbXBvcnQgeyBzdHJlZXRGaWdodGVyQ29tYmF0SU1HIH0gZnJvbSBcIi4vaW1nXCI7XG5pbXBvcnQgeyBoZXJvSU1HIH0gZnJvbSBcIi4vaW1nXCI7XG5cbi8vIGNyZWF0ZSBlbGVtZW50c1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuY29uc3Qgd29ya1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5jb25zdCBzdGFja1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5jb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURPTSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG5cbiAgICAvLyBhc3NpZ24gY2xhc3MgYW5kIGlkc1xuICAgIGFib3V0U2VjdGlvbi5jbGFzc0xpc3QgPSAnYWJvdXQnO1xuICAgIGFib3V0U2VjdGlvbi5pZCA9ICdhYm91dCc7XG4gICAgd29ya1NlY3Rpb24uY2xhc3NMaXN0ID0gJ3dvcmsnO1xuICAgIHdvcmtTZWN0aW9uLmlkID0gJ3dvcmsnO1xuICAgIHN0YWNrU2VjdGlvbi5jbGFzc0xpc3QgPSAnc3RhY2snO1xuICAgIHN0YWNrU2VjdGlvbi5pZCA9ICdzdGFjayc7XG4gICAgY29udGFjdFNlY3Rpb24uY2xhc3NMaXN0ID0gJ2NvbnRhY3QnO1xuICAgIGNvbnRhY3RTZWN0aW9uLmlkID0gJ2NvbnRhY3QnO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQod29ya1NlY3Rpb24pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoc3RhY2tTZWN0aW9uKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RTZWN0aW9uKTtcblxuICAgIGNyZWF0ZUFib3V0KCk7XG4gICAgY3JlYXRlV29yaygpO1xuICAgIGNyZWF0ZVN0YWNrKCk7XG4gICAgY3JlYXRlQ29udGFjdCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBYm91dCgpe1xuICAgIGFib3V0U2VjdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWFib3V0XCI+XG4gICAgICAgICAgICA8aDE+SGksIEknbTxicj48c3BhbiBjbGFzcz1cImFib3V0LW5hbWVcIj5EeWxvbjwvc3Bhbj48L2gxPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgQSBzZWxmIHRhdWdodCB3ZWIgZGV2ZWxvcGVyIHdpdGggYSBidXJuaW5nIHBhc3Npb24gdG8gbGVhcm4gYW5kIGNyZWF0ZS4gQWxsIG9mIG15IGNvZGluZyBwcm9qZWN0cyBhcmUgYnVpbHQgZm9ybSB0aGUgZ3JvdW5kIHVwLCBmcm9tIGNvZGluZyB0byBVSSBkZXNpZ24uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtYWJvdXRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtoZXJvSU1HLnNyY31cIiBhbHQ9XCJoZXJvIGltYWdlXCI+XG4gICAgICAgIDwvZGl2PmBcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXb3JrKCkge1xuICAgIGNvbnN0IHdlYXRoZXJBUFAgPSB7XG4gICAgICAgIHRpdGxlOiAnV2VhdGhlciBBcHAnLFxuICAgICAgICBpbWFnZTogYCR7d2VhdGhlcklNRy5zcmN9YCxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZG15Y2hlbC5naXRodWIuaW8vd2VhdGhlci1hcHAvJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgc2ltcGxlIHdlYXRoZXIgYXBwIHRoYXQgdXNlcyBhIEFQSSBmcm9tIHdlYXRoZXJhcGkuIFRoaXMgYXBwIGluY2x1ZGVzIHRoZSBhYmlsaXR5IHRvIHNlYXJjaCBjaXRpZXMgYW5kIGNoYW5nZSB0aGUgd2VhdGhlciBpbmZvcm1hdGlvbiBmcm9tIGZhaHJlbmhlaXQgdG8gY2Vsc2l1cy4gVGhlIGFwcCBoYXMgYSBjb3VwbGUgb2Ygb3RoZXIgZmVhdHVyZXMgd29ydGggcmVhZGluZyBhYm91dCBpbiB0aGUgUkVBRE1FIG9uIHRoZSBnaXRodWIgcmVwby4nXG4gICAgfTtcblxuICAgIGNvbnN0IHZpZGVHYW1lQXJjaGl2ZSA9IHtcbiAgICAgICAgdGl0bGU6ICdWaWRlbyBHYW1lIEFyY2hpdmUnLFxuICAgICAgICBpbWFnZTogYCR7Z2FtZUFyY2hpdmVJTUcuc3JjfWAsXG4gICAgICAgIGxpbms6ICdodHRwczovL2RteWNoZWwuZ2l0aHViLmlvL2dhbWUtYXJjaGl2ZS8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0ludHJvZHVjaW5nIGEgdXNlci1mcmllbmRseSBhcmNoaXZlIHRoYXQgY2FwdHVyZXMgZXNzZW50aWFsIGRldGFpbHMgYWJvdXQgeW91ciBnYW1lcy4gWW91IGNhbiBhZGQgYW55IGdhbWUgZnJvbSBhbnkgZ2VuZXJhdGlvbixjb25zb2xlLCBhbmQgZ2VucmUuIFlvdSBldmVuIGhhdmUgdGhlIGFiaWxpdHkgdG8gYWRkIGEgcGljdHVyZSBmb3IgY292ZXJhcnQuJ1xuICAgIH07XG5cbiAgICBjb25zdCB0ZXJtaW5hbCA9IHtcbiAgICAgICAgdGl0bGU6ICdUZXJtaW5hbCBQb3J0Zm9saW8nLFxuICAgICAgICBpbWFnZTogYCR7dGVybWluYWxJTUcuc3JjfWAsXG4gICAgICAgIGxpbms6ICdodHRwczovL2RteWNoZWwuZ2l0aHViLmlvL3Rlcm1pbmFsLXBvcnRmb2xpby8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ09uZSBvZiBteSBmYXZvcml0ZSBwcm9qZWN0cyAtIG15IHBvcnRmb2xpbyBpbiBhIHRlcm1pbmFsLXN0eWxlIGludGVyZmFjZSEgQXMgYSBHTlUgTGludXggZW50aHVzaWFzdCwgY3JlYXRpbmcgdGhpcyBtb2NrIHRlcm1pbmFsIGhhcyBiZWVuIGFuIGV4aGlsYXJhdGluZyBleHBlcmllbmNlLiBUaGUgaW50ZXJmYWNlIGJvYXN0cyBhbiBhcnJheSBvZiB0ZXJtaW5hbCBjb21tYW5kcywgdGhvdWdodGZ1bGx5IGltcGxlbWVudGVkIHVzaW5nIGEgY29tcHJlaGVuc2l2ZSBzd2l0Y2ggc3RhdGVtZW50LidcbiAgICB9XG5cbiAgICBjb25zdCBzdHJlZXRGaWdodGVyQ29tYmF0ID0ge1xuICAgICAgICB0aXRsZTogJ1N0cmVldCBGaWdodGVyIENvbWJhdCcsXG4gICAgICAgIGltYWdlOiBgJHtzdHJlZXRGaWdodGVyQ29tYmF0SU1HLnNyY31gLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kbXljaGVsLmdpdGh1Yi5pby9zdHJlZXQtZmlnaHRlci1jb21iYXQvJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcgIFRoaXMgcHJvamVjdCBpcyBhbiBlbmdhZ2luZyBhbmQgaW5ub3ZhdGl2ZSB0YWtlIG9uIHRoZSB0cmFkaXRpb25hbCBSb2NrIFBhcGVyIFNjaXNzb3JzIGdhbWUuIEl0IGZlYXR1cmVzIGEgZHluYW1pYyBhbmQgaW50ZXJhY3RpdmUgdXNlciBpbnRlcmZhY2Ugd2l0aCB0dXJuLWJhc2VkIGNvbWJhdCBlbGVtZW50cywgY2hhcmFjdGVyIHNlbGVjdGlvbnMsIGFuZCBoZWFsdGggYmFycywgYWxsIGFjaGlldmVkIHRocm91Z2ggZHluYW1pYyBET00gbWFuaXB1bGF0aW9uLidcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IFt3ZWF0aGVyQVBQLCB2aWRlR2FtZUFyY2hpdmUsIHRlcm1pbmFsLCBzdHJlZXRGaWdodGVyQ29tYmF0XVxuXG4gICAgcmVuZGVyUHJvamVjdChwcm9qZWN0cylcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YWNrKCkge1xuICAgIHN0YWNrU2VjdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMj4gU3RhY2s8L2gyID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YWNrLWltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2h0bWxJTUcuc3JjfVwiIGFsdD1cIkhUTUwgNVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2Nzc0lNRy5zcmN9XCIgYWx0PVwiQ1NTXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7anNJTUcuc3JjfVwiIGFsdD1cIkphdmFzY3JpcHRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtnaXRJTUcuc3JjfVwiIGFsdD1cIkdpdFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3dlYnBhY2tJTUcuc3JjfVwiIGFsdD1cIldlYnBhY2tcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtsaW51eElNRy5zcmN9XCIgYWx0PVwiR05VIExpbnV4XCI+XG4gICAgICAgIDwvZGl2PmBcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBjb250YWN0U2VjdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgPGgyPkNvbnRhY3Q8L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgcmVxdWlyZWQ+XG5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJ5b3VyRW1haWxAbWFpbC5jb21cIiByZXF1aXJlZD5cblxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN1YmplY3RcIj5TdWJqZWN0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdWJqZWN0XCIgaWQ9XCJzdWJqZWN0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgcmVxdWlyZWQ+XG5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiBpZD1cIm1lc3NhZ2VcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPlxuXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5gXG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1mb250LWNvbG9yOiAjRDBFN0QyO1xuICAtLXNlY29uZGFyeS1jb2xvcjogIzJmNDkyZjtcbiAgLS1hY2NlbnQtY29sb3I6ICNlY2U4MWVmYTtcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIFByaW1lJywgbW9ub3NwYWNlO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2Utb3V0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cblxuLmFib3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5sZWZ0LWFib3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIGdhcDogMS41ZW07XG4gIHotaW5kZXg6IDE7XG59XG5cbi5sZWZ0LWFib3V0IGgxIHtcbiAgd2lkdGg6IDg1JTtcbn1cblxuLmxlZnQtYWJvdXQgcCB7XG4gIHdpZHRoOiA4NSU7XG59XG5cbi5yaWdodC1hYm91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmlnaHQtYWJvdXQgaW1nIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBvYmplY3QtZml0OmNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IC0uNSU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC43NXJlbSByZ2JhKDExLCAyMzMsIDIwMCwgMC4yMzMpKTtcbn1cblxuLmFib3V0LW5hbWUge1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG5cbi8qIFdPUksgKi9cbi53b3JrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53b3JrPm5hdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMDI5YjQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cblxuLndvcms+bmF2PnVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZ2FwOiAyZW07XG59XG5cbi53b3JrIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB3aWR0aDogNTAlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBmb250LXNpemU6IC43NXJlbTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC43NXJlbSByZ2IoMTAsIDQ0LCAzOSkpO1xufVxuXG4ucHJvamVjdC1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCU7XG5cbn1cblxuLnByb2plY3QtaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9qZWN0LWluZm8ge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucHJvamVjdC1pbmZvPmgyIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG5cbmEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsXG4gICAgICBibGFjayxcbiAgICAgIGJsYWNrIDUwJSxcbiAgICAgIHZhcigtLWZvbnQtY29sb3IpIDUwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtM3B4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAzcHg7XG59XG5cbmE6dmlzaXRlZCB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuYTpob3Zlcjo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwO1xufVxuXG4vKiBTVEFDSyAqL1xuLnN0YWNrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RhY2staW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA0ZW07XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5zdGFjay1pbWcgaW1nIHtcbiAgbWF4LXdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIENPTlRBQ1QgKi9cbi5jb250YWN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyMCU7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luOiAzJSAwIDAgMDtcbn1cblxuaW5wdXQge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAyJSAwIDAgMDtcbn1cblxudGV4dGFyZWEge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnByb2plY3QgYTpsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbi5wcm9qZWN0IGE6dmlzaXRlZCB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcblxufVxuXG4ucHJvamVjdCBhOmFjdGl2ZSB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5cbi5wcm9qZWN0IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm5hdiBhOmxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLm5hdiBhOnZpc2l0ZWQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG5cbn1cblxuLm5hdiBhOmFjdGl2ZSB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5cbi5uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLyogYmFja2dyb3VuZCBhbmltYXRpb24qL1xuYm9keSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjVkZWcsIHJnYigwLCAwLCAwKSAxMS4yJSwgcmdiKDE2LCAxNTEsIDE2NykgOTEuMSUpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcblx0YW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcblx0MCUge1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcblx0fVxuXHQ1MCUge1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuXHR9XG5cdDEwMCUge1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxufVxuXG4vKiBMQVBUT1BTICovXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIGZvcm0ge1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbn1cblxuXG4vKiBUQUJMRVRTICovXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCkge1xuICAuYWJvdXQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgfVxuXG4gIC5sZWZ0LWFib3V0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5sZWZ0LWFib3V0IHAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnJpZ2h0LWFib3V0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5yaWdodC1hYm91dCBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gIH1cblxuICAucHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlXG4gIH1cblxuICAuY2FyZCB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICB9XG5cbiAgZm9ybSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHVDQUF1QztFQUN2Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COzs7QUFHQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQiwwREFBMEQ7QUFDNUQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOzs7QUFHQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0FB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Q2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CO0VBQ0Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWZvbnQtY29sb3I6ICNEMEU3RDI7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzJmNDkyZjtcXG4gIC0tYWNjZW50LWNvbG9yOiAjZWNlODFlZmE7XFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgUHJpbWUnLCBtb25vc3BhY2U7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2Utb3V0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcbn1cXG5cXG5cXG4uYWJvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmxlZnQtYWJvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTAlO1xcbiAgZ2FwOiAxLjVlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5sZWZ0LWFib3V0IGgxIHtcXG4gIHdpZHRoOiA4NSU7XFxufVxcblxcbi5sZWZ0LWFib3V0IHAge1xcbiAgd2lkdGg6IDg1JTtcXG59XFxuXFxuLnJpZ2h0LWFib3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmlnaHQtYWJvdXQgaW1nIHtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBvYmplY3QtZml0OmNvdmVyO1xcbiAgb2JqZWN0LXBvc2l0aW9uOiAtLjUlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC43NXJlbSByZ2JhKDExLCAyMzMsIDIwMCwgMC4yMzMpKTtcXG59XFxuXFxuLmFib3V0LW5hbWUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcblxcbi8qIFdPUksgKi9cXG4ud29yayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLndvcms+bmF2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDIwMjliNDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxufVxcblxcbi53b3JrPm5hdj51bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGdhcDogMmVtO1xcbn1cXG5cXG4ud29yayBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiAzJTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiA1MCU7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZm9udC1zaXplOiAuNzVyZW07XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjc1cmVtIHJnYigxMCwgNDQsIDM5KSk7XFxufVxcblxcbi5wcm9qZWN0LWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjAlO1xcblxcbn1cXG5cXG4ucHJvamVjdC1pbWcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0LWluZm8+aDIge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxcXG4gICAgICBibGFjayxcXG4gICAgICBibGFjayA1MCUsXFxuICAgICAgdmFyKC0tZm9udC1jb2xvcikgNTAlKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMCU7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtM3B4O1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAzcHg7XFxufVxcblxcbmE6dmlzaXRlZCB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbmE6aG92ZXI6OmJlZm9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwO1xcbn1cXG5cXG4vKiBTVEFDSyAqL1xcbi5zdGFjayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zdGFjay1pbWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiA0ZW07XFxuICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG4uc3RhY2staW1nIGltZyB7XFxuICBtYXgtd2lkdGg6IDc1cHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIENPTlRBQ1QgKi9cXG4uY29udGFjdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvcm0ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuXFxubGFiZWwge1xcbiAgbWFyZ2luOiAzJSAwIDAgMDtcXG59XFxuXFxuaW5wdXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMiUgMCAwIDA7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0IGE6bGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0IGE6dmlzaXRlZCB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuXFxufVxcblxcbi5wcm9qZWN0IGE6YWN0aXZlIHtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5wcm9qZWN0IGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5uYXYgYTpsaW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLm5hdiBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcblxcbn1cXG5cXG4ubmF2IGE6YWN0aXZlIHtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5uYXYgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi8qIGJhY2tncm91bmQgYW5pbWF0aW9uKi9cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjVkZWcsIHJnYigwLCAwLCAwKSAxMS4yJSwgcmdiKDE2LCAxNTEsIDE2NykgOTEuMSUpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xcblxcdGFuaW1hdGlvbjogZ3JhZGllbnQgMTVzIGVhc2UgaW5maW5pdGU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcXG5cXHQwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcblxcdH1cXG5cXHQ1MCUge1xcblxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICBzZWN0aW9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIH1cXG59XFxuXFxuLyogTEFQVE9QUyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIGZvcm0ge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgfVxcbn1cXG5cXG5cXG4vKiBUQUJMRVRTICovXFxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpIHtcXG4gIC5hYm91dCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgfVxcblxcbiAgLmxlZnQtYWJvdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5sZWZ0LWFib3V0IHAge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5yaWdodC1hYm91dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnJpZ2h0LWFib3V0IGltZyB7XFxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCVcXG4gIH1cXG5cXG4gIC5jYXJkIHtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgfVxcblxcbiAgZm9ybSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJ1xuaW1wb3J0IHsgY3JlYXRlRE9NIH0gZnJvbSAnLi9zY3JpcHRzL3VpJ1xuXG5jcmVhdGVET00oKVxuXG4iXSwibmFtZXMiOlsiY3JlYXRlV29yayIsInJlbmRlclByb2plY3QiLCJwcm9qZWN0Iiwid29ya1NlY3Rpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9qZWN0c0NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImkiLCJsZW5ndGgiLCJ0aXRsZSIsImltYWdlIiwibGluayIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsInByb2plY3REaXYiLCJjb25jYXQiLCJjc3NQTkciLCJnaXRQTkciLCJodG1sUE5HIiwianNQTkciLCJsaW51eFBORyIsIndlYnBhY2tQTkciLCJjYWxjdWxhdG9yIiwiZ2FtZUFyY2hpdmUiLCJzdHJlZXRGaWdodGVyQ29tYmF0IiwidGVybWluYWwiLCJ3ZWF0aGVyIiwiaGVybyIsImNzc0lNRyIsIkltYWdlIiwiaHRtbElNRyIsImpzSU1HIiwid2VicGFja0lNRyIsImdpdElNRyIsImxpbnV4SU1HIiwiY2FsY3VsYXRvcklNRyIsImdhbWVBcmNoaXZlSU1HIiwic3RyZWV0RmlnaHRlckNvbWJhdElNRyIsInRlcm1pbmFsSU1HIiwid2VhdGhlcklNRyIsImhlcm9JTUciLCJiYWNrZ3JvdW5kSU1HIiwic3JjIiwiYm9keSIsImhlYWRlciIsImFib3V0U2VjdGlvbiIsInN0YWNrU2VjdGlvbiIsImNvbnRhY3RTZWN0aW9uIiwiY3JlYXRlRE9NIiwibWFpbiIsImlkIiwiY3JlYXRlQWJvdXQiLCJjcmVhdGVTdGFjayIsImNyZWF0ZUNvbnRhY3QiLCJ3ZWF0aGVyQVBQIiwidmlkZUdhbWVBcmNoaXZlIiwicHJvamVjdHMiXSwic291cmNlUm9vdCI6IiJ9