webpackHotUpdate("main",{

/***/ "./src/components/boardCell.js":
/*!*************************************!*\
  !*** ./src/components/boardCell.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar BoardCell = function BoardCell(_ref) {\n  var cell = _ref.cell,\n      onClick = _ref.onClick,\n      children = _ref.children;\n  var bonus = cell.bonus;\n\n  function bonusText(props) {\n    var text = \"\";\n\n    if (props.text === \"twoL\") {\n      text = \"2L\";\n    }\n\n    if (props.text === \"threeL\") {\n      text = \"3L\";\n    }\n\n    if (props.text === \"twoW\") {\n      text = \"2W\";\n    }\n\n    if (props.text === \"threeW\") {\n      text = \"3W\";\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, text);\n  }\n\n  var Bonus = function Bonus(props) {\n    if (!cell.tile) {\n      if (props.bonus) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"bonusText\", {\n          text: props.bonus\n        });\n      }\n    }\n\n    return null;\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cell \".concat(cell.locked && \"locked\", \" \").concat(cell.clickable && \"clickable\", \" \").concat(cell.first && \"first\", \" \").concat(cell.bonus || \" \", \"}\"),\n    onClick: onClick\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bonus, {\n    bonus: bonus\n  }), children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardCell);\n\n//# sourceURL=webpack:///./src/components/boardCell.js?");

/***/ })

})