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
#location,
#contact{
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

#contactpage,
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

#menupage-title,
#contactpage-title{
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



/* contact */
#info{
    margin-bottom: 20px;
}

#careers p{
    font-size: 10px;
}

#contact-bottom-img{
    height: 300px;
    object-fit: cover;
}`, "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":"AAAA;IACI,uCAAuC;AAC3C;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,4DAA4D;AAChE;;AAEA;IACI,4CAA4C;IAC5C,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,WAAW;IACX,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,8BAA8B;IAC9B,oCAAoC;IACpC,WAAW;;AAEf;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;;IAElB,mBAAmB;IACnB,oCAAoC;IACpC;AACJ;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,QAAQ;IACR,WAAW;IACX,6BAA6B;IAC7B,2BAA2B;IAC3B,uDAAuD;AAC3D;;AAEA;IACI,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;;;AAIA;IACI,aAAa;AACjB;;;AAGA;IACI,kBAAkB;;;IAGlB;AACJ;;AAEA;;IAEI,kBAAkB;IAClB,8BAA8B;IAC9B,6BAA6B;AACjC;;AAEA;IACI,MAAM;IACN,YAAY;IACZ,WAAW;IACX,OAAO;AACX;;AAEA;IACI,SAAS;IACT,SAAS;IACT,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,aAAa;IACb,aAAa;IACb,SAAS;IACT,6BAA6B;IAC7B,WAAW;IACX,eAAe;;AAEnB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,aAAa;IACb,kBAAkB;IAClB,sDAAsD;AAC1D;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;;IAGI,eAAe;IACf,kCAAkC;IAClC,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;;IAElB,sDAAsD;;AAE1D;;AAEA;IACI,qBAAqB;;AAEzB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,sDAAsD;IACtD,gBAAgB;;AAEpB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;;AAGA;IACI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,WAAW;AACf;;;AAGA,SAAS;;AAET;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,uBAAuB;;IAEvB,8BAA8B;IAC9B,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,aAAa;IACb,wBAAwB;IACxB,kCAAkC;AACtC;;AAEA;;IAEI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,+BAA+B;IAC/B,wBAAwB;;IAExB,4CAA4C;AAChD;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;;AAGA;IACI,YAAY;;IAEZ,qBAAqB;AACzB;;;AAGA;IACI,gBAAgB;AACpB;;;;AAIA,YAAY;AACZ;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB","sourcesContent":[":root{\r\n    --color-tan: rgba(210, 180, 140, 0.334);\r\n}\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody{\r\n    background-color: rgba(221, 221, 221, 0.338);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.content{\r\n    position: relative;\r\n    background-color: rgb(255, 255, 255);\r\n    width: 80vw;\r\n    padding: 20px 50px 20px 50px;\r\n}\r\n\r\n.head{\r\n    display: flex;\r\n    padding: 20px 80px 20px 80px;\r\n    justify-content: space-between;\r\n    background-color: rgb(255, 255, 255);\r\n    width: 80vw;\r\n    \r\n}\r\n\r\n#nav{\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n#nav a{\r\n    text-decoration: none;\r\n    padding: 5px;\r\n    font-size: 1.1em;\r\n    font-weight: 600;\r\n    color: rgb(69, 69, 69);\r\n    position: relative;\r\n\r\n    padding-bottom: 2px;\r\n    border-bottom: 2px solid transparent;\r\n    transition: color 0.3s ease, padding-bottom 0.3s ease, border-bottom 0.3s ease\r\n}\r\n\r\n#nav a::before{\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 10px;\r\n    left: 50%;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: transparent;\r\n    transform: translateX(-50%);\r\n    transition: width 0.3s ease, background-color 0.3s ease;\r\n}\r\n\r\n#nav a:hover::before{\r\n    width: 100%;\r\n    background-color: black;\r\n}\r\n\r\n#nav a:hover{\r\n    color: black;\r\n}\r\n\r\n\r\n\r\n.nav{\r\n    display: flex;\r\n}\r\n\r\n\r\n#main{\r\n    position: relative;\r\n\r\n    \r\n    background-color: whitesmoke\r\n}\r\n\r\n#box1,\r\n#box2{\r\n    position: absolute;\r\n    border: 2px solid rgb(0, 0, 0);\r\n    background-color: transparent;\r\n}\r\n\r\n#box1{\r\n    top: 0;\r\n    bottom: 15px;\r\n    right: 15px;\r\n    left: 0;\r\n}\r\n\r\n#box2{\r\n    top: 15px;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 15px;\r\n}\r\n\r\n.section{\r\n    padding: 50px;\r\n    display: flex;\r\n    gap: 50px;\r\n    justify-content: space-around;\r\n    z-index: 99;\r\n    flex-wrap: wrap;\r\n    \r\n}\r\n\r\n#location-title,\r\n#hours-title{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#about{\r\n    background-color: var(--color-tan);\r\n    padding: 50px;\r\n    border-radius: 5px;\r\n    box-shadow: 2px 2px 5px 2px rgba(128, 128, 128, 0.529);\r\n}\r\n\r\n#about-title{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#hours,\r\n#location,\r\n#contact{\r\n    flex: 1 1 300px;\r\n    background-color: var(--color-tan);\r\n    padding: 30px;\r\n    min-width: 300px;\r\n    max-width: 400px;\r\n    text-align: center;\r\n\r\n    box-shadow: 2px 2px 5px 2px rgba(128, 128, 128, 0.529);\r\n\r\n}\r\n\r\n#hours ul{\r\n    list-style-type: none;\r\n    \r\n}\r\n\r\nimg{\r\n    width: 100%;\r\n    object-fit: fill;\r\n    box-shadow: 2px 2px 5px 2px rgba(128, 128, 128, 0.529);\r\n    min-width: 100px;\r\n\r\n}\r\n\r\n#middle-pic img{\r\n    flex: 1 1 100px;\r\n    max-width: 300px;\r\n}\r\n\r\n\r\n.location-written{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.foot{\r\n    background-color: white;\r\n    height: 100px;\r\n    width: 80vw;\r\n}\r\n\r\n\r\n/* menu */\r\n\r\n#contactpage,\r\n#menupage{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    justify-content: center;\r\n\r\n    padding: 50px 100px 50px 100px;\r\n    margin: auto;\r\n    max-width: 1000px;\r\n}\r\n\r\n.menu-section{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    padding: 50px;\r\n    border: 2px double black;\r\n    background-color: var(--color-tan);\r\n}\r\n\r\n#menupage-title,\r\n#contactpage-title{\r\n    align-self: center;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#menu-title{\r\n    align-self: center;\r\n    justify-self: center;\r\n    text-decoration: underline;\r\n}\r\n\r\n.item-container{\r\n    display: flex;\r\n    align-items: center;\r\n    /* padding: 20px 20px 0 20px; */\r\n    margin: 20px 20px 0 20px;\r\n\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.31);\r\n}\r\n\r\n.item-written{\r\n    align-self: end;\r\n}\r\n\r\n.item-written p{\r\n    font-style:italic;\r\n}\r\n\r\n\r\n.item-line{\r\n    flex-grow: 2;\r\n    \r\n    margin: 0 20px 0 20px;\r\n}\r\n\r\n\r\n.item-picture{\r\n    max-width: 100px;;\r\n}\r\n\r\n\r\n\r\n/* contact */\r\n#info{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#careers p{\r\n    font-size: 10px;\r\n}\r\n\r\n#contact-bottom-img{\r\n    height: 300px;\r\n    object-fit: cover;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/img/restaurant.jpg":
/*!********************************!*\
  !*** ./src/img/restaurant.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "db488c81acb36ded9bdebfd7f96d9a7f.jpg");

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

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/restaurant.jpg */ "./src/img/restaurant.jpg");


const contact = function() 
{
    const content = document.querySelector(".content");

    const contactPage = document.createElement("div");
    contactPage.id="contactpage";
    content.appendChild(contactPage);

    const contactPageTitle = document.createElement("h1");
    contactPageTitle.id="contactpage-title";
    contactPageTitle.textContent = "Contact";
    contactPage.appendChild(contactPageTitle);

    //section1
    //contact
    const section1 = document.createElement("div");
    section1.classList.add("section");
    contactPage.appendChild(section1);

    const contact = document.createElement("div");
    contact.id = "contact";
    section1.appendChild(contact);

    const info = document.createElement("div");
    info.id="info";
    contact.appendChild(info);

    info.appendChild(document.createElement('h1')).textContent = 'Tiny Foods';
    info.appendChild(document.createElement('a')).innerText = '321-654-0987';
    info.appendChild(document.createElement('p')).textContent = 'tinyfoods.contact@tinyworld.com';

    const careers = document.createElement("div");
    careers.id="careers";
    contact.appendChild(careers);

    careers.appendChild(document.createElement('h3')).textContent = 'Join Our Tiny Team Today!';
    careers.appendChild(document.createElement('p')).textContent = '*Must be under 1 foot tall to apply.';

    //section1 service

    //section1 location
    const location = document.createElement("div");
    location.id = "location";
    section1.appendChild(location);

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

    //section2
    const section2 = document.createElement("div");
    section2.classList.add("section");
    contactPage.appendChild(section2);

    const section2Img = document.createElement("img");
    section2Img.id="contact-bottom-img";
    section2Img.src=_img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];
    section2.appendChild(section2Img);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

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
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");





console.log("Everything is working");

// home();
// menu();
(0,_pages_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzRkFBc0YsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFNBQVMsS0FBSyxVQUFVLFFBQVEsS0FBSyxjQUFjLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyREFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDOUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25IcUI7QUFDRTtBQUNNO0FBQ0Q7QUFDRDtBQUNSO0FBQ0E7QUFDUTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMElBQTBJLHlEQUFXO0FBQ3JKO0FBQ0E7QUFDQTtBQUNBLCtJQUErSSxxREFBTztBQUN0SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0lBQXNJLHNEQUFRO0FBQzlJO0FBQ0E7QUFDQTtBQUNBLG1KQUFtSix1REFBUztBQUM1SjtBQUNBO0FBQ0E7QUFDQSx3SUFBd0ksMERBQVk7QUFDcEo7QUFDQTtBQUNBO0FBQ0Esd0pBQXdKLDBEQUFXO0FBQ25LO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSkFBc0oscURBQU87QUFDN0o7QUFDQTtBQUNBO0FBQ0EscUtBQXFLLHlEQUFXO0FBQ2hMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7VUNySG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ0s7QUFDQTtBQUNNO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL2hvbWUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltZy9idXJnZXIuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1nL2Nha2UuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1nL2VnZ3MuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1nL2xhdmFDYWtlLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltZy9wYW5jYWtlcy5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWcvcGl6emEuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1nL3Jlc3RhdXJhbnQuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1nL3NhbmR3aGljaC5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWcvc3BhZ2hldHRpLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9ob21lLmNzcz80YjUxIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XHJcbiAgICAtLWNvbG9yLXRhbjogcmdiYSgyMTAsIDE4MCwgMTQwLCAwLjMzNCk7XHJcbn1cclxuXHJcbip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC4zMzgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgcGFkZGluZzogMjBweCA1MHB4IDIwcHggNTBweDtcclxufVxyXG5cclxuLmhlYWR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMjBweCA4MHB4IDIwcHggODBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgXHJcbn1cclxuXHJcbiNuYXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4jbmF2IGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiByZ2IoNjksIDY5LCA2OSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZSwgcGFkZGluZy1ib3R0b20gMC4zcyBlYXNlLCBib3JkZXItYm90dG9tIDAuM3MgZWFzZVxyXG59XHJcblxyXG4jbmF2IGE6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxuI25hdiBhOmhvdmVyOjpiZWZvcmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jbmF2IGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxuLm5hdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcblxyXG4jbWFpbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2VcclxufVxyXG5cclxuI2JveDEsXHJcbiNib3gye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiNib3gxe1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jYm94MntcclxuICAgIHRvcDogMTVweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMTVweDtcclxufVxyXG5cclxuLnNlY3Rpb257XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBcclxufVxyXG5cclxuI2xvY2F0aW9uLXRpdGxlLFxyXG4jaG91cnMtdGl0bGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jYWJvdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10YW4pO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTI5KTtcclxufVxyXG5cclxuI2Fib3V0LXRpdGxle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuI2hvdXJzLFxyXG4jbG9jYXRpb24sXHJcbiNjb250YWN0e1xyXG4gICAgZmxleDogMSAxIDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGFuKTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUyOSk7XHJcblxyXG59XHJcblxyXG4jaG91cnMgdWx7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBcclxufVxyXG5cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MjkpO1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuXHJcbn1cclxuXHJcbiNtaWRkbGUtcGljIGltZ3tcclxuICAgIGZsZXg6IDEgMSAxMDBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcblxyXG4ubG9jYXRpb24td3JpdHRlbntcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5mb290e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbn1cclxuXHJcblxyXG4vKiBtZW51ICovXHJcblxyXG4jY29udGFjdHBhZ2UsXHJcbiNtZW51cGFnZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgcGFkZGluZzogNTBweCAxMDBweCA1MHB4IDEwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbn1cclxuXHJcbi5tZW51LXNlY3Rpb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgYm9yZGVyOiAycHggZG91YmxlIGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGFuKTtcclxufVxyXG5cclxuI21lbnVwYWdlLXRpdGxlLFxyXG4jY29udGFjdHBhZ2UtdGl0bGV7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4jbWVudS10aXRsZXtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5pdGVtLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLyogcGFkZGluZzogMjBweCAyMHB4IDAgMjBweDsgKi9cclxuICAgIG1hcmdpbjogMjBweCAyMHB4IDAgMjBweDtcclxuXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMxKTtcclxufVxyXG5cclxuLml0ZW0td3JpdHRlbntcclxuICAgIGFsaWduLXNlbGY6IGVuZDtcclxufVxyXG5cclxuLml0ZW0td3JpdHRlbiBwe1xyXG4gICAgZm9udC1zdHlsZTppdGFsaWM7XHJcbn1cclxuXHJcblxyXG4uaXRlbS1saW5le1xyXG4gICAgZmxleC1ncm93OiAyO1xyXG4gICAgXHJcbiAgICBtYXJnaW46IDAgMjBweCAwIDIwcHg7XHJcbn1cclxuXHJcblxyXG4uaXRlbS1waWN0dXJle1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDs7XHJcbn1cclxuXHJcblxyXG5cclxuLyogY29udGFjdCAqL1xyXG4jaW5mb3tcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNjYXJlZXJzIHB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbiNjb250YWN0LWJvdHRvbS1pbWd7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBh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bUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxyXFxuICAgIC0tY29sb3ItdGFuOiByZ2JhKDIxMCwgMTgwLCAxNDAsIDAuMzM0KTtcXHJcXG59XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC4zMzgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIHdpZHRoOiA4MHZ3O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHggMjBweCA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogMjBweCA4MHB4IDIwcHggODBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIHdpZHRoOiA4MHZ3O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI25hdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2IGF7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogcmdiKDY5LCA2OSwgNjkpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLCBwYWRkaW5nLWJvdHRvbSAwLjNzIGVhc2UsIGJvcmRlci1ib3R0b20gMC4zcyBlYXNlXFxyXFxufVxcclxcblxcclxcbiNuYXYgYTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDEwcHg7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2IGE6aG92ZXI6OmJlZm9yZXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2IGE6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLm5hdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI21haW57XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2VcXHJcXG59XFxyXFxuXFxyXFxuI2JveDEsXFxyXFxuI2JveDJ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuI2JveDF7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAxNXB4O1xcclxcbiAgICByaWdodDogMTVweDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2JveDJ7XFxyXFxuICAgIHRvcDogMTVweDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb257XFxyXFxuICAgIHBhZGRpbmc6IDUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHotaW5kZXg6IDk5O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jbG9jYXRpb24tdGl0bGUsXFxyXFxuI2hvdXJzLXRpdGxle1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRhbik7XFxyXFxuICAgIHBhZGRpbmc6IDUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MjkpO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtdGl0bGV7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNob3VycyxcXHJcXG4jbG9jYXRpb24sXFxyXFxuI2NvbnRhY3R7XFxyXFxuICAgIGZsZXg6IDEgMSAzMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGFuKTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUyOSk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNob3VycyB1bHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuaW1ne1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogZmlsbDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MjkpO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jbWlkZGxlLXBpYyBpbWd7XFxyXFxuICAgIGZsZXg6IDEgMSAxMDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmxvY2F0aW9uLXdyaXR0ZW57XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgd2lkdGg6IDgwdnc7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIG1lbnUgKi9cXHJcXG5cXHJcXG4jY29udGFjdHBhZ2UsXFxyXFxuI21lbnVwYWdle1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA1MHB4IDEwMHB4IDUwcHggMTAwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXNlY3Rpb257XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDUwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IGRvdWJsZSBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGFuKTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVwYWdlLXRpdGxlLFxcclxcbiNjb250YWN0cGFnZS10aXRsZXtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudS10aXRsZXtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLyogcGFkZGluZzogMjBweCAyMHB4IDAgMjBweDsgKi9cXHJcXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMCAyMHB4O1xcclxcblxcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMxKTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0td3JpdHRlbntcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS13cml0dGVuIHB7XFxyXFxuICAgIGZvbnQtc3R5bGU6aXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaXRlbS1saW5le1xcclxcbiAgICBmbGV4LWdyb3c6IDI7XFxyXFxuICAgIFxcclxcbiAgICBtYXJnaW46IDAgMjBweCAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5pdGVtLXBpY3R1cmV7XFxyXFxuICAgIG1heC13aWR0aDogMTAwcHg7O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBjb250YWN0ICovXFxyXFxuI2luZm97XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNjYXJlZXJzIHB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtYm90dG9tLWltZ3tcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMyMzI1ZDI2Y2MwMjJmYjVkY2M1MGMyNGJjZGYzMjYyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjN2ZkNDIxMjM1NGJlZmMwZjMzOGQ1YmIwOWUxZmVhNC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDg2MDc3MzE0Mjc2OTAwZWQwZWMyZjk3ODRiNDA0NTQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjc1Y2Q0NjIyZGE3M2Y3M2ZhYjlmOWI5NzkyMTU0OGJjLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiMGJjMzg3YjI4NWI4ZTYxMTIwM2EzOTY2MDFjZGRlOC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjZjNmY5YWVjYTY3N2UzZGFjZTIxMTY5ZTA5ZDI1ZTIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRiNDg4YzgxYWNiMzZkZWQ5YmRlYmZkN2Y5NmQ5YTdmLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzNjE3M2MzNjczZmI4ZjJhYzEzM2ZlMDE1Y2FiNjg3YS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTNhMGEzNWU1YTM2YzE0NzBjMjNjY2I0ZTU4ZjhkZTUuanBnXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHJlc3RhdXJhbnQgZnJvbSBcIi4uL2ltZy9yZXN0YXVyYW50LmpwZ1wiXHJcblxyXG5jb25zdCBjb250YWN0ID0gZnVuY3Rpb24oKSBcclxue1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWN0UGFnZS5pZD1cImNvbnRhY3RwYWdlXCI7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0UGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgY29udGFjdFBhZ2VUaXRsZS5pZD1cImNvbnRhY3RwYWdlLXRpdGxlXCI7XHJcbiAgICBjb250YWN0UGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbiAgICBjb250YWN0UGFnZS5hcHBlbmRDaGlsZChjb250YWN0UGFnZVRpdGxlKTtcclxuXHJcbiAgICAvL3NlY3Rpb24xXHJcbiAgICAvL2NvbnRhY3RcclxuICAgIGNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNlY3Rpb24xLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xyXG4gICAgY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQoc2VjdGlvbjEpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFjdC5pZCA9IFwiY29udGFjdFwiO1xyXG4gICAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcblxyXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpbmZvLmlkPVwiaW5mb1wiO1xyXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChpbmZvKTtcclxuXHJcbiAgICBpbmZvLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJykpLnRleHRDb250ZW50ID0gJ1RpbnkgRm9vZHMnO1xyXG4gICAgaW5mby5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpLmlubmVyVGV4dCA9ICczMjEtNjU0LTA5ODcnO1xyXG4gICAgaW5mby5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpLnRleHRDb250ZW50ID0gJ3Rpbnlmb29kcy5jb250YWN0QHRpbnl3b3JsZC5jb20nO1xyXG5cclxuICAgIGNvbnN0IGNhcmVlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZWVycy5pZD1cImNhcmVlcnNcIjtcclxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY2FyZWVycyk7XHJcblxyXG4gICAgY2FyZWVycy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpKS50ZXh0Q29udGVudCA9ICdKb2luIE91ciBUaW55IFRlYW0gVG9kYXkhJztcclxuICAgIGNhcmVlcnMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKS50ZXh0Q29udGVudCA9ICcqTXVzdCBiZSB1bmRlciAxIGZvb3QgdGFsbCB0byBhcHBseS4nO1xyXG5cclxuICAgIC8vc2VjdGlvbjEgc2VydmljZVxyXG5cclxuICAgIC8vc2VjdGlvbjEgbG9jYXRpb25cclxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxvY2F0aW9uLmlkID0gXCJsb2NhdGlvblwiO1xyXG4gICAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9jYXRpb25UaXRsZS5pZCA9IFwibG9jYXRpb24tdGl0bGVcIjtcclxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uVGl0bGUpO1xyXG4gICAgY29uc3QgbG9jYXRpb250aXRsZWgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgbG9jYXRpb250aXRsZWgzLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xyXG4gICAgbG9jYXRpb25UaXRsZS5hcHBlbmRDaGlsZChsb2NhdGlvbnRpdGxlaDMpO1xyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uV3JpdHRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsb2NhdGlvbldyaXR0ZW4uaWQgPSBcImxvY2F0aW9uLXdyaXR0ZW5cIjtcclxuICAgIGxvY2F0aW9uV3JpdHRlbi50ZXh0Q29udGVudCA9IFwiODIzMSBLaXRjaGVuIENvcm5lciBsbi4gRmxvb3JDaXR5IFNvbWVvbmVzSG91c2VcIjtcclxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uV3JpdHRlbik7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb25NYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9jYXRpb25NYXAuaWQgPSBcImxvY2F0aW9uLW1hcFwiO1xyXG4gICAgY29uc3QgbG9jYXRpb25pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgbG9jYXRpb25pbWcuc3JjID0gXCIuLi9zcmMvaW1nL3Rpbnlmb29kcy1tYXAuanBnXCI7XHJcbiAgICBsb2NhdGlvbk1hcC5hcHBlbmRDaGlsZChsb2NhdGlvbmltZyk7XHJcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbk1hcCk7XHJcblxyXG4gICAgLy9zZWN0aW9uMlxyXG4gICAgY29uc3Qgc2VjdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2VjdGlvbjIuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XHJcbiAgICBjb250YWN0UGFnZS5hcHBlbmRDaGlsZChzZWN0aW9uMik7XHJcblxyXG4gICAgY29uc3Qgc2VjdGlvbjJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgc2VjdGlvbjJJbWcuaWQ9XCJjb250YWN0LWJvdHRvbS1pbWdcIjtcclxuICAgIHNlY3Rpb24ySW1nLnNyYz1yZXN0YXVyYW50O1xyXG4gICAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoc2VjdGlvbjJJbWcpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDsiLCJcclxuXHJcblxyXG5jb25zdCBob21lID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWFpbi5pZD1cIm1haW5cIjtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4gICAgY29uc3QgYm94MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib3gxLmlkPVwiYm94MVwiO1xyXG4gICAgY29uc3QgYm94MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib3gyLmlkPVwiYm94MlwiO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChib3gxKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYm94Mik7XHJcblxyXG4gICAgY29uc3Qgc2VjdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2VjdGlvbjEuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24xKTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFib3V0LmlkPVwiYWJvdXRcIjtcclxuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKGFib3V0KTtcclxuXHJcbiAgICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFib3V0VGl0bGUuaWQ9XCJhYm91dC10aXRsZVwiO1xyXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSk7XHJcbiAgICBjb25zdCBhYm91dGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXHJcbiAgICBhYm91dGgyLnRleHRDb250ZW50ID0gXCJXZSBhcmUgVGlueUZvb2RzXCI7XHJcbiAgICBhYm91dFRpdGxlLmFwcGVuZENoaWxkKGFib3V0aDIpO1xyXG5cclxuICAgIGNvbnN0IGFib3V0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWJvdXREZXNjcmlwdGlvbi5pZCA9IFwiYWJvdXQtZGVzY3JpcHRpb25cIjtcclxuICAgIGNvbnN0IGFib3V0cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgYWJvdXRwLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIG91ciB1bmlxdWUgY3VsaW5hcnkgaGF2ZW4sIHdoZXJlIGdhc3Ryb25vbXkgbWVldHMgdGhlIG1pbmlhdHVyZSB3b3JsZCEgQXQgb3VyIHJlc3RhdXJhbnQsIHdlIHNwZWNpYWxpemUgaW4gY3JhZnRpbmcgZXhxdWlzaXRlIHRpbnkgcGxhdGVzIGRlc2lnbmVkIHRvIGRlbGlnaHQgYm90aCB0aW55IHBlb3BsZSBhbmQgZXZlbiB0aGUgbW9zdCBkaXNjZXJuaW5nIGJ1Z3MuIE91ciBjaGVmJ3MgY3JlYXRpb25zIGFyZSBhIHN5bXBob255IG9mIGZsYXZvcnMsIG1ldGljdWxvdXNseSBjdXJhdGVkIHRvIGNhdGVyIHRvIHRoZSBkZWxpY2F0ZSBwYWxhdGVzIG9mIG91ciBkaW1pbnV0aXZlIHBhdHJvbnMuIEZyb20gbWluaSBzbGlkZXJzIGZvciB0aW55IHRhc3RlIGFkdmVudHVyZXMgdG8gbWljcm8gZGVzc2VydHMgdGhhdCBwYWNrIGEgcHVuY2gsIGV2ZXJ5IGRpc2ggaXMgYSBjZWxlYnJhdGlvbiBvZiBtaW5pYXR1cmUgbWFydmVscy4gSm9pbiB1cyBmb3IgYW4gdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZSB3aGVyZSBzbWFsbCBiaXRlcyBicmluZyBpbW1lbnNlIGpveSB0byBldmVuIHRoZSBzbWFsbGVzdCBvZiBjb25ub2lzc2V1cnMuXCI7XHJcbiAgICBhYm91dERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGFib3V0cCk7XHJcbiAgICBhYm91dC5hcHBlbmRDaGlsZChhYm91dERlc2NyaXB0aW9uKTtcclxuXHJcblxyXG4gICAgLy9zZWNvbmQgc2VjdGlvblxyXG4gICAgY29uc3Qgc2VjdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2VjdGlvbjIuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24yKTtcclxuXHJcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBob3Vycy5pZCA9IFwiaG91cnNcIjtcclxuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKGhvdXJzKTtcclxuXHJcbiAgICBjb25zdCBob3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvdXJzVGl0bGUuaWQgPSBcImhvdXJzLXRpdGxlXCI7XHJcbiAgICBcclxuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzVGl0bGUpO1xyXG4gICAgY29uc3QgaG91cnN0aXRsZWgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgaG91cnN0aXRsZWgzLmlubmVyVGV4dCA9IFwiSG91cnMgb2YgT3BlcmF0aW9uXCI7XHJcbiAgICBob3Vyc1RpdGxlLmFwcGVuZENoaWxkKGhvdXJzdGl0bGVoMyk7XHJcblxyXG4gICAgY29uc3QgaG91cnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvdXJzTGlzdC5pZCA9IFwiaG91cnMtbGlzdFwiO1xyXG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcclxuXHJcbiAgICAvL2NyZWF0ZSBob3VycyBsaXN0XHJcbiAgICBjb25zdCBob3Vyc0l0ZW1zID0gWydNb25kYXk6IENsb3NlZCcsICdUdWVzZGF5OiAxMGFtLThwbScsXHJcbiAgICAnV2VkbmVzZGF5OiAxMGFtLThwbScsXHJcbiAgICAnVGh1cnNkYXk6IDEwYW0tOHBtJyxcclxuICAgICdGcmlkYXk6IDEwYW0tMTBwbScsXHJcbiAgICAnU2F0dXJkYXk6IDEwYW0tMTBwbScsXHJcbiAgICAnU3VuZGF5OiA4YW0tOHBtJ107XHJcblxyXG4gICAgbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgaG91cnNJdGVtcy5mb3JFYWNoKGl0ZW1UZXh0ID0+IHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpLmlubmVyVGV4dCA9IGl0ZW1UZXh0O1xyXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH0pXHJcbiAgICB1bC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcbiAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxuXHJcbiAgICBjb25zdCBtaWRkbGVQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWlkZGxlUGljLmlkID0gXCJtaWRkbGUtcGljXCI7XHJcbiAgICBzZWN0aW9uMi5hcHBlbmRDaGlsZChtaWRkbGVQaWMpO1xyXG5cclxuICAgIGNvbnN0IG1pZGRsZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBtaWRkbGVJbWcuc3JjID0gXCIuLi9zcmMvaW1nL3Rpbnktc2FuZHdpY2guanBnXCIgLy93b25kZXIgaWYgSSBoYXZlIHRvIHB1dCB0aGlzIGRpcmVjdG9yeSBwYXRoXHJcbiAgICBtaWRkbGVJbWcuYWx0ID0gXCJ0aW55IHNhbmR3aWNoXCI7XHJcbiAgICBtaWRkbGVQaWMuYXBwZW5kQ2hpbGQobWlkZGxlSW1nKTtcclxuXHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsb2NhdGlvbi5pZCA9IFwibG9jYXRpb25cIjtcclxuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcclxuXHJcbiAgICBjb25zdCBsb2NhdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxvY2F0aW9uVGl0bGUuaWQgPSBcImxvY2F0aW9uLXRpdGxlXCI7XHJcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvblRpdGxlKTtcclxuICAgIGNvbnN0IGxvY2F0aW9udGl0bGVoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGxvY2F0aW9udGl0bGVoMy50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcclxuICAgIGxvY2F0aW9uVGl0bGUuYXBwZW5kQ2hpbGQobG9jYXRpb250aXRsZWgzKTtcclxuXHJcbiAgICBjb25zdCBsb2NhdGlvbldyaXR0ZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9jYXRpb25Xcml0dGVuLmlkID0gXCJsb2NhdGlvbi13cml0dGVuXCI7XHJcbiAgICBsb2NhdGlvbldyaXR0ZW4udGV4dENvbnRlbnQgPSBcIjgyMzEgS2l0Y2hlbiBDb3JuZXIgbG4uIEZsb29yQ2l0eSBTb21lb25lc0hvdXNlXCI7XHJcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbldyaXR0ZW4pO1xyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxvY2F0aW9uTWFwLmlkID0gXCJsb2NhdGlvbi1tYXBcIjtcclxuICAgIGNvbnN0IGxvY2F0aW9uaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGxvY2F0aW9uaW1nLnNyYyA9IFwiLi4vc3JjL2ltZy90aW55Zm9vZHMtbWFwLmpwZ1wiO1xyXG4gICAgbG9jYXRpb25NYXAuYXBwZW5kQ2hpbGQobG9jYXRpb25pbWcpO1xyXG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25NYXApO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWU7IiwiaW1wb3J0IHBpenphSW1nIGZyb20gXCIuLi9pbWcvcGl6emEuanBnXCI7XHJcbmltcG9ydCBidXJnZXJJbWcgZnJvbSBcIi4uL2ltZy9idXJnZXIuanBnXCI7XHJcbmltcG9ydCBzcGFnaGV0dGlJbWcgZnJvbSBcIi4uL2ltZy9zcGFnaGV0dGkuanBnXCI7XHJcbmltcG9ydCBzYW5kd2ljaEltZyBmcm9tIFwiLi4vaW1nL3NhbmR3aGljaC5qcGdcIjtcclxuaW1wb3J0IHBhbmNha2VzSW1nIGZyb20gXCIuLi9pbWcvcGFuY2FrZXMuanBnXCI7XHJcbmltcG9ydCBlZ2dzSW1nIGZyb20gXCIuLi9pbWcvZWdncy5qcGdcIjtcclxuaW1wb3J0IGNha2VJbWcgZnJvbSBcIi4uL2ltZy9jYWtlLmpwZ1wiO1xyXG5pbXBvcnQgbGF2YUNha2VJbWcgZnJvbSBcIi4uL2ltZy9sYXZhQ2FrZS5qcGdcIjtcclxuLy8gaW1wb3J0IGNvY2t0YWlsSW1nIGZyb20gXCIuLi9pbWcvY29ja3RhaWwud2VicFwiO1xyXG4vLyBpbXBvcnQgb3JhbmdlSnVpY2VJbWcgZnJvbSBcIi4uL2ltZy9vcmFuZ2VKdWljZS53ZWJwXCI7XHJcblxyXG5cclxuLy9zdXBwb3J0aW5nIGZ1bmN0aW9uIHRvIGNyZWF0ZSBpdGVtIHdpdGggZGlzaCxkZXNjcmlwaXRvbiwgaW1nXHJcbmNvbnN0IGNyZWF0ZUl0ZW0gPSBmdW5jdGlvbihkaXNoLCBkZXNjcmlwdGlvbiwgZGlzaEltYWdlKSBcclxue1xyXG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpdGVtLWNvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgY29uc3QgaXRlbVdyaXR0ZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaXRlbVdyaXR0ZW4uY2xhc3NMaXN0LmFkZChcIml0ZW0td3JpdHRlblwiKTtcclxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVdyaXR0ZW4pO1xyXG5cclxuICAgIGNvbnN0IGRpc2hIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGRpc2hIMy50ZXh0Q29udGVudCA9IGRpc2g7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRlc2NyaXB0aW9uUC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgaXRlbVdyaXR0ZW4uYXBwZW5kQ2hpbGQoZGlzaEgzKTtcclxuICAgIGl0ZW1Xcml0dGVuLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUCk7XHJcblxyXG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsaW5lLmNsYXNzTGlzdC5hZGQoXCJpdGVtLWxpbmVcIik7XHJcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmUpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJpdGVtLXBpY3R1cmVcIik7XHJcbiAgICBpbWFnZS5zcmMgPSBkaXNoSW1hZ2U7XHJcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcclxuXHJcbiAgICByZXR1cm4gaXRlbUNvbnRhaW5lcjtcclxufVxyXG5cclxuLy9zdXBwb3J0aW5nIGZ1bmN0aW9uIHRvIGNyZWF0ZSBTZWN0aW9uIHdpdGggdGl0bGVcclxuY29uc3QgY3JlYXRlU2VjdGlvbiA9IGZ1bmN0aW9uKHRpdGxlKSBcclxue1xyXG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1lbnUtc2VjdGlvblwiKTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIG1lbnVUaXRsZS5pZCA9IFwibWVudS10aXRsZVwiO1xyXG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50PXRpdGxlO1xyXG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcclxuXHJcbiAgICByZXR1cm4gbWVudVNlY3Rpb247XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgbWVudSA9IGZ1bmN0aW9uKCkgXHJcbntcclxuICAgIC8qXHJcbiAgICBuZXdJdGVtID0gY3JlYXRlSXRlbShcIlwiLCBcIlwiLCApO1xyXG4gICAgbmV3U2VjdGlvbi5hcHBlbmRDaGlsZChuZXdJdGVtKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3U2VjdGlvbik7XHJcbiAgICAqL1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIilcclxuXHJcbiAgICBjb25zdCBtZW51UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51UGFnZS5pZCA9IFwibWVudXBhZ2VcIjtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVBhZ2UpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVQYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcclxuICAgIG1lbnVQYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAgIG1lbnVQYWdlVGl0bGUuaWQ9IFwibWVudXBhZ2UtdGl0bGVcIjtcclxuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKG1lbnVQYWdlVGl0bGUpO1xyXG5cclxuICAgIGxldCBuZXdTZWN0aW9uID0gY3JlYXRlU2VjdGlvbihcIkJyZWFrZmFzdFwiKVxyXG5cclxuICAgIGxldCBuZXdJdGVtID0gY3JlYXRlSXRlbShcIlBhbmNha2UgQmxpc3NcIiwgXCJGbHVmZnkgcGFuY2FrZXMgYWRvcm5lZCB3aXRoIHBsdW1wIGJsdWViZXJyaWVzLCBhIG1pbmlhdHVyZSBkZWxpZ2h0IGZvciB5b3VyIHRhc3RlIGJ1ZHMuXCIsIHBhbmNha2VzSW1nKTtcclxuICAgIG5ld1NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3SXRlbSk7XHJcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChuZXdTZWN0aW9uKTtcclxuXHJcbiAgICBuZXdJdGVtID0gY3JlYXRlSXRlbShcIk1pY3Jvc2NvcGljIE1vcm5pbmcgRGVsaWdodDpcIiwgXCJUaW55IHN1bm55LXNpZGUtdXAgZWdncywgY29va2VkIHRvIHBlcmZlY3Rpb24sIGEgcG9ja2V0LXNpemVkIGJyZWFrZmFzdCBzZW5zYXRpb24uXCIsIGVnZ3NJbWcpO1xyXG4gICAgbmV3U2VjdGlvbi5hcHBlbmRDaGlsZChuZXdJdGVtKTtcclxuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKG5ld1NlY3Rpb24pO1xyXG5cclxuICAgIG5ld1NlY3Rpb24gPSBjcmVhdGVTZWN0aW9uKFwiRGlubmVyXCIpXHJcblxyXG4gICAgbmV3SXRlbSA9IGNyZWF0ZUl0ZW0oXCJQaW50LVNpemVkIFBpenphIFBsZWFzZXI6XCIsIFwiQSB0aW55IHBpenphIG1hc3RlcnBpZWNlLCBidXJzdGluZyB3aXRoIGNoZWVzeSBnb29kbmVzcyBhbmQgc2F2b3J5IHRvcHBpbmdzLlwiLCBwaXp6YUltZyk7XHJcbiAgICBuZXdTZWN0aW9uLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xyXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobmV3U2VjdGlvbik7XHJcblxyXG4gICAgbmV3SXRlbSA9IGNyZWF0ZUl0ZW0oXCJCaXRlLXNpemVkIEJ1cmdlciBCb25hbnphOlwiLCBcIkEgbWluaSBidXJnZXIgc2Vuc2F0aW9uIHdpdGggYSBqdWljeSBwYXR0eSwgY3Jpc3AgbGV0dHVjZSwgYW5kIGEgZG9sbG9wIG9mIHNwZWNpYWwgc2F1Y2VcIiwgYnVyZ2VySW1nKTtcclxuICAgIG5ld1NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3SXRlbSk7XHJcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChuZXdTZWN0aW9uKTtcclxuXHJcbiAgICBuZXdJdGVtID0gY3JlYXRlSXRlbShcIlRpbnkgVHdpcmwgU3BhZ2hldHRpOlwiLCBcIkRlbGljYXRlIHN3aXJscyBvZiBzcGFnaGV0dGksIGNvYXRlZCBpbiBhIHJpY2ggdG9tYXRvIHNhdWNlLCBhIHRpbnkgSXRhbGlhbiBmZWFzdC5cIiwgc3BhZ2hldHRpSW1nKTtcclxuICAgIG5ld1NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3SXRlbSk7XHJcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChuZXdTZWN0aW9uKTtcclxuXHJcbiAgICBuZXdJdGVtID0gY3JlYXRlSXRlbShcIkl0dHktQml0dHkgU2FuZHdpY2ggU3ltcGhvbnk6XCIsIFwiQSBwZXRpdGUgc2FuZHdpY2ggb3JjaGVzdHJhIG9mIGZyZXNoIGluZ3JlZGllbnRzLCBjcmVhdGluZyBhIGhhcm1vbmlvdXMgbWVkbGV5IG9mIGZsYXZvcnMuXCIsIHNhbmR3aWNoSW1nKTtcclxuICAgIG5ld1NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3SXRlbSk7XHJcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChuZXdTZWN0aW9uKTtcclxuXHJcbiAgICBuZXdTZWN0aW9uID0gY3JlYXRlU2VjdGlvbihcIkRlc2VydFwiKTtcclxuXHJcbiAgICBuZXdJdGVtID0gY3JlYXRlSXRlbShcIk1vcnNlbCBvZiBDYXJyb3QgQ2FrZSBIZWF2ZW46XCIsIFwiTWluaSBjYXJyb3QgY2FrZSBtYXJ2ZWxzLCBpbmZ1c2VkIHdpdGggc3BpY2VzIGFuZCB0b3BwZWQgd2l0aCBhIGhpbnQgb2YgY3JlYW15IGZyb3N0aW5nLlwiLCBjYWtlSW1nKTtcclxuICAgIG5ld1NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3SXRlbSk7XHJcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChuZXdTZWN0aW9uKTtcclxuXHJcbiAgICBuZXdJdGVtID0gY3JlYXRlSXRlbShcIkxpbGxpcHV0aWFuIENob2NvbGF0ZSBMYXZhIEluZHVsZ2VuY2U6XCIsIFwiQSBkaW1pbnV0aXZlIGNob2NvbGF0ZSBsYXZhIGNha2UsIG9vemluZyB3aXRoIG1vbHRlbiBnb29kbmVzcywgYSBzd2VldCBlcnVwdGlvbiBpbiBldmVyeSBiaXRlLlwiLCBsYXZhQ2FrZUltZyk7XHJcbiAgICBuZXdTZWN0aW9uLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xyXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobmV3U2VjdGlvbik7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9ob21lLmNzcyc7XHJcbmltcG9ydCBob21lIGZyb20gXCIuL3BhZ2VzL2hvbWVcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vcGFnZXMvbWVudVwiO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9wYWdlcy9jb250YWN0XCI7XHJcblxyXG5jb25zb2xlLmxvZyhcIkV2ZXJ5dGhpbmcgaXMgd29ya2luZ1wiKTtcclxuXHJcbi8vIGhvbWUoKTtcclxuLy8gbWVudSgpO1xyXG5jb250YWN0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==