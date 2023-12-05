/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/home.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/home.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --color-tan: rgba(210, 180, 140, 0.334);
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body{
    background-color: rgba(221, 221, 221, 0.338);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content{
    position: relative;
    background-color: rgb(255, 255, 255);
    width: 80vw;
    padding: 20px 50px 20px 50px;
}

.head{
    display: flex;
    padding: 20px 80px 20px 80px;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
    width: 80vw;
    
}

#nav{
    display: flex;
    gap: 10px;
}

#nav a{
    text-decoration: none;
    padding: 5px;
    font-size: 1.1em;
    font-weight: 600;
    color: rgb(69, 69, 69);
    position: relative;

    padding-bottom: 2px;
    border-bottom: 2px solid transparent;
    transition: color 0.3s ease, padding-bottom 0.3s ease, border-bottom 0.3s ease
}

#nav a::before{
    content: '';
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: transparent;
    transform: translateX(-50%);
    transition: width 0.3s ease, background-color 0.3s ease;
}

#nav a:hover::before{
    width: 100%;
    background-color: black;
}

#nav a:hover{
    color: black;
}



.nav{
    display: flex;
}


#main{
    position: relative;

    
    background-color: whitesmoke
}

#box1,
#box2{
    position: absolute;
    border: 2px solid rgb(0, 0, 0);
    background-color: transparent;
}

#box1{
    top: 0;
    bottom: 15px;
    right: 15px;
    left: 0;
}

#box2{
    top: 15px;
    bottom: 0;
    right: 0;
    left: 15px;
}

.section{
    padding: 50px;
    display: flex;
    gap: 50px;
    justify-content: space-around;
    z-index: 99;
    flex-wrap: wrap;
    
}

#location-title,
#hours-title{
    margin-bottom: 10px;
}

#about{
    background-color: var(--color-tan);
    padding: 50px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px 2px rgba(128, 128, 128, 0.529);
}

#about-title{
    margin-bottom: 20px;
}

#hours,
#location{
    flex: 1 1 300px;
    background-color: var(--color-tan);
    padding: 30px;
    min-width: 300px;
    max-width: 400px;
    text-align: center;

    box-shadow: 2px 2px 5px 2px rgba(128, 128, 128, 0.529);

}

#hours ul{
    list-style-type: none;
    
}

img{
    width: 100%;
    object-fit: fill;
    box-shadow: 2px 2px 5px 2px rgba(128, 128, 128, 0.529);
    min-width: 100px;

}

#middle-pic img{
    flex: 1 1 100px;
    max-width: 300px;
}


.location-written{
    margin-bottom: 20px;
}

.foot{
    background-color: white;
    height: 100px;
    width: 80vw;
}


/* menu */

#menupage{
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;

    padding: 50px 100px 50px 100px;
    margin: auto;
    max-width: 1000px;
}

.menu-section{
    display: flex;
    flex-direction: column;

    padding: 50px;
    border: 2px double black;
    background-color: var(--color-tan);
}

#menupage-title{
    align-self: center;
    margin-bottom: 30px;
}

#menu-title{
    align-self: center;
    justify-self: center;
    text-decoration: underline;
}

.item-container{
    display: flex;
    align-items: center;
    /* padding: 20px 20px 0 20px; */
    margin: 20px 20px 0 20px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.31);
}

.item-written{
    align-self: end;
}

.item-written p{
    font-style:italic;
}


.item-line{
    flex-grow: 2;
    
    margin: 0 20px 0 20px;
}


.item-picture{
    max-width: 100px;;
}

`, "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":"AAAA;IACI,uCAAuC;AAC3C;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,4DAA4D;AAChE;;AAEA;IACI,4CAA4C;IAC5C,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,WAAW;IACX,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,8BAA8B;IAC9B,oCAAoC;IACpC,WAAW;;AAEf;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;;IAElB,mBAAmB;IACnB,oCAAoC;IACpC;AACJ;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,QAAQ;IACR,WAAW;IACX,6BAA6B;IAC7B,2BAA2B;IAC3B,uDAAuD;AAC3D;;AAEA;IACI,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;;;AAIA;IACI,aAAa;AACjB;;;AAGA;IACI,kBAAkB;;;IAGlB;AACJ;;AAEA;;IAEI,kBAAkB;IAClB,8BAA8B;IAC9B,6BAA6B;AACjC;;AAEA;IACI,MAAM;IACN,YAAY;IACZ,WAAW;IACX,OAAO;AACX;;AAEA;IACI,SAAS;IACT,SAAS;IACT,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,aAAa;IACb,aAAa;IACb,SAAS;IACT,6BAA6B;IAC7B,WAAW;IACX,eAAe;;AAEnB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,aAAa;IACb,kBAAkB;IAClB,sDAAsD;AAC1D;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,eAAe;IACf,kCAAkC;IAClC,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;;IAElB,sDAAsD;;AAE1D;;AAEA;IACI,qBAAqB;;AAEzB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,sDAAsD;IACtD,gBAAgB;;AAEpB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;;AAGA;IACI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,WAAW;AACf;;;AAGA,SAAS;;AAET;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,uBAAuB;;IAEvB,8BAA8B;IAC9B,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,aAAa;IACb,wBAAwB;IACxB,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,+BAA+B;IAC/B,wBAAwB;;IAExB,4CAA4C;AAChD;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;;AAGA;IACI,YAAY;;IAEZ,qBAAqB;AACzB;;;AAGA;IACI,gBAAgB;AACpB","sourcesContent":[":root{\r\n    --color-tan: rgba(210, 180, 140, 0.334);\r\n}\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody{\r\n    background-color: rgba(221, 221, 221, 0.338);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.content{\r\n    position: relative;\r\n    background-color: rgb(255, 255, 255);\r\n    width: 80vw;\r\n    padding: 20px 50px 20px 50px;\r\n}\r\n\r\n.head{\r\n    display: flex;\r\n    padding: 20px 80px 20px 80px;\r\n    justify-content: space-between;\r\n    background-color: rgb(255, 255, 255);\r\n    width: 80vw;\r\n    \r\n}\r\n\r\n#nav{\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n#nav a{\r\n    text-decoration: none;\r\n    padding: 5px;\r\n    font-size: 1.1em;\r\n    font-weight: 600;\r\n    color: rgb(69, 69, 69);\r\n    position: relative;\r\n\r\n    padding-bottom: 2px;\r\n    border-bottom: 2px solid transparent;\r\n    transition: color 0.3s ease, padding-bottom 0.3s ease, border-bottom 0.3s ease\r\n}\r\n\r\n#nav a::before{\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 10px;\r\n    left: 50%;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: transparent;\r\n    transform: translateX(-50%);\r\n    transition: width 0.3s ease, background-color 0.3s ease;\r\n}\r\n\r\n#nav a:hover::before{\r\n    width: 100%;\r\n    background-color: black;\r\n}\r\n\r\n#nav a:hover{\r\n    color: black;\r\n}\r\n\r\n\r\n\r\n.nav{\r\n    display: flex;\r\n}\r\n\r\n\r\n#main{\r\n    position: relative;\r\n\r\n    \r\n    background-color: whitesmoke\r\n}\r\n\r\n#box1,\r\n#box2{\r\n    position: absolute;\r\n    border: 2px solid rgb(0, 0, 0);\r\n    background-color: transparent;\r\n}\r\n\r\n#box1{\r\n    top: 0;\r\n    bottom: 15px;\r\n    right: 15px;\r\n    left: 0;\r\n}\r\n\r\n#box2{\r\n    top: 15px;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 15px;\r\n}\r\n\r\n.section{\r\n    padding: 50px;\r\n    display: flex;\r\n    gap: 50px;\r\n    justify-content: space-around;\r\n    z-index: 99;\r\n    flex-wrap: wrap;\r\n    \r\n}\r\n\r\n#location-title,\r\n#hours-title{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#about{\r\n    background-color: var(--color-tan);\r\n    padding: 50px;\r\n    border-radius: 5px;\r\n    box-shadow: 2px 2px 5px 2px rgba(128, 128, 128, 0.529);\r\n}\r\n\r\n#about-title{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#hours,\r\n#location{\r\n    flex: 1 1 300px;\r\n    background-color: var(--color-tan);\r\n    padding: 30px;\r\n    min-width: 300px;\r\n    max-width: 400px;\r\n    text-align: center;\r\n\r\n    box-shadow: 2px 2px 5px 2px rgba(128, 128, 128, 0.529);\r\n\r\n}\r\n\r\n#hours ul{\r\n    list-style-type: none;\r\n    \r\n}\r\n\r\nimg{\r\n    width: 100%;\r\n    object-fit: fill;\r\n    box-shadow: 2px 2px 5px 2px rgba(128, 128, 128, 0.529);\r\n    min-width: 100px;\r\n\r\n}\r\n\r\n#middle-pic img{\r\n    flex: 1 1 100px;\r\n    max-width: 300px;\r\n}\r\n\r\n\r\n.location-written{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.foot{\r\n    background-color: white;\r\n    height: 100px;\r\n    width: 80vw;\r\n}\r\n\r\n\r\n/* menu */\r\n\r\n#menupage{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    justify-content: center;\r\n\r\n    padding: 50px 100px 50px 100px;\r\n    margin: auto;\r\n    max-width: 1000px;\r\n}\r\n\r\n.menu-section{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    padding: 50px;\r\n    border: 2px double black;\r\n    background-color: var(--color-tan);\r\n}\r\n\r\n#menupage-title{\r\n    align-self: center;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#menu-title{\r\n    align-self: center;\r\n    justify-self: center;\r\n    text-decoration: underline;\r\n}\r\n\r\n.item-container{\r\n    display: flex;\r\n    align-items: center;\r\n    /* padding: 20px 20px 0 20px; */\r\n    margin: 20px 20px 0 20px;\r\n\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.31);\r\n}\r\n\r\n.item-written{\r\n    align-self: end;\r\n}\r\n\r\n.item-written p{\r\n    font-style:italic;\r\n}\r\n\r\n\r\n.item-line{\r\n    flex-grow: 2;\r\n    \r\n    margin: 0 20px 0 20px;\r\n}\r\n\r\n\r\n.item-picture{\r\n    max-width: 100px;;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./src/img/burger.jpg":
/*!****************************!*\
  !*** ./src/img/burger.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c2325d26cc022fb5dcc50c24bcdf3262.jpg");

/***/ }),

/***/ "./src/img/cake.jpg":
/*!**************************!*\
  !*** ./src/img/cake.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c7fd4212354befc0f338d5bb09e1fea4.jpg");

/***/ }),

/***/ "./src/img/eggs.jpg":
/*!**************************!*\
  !*** ./src/img/eggs.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "486077314276900ed0ec2f9784b40454.jpg");

/***/ }),

/***/ "./src/img/lavaCake.jpg":
/*!******************************!*\
  !*** ./src/img/lavaCake.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "75cd4622da73f73fab9f9b97921548bc.jpg");

/***/ }),

/***/ "./src/img/pancakes.jpg":
/*!******************************!*\
  !*** ./src/img/pancakes.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b0bc387b285b8e611203a396601cdde8.jpg");

/***/ }),

/***/ "./src/img/pizza.jpg":
/*!***************************!*\
  !*** ./src/img/pizza.jpg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b6c6f9aeca677e3dace21169e09d25e2.jpg");

/***/ }),

/***/ "./src/img/sandwhich.jpg":
/*!*******************************!*\
  !*** ./src/img/sandwhich.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "36173c3673fb8f2ac133fe015cab687a.jpg");

/***/ }),

/***/ "./src/img/spaghetti.jpg":
/*!*******************************!*\
  !*** ./src/img/spaghetti.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "53a0a35e5a36c1470c23ccb4e58f8de5.jpg");

/***/ }),

/***/ "./src/styles/home.css":
/*!*****************************!*\
  !*** ./src/styles/home.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });



const home = function(){
    const content = document.querySelector('.content');

    const main = document.createElement("div");
    main.id="main";
    content.appendChild(main);

    const box1 = document.createElement("div");
    box1.id="box1";
    const box2 = document.createElement("div");
    box2.id="box2";
    main.appendChild(box1);
    main.appendChild(box2);

    const section1 = document.createElement("div");
    section1.classList.add("section");
    main.appendChild(section1);

    
    const about = document.createElement("div");
    about.id="about";
    section1.appendChild(about);

    const aboutTitle = document.createElement("div");
    aboutTitle.id="about-title";
    about.appendChild(aboutTitle);
    const abouth2 = document.createElement("h2")
    abouth2.textContent = "We are TinyFoods";
    aboutTitle.appendChild(abouth2);

    const aboutDescription = document.createElement("div");
    aboutDescription.id = "about-description";
    const aboutp = document.createElement("p");
    aboutp.textContent = "Welcome to our unique culinary haven, where gastronomy meets the miniature world! At our restaurant, we specialize in crafting exquisite tiny plates designed to delight both tiny people and even the most discerning bugs. Our chef's creations are a symphony of flavors, meticulously curated to cater to the delicate palates of our diminutive patrons. From mini sliders for tiny taste adventures to micro desserts that pack a punch, every dish is a celebration of miniature marvels. Join us for an unforgettable dining experience where small bites bring immense joy to even the smallest of connoisseurs.";
    aboutDescription.appendChild(aboutp);
    about.appendChild(aboutDescription);


    //second section
    const section2 = document.createElement("div");
    section2.classList.add("section");
    main.appendChild(section2);

    const hours = document.createElement("div");
    hours.id = "hours";
    section2.appendChild(hours);

    const hoursTitle = document.createElement("div");
    hoursTitle.id = "hours-title";
    
    hours.appendChild(hoursTitle);
    const hourstitleh3 = document.createElement("h3");
    hourstitleh3.innerText = "Hours of Operation";
    hoursTitle.appendChild(hourstitleh3);

    const hoursList = document.createElement("div");
    hoursList.id = "hours-list";
    hours.appendChild(hoursList);

    //create hours list
    const hoursItems = ['Monday: Closed', 'Tuesday: 10am-8pm',
    'Wednesday: 10am-8pm',
    'Thursday: 10am-8pm',
    'Friday: 10am-10pm',
    'Saturday: 10am-10pm',
    'Sunday: 8am-8pm'];

    let fragment = document.createDocumentFragment();
    const ul = document.createElement('ul');
    hoursItems.forEach(itemText => {
        let li = document.createElement('li');
        li.innerText = itemText;
        fragment.appendChild(li);
    })
    ul.appendChild(fragment);
    hoursList.appendChild(ul);


    const middlePic = document.createElement("div");
    middlePic.id = "middle-pic";
    section2.appendChild(middlePic);

    const middleImg = document.createElement("img");
    middleImg.src = "../src/img/tiny-sandwich.jpg" //wonder if I have to put this directory path
    middleImg.alt = "tiny sandwich";
    middlePic.appendChild(middleImg);

    const location = document.createElement("div");
    location.id = "location";
    section2.appendChild(location);

    const locationTitle = document.createElement("div");
    locationTitle.id = "location-title";
    location.appendChild(locationTitle);
    const locationtitleh3 = document.createElement("h3");
    locationtitleh3.textContent = "Location";
    locationTitle.appendChild(locationtitleh3);

    const locationWritten = document.createElement("div");
    locationWritten.id = "location-written";
    locationWritten.textContent = "8231 Kitchen Corner ln. FloorCity SomeonesHouse";
    location.appendChild(locationWritten);

    const locationMap = document.createElement("div");
    locationMap.id = "location-map";
    const locationimg = document.createElement("img");
    locationimg.src = "../src/img/tinyfoods-map.jpg";
    locationMap.appendChild(locationimg);
    location.appendChild(locationMap);
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/pizza.jpg */ "./src/img/pizza.jpg");
/* harmony import */ var _img_burger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/burger.jpg */ "./src/img/burger.jpg");
/* harmony import */ var _img_spaghetti_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/spaghetti.jpg */ "./src/img/spaghetti.jpg");
/* harmony import */ var _img_sandwhich_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/sandwhich.jpg */ "./src/img/sandwhich.jpg");
/* harmony import */ var _img_pancakes_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/pancakes.jpg */ "./src/img/pancakes.jpg");
/* harmony import */ var _img_eggs_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/eggs.jpg */ "./src/img/eggs.jpg");
/* harmony import */ var _img_cake_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/cake.jpg */ "./src/img/cake.jpg");
/* harmony import */ var _img_lavaCake_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/lavaCake.jpg */ "./src/img/lavaCake.jpg");








// import cocktailImg from "../img/cocktail.webp";
// import orangeJuiceImg from "../img/orangeJuice.webp";


//supporting function to create item with dish,descripiton, img
const createItem = function(dish, description, dishImage) 
{
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    
    const itemWritten = document.createElement("div");
    itemWritten.classList.add("item-written");
    itemContainer.appendChild(itemWritten);

    const dishH3 = document.createElement("h3");
    dishH3.textContent = dish;
    const descriptionP = document.createElement("p");
    descriptionP.textContent = description;
    itemWritten.appendChild(dishH3);
    itemWritten.appendChild(descriptionP);

    const line = document.createElement("div");
    line.classList.add("item-line");
    itemContainer.appendChild(line);

    const image = document.createElement("img");
    image.classList.add("item-picture");
    image.src = dishImage;
    itemContainer.appendChild(image);

    return itemContainer;
}

//supporting function to create Section with title
const createSection = function(title) 
{
    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-section");

    
    const menuTitle = document.createElement("h2");
    menuTitle.id = "menu-title";
    menuTitle.textContent=title;
    menuSection.appendChild(menuTitle);

    return menuSection;
}



const menu = function() 
{
    /*
    newItem = createItem("", "", );
    newSection.appendChild(newItem);
    content.appendChild(newSection);
    */

    const content = document.querySelector(".content")

    const menuPage = document.createElement("div");
    menuPage.id = "menupage";
    content.appendChild(menuPage);

    const menuPageTitle = document.createElement("h1")
    menuPageTitle.textContent = "Menu";
    menuPageTitle.id= "menupage-title";
    menuPage.appendChild(menuPageTitle);

    let newSection = createSection("Breakfast")

    let newItem = createItem("Pancake Bliss", "Fluffy pancakes adorned with plump blueberries, a miniature delight for your taste buds.", _img_pancakes_jpg__WEBPACK_IMPORTED_MODULE_4__["default"]);
    newSection.appendChild(newItem);
    menuPage.appendChild(newSection);

    newItem = createItem("Microscopic Morning Delight:", "Tiny sunny-side-up eggs, cooked to perfection, a pocket-sized breakfast sensation.", _img_eggs_jpg__WEBPACK_IMPORTED_MODULE_5__["default"]);
    newSection.appendChild(newItem);
    menuPage.appendChild(newSection);

    newSection = createSection("Dinner")

    newItem = createItem("Pint-Sized Pizza Pleaser:", "A tiny pizza masterpiece, bursting with cheesy goodness and savory toppings.", _img_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);
    newSection.appendChild(newItem);
    menuPage.appendChild(newSection);

    newItem = createItem("Bite-sized Burger Bonanza:", "A mini burger sensation with a juicy patty, crisp lettuce, and a dollop of special sauce", _img_burger_jpg__WEBPACK_IMPORTED_MODULE_1__["default"]);
    newSection.appendChild(newItem);
    menuPage.appendChild(newSection);

    newItem = createItem("Tiny Twirl Spaghetti:", "Delicate swirls of spaghetti, coated in a rich tomato sauce, a tiny Italian feast.", _img_spaghetti_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
    newSection.appendChild(newItem);
    menuPage.appendChild(newSection);

    newItem = createItem("Itty-Bitty Sandwich Symphony:", "A petite sandwich orchestra of fresh ingredients, creating a harmonious medley of flavors.", _img_sandwhich_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
    newSection.appendChild(newItem);
    menuPage.appendChild(newSection);

    newSection = createSection("Desert");

    newItem = createItem("Morsel of Carrot Cake Heaven:", "Mini carrot cake marvels, infused with spices and topped with a hint of creamy frosting.", _img_cake_jpg__WEBPACK_IMPORTED_MODULE_6__["default"]);
    newSection.appendChild(newItem);
    menuPage.appendChild(newSection);

    newItem = createItem("Lilliputian Chocolate Lava Indulgence:", "A diminutive chocolate lava cake, oozing with molten goodness, a sweet eruption in every bite.", _img_lavaCake_jpg__WEBPACK_IMPORTED_MODULE_7__["default"]);
    newSection.appendChild(newItem);
    menuPage.appendChild(newSection);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

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
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/home.css */ "./src/styles/home.css");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");




console.log("Everything is working");

// home();
(0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxzRkFBc0YsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFNBQVMsS0FBSyxVQUFVLFFBQVEsS0FBSyxjQUFjLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0s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QUNBLHdKQUF3SiwwREFBVztBQUNuSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLHFEQUFPO0FBQzdKO0FBQ0E7QUFDQTtBQUNBLHFLQUFxSyx5REFBVztBQUNoTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7O1VDckhuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ0s7QUFDQTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1nL2J1cmdlci5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWcvY2FrZS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWcvZWdncy5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWcvbGF2YUNha2UuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1nL3BhbmNha2VzLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltZy9waXp6YS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWcvc2FuZHdoaWNoLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltZy9zcGFnaGV0dGkuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL2hvbWUuY3NzPzRiNTEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xyXG4gICAgLS1jb2xvci10YW46IHJnYmEoMjEwLCAxODAsIDE0MCwgMC4zMzQpO1xyXG59XHJcblxyXG4qe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuMzM4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIHBhZGRpbmc6IDIwcHggNTBweCAyMHB4IDUwcHg7XHJcbn1cclxuXHJcbi5oZWFke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDIwcHggODBweCAyMHB4IDgwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIFxyXG59XHJcblxyXG4jbmF2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuI25hdiBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogcmdiKDY5LCA2OSwgNjkpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UsIHBhZGRpbmctYm90dG9tIDAuM3MgZWFzZSwgYm9yZGVyLWJvdHRvbSAwLjNzIGVhc2VcclxufVxyXG5cclxuI25hdiBhOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbiNuYXYgYTpob3Zlcjo6YmVmb3Jle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI25hdiBhOmhvdmVye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbi5uYXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5cclxuI21haW57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlXHJcbn1cclxuXHJcbiNib3gxLFxyXG4jYm94MntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAwLCAwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jYm94MXtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuI2JveDJ7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9ue1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgXHJcbn1cclxuXHJcbiNsb2NhdGlvbi10aXRsZSxcclxuI2hvdXJzLXRpdGxle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI2Fib3V0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGFuKTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUyOSk7XHJcbn1cclxuXHJcbiNhYm91dC10aXRsZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNob3VycyxcclxuI2xvY2F0aW9ue1xyXG4gICAgZmxleDogMSAxIDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGFuKTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUyOSk7XHJcblxyXG59XHJcblxyXG4jaG91cnMgdWx7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBcclxufVxyXG5cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MjkpO1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuXHJcbn1cclxuXHJcbiNtaWRkbGUtcGljIGltZ3tcclxuICAgIGZsZXg6IDEgMSAxMDBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcblxyXG4ubG9jYXRpb24td3JpdHRlbntcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5mb290e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbn1cclxuXHJcblxyXG4vKiBtZW51ICovXHJcblxyXG4jbWVudXBhZ2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIHBhZGRpbmc6IDUwcHggMTAwcHggNTBweCAxMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG59XHJcblxyXG4ubWVudS1zZWN0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGJvcmRlcjogMnB4IGRvdWJsZSBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRhbik7XHJcbn1cclxuXHJcbiNtZW51cGFnZS10aXRsZXtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNtZW51LXRpdGxle1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLml0ZW0tY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKiBwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4OyAqL1xyXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMCAyMHB4O1xyXG5cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzEpO1xyXG59XHJcblxyXG4uaXRlbS13cml0dGVue1xyXG4gICAgYWxpZ24tc2VsZjogZW5kO1xyXG59XHJcblxyXG4uaXRlbS13cml0dGVuIHB7XHJcbiAgICBmb250LXN0eWxlOml0YWxpYztcclxufVxyXG5cclxuXHJcbi5pdGVtLWxpbmV7XHJcbiAgICBmbGV4LWdyb3c6IDI7XHJcbiAgICBcclxuICAgIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcclxufVxyXG5cclxuXHJcbi5pdGVtLXBpY3R1cmV7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4OztcclxufVxyXG5cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsNERBQTREO0FBQ2hFOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7O0lBRWxCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEM7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsdURBQXVEO0FBQzNEOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7Ozs7QUFJQTtJQUNJLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksa0JBQWtCOzs7SUFHbEI7QUFDSjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLE1BQU07SUFDTixZQUFZO0lBQ1osV0FBVztJQUNYLE9BQU87QUFDWDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsU0FBUztJQUNULDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsZUFBZTs7QUFFbkI7O0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCOztJQUVsQixzREFBc0Q7O0FBRTFEOztBQUVBO0lBQ0kscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0RBQXNEO0lBQ3RELGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsV0FBVztBQUNmOzs7QUFHQSxTQUFTOztBQUVUO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsdUJBQXVCOztJQUV2Qiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0Isd0JBQXdCOztJQUV4Qiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLFlBQVk7O0lBRVoscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXHJcXG4gICAgLS1jb2xvci10YW46IHJnYmEoMjEwLCAxODAsIDE0MCwgMC4zMzQpO1xcclxcbn1cXHJcXG5cXHJcXG4qe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjEsIDIyMSwgMjIxLCAwLjMzOCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgd2lkdGg6IDgwdnc7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggNTBweCAyMHB4IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDgwcHggMjBweCA4MHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgd2lkdGg6IDgwdnc7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jbmF2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNuYXYgYXtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoNjksIDY5LCA2OSk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UsIHBhZGRpbmctYm90dG9tIDAuM3MgZWFzZSwgYm9yZGVyLWJvdHRvbSAwLjNzIGVhc2VcXHJcXG59XFxyXFxuXFxyXFxuI25hdiBhOjpiZWZvcmV7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMTBweDtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNuYXYgYTpob3Zlcjo6YmVmb3Jle1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNuYXYgYTpob3ZlcntcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubmF2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbWFpbntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZVxcclxcbn1cXHJcXG5cXHJcXG4jYm94MSxcXHJcXG4jYm94MntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4jYm94MXtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDE1cHg7XFxyXFxuICAgIHJpZ2h0OiAxNXB4O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jYm94MntcXHJcXG4gICAgdG9wOiAxNXB4O1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbntcXHJcXG4gICAgcGFkZGluZzogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgei1pbmRleDogOTk7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiNsb2NhdGlvbi10aXRsZSxcXHJcXG4jaG91cnMtdGl0bGV7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNhYm91dHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGFuKTtcXHJcXG4gICAgcGFkZGluZzogNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUyOSk7XFxyXFxufVxcclxcblxcclxcbiNhYm91dC10aXRsZXtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hvdXJzLFxcclxcbiNsb2NhdGlvbntcXHJcXG4gICAgZmxleDogMSAxIDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10YW4pO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTI5KTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2hvdXJzIHVse1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5pbWd7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvYmplY3QtZml0OiBmaWxsO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUyOSk7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNtaWRkbGUtcGljIGltZ3tcXHJcXG4gICAgZmxleDogMSAxIDEwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubG9jYXRpb24td3JpdHRlbntcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3R7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB3aWR0aDogODB2dztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogbWVudSAqL1xcclxcblxcclxcbiNtZW51cGFnZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogNTBweCAxMDBweCA1MHB4IDEwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1zZWN0aW9ue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA1MHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBkb3VibGUgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRhbik7XFxyXFxufVxcclxcblxcclxcbiNtZW51cGFnZS10aXRsZXtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudS10aXRsZXtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLyogcGFkZGluZzogMjBweCAyMHB4IDAgMjBweDsgKi9cXHJcXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMCAyMHB4O1xcclxcblxcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMxKTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0td3JpdHRlbntcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS13cml0dGVuIHB7XFxyXFxuICAgIGZvbnQtc3R5bGU6aXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaXRlbS1saW5le1xcclxcbiAgICBmbGV4LWdyb3c6IDI7XFxyXFxuICAgIFxcclxcbiAgICBtYXJnaW46IDAgMjBweCAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5pdGVtLXBpY3R1cmV7XFxyXFxuICAgIG1heC13aWR0aDogMTAwcHg7O1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjMjMyNWQyNmNjMDIyZmI1ZGNjNTBjMjRiY2RmMzI2Mi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzdmZDQyMTIzNTRiZWZjMGYzMzhkNWJiMDllMWZlYTQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQ4NjA3NzMxNDI3NjkwMGVkMGVjMmY5Nzg0YjQwNDU0LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3NWNkNDYyMmRhNzNmNzNmYWI5ZjliOTc5MjE1NDhiYy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjBiYzM4N2IyODViOGU2MTEyMDNhMzk2NjAxY2RkZTguanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI2YzZmOWFlY2E2NzdlM2RhY2UyMTE2OWUwOWQyNWUyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzNjE3M2MzNjczZmI4ZjJhYzEzM2ZlMDE1Y2FiNjg3YS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTNhMGEzNWU1YTM2YzE0NzBjMjNjY2I0ZTU4ZjhkZTUuanBnXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXHJcblxyXG5cclxuY29uc3QgaG9tZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1haW4uaWQ9XCJtYWluXCI7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICAgIGNvbnN0IGJveDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm94MS5pZD1cImJveDFcIjtcclxuICAgIGNvbnN0IGJveDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm94Mi5pZD1cImJveDJcIjtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYm94MSk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGJveDIpO1xyXG5cclxuICAgIGNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNlY3Rpb24xLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uMSk7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhYm91dC5pZD1cImFib3V0XCI7XHJcbiAgICBzZWN0aW9uMS5hcHBlbmRDaGlsZChhYm91dCk7XHJcblxyXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhYm91dFRpdGxlLmlkPVwiYWJvdXQtdGl0bGVcIjtcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0VGl0bGUpO1xyXG4gICAgY29uc3QgYWJvdXRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxyXG4gICAgYWJvdXRoMi50ZXh0Q29udGVudCA9IFwiV2UgYXJlIFRpbnlGb29kc1wiO1xyXG4gICAgYWJvdXRUaXRsZS5hcHBlbmRDaGlsZChhYm91dGgyKTtcclxuXHJcbiAgICBjb25zdCBhYm91dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFib3V0RGVzY3JpcHRpb24uaWQgPSBcImFib3V0LWRlc2NyaXB0aW9uXCI7XHJcbiAgICBjb25zdCBhYm91dHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGFib3V0cC50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBvdXIgdW5pcXVlIGN1bGluYXJ5IGhhdmVuLCB3aGVyZSBnYXN0cm9ub215IG1lZXRzIHRoZSBtaW5pYXR1cmUgd29ybGQhIEF0IG91ciByZXN0YXVyYW50LCB3ZSBzcGVjaWFsaXplIGluIGNyYWZ0aW5nIGV4cXVpc2l0ZSB0aW55IHBsYXRlcyBkZXNpZ25lZCB0byBkZWxpZ2h0IGJvdGggdGlueSBwZW9wbGUgYW5kIGV2ZW4gdGhlIG1vc3QgZGlzY2VybmluZyBidWdzLiBPdXIgY2hlZidzIGNyZWF0aW9ucyBhcmUgYSBzeW1waG9ueSBvZiBmbGF2b3JzLCBtZXRpY3Vsb3VzbHkgY3VyYXRlZCB0byBjYXRlciB0byB0aGUgZGVsaWNhdGUgcGFsYXRlcyBvZiBvdXIgZGltaW51dGl2ZSBwYXRyb25zLiBGcm9tIG1pbmkgc2xpZGVycyBmb3IgdGlueSB0YXN0ZSBhZHZlbnR1cmVzIHRvIG1pY3JvIGRlc3NlcnRzIHRoYXQgcGFjayBhIHB1bmNoLCBldmVyeSBkaXNoIGlzIGEgY2VsZWJyYXRpb24gb2YgbWluaWF0dXJlIG1hcnZlbHMuIEpvaW4gdXMgZm9yIGFuIHVuZm9yZ2V0dGFibGUgZGluaW5nIGV4cGVyaWVuY2Ugd2hlcmUgc21hbGwgYml0ZXMgYnJpbmcgaW1tZW5zZSBqb3kgdG8gZXZlbiB0aGUgc21hbGxlc3Qgb2YgY29ubm9pc3NldXJzLlwiO1xyXG4gICAgYWJvdXREZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChhYm91dHApO1xyXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXREZXNjcmlwdGlvbik7XHJcblxyXG5cclxuICAgIC8vc2Vjb25kIHNlY3Rpb25cclxuICAgIGNvbnN0IHNlY3Rpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNlY3Rpb24yLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uMik7XHJcblxyXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaG91cnMuaWQgPSBcImhvdXJzXCI7XHJcbiAgICBzZWN0aW9uMi5hcHBlbmRDaGlsZChob3Vycyk7XHJcblxyXG4gICAgY29uc3QgaG91cnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBob3Vyc1RpdGxlLmlkID0gXCJob3Vycy10aXRsZVwiO1xyXG4gICAgXHJcbiAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc1RpdGxlKTtcclxuICAgIGNvbnN0IGhvdXJzdGl0bGVoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGhvdXJzdGl0bGVoMy5pbm5lclRleHQgPSBcIkhvdXJzIG9mIE9wZXJhdGlvblwiO1xyXG4gICAgaG91cnNUaXRsZS5hcHBlbmRDaGlsZChob3Vyc3RpdGxlaDMpO1xyXG5cclxuICAgIGNvbnN0IGhvdXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBob3Vyc0xpc3QuaWQgPSBcImhvdXJzLWxpc3RcIjtcclxuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzTGlzdCk7XHJcblxyXG4gICAgLy9jcmVhdGUgaG91cnMgbGlzdFxyXG4gICAgY29uc3QgaG91cnNJdGVtcyA9IFsnTW9uZGF5OiBDbG9zZWQnLCAnVHVlc2RheTogMTBhbS04cG0nLFxyXG4gICAgJ1dlZG5lc2RheTogMTBhbS04cG0nLFxyXG4gICAgJ1RodXJzZGF5OiAxMGFtLThwbScsXHJcbiAgICAnRnJpZGF5OiAxMGFtLTEwcG0nLFxyXG4gICAgJ1NhdHVyZGF5OiAxMGFtLTEwcG0nLFxyXG4gICAgJ1N1bmRheTogOGFtLThwbSddO1xyXG5cclxuICAgIGxldCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGhvdXJzSXRlbXMuZm9yRWFjaChpdGVtVGV4dCA9PiB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaS5pbm5lclRleHQgPSBpdGVtVGV4dDtcclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9KVxyXG4gICAgdWwuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKHVsKTtcclxuXHJcblxyXG4gICAgY29uc3QgbWlkZGxlUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1pZGRsZVBpYy5pZCA9IFwibWlkZGxlLXBpY1wiO1xyXG4gICAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQobWlkZGxlUGljKTtcclxuXHJcbiAgICBjb25zdCBtaWRkbGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgbWlkZGxlSW1nLnNyYyA9IFwiLi4vc3JjL2ltZy90aW55LXNhbmR3aWNoLmpwZ1wiIC8vd29uZGVyIGlmIEkgaGF2ZSB0byBwdXQgdGhpcyBkaXJlY3RvcnkgcGF0aFxyXG4gICAgbWlkZGxlSW1nLmFsdCA9IFwidGlueSBzYW5kd2ljaFwiO1xyXG4gICAgbWlkZGxlUGljLmFwcGVuZENoaWxkKG1pZGRsZUltZyk7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9jYXRpb24uaWQgPSBcImxvY2F0aW9uXCI7XHJcbiAgICBzZWN0aW9uMi5hcHBlbmRDaGlsZChsb2NhdGlvbik7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsb2NhdGlvblRpdGxlLmlkID0gXCJsb2NhdGlvbi10aXRsZVwiO1xyXG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25UaXRsZSk7XHJcbiAgICBjb25zdCBsb2NhdGlvbnRpdGxlaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBsb2NhdGlvbnRpdGxlaDMudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XHJcbiAgICBsb2NhdGlvblRpdGxlLmFwcGVuZENoaWxkKGxvY2F0aW9udGl0bGVoMyk7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb25Xcml0dGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxvY2F0aW9uV3JpdHRlbi5pZCA9IFwibG9jYXRpb24td3JpdHRlblwiO1xyXG4gICAgbG9jYXRpb25Xcml0dGVuLnRleHRDb250ZW50ID0gXCI4MjMxIEtpdGNoZW4gQ29ybmVyIGxuLiBGbG9vckNpdHkgU29tZW9uZXNIb3VzZVwiO1xyXG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25Xcml0dGVuKTtcclxuXHJcbiAgICBjb25zdCBsb2NhdGlvbk1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsb2NhdGlvbk1hcC5pZCA9IFwibG9jYXRpb24tbWFwXCI7XHJcbiAgICBjb25zdCBsb2NhdGlvbmltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBsb2NhdGlvbmltZy5zcmMgPSBcIi4uL3NyYy9pbWcvdGlueWZvb2RzLW1hcC5qcGdcIjtcclxuICAgIGxvY2F0aW9uTWFwLmFwcGVuZENoaWxkKGxvY2F0aW9uaW1nKTtcclxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uTWFwKTtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lOyIsImltcG9ydCBwaXp6YUltZyBmcm9tIFwiLi4vaW1nL3BpenphLmpwZ1wiO1xyXG5pbXBvcnQgYnVyZ2VySW1nIGZyb20gXCIuLi9pbWcvYnVyZ2VyLmpwZ1wiO1xyXG5pbXBvcnQgc3BhZ2hldHRpSW1nIGZyb20gXCIuLi9pbWcvc3BhZ2hldHRpLmpwZ1wiO1xyXG5pbXBvcnQgc2FuZHdpY2hJbWcgZnJvbSBcIi4uL2ltZy9zYW5kd2hpY2guanBnXCI7XHJcbmltcG9ydCBwYW5jYWtlc0ltZyBmcm9tIFwiLi4vaW1nL3BhbmNha2VzLmpwZ1wiO1xyXG5pbXBvcnQgZWdnc0ltZyBmcm9tIFwiLi4vaW1nL2VnZ3MuanBnXCI7XHJcbmltcG9ydCBjYWtlSW1nIGZyb20gXCIuLi9pbWcvY2FrZS5qcGdcIjtcclxuaW1wb3J0IGxhdmFDYWtlSW1nIGZyb20gXCIuLi9pbWcvbGF2YUNha2UuanBnXCI7XHJcbi8vIGltcG9ydCBjb2NrdGFpbEltZyBmcm9tIFwiLi4vaW1nL2NvY2t0YWlsLndlYnBcIjtcclxuLy8gaW1wb3J0IG9yYW5nZUp1aWNlSW1nIGZyb20gXCIuLi9pbWcvb3JhbmdlSnVpY2Uud2VicFwiO1xyXG5cclxuXHJcbi8vc3VwcG9ydGluZyBmdW5jdGlvbiB0byBjcmVhdGUgaXRlbSB3aXRoIGRpc2gsZGVzY3JpcGl0b24sIGltZ1xyXG5jb25zdCBjcmVhdGVJdGVtID0gZnVuY3Rpb24oZGlzaCwgZGVzY3JpcHRpb24sIGRpc2hJbWFnZSkgXHJcbntcclxuICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaXRlbS1jb250YWluZXJcIik7XHJcbiAgICBcclxuICAgIGNvbnN0IGl0ZW1Xcml0dGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGl0ZW1Xcml0dGVuLmNsYXNzTGlzdC5hZGQoXCJpdGVtLXdyaXR0ZW5cIik7XHJcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1Xcml0dGVuKTtcclxuXHJcbiAgICBjb25zdCBkaXNoSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBkaXNoSDMudGV4dENvbnRlbnQgPSBkaXNoO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkZXNjcmlwdGlvblAudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICAgIGl0ZW1Xcml0dGVuLmFwcGVuZENoaWxkKGRpc2hIMyk7XHJcbiAgICBpdGVtV3JpdHRlbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblApO1xyXG5cclxuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGluZS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1saW5lXCIpO1xyXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1waWN0dXJlXCIpO1xyXG4gICAgaW1hZ2Uuc3JjID0gZGlzaEltYWdlO1xyXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1Db250YWluZXI7XHJcbn1cclxuXHJcbi8vc3VwcG9ydGluZyBmdW5jdGlvbiB0byBjcmVhdGUgU2VjdGlvbiB3aXRoIHRpdGxlXHJcbmNvbnN0IGNyZWF0ZVNlY3Rpb24gPSBmdW5jdGlvbih0aXRsZSkgXHJcbntcclxuICAgIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJtZW51LXNlY3Rpb25cIik7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBtZW51VGl0bGUuaWQgPSBcIm1lbnUtdGl0bGVcIjtcclxuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudD10aXRsZTtcclxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVTZWN0aW9uO1xyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IG1lbnUgPSBmdW5jdGlvbigpIFxyXG57XHJcbiAgICAvKlxyXG4gICAgbmV3SXRlbSA9IGNyZWF0ZUl0ZW0oXCJcIiwgXCJcIiwgKTtcclxuICAgIG5ld1NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3SXRlbSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld1NlY3Rpb24pO1xyXG4gICAgKi9cclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpXHJcblxyXG4gICAgY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWVudVBhZ2UuaWQgPSBcIm1lbnVwYWdlXCI7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVQYWdlKTtcclxuXHJcbiAgICBjb25zdCBtZW51UGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXHJcbiAgICBtZW51UGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgICBtZW51UGFnZVRpdGxlLmlkPSBcIm1lbnVwYWdlLXRpdGxlXCI7XHJcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChtZW51UGFnZVRpdGxlKTtcclxuXHJcbiAgICBsZXQgbmV3U2VjdGlvbiA9IGNyZWF0ZVNlY3Rpb24oXCJCcmVha2Zhc3RcIilcclxuXHJcbiAgICBsZXQgbmV3SXRlbSA9IGNyZWF0ZUl0ZW0oXCJQYW5jYWtlIEJsaXNzXCIsIFwiRmx1ZmZ5IHBhbmNha2VzIGFkb3JuZWQgd2l0aCBwbHVtcCBibHVlYmVycmllcywgYSBtaW5pYXR1cmUgZGVsaWdodCBmb3IgeW91ciB0YXN0ZSBidWRzLlwiLCBwYW5jYWtlc0ltZyk7XHJcbiAgICBuZXdTZWN0aW9uLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xyXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobmV3U2VjdGlvbik7XHJcblxyXG4gICAgbmV3SXRlbSA9IGNyZWF0ZUl0ZW0oXCJNaWNyb3Njb3BpYyBNb3JuaW5nIERlbGlnaHQ6XCIsIFwiVGlueSBzdW5ueS1zaWRlLXVwIGVnZ3MsIGNvb2tlZCB0byBwZXJmZWN0aW9uLCBhIHBvY2tldC1zaXplZCBicmVha2Zhc3Qgc2Vuc2F0aW9uLlwiLCBlZ2dzSW1nKTtcclxuICAgIG5ld1NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3SXRlbSk7XHJcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChuZXdTZWN0aW9uKTtcclxuXHJcbiAgICBuZXdTZWN0aW9uID0gY3JlYXRlU2VjdGlvbihcIkRpbm5lclwiKVxyXG5cclxuICAgIG5ld0l0ZW0gPSBjcmVhdGVJdGVtKFwiUGludC1TaXplZCBQaXp6YSBQbGVhc2VyOlwiLCBcIkEgdGlueSBwaXp6YSBtYXN0ZXJwaWVjZSwgYnVyc3Rpbmcgd2l0aCBjaGVlc3kgZ29vZG5lc3MgYW5kIHNhdm9yeSB0b3BwaW5ncy5cIiwgcGl6emFJbWcpO1xyXG4gICAgbmV3U2VjdGlvbi5hcHBlbmRDaGlsZChuZXdJdGVtKTtcclxuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKG5ld1NlY3Rpb24pO1xyXG5cclxuICAgIG5ld0l0ZW0gPSBjcmVhdGVJdGVtKFwiQml0ZS1zaXplZCBCdXJnZXIgQm9uYW56YTpcIiwgXCJBIG1pbmkgYnVyZ2VyIHNlbnNhdGlvbiB3aXRoIGEganVpY3kgcGF0dHksIGNyaXNwIGxldHR1Y2UsIGFuZCBhIGRvbGxvcCBvZiBzcGVjaWFsIHNhdWNlXCIsIGJ1cmdlckltZyk7XHJcbiAgICBuZXdTZWN0aW9uLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xyXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobmV3U2VjdGlvbik7XHJcblxyXG4gICAgbmV3SXRlbSA9IGNyZWF0ZUl0ZW0oXCJUaW55IFR3aXJsIFNwYWdoZXR0aTpcIiwgXCJEZWxpY2F0ZSBzd2lybHMgb2Ygc3BhZ2hldHRpLCBjb2F0ZWQgaW4gYSByaWNoIHRvbWF0byBzYXVjZSwgYSB0aW55IEl0YWxpYW4gZmVhc3QuXCIsIHNwYWdoZXR0aUltZyk7XHJcbiAgICBuZXdTZWN0aW9uLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xyXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobmV3U2VjdGlvbik7XHJcblxyXG4gICAgbmV3SXRlbSA9IGNyZWF0ZUl0ZW0oXCJJdHR5LUJpdHR5IFNhbmR3aWNoIFN5bXBob255OlwiLCBcIkEgcGV0aXRlIHNhbmR3aWNoIG9yY2hlc3RyYSBvZiBmcmVzaCBpbmdyZWRpZW50cywgY3JlYXRpbmcgYSBoYXJtb25pb3VzIG1lZGxleSBvZiBmbGF2b3JzLlwiLCBzYW5kd2ljaEltZyk7XHJcbiAgICBuZXdTZWN0aW9uLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xyXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobmV3U2VjdGlvbik7XHJcblxyXG4gICAgbmV3U2VjdGlvbiA9IGNyZWF0ZVNlY3Rpb24oXCJEZXNlcnRcIik7XHJcblxyXG4gICAgbmV3SXRlbSA9IGNyZWF0ZUl0ZW0oXCJNb3JzZWwgb2YgQ2Fycm90IENha2UgSGVhdmVuOlwiLCBcIk1pbmkgY2Fycm90IGNha2UgbWFydmVscywgaW5mdXNlZCB3aXRoIHNwaWNlcyBhbmQgdG9wcGVkIHdpdGggYSBoaW50IG9mIGNyZWFteSBmcm9zdGluZy5cIiwgY2FrZUltZyk7XHJcbiAgICBuZXdTZWN0aW9uLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xyXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobmV3U2VjdGlvbik7XHJcblxyXG4gICAgbmV3SXRlbSA9IGNyZWF0ZUl0ZW0oXCJMaWxsaXB1dGlhbiBDaG9jb2xhdGUgTGF2YSBJbmR1bGdlbmNlOlwiLCBcIkEgZGltaW51dGl2ZSBjaG9jb2xhdGUgbGF2YSBjYWtlLCBvb3ppbmcgd2l0aCBtb2x0ZW4gZ29vZG5lc3MsIGEgc3dlZXQgZXJ1cHRpb24gaW4gZXZlcnkgYml0ZS5cIiwgbGF2YUNha2VJbWcpO1xyXG4gICAgbmV3U2VjdGlvbi5hcHBlbmRDaGlsZChuZXdJdGVtKTtcclxuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKG5ld1NlY3Rpb24pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvaG9tZS5jc3MnO1xyXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9wYWdlcy9ob21lXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL3BhZ2VzL21lbnVcIjtcclxuXHJcbmNvbnNvbGUubG9nKFwiRXZlcnl0aGluZyBpcyB3b3JraW5nXCIpO1xyXG5cclxuLy8gaG9tZSgpO1xyXG5tZW51KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==