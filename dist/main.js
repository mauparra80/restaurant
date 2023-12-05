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
    /* background-color: rgba(221, 221, 221, 0.338); */
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

#contactpage,
#menupage,
#main{
    position: relative;
    /* background-color: whitesmoke; */
    border-radius: 10px;
    margin: 20px;
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
    gap: 30px;
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
    flex: 2 1 100px;
    max-width: 300px;
    height: 100%;
    object-fit: cover;
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
}


/****** foot *****/

.foot{
    padding: 20px;
    text-align: center;
    font-size: 10px;
}

.foot p a{
    text-decoration: none;

}`, "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":"AAAA;IACI,uCAAuC;AAC3C;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,4DAA4D;AAChE;;AAEA;IACI,kDAAkD;IAClD,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,WAAW;IACX,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,8BAA8B;IAC9B,oCAAoC;IACpC,WAAW;;AAEf;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;;IAElB,mBAAmB;IACnB,oCAAoC;IACpC;AACJ;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,QAAQ;IACR,WAAW;IACX,6BAA6B;IAC7B,2BAA2B;IAC3B,uDAAuD;AAC3D;;AAEA;IACI,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;;;AAIA;IACI,aAAa;AACjB;;AAEA;;;IAGI,kBAAkB;IAClB,kCAAkC;IAClC,mBAAmB;IACnB,YAAY;AAChB;;AAEA;;IAEI,kBAAkB;IAClB,8BAA8B;IAC9B,6BAA6B;AACjC;;AAEA;IACI,MAAM;IACN,YAAY;IACZ,WAAW;IACX,OAAO;AACX;;AAEA;IACI,SAAS;IACT,SAAS;IACT,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,aAAa;IACb,aAAa;IACb,SAAS;IACT,6BAA6B;IAC7B,WAAW;IACX,eAAe;;AAEnB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,aAAa;IACb,kBAAkB;IAClB,sDAAsD;AAC1D;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;;IAGI,eAAe;IACf,kCAAkC;IAClC,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;;IAElB,sDAAsD;;AAE1D;;AAEA;IACI,qBAAqB;;AAEzB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,sDAAsD;IACtD,gBAAgB;;AAEpB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;AACrB;;;AAGA;IACI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,WAAW;AACf;;;AAGA,SAAS;;AAET;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,uBAAuB;;IAEvB,8BAA8B;IAC9B,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,aAAa;IACb,wBAAwB;IACxB,kCAAkC;AACtC;;AAEA;;IAEI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,+BAA+B;IAC/B,wBAAwB;;IAExB,4CAA4C;AAChD;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;;AAGA;IACI,YAAY;;IAEZ,qBAAqB;AACzB;;;AAGA;IACI,gBAAgB;AACpB;;;;AAIA,YAAY;AACZ;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;;AAGA,kBAAkB;;AAElB;IACI,aAAa;IACb,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,qBAAqB;;AAEzB","sourcesContent":[":root{\r\n    --color-tan: rgba(210, 180, 140, 0.334);\r\n}\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody{\r\n    /* background-color: rgba(221, 221, 221, 0.338); */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.content{\r\n    position: relative;\r\n    background-color: rgb(255, 255, 255);\r\n    width: 80vw;\r\n    padding: 20px 50px 20px 50px;\r\n}\r\n\r\n.head{\r\n    display: flex;\r\n    padding: 20px 80px 20px 80px;\r\n    justify-content: space-between;\r\n    background-color: rgb(255, 255, 255);\r\n    width: 80vw;\r\n    \r\n}\r\n\r\n#nav{\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n#nav a{\r\n    text-decoration: none;\r\n    padding: 5px;\r\n    font-size: 1.1em;\r\n    font-weight: 600;\r\n    color: rgb(69, 69, 69);\r\n    position: relative;\r\n\r\n    padding-bottom: 2px;\r\n    border-bottom: 2px solid transparent;\r\n    transition: color 0.3s ease, padding-bottom 0.3s ease, border-bottom 0.3s ease\r\n}\r\n\r\n#nav a::before{\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 10px;\r\n    left: 50%;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: transparent;\r\n    transform: translateX(-50%);\r\n    transition: width 0.3s ease, background-color 0.3s ease;\r\n}\r\n\r\n#nav a:hover::before{\r\n    width: 100%;\r\n    background-color: black;\r\n}\r\n\r\n#nav a:hover{\r\n    color: black;\r\n}\r\n\r\n\r\n\r\n.nav{\r\n    display: flex;\r\n}\r\n\r\n#contactpage,\r\n#menupage,\r\n#main{\r\n    position: relative;\r\n    /* background-color: whitesmoke; */\r\n    border-radius: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n#box1,\r\n#box2{\r\n    position: absolute;\r\n    border: 2px solid rgb(0, 0, 0);\r\n    background-color: transparent;\r\n}\r\n\r\n#box1{\r\n    top: 0;\r\n    bottom: 15px;\r\n    right: 15px;\r\n    left: 0;\r\n}\r\n\r\n#box2{\r\n    top: 15px;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 15px;\r\n}\r\n\r\n.section{\r\n    padding: 50px;\r\n    display: flex;\r\n    gap: 30px;\r\n    justify-content: space-around;\r\n    z-index: 99;\r\n    flex-wrap: wrap;\r\n    \r\n}\r\n\r\n#location-title,\r\n#hours-title{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#about{\r\n    background-color: var(--color-tan);\r\n    padding: 50px;\r\n    border-radius: 5px;\r\n    box-shadow: 2px 2px 5px 2px rgba(128, 128, 128, 0.529);\r\n}\r\n\r\n#about-title{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#hours,\r\n#location,\r\n#contact{\r\n    flex: 1 1 300px;\r\n    background-color: var(--color-tan);\r\n    padding: 30px;\r\n    min-width: 300px;\r\n    max-width: 400px;\r\n    text-align: center;\r\n\r\n    box-shadow: 2px 2px 5px 2px rgba(128, 128, 128, 0.529);\r\n\r\n}\r\n\r\n#hours ul{\r\n    list-style-type: none;\r\n    \r\n}\r\n\r\nimg{\r\n    width: 100%;\r\n    object-fit: fill;\r\n    box-shadow: 2px 2px 5px 2px rgba(128, 128, 128, 0.529);\r\n    min-width: 100px;\r\n\r\n}\r\n\r\n#middle-pic img{\r\n    flex: 2 1 100px;\r\n    max-width: 300px;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n\r\n.location-written{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.foot{\r\n    background-color: white;\r\n    height: 100px;\r\n    width: 80vw;\r\n}\r\n\r\n\r\n/* menu */\r\n\r\n#contactpage,\r\n#menupage{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    justify-content: center;\r\n\r\n    padding: 50px 100px 50px 100px;\r\n    margin: auto;\r\n    max-width: 1000px;\r\n}\r\n\r\n.menu-section{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    padding: 50px;\r\n    border: 2px double black;\r\n    background-color: var(--color-tan);\r\n}\r\n\r\n#menupage-title,\r\n#contactpage-title{\r\n    align-self: center;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#menu-title{\r\n    align-self: center;\r\n    justify-self: center;\r\n    text-decoration: underline;\r\n}\r\n\r\n.item-container{\r\n    display: flex;\r\n    align-items: center;\r\n    /* padding: 20px 20px 0 20px; */\r\n    margin: 20px 20px 0 20px;\r\n\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.31);\r\n}\r\n\r\n.item-written{\r\n    align-self: end;\r\n}\r\n\r\n.item-written p{\r\n    font-style:italic;\r\n}\r\n\r\n\r\n.item-line{\r\n    flex-grow: 2;\r\n    \r\n    margin: 0 20px 0 20px;\r\n}\r\n\r\n\r\n.item-picture{\r\n    max-width: 100px;;\r\n}\r\n\r\n\r\n\r\n/* contact */\r\n#info{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#careers p{\r\n    font-size: 10px;\r\n}\r\n\r\n#contact-bottom-img{\r\n    height: 300px;\r\n    object-fit: cover;\r\n}\r\n\r\n\r\n/****** foot *****/\r\n\r\n.foot{\r\n    padding: 20px;\r\n    text-align: center;\r\n    font-size: 10px;\r\n}\r\n\r\n.foot p a{\r\n    text-decoration: none;\r\n\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/img/tiny-men.jpg":
/*!******************************!*\
  !*** ./src/img/tiny-men.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8da4ffd18ee23f82512e18e2c846c396.jpg");

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

/***/ "./src/functions/clear.js":
/*!********************************!*\
  !*** ./src/functions/clear.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const clear = function() 
{
    const content = document.querySelector(".content");

    content.innerHTML = "";


    const box1 = document.createElement("div");
    box1.id="box1";
    const box2 = document.createElement("div");
    box2.id="box2";
    content.appendChild(box1);
    content.appendChild(box2);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clear);

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
/* harmony import */ var _img_tiny_men_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/tiny-men.jpg */ "./src/img/tiny-men.jpg");



const home = function(){
    const content = document.querySelector('.content');

    const main = document.createElement("div");
    main.id="main";
    content.appendChild(main);

    

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
    middleImg.src = _img_tiny_men_jpg__WEBPACK_IMPORTED_MODULE_0__["default"] //wonder if I have to put this directory path
    middleImg.id="homeImg";
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
/* harmony import */ var _functions_clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/clear */ "./src/functions/clear.js");






console.log("Everything is working");

const homeButton = document.querySelector("#homeBtn");
const menuButton = document.querySelector("#menuBtn");
const contactButton = document.querySelector("#contactBtn");

(0,_functions_clear__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])();

homeButton.addEventListener('click', (event) => {
    console.log("click on home");
    event.preventDefault();
    (0,_functions_clear__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
    
});

menuButton.addEventListener('click', (event) => {
    console.log("click on menu");
    event.preventDefault();
    (0,_functions_clear__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

contactButton.addEventListener('click', (event) => {
    console.log("click on menu");
    event.preventDefault();
    (0,_functions_clear__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_pages_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
});




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsU0FBUyxLQUFLLFVBQVUsT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsY0FBYyxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxXQUFXLE1BQU0sVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxTQUFTLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLGFBQWEsZ0NBQWdDLGdEQUFnRCxLQUFLLFVBQVUsa0JBQWtCLG1CQUFtQiwrQkFBK0IscUVBQXFFLEtBQUssYUFBYSx5REFBeUQsd0JBQXdCLCtCQUErQiw0QkFBNEIsS0FBSyxpQkFBaUIsMkJBQTJCLDZDQUE2QyxvQkFBb0IscUNBQXFDLEtBQUssY0FBYyxzQkFBc0IscUNBQXFDLHVDQUF1Qyw2Q0FBNkMsb0JBQW9CLGFBQWEsYUFBYSxzQkFBc0Isa0JBQWtCLEtBQUssZUFBZSw4QkFBOEIscUJBQXFCLHlCQUF5Qix5QkFBeUIsK0JBQStCLDJCQUEyQixnQ0FBZ0MsNkNBQTZDLDJGQUEyRix1QkFBdUIsb0JBQW9CLDJCQUEyQixxQkFBcUIsa0JBQWtCLGlCQUFpQixvQkFBb0Isc0NBQXNDLG9DQUFvQyxnRUFBZ0UsS0FBSyw2QkFBNkIsb0JBQW9CLGdDQUFnQyxLQUFLLHFCQUFxQixxQkFBcUIsS0FBSyxxQkFBcUIsc0JBQXNCLEtBQUssNkNBQTZDLDJCQUEyQix5Q0FBeUMsOEJBQThCLHFCQUFxQixLQUFLLHdCQUF3QiwyQkFBMkIsdUNBQXVDLHNDQUFzQyxLQUFLLGNBQWMsZUFBZSxxQkFBcUIsb0JBQW9CLGdCQUFnQixLQUFLLGNBQWMsa0JBQWtCLGtCQUFrQixpQkFBaUIsbUJBQW1CLEtBQUssaUJBQWlCLHNCQUFzQixzQkFBc0Isa0JBQWtCLHNDQUFzQyxvQkFBb0Isd0JBQXdCLGFBQWEseUNBQXlDLDRCQUE0QixLQUFLLGVBQWUsMkNBQTJDLHNCQUFzQiwyQkFBMkIsK0RBQStELEtBQUsscUJBQXFCLDRCQUE0QixLQUFLLDBDQUEwQyx3QkFBd0IsMkNBQTJDLHNCQUFzQix5QkFBeUIseUJBQXlCLDJCQUEyQixtRUFBbUUsU0FBUyxrQkFBa0IsOEJBQThCLGFBQWEsWUFBWSxvQkFBb0IseUJBQXlCLCtEQUErRCx5QkFBeUIsU0FBUyx3QkFBd0Isd0JBQXdCLHlCQUF5QixxQkFBcUIsMEJBQTBCLEtBQUssOEJBQThCLDRCQUE0QixLQUFLLGNBQWMsZ0NBQWdDLHNCQUFzQixvQkFBb0IsS0FBSyx5REFBeUQsc0JBQXNCLCtCQUErQixrQkFBa0IsZ0NBQWdDLDJDQUEyQyxxQkFBcUIsMEJBQTBCLEtBQUssc0JBQXNCLHNCQUFzQiwrQkFBK0IsMEJBQTBCLGlDQUFpQywyQ0FBMkMsS0FBSywrQ0FBK0MsMkJBQTJCLDRCQUE0QixLQUFLLG9CQUFvQiwyQkFBMkIsNkJBQTZCLG1DQUFtQyxLQUFLLHdCQUF3QixzQkFBc0IsNEJBQTRCLHNDQUFzQyxtQ0FBbUMseURBQXlELEtBQUssc0JBQXNCLHdCQUF3QixLQUFLLHdCQUF3QiwwQkFBMEIsS0FBSyx1QkFBdUIscUJBQXFCLHNDQUFzQyxLQUFLLDBCQUEwQiwwQkFBMEIsS0FBSyx1Q0FBdUMsNEJBQTRCLEtBQUssbUJBQW1CLHdCQUF3QixLQUFLLDRCQUE0QixzQkFBc0IsMEJBQTBCLEtBQUssNkNBQTZDLHNCQUFzQiwyQkFBMkIsd0JBQXdCLEtBQUssa0JBQWtCLDhCQUE4QixTQUFTLG1CQUFtQjtBQUNudk47QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4UjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZkEsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0MvRSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFxRztBQUNyRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSStDO0FBQ3ZFLE9BQU8saUVBQWUscUZBQU8sSUFBSSxxRkFBTyxVQUFVLHFGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7O0FDaEIwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUM5RXRCO0FBQzRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseURBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR3FCO0FBQ0U7QUFDTTtBQUNEO0FBQ0Q7QUFDUjtBQUNBO0FBQ1E7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBJQUEwSSx5REFBVztBQUNySjtBQUNBO0FBQ0E7QUFDQSwrSUFBK0kscURBQU87QUFDdEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNJQUFzSSxzREFBUTtBQUM5STtBQUNBO0FBQ0E7QUFDQSxtSkFBbUosdURBQVM7QUFDNUo7QUFDQTtBQUNBO0FBQ0Esd0lBQXdJLDBEQUFZO0FBQ3BKO0FBQ0E7QUFDQTtBQUNBLHdKQUF3SiwwREFBVztBQUNuSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLHFEQUFPO0FBQzdKO0FBQ0E7QUFDQTtBQUNBLHFLQUFxSyx5REFBVztBQUNoTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7O1VDckhuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMkI7QUFDSztBQUNBO0FBQ007QUFDQTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUFLO0FBQ0wsdURBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQUs7QUFDVCxJQUFJLHVEQUFJO0FBQ1I7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFLO0FBQ1QsSUFBSSx1REFBSTtBQUNSLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQUs7QUFDVCxJQUFJLDBEQUFPO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL2hvbWUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltZy9idXJnZXIuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1nL2Nha2UuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1nL2VnZ3MuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1nL2xhdmFDYWtlLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltZy9wYW5jYWtlcy5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWcvcGl6emEuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1nL3Jlc3RhdXJhbnQuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1nL3NhbmR3aGljaC5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWcvc3BhZ2hldHRpLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltZy90aW55LW1lbi5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvaG9tZS5jc3M/NGI1MSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZnVuY3Rpb25zL2NsZWFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xyXG4gICAgLS1jb2xvci10YW46IHJnYmEoMjEwLCAxODAsIDE0MCwgMC4zMzQpO1xyXG59XHJcblxyXG4qe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuMzM4KTsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIHBhZGRpbmc6IDIwcHggNTBweCAyMHB4IDUwcHg7XHJcbn1cclxuXHJcbi5oZWFke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDIwcHggODBweCAyMHB4IDgwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIFxyXG59XHJcblxyXG4jbmF2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuI25hdiBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogcmdiKDY5LCA2OSwgNjkpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UsIHBhZGRpbmctYm90dG9tIDAuM3MgZWFzZSwgYm9yZGVyLWJvdHRvbSAwLjNzIGVhc2VcclxufVxyXG5cclxuI25hdiBhOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbiNuYXYgYTpob3Zlcjo6YmVmb3Jle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI25hdiBhOmhvdmVye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbi5uYXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jY29udGFjdHBhZ2UsXHJcbiNtZW51cGFnZSxcclxuI21haW57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuI2JveDEsXHJcbiNib3gye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiNib3gxe1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jYm94MntcclxuICAgIHRvcDogMTVweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMTVweDtcclxufVxyXG5cclxuLnNlY3Rpb257XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMzBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBcclxufVxyXG5cclxuI2xvY2F0aW9uLXRpdGxlLFxyXG4jaG91cnMtdGl0bGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jYWJvdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10YW4pO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTI5KTtcclxufVxyXG5cclxuI2Fib3V0LXRpdGxle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuI2hvdXJzLFxyXG4jbG9jYXRpb24sXHJcbiNjb250YWN0e1xyXG4gICAgZmxleDogMSAxIDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGFuKTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUyOSk7XHJcblxyXG59XHJcblxyXG4jaG91cnMgdWx7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBcclxufVxyXG5cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MjkpO1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuXHJcbn1cclxuXHJcbiNtaWRkbGUtcGljIGltZ3tcclxuICAgIGZsZXg6IDIgMSAxMDBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuXHJcbi5sb2NhdGlvbi13cml0dGVue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvb3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogODB2dztcclxufVxyXG5cclxuXHJcbi8qIG1lbnUgKi9cclxuXHJcbiNjb250YWN0cGFnZSxcclxuI21lbnVwYWdle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBwYWRkaW5nOiA1MHB4IDEwMHB4IDUwcHggMTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxufVxyXG5cclxuLm1lbnUtc2VjdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBkb3VibGUgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10YW4pO1xyXG59XHJcblxyXG4jbWVudXBhZ2UtdGl0bGUsXHJcbiNjb250YWN0cGFnZS10aXRsZXtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNtZW51LXRpdGxle1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLml0ZW0tY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKiBwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4OyAqL1xyXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMCAyMHB4O1xyXG5cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzEpO1xyXG59XHJcblxyXG4uaXRlbS13cml0dGVue1xyXG4gICAgYWxpZ24tc2VsZjogZW5kO1xyXG59XHJcblxyXG4uaXRlbS13cml0dGVuIHB7XHJcbiAgICBmb250LXN0eWxlOml0YWxpYztcclxufVxyXG5cclxuXHJcbi5pdGVtLWxpbmV7XHJcbiAgICBmbGV4LWdyb3c6IDI7XHJcbiAgICBcclxuICAgIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcclxufVxyXG5cclxuXHJcbi5pdGVtLXBpY3R1cmV7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4OztcclxufVxyXG5cclxuXHJcblxyXG4vKiBjb250YWN0ICovXHJcbiNpbmZve1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuI2NhcmVlcnMgcHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuI2NvbnRhY3QtYm90dG9tLWltZ3tcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuXHJcbi8qKioqKiogZm9vdCAqKioqKi9cclxuXHJcbi5mb290e1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmZvb3QgcCBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLGtEQUFrRDtJQUNsRCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyxXQUFXOztBQUVmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsa0JBQWtCOztJQUVsQixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7O0FBSUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOzs7SUFHSSxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksTUFBTTtJQUNOLFlBQVk7SUFDWixXQUFXO0lBQ1gsT0FBTztBQUNYOztBQUVBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxlQUFlOztBQUVuQjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCOztJQUVsQixzREFBc0Q7O0FBRTFEOztBQUVBO0lBQ0kscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0RBQXNEO0lBQ3RELGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7OztBQUdBLFNBQVM7O0FBRVQ7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsdUJBQXVCOztJQUV2Qiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsa0NBQWtDO0FBQ3RDOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLHdCQUF3Qjs7SUFFeEIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxZQUFZOztJQUVaLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSSxnQkFBZ0I7QUFDcEI7Ozs7QUFJQSxZQUFZO0FBQ1o7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7O0FBR0Esa0JBQWtCOztBQUVsQjtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjs7QUFFekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxyXFxuICAgIC0tY29sb3ItdGFuOiByZ2JhKDIxMCwgMTgwLCAxNDAsIDAuMzM0KTtcXHJcXG59XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC4zMzgpOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIHdpZHRoOiA4MHZ3O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHggMjBweCA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogMjBweCA4MHB4IDIwcHggODBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIHdpZHRoOiA4MHZ3O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI25hdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2IGF7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogcmdiKDY5LCA2OSwgNjkpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLCBwYWRkaW5nLWJvdHRvbSAwLjNzIGVhc2UsIGJvcmRlci1ib3R0b20gMC4zcyBlYXNlXFxyXFxufVxcclxcblxcclxcbiNuYXYgYTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDEwcHg7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2IGE6aG92ZXI6OmJlZm9yZXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2IGE6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLm5hdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3RwYWdlLFxcclxcbiNtZW51cGFnZSxcXHJcXG4jbWFpbntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlOyAqL1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNib3gxLFxcclxcbiNib3gye1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbiNib3gxe1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMTVweDtcXHJcXG4gICAgcmlnaHQ6IDE1cHg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNib3gye1xcclxcbiAgICB0b3A6IDE1cHg7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9ue1xcclxcbiAgICBwYWRkaW5nOiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB6LWluZGV4OiA5OTtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI2xvY2F0aW9uLXRpdGxlLFxcclxcbiNob3Vycy10aXRsZXtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10YW4pO1xcclxcbiAgICBwYWRkaW5nOiA1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTI5KTtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0LXRpdGxle1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaG91cnMsXFxyXFxuI2xvY2F0aW9uLFxcclxcbiNjb250YWN0e1xcclxcbiAgICBmbGV4OiAxIDEgMzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRhbik7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MjkpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jaG91cnMgdWx7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmltZ3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGZpbGw7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTI5KTtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI21pZGRsZS1waWMgaW1ne1xcclxcbiAgICBmbGV4OiAyIDEgMTAwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5sb2NhdGlvbi13cml0dGVue1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIHdpZHRoOiA4MHZ3O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBtZW51ICovXFxyXFxuXFxyXFxuI2NvbnRhY3RwYWdlLFxcclxcbiNtZW51cGFnZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogNTBweCAxMDBweCA1MHB4IDEwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1zZWN0aW9ue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA1MHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBkb3VibGUgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRhbik7XFxyXFxufVxcclxcblxcclxcbiNtZW51cGFnZS10aXRsZSxcXHJcXG4jY29udGFjdHBhZ2UtdGl0bGV7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUtdGl0bGV7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC8qIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7ICovXFxyXFxuICAgIG1hcmdpbjogMjBweCAyMHB4IDAgMjBweDtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zMSk7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXdyaXR0ZW57XFxyXFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0td3JpdHRlbiBwe1xcclxcbiAgICBmb250LXN0eWxlOml0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLml0ZW0tbGluZXtcXHJcXG4gICAgZmxleC1ncm93OiAyO1xcclxcbiAgICBcXHJcXG4gICAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaXRlbS1waWN0dXJle1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHB4OztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogY29udGFjdCAqL1xcclxcbiNpbmZve1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2FyZWVycyBwe1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWJvdHRvbS1pbWd7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKioqKioqIGZvb3QgKioqKiovXFxyXFxuXFxyXFxuLmZvb3R7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdCBwIGF7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzIzMjVkMjZjYzAyMmZiNWRjYzUwYzI0YmNkZjMyNjIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImM3ZmQ0MjEyMzU0YmVmYzBmMzM4ZDViYjA5ZTFmZWE0LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0ODYwNzczMTQyNzY5MDBlZDBlYzJmOTc4NGI0MDQ1NC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzVjZDQ2MjJkYTczZjczZmFiOWY5Yjk3OTIxNTQ4YmMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIwYmMzODdiMjg1YjhlNjExMjAzYTM5NjYwMWNkZGU4LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiNmM2ZjlhZWNhNjc3ZTNkYWNlMjExNjllMDlkMjVlMi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGI0ODhjODFhY2IzNmRlZDliZGViZmQ3Zjk2ZDlhN2YuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM2MTczYzM2NzNmYjhmMmFjMTMzZmUwMTVjYWI2ODdhLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1M2EwYTM1ZTVhMzZjMTQ3MGMyM2NjYjRlNThmOGRlNS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGRhNGZmZDE4ZWUyM2Y4MjUxMmUxOGUyYzg0NmMzOTYuanBnXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXHJcbmNvbnN0IGNsZWFyID0gZnVuY3Rpb24oKSBcclxue1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuXHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG5cclxuICAgIGNvbnN0IGJveDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm94MS5pZD1cImJveDFcIjtcclxuICAgIGNvbnN0IGJveDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm94Mi5pZD1cImJveDJcIjtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm94MSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJveDIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGVhcjsiLCJpbXBvcnQgcmVzdGF1cmFudCBmcm9tIFwiLi4vaW1nL3Jlc3RhdXJhbnQuanBnXCJcclxuXHJcbmNvbnN0IGNvbnRhY3QgPSBmdW5jdGlvbigpIFxyXG57XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhY3RQYWdlLmlkPVwiY29udGFjdHBhZ2VcIjtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFBhZ2UpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RQYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBjb250YWN0UGFnZVRpdGxlLmlkPVwiY29udGFjdHBhZ2UtdGl0bGVcIjtcclxuICAgIGNvbnRhY3RQYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuICAgIGNvbnRhY3RQYWdlLmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlVGl0bGUpO1xyXG5cclxuICAgIC8vc2VjdGlvbjFcclxuICAgIC8vY29udGFjdFxyXG4gICAgY29uc3Qgc2VjdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2VjdGlvbjEuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XHJcbiAgICBjb250YWN0UGFnZS5hcHBlbmRDaGlsZChzZWN0aW9uMSk7XHJcblxyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWN0LmlkID0gXCJjb250YWN0XCI7XHJcbiAgICBzZWN0aW9uMS5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuXHJcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGluZm8uaWQ9XCJpbmZvXCI7XHJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGluZm8pO1xyXG5cclxuICAgIGluZm8uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKSkudGV4dENvbnRlbnQgPSAnVGlueSBGb29kcyc7XHJcbiAgICBpbmZvLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSkuaW5uZXJUZXh0ID0gJzMyMS02NTQtMDk4Nyc7XHJcbiAgICBpbmZvLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSkudGV4dENvbnRlbnQgPSAndGlueWZvb2RzLmNvbnRhY3RAdGlueXdvcmxkLmNvbSc7XHJcblxyXG4gICAgY29uc3QgY2FyZWVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJlZXJzLmlkPVwiY2FyZWVyc1wiO1xyXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjYXJlZXJzKTtcclxuXHJcbiAgICBjYXJlZXJzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJykpLnRleHRDb250ZW50ID0gJ0pvaW4gT3VyIFRpbnkgVGVhbSBUb2RheSEnO1xyXG4gICAgY2FyZWVycy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpLnRleHRDb250ZW50ID0gJypNdXN0IGJlIHVuZGVyIDEgZm9vdCB0YWxsIHRvIGFwcGx5Lic7XHJcblxyXG4gICAgLy9zZWN0aW9uMSBzZXJ2aWNlXHJcblxyXG4gICAgLy9zZWN0aW9uMSBsb2NhdGlvblxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9jYXRpb24uaWQgPSBcImxvY2F0aW9uXCI7XHJcbiAgICBzZWN0aW9uMS5hcHBlbmRDaGlsZChsb2NhdGlvbik7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsb2NhdGlvblRpdGxlLmlkID0gXCJsb2NhdGlvbi10aXRsZVwiO1xyXG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25UaXRsZSk7XHJcbiAgICBjb25zdCBsb2NhdGlvbnRpdGxlaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBsb2NhdGlvbnRpdGxlaDMudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XHJcbiAgICBsb2NhdGlvblRpdGxlLmFwcGVuZENoaWxkKGxvY2F0aW9udGl0bGVoMyk7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb25Xcml0dGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxvY2F0aW9uV3JpdHRlbi5pZCA9IFwibG9jYXRpb24td3JpdHRlblwiO1xyXG4gICAgbG9jYXRpb25Xcml0dGVuLnRleHRDb250ZW50ID0gXCI4MjMxIEtpdGNoZW4gQ29ybmVyIGxuLiBGbG9vckNpdHkgU29tZW9uZXNIb3VzZVwiO1xyXG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25Xcml0dGVuKTtcclxuXHJcbiAgICBjb25zdCBsb2NhdGlvbk1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsb2NhdGlvbk1hcC5pZCA9IFwibG9jYXRpb24tbWFwXCI7XHJcbiAgICBjb25zdCBsb2NhdGlvbmltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBsb2NhdGlvbmltZy5zcmMgPSBcIi4uL3NyYy9pbWcvdGlueWZvb2RzLW1hcC5qcGdcIjtcclxuICAgIGxvY2F0aW9uTWFwLmFwcGVuZENoaWxkKGxvY2F0aW9uaW1nKTtcclxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uTWFwKTtcclxuXHJcbiAgICAvL3NlY3Rpb24yXHJcbiAgICBjb25zdCBzZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWN0aW9uMi5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiKTtcclxuICAgIGNvbnRhY3RQYWdlLmFwcGVuZENoaWxkKHNlY3Rpb24yKTtcclxuXHJcbiAgICBjb25zdCBzZWN0aW9uMkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBzZWN0aW9uMkltZy5pZD1cImNvbnRhY3QtYm90dG9tLWltZ1wiO1xyXG4gICAgc2VjdGlvbjJJbWcuc3JjPXJlc3RhdXJhbnQ7XHJcbiAgICBzZWN0aW9uMi5hcHBlbmRDaGlsZChzZWN0aW9uMkltZyk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0OyIsIlxyXG5pbXBvcnQgdGlueU1lbkltZyBmcm9tIFwiLi4vaW1nL3RpbnktbWVuLmpwZ1wiXHJcblxyXG5jb25zdCBob21lID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWFpbi5pZD1cIm1haW5cIjtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3Qgc2VjdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2VjdGlvbjEuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24xKTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFib3V0LmlkPVwiYWJvdXRcIjtcclxuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKGFib3V0KTtcclxuXHJcbiAgICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFib3V0VGl0bGUuaWQ9XCJhYm91dC10aXRsZVwiO1xyXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSk7XHJcbiAgICBjb25zdCBhYm91dGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXHJcbiAgICBhYm91dGgyLnRleHRDb250ZW50ID0gXCJXZSBhcmUgVGlueUZvb2RzXCI7XHJcbiAgICBhYm91dFRpdGxlLmFwcGVuZENoaWxkKGFib3V0aDIpO1xyXG5cclxuICAgIGNvbnN0IGFib3V0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWJvdXREZXNjcmlwdGlvbi5pZCA9IFwiYWJvdXQtZGVzY3JpcHRpb25cIjtcclxuICAgIGNvbnN0IGFib3V0cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgYWJvdXRwLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIG91ciB1bmlxdWUgY3VsaW5hcnkgaGF2ZW4sIHdoZXJlIGdhc3Ryb25vbXkgbWVldHMgdGhlIG1pbmlhdHVyZSB3b3JsZCEgQXQgb3VyIHJlc3RhdXJhbnQsIHdlIHNwZWNpYWxpemUgaW4gY3JhZnRpbmcgZXhxdWlzaXRlIHRpbnkgcGxhdGVzIGRlc2lnbmVkIHRvIGRlbGlnaHQgYm90aCB0aW55IHBlb3BsZSBhbmQgZXZlbiB0aGUgbW9zdCBkaXNjZXJuaW5nIGJ1Z3MuIE91ciBjaGVmJ3MgY3JlYXRpb25zIGFyZSBhIHN5bXBob255IG9mIGZsYXZvcnMsIG1ldGljdWxvdXNseSBjdXJhdGVkIHRvIGNhdGVyIHRvIHRoZSBkZWxpY2F0ZSBwYWxhdGVzIG9mIG91ciBkaW1pbnV0aXZlIHBhdHJvbnMuIEZyb20gbWluaSBzbGlkZXJzIGZvciB0aW55IHRhc3RlIGFkdmVudHVyZXMgdG8gbWljcm8gZGVzc2VydHMgdGhhdCBwYWNrIGEgcHVuY2gsIGV2ZXJ5IGRpc2ggaXMgYSBjZWxlYnJhdGlvbiBvZiBtaW5pYXR1cmUgbWFydmVscy4gSm9pbiB1cyBmb3IgYW4gdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZSB3aGVyZSBzbWFsbCBiaXRlcyBicmluZyBpbW1lbnNlIGpveSB0byBldmVuIHRoZSBzbWFsbGVzdCBvZiBjb25ub2lzc2V1cnMuXCI7XHJcbiAgICBhYm91dERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGFib3V0cCk7XHJcbiAgICBhYm91dC5hcHBlbmRDaGlsZChhYm91dERlc2NyaXB0aW9uKTtcclxuXHJcblxyXG4gICAgLy9zZWNvbmQgc2VjdGlvblxyXG4gICAgY29uc3Qgc2VjdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2VjdGlvbjIuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24yKTtcclxuXHJcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBob3Vycy5pZCA9IFwiaG91cnNcIjtcclxuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKGhvdXJzKTtcclxuXHJcbiAgICBjb25zdCBob3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvdXJzVGl0bGUuaWQgPSBcImhvdXJzLXRpdGxlXCI7XHJcbiAgICBcclxuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzVGl0bGUpO1xyXG4gICAgY29uc3QgaG91cnN0aXRsZWgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgaG91cnN0aXRsZWgzLmlubmVyVGV4dCA9IFwiSG91cnMgb2YgT3BlcmF0aW9uXCI7XHJcbiAgICBob3Vyc1RpdGxlLmFwcGVuZENoaWxkKGhvdXJzdGl0bGVoMyk7XHJcblxyXG4gICAgY29uc3QgaG91cnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvdXJzTGlzdC5pZCA9IFwiaG91cnMtbGlzdFwiO1xyXG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcclxuXHJcbiAgICAvL2NyZWF0ZSBob3VycyBsaXN0XHJcbiAgICBjb25zdCBob3Vyc0l0ZW1zID0gWydNb25kYXk6IENsb3NlZCcsICdUdWVzZGF5OiAxMGFtLThwbScsXHJcbiAgICAnV2VkbmVzZGF5OiAxMGFtLThwbScsXHJcbiAgICAnVGh1cnNkYXk6IDEwYW0tOHBtJyxcclxuICAgICdGcmlkYXk6IDEwYW0tMTBwbScsXHJcbiAgICAnU2F0dXJkYXk6IDEwYW0tMTBwbScsXHJcbiAgICAnU3VuZGF5OiA4YW0tOHBtJ107XHJcblxyXG4gICAgbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgaG91cnNJdGVtcy5mb3JFYWNoKGl0ZW1UZXh0ID0+IHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpLmlubmVyVGV4dCA9IGl0ZW1UZXh0O1xyXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH0pXHJcbiAgICB1bC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcbiAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxuXHJcbiAgICBjb25zdCBtaWRkbGVQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWlkZGxlUGljLmlkID0gXCJtaWRkbGUtcGljXCI7XHJcbiAgICBzZWN0aW9uMi5hcHBlbmRDaGlsZChtaWRkbGVQaWMpO1xyXG5cclxuICAgIGNvbnN0IG1pZGRsZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBtaWRkbGVJbWcuc3JjID0gdGlueU1lbkltZyAvL3dvbmRlciBpZiBJIGhhdmUgdG8gcHV0IHRoaXMgZGlyZWN0b3J5IHBhdGhcclxuICAgIG1pZGRsZUltZy5pZD1cImhvbWVJbWdcIjtcclxuICAgIG1pZGRsZUltZy5hbHQgPSBcInRpbnkgc2FuZHdpY2hcIjtcclxuICAgIG1pZGRsZVBpYy5hcHBlbmRDaGlsZChtaWRkbGVJbWcpO1xyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxvY2F0aW9uLmlkID0gXCJsb2NhdGlvblwiO1xyXG4gICAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9jYXRpb25UaXRsZS5pZCA9IFwibG9jYXRpb24tdGl0bGVcIjtcclxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uVGl0bGUpO1xyXG4gICAgY29uc3QgbG9jYXRpb250aXRsZWgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgbG9jYXRpb250aXRsZWgzLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xyXG4gICAgbG9jYXRpb25UaXRsZS5hcHBlbmRDaGlsZChsb2NhdGlvbnRpdGxlaDMpO1xyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uV3JpdHRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsb2NhdGlvbldyaXR0ZW4uaWQgPSBcImxvY2F0aW9uLXdyaXR0ZW5cIjtcclxuICAgIGxvY2F0aW9uV3JpdHRlbi50ZXh0Q29udGVudCA9IFwiODIzMSBLaXRjaGVuIENvcm5lciBsbi4gRmxvb3JDaXR5IFNvbWVvbmVzSG91c2VcIjtcclxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uV3JpdHRlbik7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb25NYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9jYXRpb25NYXAuaWQgPSBcImxvY2F0aW9uLW1hcFwiO1xyXG4gICAgY29uc3QgbG9jYXRpb25pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgbG9jYXRpb25pbWcuc3JjID0gXCIuLi9zcmMvaW1nL3Rpbnlmb29kcy1tYXAuanBnXCI7XHJcbiAgICBsb2NhdGlvbk1hcC5hcHBlbmRDaGlsZChsb2NhdGlvbmltZyk7XHJcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbk1hcCk7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZTsiLCJpbXBvcnQgcGl6emFJbWcgZnJvbSBcIi4uL2ltZy9waXp6YS5qcGdcIjtcclxuaW1wb3J0IGJ1cmdlckltZyBmcm9tIFwiLi4vaW1nL2J1cmdlci5qcGdcIjtcclxuaW1wb3J0IHNwYWdoZXR0aUltZyBmcm9tIFwiLi4vaW1nL3NwYWdoZXR0aS5qcGdcIjtcclxuaW1wb3J0IHNhbmR3aWNoSW1nIGZyb20gXCIuLi9pbWcvc2FuZHdoaWNoLmpwZ1wiO1xyXG5pbXBvcnQgcGFuY2FrZXNJbWcgZnJvbSBcIi4uL2ltZy9wYW5jYWtlcy5qcGdcIjtcclxuaW1wb3J0IGVnZ3NJbWcgZnJvbSBcIi4uL2ltZy9lZ2dzLmpwZ1wiO1xyXG5pbXBvcnQgY2FrZUltZyBmcm9tIFwiLi4vaW1nL2Nha2UuanBnXCI7XHJcbmltcG9ydCBsYXZhQ2FrZUltZyBmcm9tIFwiLi4vaW1nL2xhdmFDYWtlLmpwZ1wiO1xyXG4vLyBpbXBvcnQgY29ja3RhaWxJbWcgZnJvbSBcIi4uL2ltZy9jb2NrdGFpbC53ZWJwXCI7XHJcbi8vIGltcG9ydCBvcmFuZ2VKdWljZUltZyBmcm9tIFwiLi4vaW1nL29yYW5nZUp1aWNlLndlYnBcIjtcclxuXHJcblxyXG4vL3N1cHBvcnRpbmcgZnVuY3Rpb24gdG8gY3JlYXRlIGl0ZW0gd2l0aCBkaXNoLGRlc2NyaXBpdG9uLCBpbWdcclxuY29uc3QgY3JlYXRlSXRlbSA9IGZ1bmN0aW9uKGRpc2gsIGRlc2NyaXB0aW9uLCBkaXNoSW1hZ2UpIFxyXG57XHJcbiAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIml0ZW0tY29udGFpbmVyXCIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBpdGVtV3JpdHRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpdGVtV3JpdHRlbi5jbGFzc0xpc3QuYWRkKFwiaXRlbS13cml0dGVuXCIpO1xyXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtV3JpdHRlbik7XHJcblxyXG4gICAgY29uc3QgZGlzaEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgZGlzaEgzLnRleHRDb250ZW50ID0gZGlzaDtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZGVzY3JpcHRpb25QLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcbiAgICBpdGVtV3JpdHRlbi5hcHBlbmRDaGlsZChkaXNoSDMpO1xyXG4gICAgaXRlbVdyaXR0ZW4uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QKTtcclxuXHJcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxpbmUuY2xhc3NMaXN0LmFkZChcIml0ZW0tbGluZVwiKTtcclxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQobGluZSk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcIml0ZW0tcGljdHVyZVwiKTtcclxuICAgIGltYWdlLnNyYyA9IGRpc2hJbWFnZTtcclxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgIHJldHVybiBpdGVtQ29udGFpbmVyO1xyXG59XHJcblxyXG4vL3N1cHBvcnRpbmcgZnVuY3Rpb24gdG8gY3JlYXRlIFNlY3Rpb24gd2l0aCB0aXRsZVxyXG5jb25zdCBjcmVhdGVTZWN0aW9uID0gZnVuY3Rpb24odGl0bGUpIFxyXG57XHJcbiAgICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibWVudS1zZWN0aW9uXCIpO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgbWVudVRpdGxlLmlkID0gXCJtZW51LXRpdGxlXCI7XHJcbiAgICBtZW51VGl0bGUudGV4dENvbnRlbnQ9dGl0bGU7XHJcbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xyXG5cclxuICAgIHJldHVybiBtZW51U2VjdGlvbjtcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBtZW51ID0gZnVuY3Rpb24oKSBcclxue1xyXG4gICAgLypcclxuICAgIG5ld0l0ZW0gPSBjcmVhdGVJdGVtKFwiXCIsIFwiXCIsICk7XHJcbiAgICBuZXdTZWN0aW9uLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdTZWN0aW9uKTtcclxuICAgICovXHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxyXG5cclxuICAgIGNvbnN0IG1lbnVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnVQYWdlLmlkID0gXCJtZW51cGFnZVwiO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51UGFnZSk7XHJcblxyXG4gICAgY29uc3QgbWVudVBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxyXG4gICAgbWVudVBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgbWVudVBhZ2VUaXRsZS5pZD0gXCJtZW51cGFnZS10aXRsZVwiO1xyXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobWVudVBhZ2VUaXRsZSk7XHJcblxyXG4gICAgbGV0IG5ld1NlY3Rpb24gPSBjcmVhdGVTZWN0aW9uKFwiQnJlYWtmYXN0XCIpXHJcblxyXG4gICAgbGV0IG5ld0l0ZW0gPSBjcmVhdGVJdGVtKFwiUGFuY2FrZSBCbGlzc1wiLCBcIkZsdWZmeSBwYW5jYWtlcyBhZG9ybmVkIHdpdGggcGx1bXAgYmx1ZWJlcnJpZXMsIGEgbWluaWF0dXJlIGRlbGlnaHQgZm9yIHlvdXIgdGFzdGUgYnVkcy5cIiwgcGFuY2FrZXNJbWcpO1xyXG4gICAgbmV3U2VjdGlvbi5hcHBlbmRDaGlsZChuZXdJdGVtKTtcclxuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKG5ld1NlY3Rpb24pO1xyXG5cclxuICAgIG5ld0l0ZW0gPSBjcmVhdGVJdGVtKFwiTWljcm9zY29waWMgTW9ybmluZyBEZWxpZ2h0OlwiLCBcIlRpbnkgc3Vubnktc2lkZS11cCBlZ2dzLCBjb29rZWQgdG8gcGVyZmVjdGlvbiwgYSBwb2NrZXQtc2l6ZWQgYnJlYWtmYXN0IHNlbnNhdGlvbi5cIiwgZWdnc0ltZyk7XHJcbiAgICBuZXdTZWN0aW9uLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xyXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobmV3U2VjdGlvbik7XHJcblxyXG4gICAgbmV3U2VjdGlvbiA9IGNyZWF0ZVNlY3Rpb24oXCJEaW5uZXJcIilcclxuXHJcbiAgICBuZXdJdGVtID0gY3JlYXRlSXRlbShcIlBpbnQtU2l6ZWQgUGl6emEgUGxlYXNlcjpcIiwgXCJBIHRpbnkgcGl6emEgbWFzdGVycGllY2UsIGJ1cnN0aW5nIHdpdGggY2hlZXN5IGdvb2RuZXNzIGFuZCBzYXZvcnkgdG9wcGluZ3MuXCIsIHBpenphSW1nKTtcclxuICAgIG5ld1NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3SXRlbSk7XHJcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChuZXdTZWN0aW9uKTtcclxuXHJcbiAgICBuZXdJdGVtID0gY3JlYXRlSXRlbShcIkJpdGUtc2l6ZWQgQnVyZ2VyIEJvbmFuemE6XCIsIFwiQSBtaW5pIGJ1cmdlciBzZW5zYXRpb24gd2l0aCBhIGp1aWN5IHBhdHR5LCBjcmlzcCBsZXR0dWNlLCBhbmQgYSBkb2xsb3Agb2Ygc3BlY2lhbCBzYXVjZVwiLCBidXJnZXJJbWcpO1xyXG4gICAgbmV3U2VjdGlvbi5hcHBlbmRDaGlsZChuZXdJdGVtKTtcclxuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKG5ld1NlY3Rpb24pO1xyXG5cclxuICAgIG5ld0l0ZW0gPSBjcmVhdGVJdGVtKFwiVGlueSBUd2lybCBTcGFnaGV0dGk6XCIsIFwiRGVsaWNhdGUgc3dpcmxzIG9mIHNwYWdoZXR0aSwgY29hdGVkIGluIGEgcmljaCB0b21hdG8gc2F1Y2UsIGEgdGlueSBJdGFsaWFuIGZlYXN0LlwiLCBzcGFnaGV0dGlJbWcpO1xyXG4gICAgbmV3U2VjdGlvbi5hcHBlbmRDaGlsZChuZXdJdGVtKTtcclxuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKG5ld1NlY3Rpb24pO1xyXG5cclxuICAgIG5ld0l0ZW0gPSBjcmVhdGVJdGVtKFwiSXR0eS1CaXR0eSBTYW5kd2ljaCBTeW1waG9ueTpcIiwgXCJBIHBldGl0ZSBzYW5kd2ljaCBvcmNoZXN0cmEgb2YgZnJlc2ggaW5ncmVkaWVudHMsIGNyZWF0aW5nIGEgaGFybW9uaW91cyBtZWRsZXkgb2YgZmxhdm9ycy5cIiwgc2FuZHdpY2hJbWcpO1xyXG4gICAgbmV3U2VjdGlvbi5hcHBlbmRDaGlsZChuZXdJdGVtKTtcclxuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKG5ld1NlY3Rpb24pO1xyXG5cclxuICAgIG5ld1NlY3Rpb24gPSBjcmVhdGVTZWN0aW9uKFwiRGVzZXJ0XCIpO1xyXG5cclxuICAgIG5ld0l0ZW0gPSBjcmVhdGVJdGVtKFwiTW9yc2VsIG9mIENhcnJvdCBDYWtlIEhlYXZlbjpcIiwgXCJNaW5pIGNhcnJvdCBjYWtlIG1hcnZlbHMsIGluZnVzZWQgd2l0aCBzcGljZXMgYW5kIHRvcHBlZCB3aXRoIGEgaGludCBvZiBjcmVhbXkgZnJvc3RpbmcuXCIsIGNha2VJbWcpO1xyXG4gICAgbmV3U2VjdGlvbi5hcHBlbmRDaGlsZChuZXdJdGVtKTtcclxuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKG5ld1NlY3Rpb24pO1xyXG5cclxuICAgIG5ld0l0ZW0gPSBjcmVhdGVJdGVtKFwiTGlsbGlwdXRpYW4gQ2hvY29sYXRlIExhdmEgSW5kdWxnZW5jZTpcIiwgXCJBIGRpbWludXRpdmUgY2hvY29sYXRlIGxhdmEgY2FrZSwgb296aW5nIHdpdGggbW9sdGVuIGdvb2RuZXNzLCBhIHN3ZWV0IGVydXB0aW9uIGluIGV2ZXJ5IGJpdGUuXCIsIGxhdmFDYWtlSW1nKTtcclxuICAgIG5ld1NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3SXRlbSk7XHJcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChuZXdTZWN0aW9uKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL2hvbWUuY3NzJztcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4vcGFnZXMvaG9tZVwiO1xyXG5pbXBvcnQgbWVudSBmcm9tIFwiLi9wYWdlcy9tZW51XCI7XHJcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL3BhZ2VzL2NvbnRhY3RcIjtcclxuaW1wb3J0IGNsZWFyIGZyb20gXCIuL2Z1bmN0aW9ucy9jbGVhclwiO1xyXG5cclxuY29uc29sZS5sb2coXCJFdmVyeXRoaW5nIGlzIHdvcmtpbmdcIik7XHJcblxyXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lQnRuXCIpO1xyXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51QnRuXCIpO1xyXG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0QnRuXCIpO1xyXG5cclxuY2xlYXIoKTtcclxuaG9tZSgpO1xyXG5cclxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGljayBvbiBob21lXCIpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNsZWFyKCk7XHJcbiAgICBob21lKCk7XHJcbiAgICBcclxufSk7XHJcblxyXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIG9uIG1lbnVcIik7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY2xlYXIoKTtcclxuICAgIG1lbnUoKTtcclxufSk7XHJcblxyXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIG9uIG1lbnVcIik7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY2xlYXIoKTtcclxuICAgIGNvbnRhY3QoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==