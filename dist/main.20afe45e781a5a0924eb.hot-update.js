webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/style/board.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/style/scoreBoard.css":
false,

/***/ "./src/components/board.js":
/*!*********************************!*\
  !*** ./src/components/board.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Projects\\\\scrabble\\\\src\\\\components\\\\board.js: Unexpected reserved word 'let' (73:4)\\n\\n\\u001b[0m \\u001b[90m 71 | \\u001b[39m  \\u001b[36mconst\\u001b[39m checkIfFirstRound \\u001b[33m=\\u001b[39m () \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 72 | \\u001b[39m    let firstRound \\u001b[33m=\\u001b[39m \\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 73 | \\u001b[39m    let firstGameCell \\u001b[33m=\\u001b[39m boardCells\\u001b[33m.\\u001b[39mfind((cell) \\u001b[33m=>\\u001b[39m cell\\u001b[33m.\\u001b[39mindex \\u001b[33m===\\u001b[39m \\u001b[35m112\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 74 | \\u001b[39m    let firstInRound \\u001b[33m=\\u001b[39m roundCells\\u001b[33m.\\u001b[39mincludes(firstGameCell)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 75 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 76 | \\u001b[39m  }\\u001b[0m\\n    at Object.raise (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6930:17)\\n    at Object.checkReservedWord (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10328:14)\\n    at Object.parseIdentifierName (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10288:12)\\n    at Object.parseIdentifier (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10260:23)\\n    at Object.parseExprAtom (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9442:27)\\n    at Object.parseExprAtom (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4082:20)\\n    at Object.parseExprSubscripts (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9165:23)\\n    at Object.parseMaybeUnary (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9145:21)\\n    at Object.parseExprOps (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9011:23)\\n    at Object.parseMaybeConditional (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8984:23)\\n    at Object.parseMaybeAssign (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8930:21)\\n    at Object.parseVar (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11262:26)\\n    at Object.parseVarStatement (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11081:10)\\n    at Object.parseStatementContent (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10678:21)\\n    at Object.parseStatement (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10611:17)\\n    at Object.parseBlockOrModuleBlockBody (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11187:25)\\n    at Object.parseBlockBody (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11174:10)\\n    at Object.parseBlock (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11158:10)\\n    at Object.parseFunctionBody (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10177:24)\\n    at Object.parseArrowExpression (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10118:10)\\n    at Object.parseParenAndDistinguishExpression (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9744:12)\\n    at Object.parseExprAtom (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9503:21)\\n    at Object.parseExprAtom (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4082:20)\\n    at Object.parseExprSubscripts (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9165:23)\\n    at Object.parseMaybeUnary (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9145:21)\\n    at Object.parseExprOps (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9011:23)\\n    at Object.parseMaybeConditional (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8984:23)\\n    at Object.parseMaybeAssign (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8930:21)\\n    at Object.parseVar (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11262:26)\\n    at Object.parseVarStatement (C:\\\\Projects\\\\scrabble\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11081:10)\");\n\n//# sourceURL=webpack:///./src/components/board.js?");

/***/ }),

/***/ "./src/components/boardCell.js":
false,

/***/ "./src/components/scoreBoard.js":
false,

/***/ "./src/components/style/board.css":
false,

/***/ "./src/components/style/scoreBoard.css":
false,

/***/ "./src/dictionary.json":
false,

/***/ "./src/game.js":
false,

/***/ "./src/round.js":
false,

/***/ "./src/utils.js":
false

})