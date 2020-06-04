webpackHotUpdate("main",{

/***/ "./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/button.css */ \"./src/components/style/button.css\");\n/* harmony import */ var _style_button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_button_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar button = function button(props) {\n  // console.log(props);\n  var miniButton = props.miniButton;\n  var realTinyButton = props.realTinyButton; // let addButton = props.addButton;\n  // let startButton = props.startButton;\n\n  var hover = true;\n  var svg = props.svg;\n  var shufflebtnSelect = props.shufflebtnSelect; // let buttonText = props.buttonText;\n\n  var click = props.onClick;\n  var disabled = props.disabled;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(\"buttonArea\", {\n      miniButton: miniButton && miniButton === true,\n      realTinyButton: realTinyButton && realTinyButton === true,\n      hvr: hover && hover === true,\n      disabled: disabled && disabled === true,\n      shuffleActive: shufflebtnSelect && shufflebtnSelect === true\n    }),\n    onClick: click\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(\"btn\", {\n      hvr: hover && hover === true\n    })\n  }, svg));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (button);\n\n//# sourceURL=webpack:///./src/components/button.js?");

/***/ })

})