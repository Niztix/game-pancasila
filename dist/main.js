/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: Arial, sans-serif;\\r\\n  text-align: center;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  background-color: #f9f9f9;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  margin-top: 20px;\\r\\n  font-size: 2rem;\\r\\n  color: #333;\\r\\n}\\r\\n\\r\\n.game-board {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  flex-wrap: wrap;\\r\\n  gap: 20px;\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\n.card-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  margin-top: 25px;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  width: 200px;\\r\\n  height: 250px;\\r\\n  margin: 10px auto;\\r\\n  padding: 10px;\\r\\n  background-color: #f8f9fa;\\r\\n  border: 2px solid #6c757d;\\r\\n  border-radius: 8px;\\r\\n  text-align: center;\\r\\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\r\\n  cursor: grab;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.card img {\\r\\n  max-width: 100%;\\r\\n  object-fit: contain;\\r\\n  border-radius: 5px;\\r\\n  margin-bottom: 10px;\\r\\n  pointer-events: none;\\r\\n}\\r\\n\\r\\n.card span {\\r\\n  font-size: 1rem;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.card.dragging img {\\r\\n  display: none; /* Hilangkan gambar saat kartu sedang di-drag */\\r\\n}\\r\\n\\r\\n.dropzone {\\r\\n  width: 200px;\\r\\n  height: 250px;\\r\\n  padding: 10px;\\r\\n  background-color: #e9ecef;\\r\\n  border: 2px dashed #6c757d;\\r\\n  border-radius: 10px;\\r\\n  text-align: center;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.dropzone.over {\\r\\n  background-color: #d4edda;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  z-index: 1000;\\r\\n}\\r\\n\\r\\n.modal-overlay {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background: rgba(0, 0, 0, 0.5);\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  position: relative;\\r\\n  background: white;\\r\\n  padding: 20px;\\r\\n  border-radius: 10px;\\r\\n  text-align: center;\\r\\n  z-index: 1001;\\r\\n}\\r\\n\\r\\n.modal-content h2 {\\r\\n  margin: 0 0 10px;\\r\\n}\\r\\n\\r\\n.modal-content button {\\r\\n  padding: 10px 20px;\\r\\n  background-color: #007bff;\\r\\n  color: white;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.modal-content button:hover {\\r\\n  background-color: #0056b3;\\r\\n}\\r\\n\\r\\n#score {\\r\\n  margin-top: 20px;\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n#check-button {\\r\\n  margin-top: 20px;\\r\\n  padding: 10px 20px;\\r\\n  font-size: 1rem;\\r\\n  background-color: #007bff;\\r\\n  color: white;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#check-button:hover {\\r\\n  background-color: #0056b3;\\r\\n}\\r\\n\\r\\n.hidden-text {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://game-pancasila-matching/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://game-pancasila-matching/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://game-pancasila-matching/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://game-pancasila-matching/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://game-pancasila-matching/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://game-pancasila-matching/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://game-pancasila-matching/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://game-pancasila-matching/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://game-pancasila-matching/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://game-pancasila-matching/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/cardManager.js":
/*!*******************************!*\
  !*** ./src/js/cardManager.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderNextCard: function() { return /* binding */ renderNextCard; },\n/* harmony export */   setupCards: function() { return /* binding */ setupCards; }\n/* harmony export */ });\nlet currentCards = [];\r\n\r\n/**\r\n * Menyiapkan kartu berdasarkan data nilai Pancasila.\r\n * @param {Array} pancasilaData - Data nilai Pancasila dan perilaku.\r\n */\r\nfunction setupCards(pancasilaData) {\r\n  currentCards = [];\r\n\r\n  // Siapkan kartu dari data\r\n  pancasilaData.forEach((item) => {\r\n    item.perilaku.forEach((perilaku) => {\r\n      currentCards.push({\r\n        id: item.id,\r\n        text: perilaku.text,\r\n        image: perilaku.image, // Path gambar\r\n      });\r\n    });\r\n  });\r\n\r\n  // Acak kartu\r\n  shuffleCards(currentCards);\r\n}\r\n\r\n/**\r\n * Mengacak urutan kartu.\r\n * @param {Array} cards - Array kartu.\r\n */\r\nfunction shuffleCards(cards) {\r\n  for (let i = cards.length - 1; i > 0; i--) {\r\n    const j = Math.floor(Math.random() * (i + 1));\r\n    [cards[i], cards[j]] = [cards[j], cards[i]];\r\n  }\r\n}\r\n\r\n/**\r\n * Menampilkan kartu berikutnya.\r\n */\r\nfunction renderNextCard() {\r\n  const cardContainer = document.getElementById(\"card-container\");\r\n\r\n  // Cek apakah sudah ada kartu yang belum diproses\r\n  if (cardContainer.querySelector(\".card\")) return;\r\n\r\n  if (currentCards.length > 0) {\r\n    const nextCard = currentCards.shift();\r\n\r\n    const card = document.createElement(\"div\");\r\n    card.className = \"card\";\r\n    card.dataset.id = nextCard.id;\r\n    card.draggable = true; // Properti draggable untuk seluruh kartu\r\n\r\n    // Event drag pada seluruh kartu\r\n    card.addEventListener(\"dragstart\", (event) => {\r\n      card.classList.add(\"dragging\");\r\n      event.dataTransfer.setData(\"text/plain\", card.dataset.id); // Kirim data ID kartu\r\n    });\r\n\r\n    card.addEventListener(\"dragend\", () => {\r\n      card.classList.remove(\"dragging\");\r\n    });\r\n\r\n    // Gambar kartu\r\n    const img = document.createElement(\"img\");\r\n    img.src = nextCard.image; // Pastikan ini berisi path gambar yang benar\r\n    img.alt = nextCard.text;\r\n\r\n    // Teks kartu\r\n    const text = document.createElement(\"span\");\r\n    text.textContent = nextCard.text;\r\n\r\n    card.appendChild(img);\r\n    card.appendChild(text);\r\n\r\n    cardContainer.appendChild(card);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game-pancasila-matching/./src/js/cardManager.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_images_doa_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/doa.png */ \"./src/assets/images/doa.png\");\n/* harmony import */ var _assets_images_bantuteman_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/bantuteman.png */ \"./src/assets/images/bantuteman.png\");\n/* harmony import */ var _assets_images_belajardaerah_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/belajardaerah.png */ \"./src/assets/images/belajardaerah.png\");\n/* harmony import */ var _assets_images_bersih_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/bersih.png */ \"./src/assets/images/bersih.png\");\n/* harmony import */ var _assets_images_buatmain_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/buatmain.png */ \"./src/assets/images/buatmain.png\");\n/* harmony import */ var _assets_images_cektugas_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/cektugas.png */ \"./src/assets/images/cektugas.png\");\n/* harmony import */ var _assets_images_hormat_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/hormat.png */ \"./src/assets/images/hormat.png\");\n/* harmony import */ var _assets_images_mintamaaf_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/mintamaaf.png */ \"./src/assets/images/mintamaaf.png\");\n/* harmony import */ var _assets_images_siaptas_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/siaptas.png */ \"./src/assets/images/siaptas.png\");\n/* harmony import */ var _assets_images_tanyaguru_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/tanyaguru.png */ \"./src/assets/images/tanyaguru.png\");\n/* harmony import */ var _assets_images_tugassendiri_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/images/tugassendiri.png */ \"./src/assets/images/tugassendiri.png\");\n/* harmony import */ var _assets_images_tuliscerita_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/images/tuliscerita.png */ \"./src/assets/images/tuliscerita.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst pancasilaData = [\r\n  {\r\n    id: 1,\r\n    nilai: \"Ketuhanan Yang Maha Esa\",\r\n    perilaku: [\r\n      { text: \"Berdoa sebelum makan dan tidur\", image: _assets_images_doa_png__WEBPACK_IMPORTED_MODULE_0__ },\r\n      { text: \"Minta maaf jika berbuat salah\", image: _assets_images_mintamaaf_png__WEBPACK_IMPORTED_MODULE_7__ },\r\n    ],\r\n  },\r\n  {\r\n    id: 2,\r\n    nilai: \"Berkebinekaan Global\",\r\n    perilaku: [\r\n      { text: \"Hormati teman yang berbeda agama\", image: _assets_images_hormat_png__WEBPACK_IMPORTED_MODULE_6__ },\r\n      { text: \"Senang belajar pakaian dan tarian daerah\", image: _assets_images_belajardaerah_png__WEBPACK_IMPORTED_MODULE_2__ },\r\n    ],\r\n  },\r\n  {\r\n    id: 3,\r\n    nilai: \"Gotong Royong\",\r\n    perilaku: [\r\n      { text: \"Membantu teman yang kesulitan barang\", image: _assets_images_bantuteman_png__WEBPACK_IMPORTED_MODULE_1__ },\r\n      { text: \"Bersihkan kelas bersama-sama teman lain\", image: _assets_images_bersih_png__WEBPACK_IMPORTED_MODULE_3__ },\r\n    ],\r\n  },\r\n  {\r\n    id: 4,\r\n    nilai: \"Mandiri\",\r\n    perilaku: [\r\n      { text: \"Kerjakan tugas tanpa menunggu bantuan\", image: _assets_images_tugassendiri_png__WEBPACK_IMPORTED_MODULE_10__ },\r\n      { text: \"siapkan buku dan tas sekolah sendiri\", image: _assets_images_siaptas_png__WEBPACK_IMPORTED_MODULE_8__ },\r\n    ],\r\n  },\r\n  {\r\n    id: 5,\r\n    nilai: \"Bernalar Kritis\",\r\n    perilaku: [\r\n      { text: \"Bertanya guru jika tidak paham pelajaran\", image: _assets_images_tanyaguru_png__WEBPACK_IMPORTED_MODULE_9__ },\r\n      { text: \"Cek tugas sebelum dikumpulkan ke guru\", image: _assets_images_cektugas_png__WEBPACK_IMPORTED_MODULE_5__ },\r\n    ],\r\n  },\r\n  {\r\n    id: 6,\r\n    nilai: \"Kreatif\",\r\n    perilaku: [\r\n      { text: \"Buat mainan dari barang bekas rumah\", image: _assets_images_buatmain_png__WEBPACK_IMPORTED_MODULE_4__ },\r\n      { text: \"Tulis cerita pendek dari ide sendiri\", image: _assets_images_tuliscerita_png__WEBPACK_IMPORTED_MODULE_11__ },\r\n    ],\r\n  },\r\n];\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (pancasilaData);\r\n\n\n//# sourceURL=webpack://game-pancasila-matching/./src/js/data.js?");

/***/ }),

/***/ "./src/js/gameBoard.js":
/*!*****************************!*\
  !*** ./src/js/gameBoard.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDropzones: function() { return /* binding */ createDropzones; }\n/* harmony export */ });\nfunction createDropzones(pancasilaData, onDropCallback, onGameComplete) {\r\n  const gameBoard = document.getElementById(\"game-board\");\r\n  gameBoard.innerHTML = \"\";\r\n\r\n  pancasilaData.forEach((item) => {\r\n    const dropzone = document.createElement(\"div\");\r\n    dropzone.className = \"dropzone\";\r\n    dropzone.dataset.id = item.id;\r\n    dropzone.textContent = item.nilai;\r\n\r\n    dropzone.addEventListener(\"dragover\", (e) => {\r\n      e.preventDefault();\r\n      dropzone.classList.add(\"over\");\r\n    });\r\n\r\n    dropzone.addEventListener(\"dragleave\", () => dropzone.classList.remove(\"over\"));\r\n\r\n    dropzone.addEventListener(\"drop\", (e) => {\r\n      e.preventDefault();\r\n      dropzone.classList.remove(\"over\");\r\n\r\n      const draggedCard = document.querySelector(\".card.dragging\");\r\n\r\n      // Cek apakah dropzone sudah penuh\r\n      if (draggedCard && dropzone.children.length < 2) {\r\n        // Pindahkan kartu ke dropzone\r\n        const img = draggedCard.querySelector(\"img\");\r\n        if (img) img.remove(); // Hanya tampilkan teks\r\n        dropzone.appendChild(draggedCard);\r\n\r\n        onDropCallback();\r\n\r\n        // Periksa apakah game selesai\r\n        const isComplete = Array.from(document.querySelectorAll(\".dropzone\")).every((zone) => zone.children.length === 2);\r\n        if (isComplete) onGameComplete();\r\n      }\r\n    });\r\n\r\n    gameBoard.appendChild(dropzone);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://game-pancasila-matching/./src/js/gameBoard.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/js/data.js\");\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/js/gameBoard.js\");\n/* harmony import */ var _cardManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardManager.js */ \"./src/js/cardManager.js\");\n/* harmony import */ var _score_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score.js */ \"./src/js/score.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.js */ \"./src/js/modal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// import audio from \"./music.js\";\r\n\r\nfunction initGame() {\r\n  (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_2__.createDropzones)(_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _cardManager_js__WEBPACK_IMPORTED_MODULE_3__.renderNextCard, () => {\r\n    const score = (0,_score_js__WEBPACK_IMPORTED_MODULE_4__.calculateScore)(_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__.showModal)(score);\r\n  });\r\n  (0,_cardManager_js__WEBPACK_IMPORTED_MODULE_3__.setupCards)(_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n  (0,_cardManager_js__WEBPACK_IMPORTED_MODULE_3__.renderNextCard)(); // Hanya panggil saat game dimulai\r\n}\r\n\r\ndocument.getElementById(\"app\").innerHTML = `\r\n  <h1>Permainan “Apakah saya Anak Pancasila?” </h1>\r\n  <p>Silahkan tarik gambar sesuai jawabannya ya! </p>\r\n  <div id=\"card-container\" class=\"card-container\"></div>\r\n  <div id=\"game-board\" class=\"game-board\"></div>\r\n  <div id=\"score\"></div>\r\n`;\r\n\r\n// audio();\r\ninitGame();\r\n\n\n//# sourceURL=webpack://game-pancasila-matching/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showModal: function() { return /* binding */ showModal; }\n/* harmony export */ });\nfunction showModal(score) {\r\n  const modal = document.createElement(\"div\");\r\n  modal.className = \"modal\";\r\n\r\n  const overlay = document.createElement(\"div\");\r\n  overlay.className = \"modal-overlay\";\r\n\r\n  const content = document.createElement(\"div\");\r\n  content.className = \"modal-content\";\r\n  content.innerHTML = `\r\n      <h2>Game Selesai</h2>\r\n      <p>Skor Anda: ${score}</p>\r\n      <button id=\"restart-button\">Main Lagi</button>\r\n    `;\r\n\r\n  overlay.addEventListener(\"click\", () => {\r\n    modal.remove();\r\n  });\r\n\r\n  const restartButton = content.querySelector(\"#restart-button\");\r\n  restartButton.addEventListener(\"click\", () => {\r\n    modal.remove();\r\n    window.location.reload();\r\n  });\r\n\r\n  modal.appendChild(overlay);\r\n  modal.appendChild(content);\r\n  document.body.appendChild(modal);\r\n}\r\n\n\n//# sourceURL=webpack://game-pancasila-matching/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/score.js":
/*!*************************!*\
  !*** ./src/js/score.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateScore: function() { return /* binding */ calculateScore; }\n/* harmony export */ });\nfunction calculateScore(pancasilaData) {\r\n  let correct = 0;\r\n\r\n  pancasilaData.forEach((item) => {\r\n    const dropzone = document.querySelector(`.dropzone[data-id=\"${item.id}\"]`);\r\n    const cards = Array.from(dropzone.children);\r\n\r\n    cards.forEach((card) => {\r\n      if (card.dataset.id === item.id.toString()) {\r\n        correct++;\r\n      }\r\n    });\r\n  });\r\n\r\n  const total = pancasilaData.reduce((sum, item) => sum + item.perilaku.length, 0);\r\n  return Math.round((correct / total) * 100);\r\n}\r\n\n\n//# sourceURL=webpack://game-pancasila-matching/./src/js/score.js?");

/***/ }),

/***/ "./src/assets/images/bantuteman.png":
/*!******************************************!*\
  !*** ./src/assets/images/bantuteman.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/bantuteman.png\";\n\n//# sourceURL=webpack://game-pancasila-matching/./src/assets/images/bantuteman.png?");

/***/ }),

/***/ "./src/assets/images/belajardaerah.png":
/*!*********************************************!*\
  !*** ./src/assets/images/belajardaerah.png ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/belajardaerah.png\";\n\n//# sourceURL=webpack://game-pancasila-matching/./src/assets/images/belajardaerah.png?");

/***/ }),

/***/ "./src/assets/images/bersih.png":
/*!**************************************!*\
  !*** ./src/assets/images/bersih.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/bersih.png\";\n\n//# sourceURL=webpack://game-pancasila-matching/./src/assets/images/bersih.png?");

/***/ }),

/***/ "./src/assets/images/buatmain.png":
/*!****************************************!*\
  !*** ./src/assets/images/buatmain.png ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/buatmain.png\";\n\n//# sourceURL=webpack://game-pancasila-matching/./src/assets/images/buatmain.png?");

/***/ }),

/***/ "./src/assets/images/cektugas.png":
/*!****************************************!*\
  !*** ./src/assets/images/cektugas.png ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cektugas.png\";\n\n//# sourceURL=webpack://game-pancasila-matching/./src/assets/images/cektugas.png?");

/***/ }),

/***/ "./src/assets/images/doa.png":
/*!***********************************!*\
  !*** ./src/assets/images/doa.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/doa.png\";\n\n//# sourceURL=webpack://game-pancasila-matching/./src/assets/images/doa.png?");

/***/ }),

/***/ "./src/assets/images/hormat.png":
/*!**************************************!*\
  !*** ./src/assets/images/hormat.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/hormat.png\";\n\n//# sourceURL=webpack://game-pancasila-matching/./src/assets/images/hormat.png?");

/***/ }),

/***/ "./src/assets/images/mintamaaf.png":
/*!*****************************************!*\
  !*** ./src/assets/images/mintamaaf.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/mintamaaf.png\";\n\n//# sourceURL=webpack://game-pancasila-matching/./src/assets/images/mintamaaf.png?");

/***/ }),

/***/ "./src/assets/images/siaptas.png":
/*!***************************************!*\
  !*** ./src/assets/images/siaptas.png ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/siaptas.png\";\n\n//# sourceURL=webpack://game-pancasila-matching/./src/assets/images/siaptas.png?");

/***/ }),

/***/ "./src/assets/images/tanyaguru.png":
/*!*****************************************!*\
  !*** ./src/assets/images/tanyaguru.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/tanyaguru.png\";\n\n//# sourceURL=webpack://game-pancasila-matching/./src/assets/images/tanyaguru.png?");

/***/ }),

/***/ "./src/assets/images/tugassendiri.png":
/*!********************************************!*\
  !*** ./src/assets/images/tugassendiri.png ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/tugassendiri.png\";\n\n//# sourceURL=webpack://game-pancasila-matching/./src/assets/images/tugassendiri.png?");

/***/ }),

/***/ "./src/assets/images/tuliscerita.png":
/*!*******************************************!*\
  !*** ./src/assets/images/tuliscerita.png ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/tuliscerita.png\";\n\n//# sourceURL=webpack://game-pancasila-matching/./src/assets/images/tuliscerita.png?");

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;