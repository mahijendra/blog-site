/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/mahijendra/code/blog-web/components/PostCard.js\",\n    _this = undefined;\n\n\n\n\n\nvar PostCard = function PostCard(props) {\n  console.log(props.post);\n  var post = props.data;\n  var slug = post.slug.current;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"pt-4 pb-4 px-4 sm:px-6 lg:pt-4 lg:pb-4 lg:px-8\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"relative max-w-2xl mx-auto divide-y-2 divide-gray-200 lg:max-w-3xl\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid gap-16 lg:gap-x-5 lg:gap-y-8 lg:pl-32\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: slug,\n            className: \"mt-2 block\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"text-2xl font-semibold font-quicksand text-customGreen\",\n              children: post.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"mt-3 text-sm font-medium tracking-wide  font-quicksand text-lightGreen \",\n              children: post.content\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 17,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"mt-3 lg:mt-6 text-sm text-lightGreen font-quicksand tracking-wide italic\",\n              children: [post.publishedAt, \" | \", post.description]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 18,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 25\n          }, _this)\n        }, post.title, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n      className: \"mt-8 bg-customGreen opacity-25 xl:max-w-5xl lg:ml-8\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\n{\n  /*{post.mainImage && (\n                     <img src={post.mainImage} />\n                 )}*/\n}\n/*\n\n\n<div className=\"bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8\" style={{\n    background: 'linear-gradient(to bottom, #F0F4FD, #A1A3BA)',\n}}>\n<div className=\"relative max-w-4xl mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl\">\n    <div className=\"mt-6 pt-10 grid gap-16 lg:grid-cols-1 lg:gap-x-5 lg:gap-y-12\">\n    {posts.map((post) => (\n            <div key={post.title}>\n                <p className=\"text-sm text-gray-500\">\n                    <time dateTime={post.datetime}>{post.date}</time>\n                </p>\n                <a href=\"#\" className=\"mt-2 block\">\n                    <p className=\"text-xl font-semibold text-gray-900\">{post.title}</p>\n                    <p className=\"mt-3 text-base text-gray-500\">{post.description}</p>\n                </a>\n                <div className=\"mt-3\">\n                    <a href={post.href} className=\"text-base font-semibold text-indigo-600 hover:text-indigo-500\">\n                        Read full story\n                    </a>\n                </div>\n            </div>\n        ))}\n    </div>\n    </div>\n</div>\n\n*/\n\nvar _c;\n\n$RefreshReg$(_c, \"PostCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcz85MWRiIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsImRhdGEiLCJzbHVnIiwiY3VycmVudCIsInRpdGxlIiwiY29udGVudCIsInB1Ymxpc2hlZEF0IiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUN4QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csSUFBbEI7QUFDQSxNQUFNQSxJQUFJLEdBQUdILEtBQUssQ0FBQ0ksSUFBbkI7QUFDQSxNQUFNQyxJQUFJLEdBQUdGLElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxPQUF2QjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGdEQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsb0VBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsNENBQWY7QUFBQSwrQkFDSTtBQUFBLGlDQUNJO0FBQUcsZ0JBQUksRUFBRUQsSUFBVDtBQUFlLHFCQUFTLEVBQUMsWUFBekI7QUFBQSxvQ0FDSTtBQUFHLHVCQUFTLEVBQUMsd0RBQWI7QUFBQSx3QkFBdUVGLElBQUksQ0FBQ0k7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUcsdUJBQVMsRUFBQyx5RUFBYjtBQUFBLHdCQUF3RkosSUFBSSxDQUFDSztBQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0k7QUFBRyx1QkFBUyxFQUFDLDBFQUFiO0FBQUEseUJBQXlGTCxJQUFJLENBQUNNLFdBQTlGLFNBQThHTixJQUFJLENBQUNPLFdBQW5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFVUCxJQUFJLENBQUNJLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFrQkk7QUFBSSxlQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBc0JILENBM0JEOztLQUFNUixRO0FBNkJOLCtEQUFlQSxRQUFmO0FBRUE7QUFBQztBQUNEO0FBQ0E7QUFBcUI7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdENhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCJcblxuY29uc3QgUG9zdENhcmQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5wb3N0KVxuICAgIGNvbnN0IHBvc3QgPSBwcm9wcy5kYXRhO1xuICAgIGNvbnN0IHNsdWcgPSBwb3N0LnNsdWcuY3VycmVudDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBwYi00IHB4LTQgc206cHgtNiBsZzpwdC00IGxnOnBiLTQgbGc6cHgtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy0yeGwgbXgtYXV0byBkaXZpZGUteS0yIGRpdmlkZS1ncmF5LTIwMCBsZzptYXgtdy0zeGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTE2IGxnOmdhcC14LTUgbGc6Z2FwLXktOCBsZzpwbC0zMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cG9zdC50aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtzbHVnfSBjbGFzc05hbWU9XCJtdC0yIGJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBmb250LXF1aWNrc2FuZCB0ZXh0LWN1c3RvbUdyZWVuXCI+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFja2luZy13aWRlICBmb250LXF1aWNrc2FuZCB0ZXh0LWxpZ2h0R3JlZW4gXCI+e3Bvc3QuY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyBsZzptdC02IHRleHQtc20gdGV4dC1saWdodEdyZWVuIGZvbnQtcXVpY2tzYW5kIHRyYWNraW5nLXdpZGUgaXRhbGljXCI+e3Bvc3QucHVibGlzaGVkQXR9IHwge3Bvc3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtzbHVnfSBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCBmb250LXF1aWNrc2FuZCB0ZXh0LWN1c3RvbUdyZWVuIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFkIGZ1bGwgYXJ0aWNsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTggYmctY3VzdG9tR3JlZW4gb3BhY2l0eS0yNSB4bDptYXgtdy01eGwgbGc6bWwtOFwiPjwvaHI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcblxuey8qe3Bvc3QubWFpbkltYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QubWFpbkltYWdlfSAvPlxuICAgICAgICAgICAgICAgICl9Ki99XG5cbi8qXG5cblxuPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwdC0xNiBwYi0yMCBweC00IHNtOnB4LTYgbGc6cHQtMjQgbGc6cGItMjggbGc6cHgtOFwiIHN0eWxlPXt7XG4gICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGMEY0RkQsICNBMUEzQkEpJyxcbn19PlxuPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy00eGwgbXgtYXV0byBkaXZpZGUteS0yIGRpdmlkZS1ncmF5LTIwMCBsZzptYXgtdy03eGxcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgcHQtMTAgZ3JpZCBnYXAtMTYgbGc6Z3JpZC1jb2xzLTEgbGc6Z2FwLXgtNSBsZzpnYXAteS0xMlwiPlxuICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0LnRpdGxlfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWU9e3Bvc3QuZGF0ZXRpbWV9Pntwb3N0LmRhdGV9PC90aW1lPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm10LTIgYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj57cG9zdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1iYXNlIHRleHQtZ3JheS01MDBcIj57cG9zdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0LmhyZWZ9IGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LWluZGlnby01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWQgZnVsbCBzdG9yeVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostCard.js\n");

/***/ })

});