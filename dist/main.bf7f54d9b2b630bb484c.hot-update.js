webpackHotUpdate("main",{

/***/ "./src/components/boardCell.js":
/*!*************************************!*\
  !*** ./src/components/boardCell.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar BoardCell = function BoardCell(_ref) {\n  var cell = _ref.cell,\n      onClick = _ref.onClick,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cell \".concat(cell.locked && \"locked\", \" \").concat(cell.clickable && \"clickable\", \" \").concat(cell.first && \"first\"),\n    onClick: onClick\n  }, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardCell);\n\n//# sourceURL=webpack:///./src/components/boardCell.js?");

/***/ })

})