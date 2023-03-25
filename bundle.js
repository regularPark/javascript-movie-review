/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/common.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/common.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/reset.css\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);\n// Imports\n\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./search_button.png */ \"./src/assets/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box !important;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  color: #fff;\\n  font-size: 14px;\\n  background-color: #111111;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\nmain {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\ndialog {\\n  border: none;\\n  color: #fff;\\n}\\n\\n#app {\\n  padding-bottom: 48px;\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n\\n.item-view {\\n  display: flex;\\n  margin: 0 auto;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n.item-view h2 {\\n  font-size: 3.4rem;\\n  font-weight: bold;\\n  user-select: none;\\n}\\n\\n.item-list {\\n  display: grid;\\n  margin: 48px 0;\\n  grid-template-columns: repeat(4, 180px);\\n  grid-column-gap: 64px;\\n  grid-row-gap: 48px;\\n}\\n\\n.item-list > hr {\\n  display: none;\\n}\\n\\n.item-card {\\n  display: flex;\\n  flex-direction: column;\\n  cursor: pointer;\\n  transition: all 0.3s ease-in-out;\\n}\\n\\n.item-card:hover {\\n  transform: scale(1.1);\\n}\\n\\n.item-thumbnail {\\n  width: 180px;\\n  height: 270px;\\n  border-radius: 8px;\\n  background-size: contain;\\n}\\n\\n.item-title {\\n  margin-top: 16px;\\n  font-size: 2rem;\\n  font-weight: bold;\\n}\\n\\n.item-score {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: flex-end;\\n  margin-top: 16px;\\n  font-size: 2rem;\\n}\\n\\n.item-score::after {\\n  margin-left: 8px;\\n}\\n\\n.item-title.skeleton::after,\\n.item-score.skeleton::after {\\n  font-size: 0;\\n  content: 'loading';\\n}\\n\\n.full-width {\\n  width: 100%;\\n}\\n\\n.last-item {\\n  margin-top: 48px;\\n}\\n\\nbutton.btn {\\n  height: 30px;\\n  border: 0;\\n  color: #fff;\\n  border-radius: 8px;\\n}\\n\\nbutton.primary {\\n  background: #f33f3f;\\n}\\n\\n.item-card .skeleton {\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\n  background-size: 400%;\\n  animation: skeleton-animation 5s infinite ease-out;\\n  border-radius: 8px;\\n}\\n\\n@keyframes skeleton-animation {\\n  0% {\\n    background-position: 0% 50%;\\n  }\\n  50% {\\n    background-position: 100% 50%;\\n  }\\n  100% {\\n    background-position: 0% 50%;\\n  }\\n}\\nheader {\\n  display: flex;\\n  width: 100%;\\n  height: 72px;\\n  padding: 0 20px;\\n  min-width: 1200px;\\n  background-color: #111111;\\n  filter: drop-shadow(0 4px 8px rgba(255, 255, 255, 0.2));\\n  justify-content: space-between;\\n  align-items: center;\\n  border-bottom: 1px solid white;\\n  margin-bottom: 48px;\\n}\\n\\nheader h1 {\\n  color: #f33f3f;\\n  cursor: pointer;\\n  user-select: none;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  letter-spacing: -0.1rem;\\n}\\n\\nheader > .search-box {\\n  padding: 8px;\\n  background: #fff;\\n  border-radius: 4px;\\n}\\n\\nheader .search-box > input {\\n  border: 0;\\n  font-size: 1.6rem;\\n  width: 250px;\\n}\\n\\nheader .search-box > .search-button {\\n  width: 14px;\\n  border: 0;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat 0 1px;\\n  text-indent: -1000rem;\\n  background-size: contain;\\n}\\n\\nul.item-list ~ h3 {\\n  display: none;\\n  color: rgba(255, 255, 255, 0.6);\\n  text-align: center;\\n  font-size: 2rem;\\n}\\n\\nul.item-list:not(:has(:first-child)) ~ h3 {\\n  display: initial;\\n}\\n\\n.popup-container {\\n  display: flex;\\n  position: fixed;\\n  bottom: 140px;\\n  width: 100vw;\\n  max-width: 100%;\\n  justify-content: center;\\n}\\n\\n.popup {\\n  position: absolute;\\n  padding: 24px 32px;\\n\\n  background-color: hsl(0, 85%, 60%);\\n  filter: drop-shadow(0 0 16px hsl(0, 85%, 60%));\\n\\n  font-size: 1.5rem;\\n  font-weight: 700;\\n  border-radius: 16px;\\n\\n  animation: alert-fade-in 0.5s ease-out;\\n}\\n\\n.popup[data-fade-out] {\\n  animation: alert-fade-out 0.5s ease-in;\\n  animation-fill-mode: forwards;\\n}\\n\\n/** modal *********************************************/\\n\\n.modal-backdrop {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n\\n  background: rgba(0, 0, 0, 0.6);\\n}\\n\\n.title-wrapper {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  border-bottom: 1px solid rgba(241, 241, 241, 0.25);\\n}\\n\\n.modal-container {\\n  display: flex;\\n  position: fixed;\\n  top: 25%;\\n  left: 15%;\\n  width: 70%;\\n  flex-direction: column;\\n  border-radius: 8px;\\n  background-color: #212122;\\n}\\n\\n.modal-title {\\n  width: 100%;\\n  height: 60px;\\n  text-align: center;\\n  padding-top: 20px;\\n  font-size: 2.4rem;\\n  font-weight: 600;\\n}\\n\\n.title-wrapper button {\\n  width: 34px;\\n  height: 30px;\\n  padding-top: 5px;\\n  margin-right: 20px;\\n  border-radius: 50%;\\n  border: none;\\n  background-color: #383839;\\n  transition: all 0.3s ease-in-out;\\n}\\n\\n.title-wrapper button:hover {\\n  background-color: red;\\n}\\n\\n.modal-thumbnail {\\n  width: 290px;\\n  height: 430px;\\n  border-radius: 8px;\\n  background-size: contain;\\n}\\n\\n.modal-card {\\n  display: flex;\\n  margin: 30px 30px 50px 30px;\\n  flex-direction: row;\\n}\\n\\n.modal-info {\\n  display: flex;\\n  width: 100%;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  margin-left: 30px;\\n}\\n\\n.modal-info .user-score {\\n  display: flex;\\n  width: 100%;\\n  padding: 10px;\\n  align-items: center;\\n  justify-content: space-between;\\n  background-color: #383839;\\n  font-size: 1.8rem;\\n  border-radius: 16px;\\n}\\n\\n.user-score p {\\n  margin-right: 10px;\\n}\\n\\n.modal-genre-score {\\n  display: grid;\\n\\n  place-items: center;\\n  grid-template-rows: 2fr;\\n  font-size: 2rem;\\n  margin-bottom: 20px;\\n}\\n\\n.modal-genres {\\n  grid-column-start: 1;\\n  grid-column-end: 2;\\n  font-size: 2rem;\\n}\\n\\n.modal-score {\\n  margin-left: 10px;\\n  grid-column-start: 2;\\n  font-size: 2rem;\\n}\\n\\n.modal-score img {\\n  margin-right: 6px;\\n}\\n\\n.modal-score {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  margin-bottom: 5px;\\n}\\n\\n.modal-overview {\\n  display: grid;\\n  height: 320px;\\n  margin-top: 10px;\\n  grid-column-start: 1;\\n  grid-column-end: 4;\\n  font-size: 2rem;\\n  line-height: 24px;\\n  overflow: scroll;\\n}\\n\\n.modal-overview::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n.modal-overview:empty::after {\\n  font-size: 1.8rem;\\n  color: rgba(241, 241, 241, 0.6);\\n  content: '등록된 줄거리가 없습니다.';\\n}\\n\\n.star-wrapper {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n}\\n\\n.star {\\n  position: relative;\\n  width: 150px;\\n}\\n\\n.star img {\\n  width: 24px;\\n  overflow: hidden;\\n}\\n\\n.star span {\\n  position: absolute;\\n  right: 0;\\n  left: 0;\\n  width: 0;\\n  height: 25px;\\n  overflow: hidden;\\n}\\n\\n.star input {\\n  position: absolute;\\n  left: 0;\\n  opacity: 0;\\n  cursor: pointer;\\n}\\n\\n.star p {\\n  width: 100px;\\n}\\n\\n/** scroll-to-top *********************/\\n.scroll-to-top {\\n  position: fixed;\\n  width: 100px;\\n  height: 100px;\\n  bottom: 40px;\\n  right: 40px;\\n  padding: 0;\\n  background-color: rgba(0, 0, 0, 0);\\n  border: none;\\n}\\n\\n.scroll-to-top > img {\\n  width: 100%;\\n}\\n\\n@keyframes alert-fade-in {\\n  from {\\n    transform: translateY(200px) scale(0.9);\\n  }\\n\\n  to {\\n    transform: translateY(0px) scale(1);\\n  }\\n}\\n\\n@keyframes alert-fade-out {\\n  from {\\n    transform: translateY(0px) scale(1);\\n  }\\n\\n  to {\\n    transform: translateY(200px) scale(0.9);\\n  }\\n}\\n\\n/** media query ************************/\\n\\n/** mobile */\\n@media (max-width: 480px) {\\n  header {\\n    height: 50px;\\n    min-width: 375px;\\n  }\\n  .item-list {\\n    display: grid;\\n    grid-template-columns: repeat(2, 140px);\\n    grid-column-gap: 32px;\\n  }\\n\\n  .item-title {\\n    font-size: 2rem;\\n  }\\n\\n  .item-thumbnail {\\n    width: 140px;\\n    height: auto;\\n  }\\n\\n  h1 > img {\\n    margin-left: 5%;\\n  }\\n\\n  header .search-box {\\n    position: absolute;\\n    right: 5%;\\n    width: 35px;\\n    height: 35px;\\n    transition: width 0.7s ease-in-out;\\n  }\\n  header .search-box.active {\\n    position: absolute;\\n    right: 5%;\\n    width: 90%;\\n    transition: width 0.7s ease-in-out;\\n  }\\n\\n  header .search-box > input {\\n    display: none;\\n    animation: slide-in 0.7s forwards;\\n  }\\n\\n  header .search-box.active > input {\\n    display: flex;\\n    left: 0;\\n    width: 93%;\\n    background-color: rgba(0, 0, 0, 0);\\n    animation: slide-out 0.7s forwards;\\n    animation-direction: reverse;\\n  }\\n\\n  header .search-button {\\n    position: absolute;\\n    top: 8px;\\n    right: 10px;\\n    /* opacity: 1; */\\n  }\\n\\n  .modal-container {\\n    position: fixed;\\n    top: 40%;\\n    bottom: 0;\\n    left: 0;\\n    width: 100%;\\n    min-height: 375px;\\n    margin: 0;\\n  }\\n\\n  .modal-title {\\n    padding: 18px;\\n    font-size: 2rem;\\n  }\\n\\n  .modal-thumbnail {\\n    display: none;\\n  }\\n\\n  .modal-info {\\n    margin: 0;\\n  }\\n\\n  .modal-genre-score {\\n    margin: 0;\\n  }\\n\\n  .modal-genres {\\n    font-size: 1.6rem;\\n  }\\n\\n  .modal-score {\\n    font-size: 1.6rem;\\n  }\\n\\n  .modal-overview {\\n    width: 100%;\\n    height: 180px;\\n    overflow: scroll;\\n  }\\n\\n  .modal-info {\\n    height: 100%;\\n    align-items: space-between;\\n  }\\n\\n  .modal-info .user-score {\\n    position: fixed;\\n    bottom: 30px;\\n    width: 80%;\\n    font-size: 1.6rem;\\n  }\\n\\n  .item-card .skeleton {\\n    width: 140px;\\n    height: 210px;\\n  }\\n\\n  .item-title.skeleton {\\n    width: 140px;\\n    height: 20px;\\n    margin-bottom: 48px;\\n  }\\n\\n  .scroll-to-top {\\n    width: 60px;\\n    height: 60px;\\n  }\\n}\\n\\n@media (min-width: 480px) and (max-width: 840px) {\\n  header {\\n    min-width: 340px;\\n  }\\n\\n  .modal-container {\\n    left: 5%;\\n    width: 90%;\\n    min-width: 580px;\\n  }\\n  .modal-thumbnail {\\n    width: 180px;\\n    height: 240px;\\n  }\\n\\n  .modal-overview {\\n    height: 200px;\\n  }\\n\\n  .item-list {\\n    display: grid;\\n    grid-template-columns: repeat(3, 150px);\\n  }\\n  .scroll-to-top {\\n    width: 80px;\\n    height: 80px;\\n  }\\n}\\n\\n@media (min-width: 840px) and (max-width: 1200px) {\\n  header {\\n    min-width: 600px;\\n  }\\n\\n  .modal-container {\\n    left: 10%;\\n    width: 80%;\\n  }\\n  .modal-thumbnail {\\n    width: 250px;\\n    height: 450px;\\n  }\\n\\n  .item-list {\\n    display: grid;\\n    grid-template-columns: repeat(4, 170px);\\n  }\\n}\\n\\n@keyframes slide-out {\\n  from {\\n    transform: translateX(0%);\\n    opacity: 1;\\n  }\\n  to {\\n    transform: translateX(30%);\\n    opacity: 0;\\n  }\\n}\\n\\n@keyframes slide-in {\\n  from {\\n    transform: translateX(0%);\\n    opacity: 1;\\n  }\\n  to {\\n    width: 0;\\n    transform: translateX(30%);\\n    opacity: 0;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/common.css":
/*!*******************************!*\
  !*** ./src/assets/common.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/common.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/common.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/MovieAPI.ts":
/*!*************************!*\
  !*** ./src/MovieAPI.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_MovieFetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/MovieFetcher */ \"./src/util/MovieFetcher.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nclass MovieAPI {\n    getPopularMovies(page = 1) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return _util_MovieFetcher__WEBPACK_IMPORTED_MODULE_0__.MovieFetcher.fetch('/movie/popular', `?language=ko-KR&page=${page}&api_key=${\"5a5a93b7a6947899b5d1ae8c47891133\"}`);\n        });\n    }\n    getSearchMovies(query, page = 1) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return _util_MovieFetcher__WEBPACK_IMPORTED_MODULE_0__.MovieFetcher.fetch('/search/movie', `?language=ko-KR&query=${query}&page=${page}&include_adult=false&api_key=${\"5a5a93b7a6947899b5d1ae8c47891133\"}`);\n        });\n    }\n    getGenreList() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return _util_MovieFetcher__WEBPACK_IMPORTED_MODULE_0__.MovieFetcher.fetch('/genre/movie/list', `?api_key=${\"5a5a93b7a6947899b5d1ae8c47891133\"}&language=ko-KR`);\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new MovieAPI());\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/MovieAPI.ts?");

/***/ }),

/***/ "./src/components/DetailModal.ts":
/*!***************************************!*\
  !*** ./src/components/DetailModal.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ \"./src/store.ts\");\n/* harmony import */ var _Rate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rate */ \"./src/components/Rate.ts\");\n\n\nclass DetailModal {\n    constructor(movie, rate) {\n        this.movie = movie;\n        this.rate = rate;\n        this.template = ({ id, title, poster_path, overview, vote_average, genre_ids }) => `\n          <div class=\"modal-backdrop\"></div>\n          <div class=\"modal-container\" id=\"${id}\">\n              <div class=\"title-wrapper\">\n                  <p class=\"modal-title\">${title} \n                  </p>\n                  <button class=\"close-button\">\n                      <img src=\"assets/close.png\" />\n                  </button>\n              </div>\n              <div class=\"modal-card\">\n                  <img\n                    class=\"modal-thumbnail skeleton\"\n                    src=\"https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}\"\n                    loading=\"lazy\"\n                    alt=\"${title}\"\n                  />\n                  <div class=\"modal-info\">\n                      <div class=\"modal-genre-score\">\n                          <p class=\"modal-genres\">${genre_ids.map((genreId) => {\n            return ' ' + _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getGenres(genreId);\n        })}</p>\n                          <p class=\"modal-score\"><img src=\"assets/star_filled.png\" alt=\"별점\" /> ${vote_average}</p>\n                          <p class=\"modal-overview\">${overview}</p>\n                      </div>\n                      <div class=\"user-score\"></div>\n                  </div>\n              </div>\n          </div>\n      `;\n        this.closeModal = () => {\n            const modal = this.modal;\n            document.body.style.removeProperty('overflow');\n            modal.close();\n        };\n        this.modal = document.querySelector('.modal');\n        this.modal.replaceChildren();\n        this.init();\n    }\n    init() {\n        this.render(this.movie);\n        document.body.style.overflow = 'hidden';\n        this.addEvent();\n    }\n    render(movie) {\n        var _a;\n        this.modal.insertAdjacentHTML('beforeend', this.template(movie));\n        (_a = document.querySelector('.user-score')) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', _Rate__WEBPACK_IMPORTED_MODULE_1__[\"default\"].template);\n        if (this.rate)\n            _Rate__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderStar(this.rate);\n    }\n    addEvent() {\n        var _a, _b;\n        (_a = document.querySelector('.modal-backdrop')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.closeModal);\n        (_b = document.querySelector('.close-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', this.closeModal);\n        _Rate__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listener(this.movie.id);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailModal);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/DetailModal.ts?");

/***/ }),

/***/ "./src/components/ErrorPopup.ts":
/*!**************************************!*\
  !*** ./src/components/ErrorPopup.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ErrorPopup {\n    pop(errorMessage) {\n        var _a;\n        const $popup = document.createElement('div');\n        $popup.classList.add('popup');\n        $popup.innerText = errorMessage;\n        (_a = document.querySelector('.popup-container')) === null || _a === void 0 ? void 0 : _a.append($popup);\n        setTimeout(() => {\n            $popup.dataset.fadeOut = '';\n            setTimeout(() => {\n                $popup.remove();\n            }, 1000);\n        }, 5000);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPopup);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/ErrorPopup.ts?");

/***/ }),

/***/ "./src/components/Header.ts":
/*!**********************************!*\
  !*** ./src/components/Header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Header {\n    constructor() {\n        this.template = `\n        <h1 class=\"logo\"><img src=\"assets/logo.png\" alt=\"MovieList 로고\" /></h1>\n        <form class=\"search-box\">\n          <input type=\"text\" name=\"search-text\" placeholder=\"검색\" />\n          <button class=\"search-button\">검색</button>\n        </form>`;\n    }\n    render() {\n        var _a;\n        (_a = document.querySelector('header')) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', this.template);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Header.ts?");

/***/ }),

/***/ "./src/components/Modal.ts":
/*!*********************************!*\
  !*** ./src/components/Modal.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Modal {\n    constructor() {\n        this.template = `\n    <dialog class=\"modal\"></dialog>\n`;\n    }\n    init() {\n        this.render();\n    }\n    render() {\n        var _a;\n        (_a = document.querySelector('#app')) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', this.template);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Modal.ts?");

/***/ }),

/***/ "./src/components/MovieList.ts":
/*!*************************************!*\
  !*** ./src/components/MovieList.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieList\": () => (/* binding */ MovieList)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ \"./src/store.ts\");\n/* harmony import */ var _util_InfiniteScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/InfiniteScroll */ \"./src/util/InfiniteScroll.ts\");\n/* harmony import */ var _util_LocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/LocalStorage */ \"./src/util/LocalStorage.ts\");\n/* harmony import */ var _DetailModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailModal */ \"./src/components/DetailModal.ts\");\n/* harmony import */ var _ErrorPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorPopup */ \"./src/components/ErrorPopup.ts\");\n/* harmony import */ var _MovieListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MovieListItem */ \"./src/components/MovieListItem.ts\");\n/* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Skeleton */ \"./src/components/Skeleton.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\nclass MovieList {\n    constructor(fetchFn, title) {\n        this.fetchFn = fetchFn;\n        this.title = title;\n        this.isFinished = false;\n        this.page = 1;\n        this.section = document.createElement('section');\n        this.createSkeletons = () => {\n            if (this.isFinished)\n                return;\n            const skeleton = new _Skeleton__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n            [...Array(20)].forEach(() => {\n                var _a;\n                (_a = this.section.querySelector('ul')) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', skeleton.render());\n            });\n        };\n        this.removeSkeleton = () => {\n            this.section\n                .querySelectorAll('ul > li.skeleton')\n                .forEach(($skeleton) => {\n                $skeleton.remove();\n            });\n        };\n        this.nextPage = () => __awaiter(this, void 0, void 0, function* () {\n            this.createSkeletons();\n            yield this.load();\n        });\n        this.section.classList.add('item-view');\n        this.section.innerHTML = `\n      <h2>${this.title}</h2>\n      <ul class=\"item-list\"></ul>\n      <h3>입력하신 검색어 ${this.title}와 일치하는 결과가 없습니다.</h3>\n    `;\n        this.init();\n    }\n    init() {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield this.nextPage();\n            this.showModal();\n            (0,_util_InfiniteScroll__WEBPACK_IMPORTED_MODULE_1__.infiniteScroll)('li:nth-last-child(5)', this.nextPage);\n        });\n    }\n    render() {\n        return this.section;\n    }\n    load() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (this.isFinished)\n                return;\n            const page = this.page;\n            this.page += 1;\n            try {\n                const response = yield this.fetchFn(page);\n                const movies = response.results;\n                _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setMovies(movies);\n                const totalPages = response.total_pages;\n                yield new Promise((resolve) => {\n                    setTimeout(resolve, 500);\n                });\n                this.replaceSkeleton(page, movies);\n                if (page < totalPages)\n                    return;\n                this.isFinished = true;\n            }\n            catch (e) {\n                const error = e;\n                this.createSkeletons();\n                const errorMessage = this.getErrorMessage(error);\n                const errorPopup = new _ErrorPopup__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n                errorPopup.pop(errorMessage);\n            }\n            this.removeSkeleton();\n        });\n    }\n    getErrorMessage(error) {\n        return 'message' in error\n            ? error.message\n            : 'status_message' in error\n                ? error.status_message\n                : String(error);\n    }\n    replaceSkeleton(page, movies) {\n        movies.forEach((movie) => {\n            const movieListItem = new _MovieListItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"](movie);\n            const $div = document.createElement('div');\n            $div.insertAdjacentElement('beforeend', movieListItem.render());\n            $div.childNodes[0].setAttribute('page', String(page));\n            const $skeleton = this.section.querySelector('ul > li.skeleton');\n            $skeleton.after($div.childNodes[0]);\n            $skeleton.remove();\n        });\n    }\n    showModal() {\n        var _a;\n        (_a = document.querySelector('.item-view')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {\n            var _a;\n            const id = (_a = e.target.closest('.item-card')) === null || _a === void 0 ? void 0 : _a.id;\n            if (id) {\n                document.querySelector('.modal').showModal();\n                const rate = (0,_util_LocalStorage__WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)(String(id));\n                return typeof rate === 'object'\n                    ? new _DetailModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMovie(Number(id)))\n                    : new _DetailModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMovie(Number(id)), rate);\n            }\n            return null;\n        });\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieList.ts?");

/***/ }),

/***/ "./src/components/MovieListItem.ts":
/*!*****************************************!*\
  !*** ./src/components/MovieListItem.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MovieListItem {\n    constructor(movie) {\n        this.movie = movie;\n        this.li = document.createElement('li');\n        this.template = (movie) => `\n    <a>\n      <div class=\"item-card\" id=\"${movie.id}\">\n        <img\n          class=\"item-thumbnail skeleton\"\n          src=\"${movie.poster_path\n            ? 'https://image.tmdb.org/t/p/w220_and_h330_face' + movie.poster_path\n            : 'assets/no_image.png'}\"\n          loading=\"lazy\"\n          alt=\"${movie.title}\"\n        />\n        <p class=\"item-title\">${movie.title}</p>\n        <p class=\"item-score\">${movie.vote_average}<img src=\"assets/star_filled.png\" alt=\"별점\" /> </p>\n      </div>\n    </a>\n`;\n    }\n    render() {\n        var _a;\n        if (this.movie.poster_path)\n            (_a = document.querySelector('.item-thumbnail')) === null || _a === void 0 ? void 0 : _a.addEventListener('load', (e) => {\n                e.target.classList.remove('skeleton');\n            });\n        this.li.innerHTML = this.template(this.movie);\n        return this.li;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieListItem);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieListItem.ts?");

/***/ }),

/***/ "./src/components/Rate.ts":
/*!********************************!*\
  !*** ./src/components/Rate.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.ts\");\n/* harmony import */ var _util_LocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/LocalStorage */ \"./src/util/LocalStorage.ts\");\n\n\nconst Rate = {\n    template: `\n    <div class=\"star-wrapper\">\n    <p>내 별점</p> \n        <span class=\"star\">\n            <img src=\"assets/star_empty.png\" alt=\"별점\" />\n            <img src=\"assets/star_empty.png\" alt=\"별점\" />\n            <img src=\"assets/star_empty.png\" alt=\"별점\" />\n            <img src=\"assets/star_empty.png\" alt=\"별점\" />\n            <img src=\"assets/star_empty.png\" alt=\"별점\" />\n            <span>\n                <img src=\"assets/star_filled.png\" alt=\"별점\" />\n                <img src=\"assets/star_filled.png\" alt=\"별점\" />\n                <img src=\"assets/star_filled.png\" alt=\"별점\" />\n                <img src=\"assets/star_filled.png\" alt=\"별점\" />\n                <img src=\"assets/star_filled.png\" alt=\"별점\" />\n            </span>\n            <input type=\"range\" value=\"2\" step=\"2\" min=\"2\" max=\"10\">\n        </span>\n    </div>\n    <p class=\"rating-text\"></p>`,\n    saveRate(id) {\n        var _a;\n        (0,_util_LocalStorage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)(String(id), JSON.stringify((_a = document.querySelector('.star input')) === null || _a === void 0 ? void 0 : _a.value));\n    },\n    listener(id) {\n        const starInput = document.querySelector('.star input');\n        const starSpan = document.querySelector('.star span');\n        starInput === null || starInput === void 0 ? void 0 : starInput.addEventListener('input', () => {\n            var _a;\n            starSpan.style.width = `${Number(starInput.value) * 10}%`;\n            Rate.saveRate(id);\n            document.querySelector('.rating-text').textContent =\n                this.ratingText((_a = document.querySelector('.star input')) === null || _a === void 0 ? void 0 : _a.value);\n        });\n    },\n    renderStar(rate) {\n        if (rate) {\n            document.querySelector('.star span').style.width = `${Number(rate) * 10}%`;\n            document.querySelector('.rating-text').textContent =\n                this.ratingText(rate);\n        }\n    },\n    ratingText(rate) {\n        return window.innerWidth > 480 ? rate + ' ' + _constants__WEBPACK_IMPORTED_MODULE_0__.ratingComment[Number(rate)] : rate;\n    },\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rate);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Rate.ts?");

/***/ }),

/***/ "./src/components/Skeleton.ts":
/*!************************************!*\
  !*** ./src/components/Skeleton.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Skeleton {\n    constructor() {\n        this.template = `\n  <li class=\"skeleton\">\n    <a href=\"#\">\n      <div class=\"item-card\">\n        <div class=\"item-thumbnail skeleton\"></div>\n        <div class=\"item-title skeleton\"></div>\n        <div class=\"item-score skeleton\"></div>\n      </div>\n    </a>\n  </li>`;\n    }\n    render() {\n        return this.template;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skeleton);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Skeleton.ts?");

/***/ }),

/***/ "./src/components/TopButton.ts":
/*!*************************************!*\
  !*** ./src/components/TopButton.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TopButton\": () => (/* binding */ TopButton)\n/* harmony export */ });\nconst TopButton = {\n    template: `<button class=\"scroll-to-top\"><img src=\"assets/scroll_to_top.png\" /></button>`,\n    render() {\n        var _a;\n        (_a = document.querySelector('.popup-container')) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('afterend', this.template);\n    },\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/TopButton.ts?");

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"POPULAR_MOVIES\": () => (/* binding */ POPULAR_MOVIES),\n/* harmony export */   \"SEARCH_RESULT\": () => (/* binding */ SEARCH_RESULT),\n/* harmony export */   \"ratingComment\": () => (/* binding */ ratingComment)\n/* harmony export */ });\nconst ratingComment = {\n    2: '최악이예요',\n    4: '별로예요',\n    6: '보통이에요',\n    8: '재미있어요',\n    10: '명작이에요',\n};\nconst POPULAR_MOVIES = '지금 인기 있는 영화';\nconst SEARCH_RESULT = (query) => `\"${query}\" 검색 결과`;\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/constants.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/common.css */ \"./src/assets/common.css\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.ts\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Modal */ \"./src/components/Modal.ts\");\n/* harmony import */ var _components_MovieList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MovieList */ \"./src/components/MovieList.ts\");\n/* harmony import */ var _components_TopButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TopButton */ \"./src/components/TopButton.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n/* harmony import */ var _MovieAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MovieAPI */ \"./src/MovieAPI.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ \"./src/store.ts\");\nvar _a, _b, _c, _d;\n\n\n\n\n\n\n\n\nconst init = () => {\n    const modal = new _components_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    const header = new _components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    header.render();\n    modal.init();\n    _components_TopButton__WEBPACK_IMPORTED_MODULE_4__.TopButton.render();\n};\ninit();\nconst popularFetchFn = (page) => _MovieAPI__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getPopularMovies(page);\nfunction assignMovieList(movieList) {\n    var _a;\n    (_a = document.querySelector('main')) === null || _a === void 0 ? void 0 : _a.replaceChildren(movieList.render());\n    document.querySelector('.search-box').reset();\n}\nassignMovieList(new _components_MovieList__WEBPACK_IMPORTED_MODULE_3__.MovieList(popularFetchFn, _constants__WEBPACK_IMPORTED_MODULE_5__.POPULAR_MOVIES));\n(_a = document.querySelector('.logo')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {\n    assignMovieList(new _components_MovieList__WEBPACK_IMPORTED_MODULE_3__.MovieList(popularFetchFn, _constants__WEBPACK_IMPORTED_MODULE_5__.POPULAR_MOVIES));\n    _store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].initializeList();\n});\n(_b = document.querySelector('.search-box')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', (event) => {\n    var _a;\n    event.preventDefault();\n    const formData = Object.fromEntries(new FormData(event.target).entries());\n    const query = formData['search-text'];\n    if (window.innerWidth <= 480 && !query) {\n        (_a = document.querySelector('.search-box')) === null || _a === void 0 ? void 0 : _a.classList.add('active');\n    }\n    if ((window.innerWidth > 480 && query) || query) {\n        const searchFetchFn = (page) => _MovieAPI__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getSearchMovies(query, page);\n        assignMovieList(new _components_MovieList__WEBPACK_IMPORTED_MODULE_3__.MovieList(searchFetchFn, (0,_constants__WEBPACK_IMPORTED_MODULE_5__.SEARCH_RESULT)(query)));\n    }\n});\n(_c = document.querySelector('.search-box')) === null || _c === void 0 ? void 0 : _c.addEventListener('mouseleave', () => {\n    var _a;\n    (_a = document.querySelector('.search-box')) === null || _a === void 0 ? void 0 : _a.classList.remove('active');\n});\nconst response = _MovieAPI__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getGenreList();\nresponse.then((res) => {\n    res.genres.forEach((genre) => {\n        _store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].setGenres(genre.id, genre.name);\n    });\n});\nconst scrollToTop = () => {\n    window.scrollTo(0, 0);\n};\n(_d = document.querySelector('.scroll-to-top')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', scrollToTop);\nwindow.onload = () => {\n    setTimeout(() => {\n        scrollToTop();\n    }, 100);\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.ts?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Store {\n    constructor() {\n        this.movieList = [];\n        this.genreList = new Map();\n    }\n    initializeList() {\n        this.movieList = [];\n    }\n    setMovies(movies) {\n        this.movieList = [...this.movieList, ...movies];\n    }\n    getMovie(id) {\n        return this.movieList.find((movie) => movie.id === id);\n    }\n    setGenres(id, name) {\n        this.genreList.set(id, name);\n    }\n    getGenres(id) {\n        return this.genreList.get(id);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Store());\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/store.ts?");

/***/ }),

/***/ "./src/util/InfiniteScroll.ts":
/*!************************************!*\
  !*** ./src/util/InfiniteScroll.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"infiniteScroll\": () => (/* binding */ infiniteScroll)\n/* harmony export */ });\nconst infiniteScroll = (target, fn) => {\n    const options = {\n        threshold: 0.3,\n    };\n    const io = new IntersectionObserver((entries) => {\n        entries.forEach((entry) => {\n            if (!entry.isIntersecting)\n                return;\n            fn().then(() => {\n                const eventTarget = document.querySelector(target);\n                io.disconnect();\n                io.observe(eventTarget);\n            });\n        });\n    }, options);\n    const last = document.querySelector(target);\n    io.observe(last);\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/util/InfiniteScroll.ts?");

/***/ }),

/***/ "./src/util/LocalStorage.ts":
/*!**********************************!*\
  !*** ./src/util/LocalStorage.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage),\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage)\n/* harmony export */ });\nconst getLocalStorage = (key) => {\n    return JSON.parse(localStorage.getItem(key) || '[]');\n};\nconst setLocalStorage = (key, value) => {\n    localStorage.setItem(key, value);\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/util/LocalStorage.ts?");

/***/ }),

/***/ "./src/util/MovieFetcher.ts":
/*!**********************************!*\
  !*** ./src/util/MovieFetcher.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieFetcher\": () => (/* binding */ MovieFetcher)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst BASE_URL = 'https://api.themoviedb.org/3';\nconst MovieFetcher = {\n    fetch(path, url) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const res = yield fetch(`${BASE_URL}${path}${url}`);\n            if (!res.ok)\n                throw yield res.json();\n            const response = yield res.json();\n            return response;\n        });\n    },\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/util/MovieFetcher.ts?");

/***/ }),

/***/ "./src/assets/search_button.png":
/*!**************************************!*\
  !*** ./src/assets/search_button.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1bd4269f4446ceae306.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/search_button.png?");

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
/******/ 				scriptUrl = document.currentScript.src
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
/******/ 			"main": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;