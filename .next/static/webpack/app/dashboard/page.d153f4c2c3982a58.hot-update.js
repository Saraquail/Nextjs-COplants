"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/page.js":
/*!***********************************!*\
  !*** ./src/app/dashboard/page.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data */ \"(app-pages-browser)/./src/data.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // useEffect(() => {\n    // }, []);\n    async function getPlants() {\n        let data = _data__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n        // let data = await res.json();\n        setResults(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().description),\n                children: \" Welcome to the dashboard \"\n            }, void 0, false, {\n                fileName: \"/Users/squara/repos/COplants/src/app/dashboard/page.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().description),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {}, void 0, false, {\n                            fileName: \"/Users/squara/repos/COplants/src/app/dashboard/page.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            onClick: getPlants(),\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/squara/repos/COplants/src/app/dashboard/page.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/squara/repos/COplants/src/app/dashboard/page.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/squara/repos/COplants/src/app/dashboard/page.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().center),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Results - tap \",\n                                \">\",\n                                \" for more details\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/squara/repos/COplants/src/app/dashboard/page.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        results ? {\n                            results\n                        } : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/squara/repos/COplants/src/app/dashboard/page.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/squara/repos/COplants/src/app/dashboard/page.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/squara/repos/COplants/src/app/dashboard/page.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"od68SXgl0HKV0v/NdBL6JtLUk7Y=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ0k7QUFDUDtBQUd0QixTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXZDLG9CQUFvQjtJQUVwQixVQUFVO0lBQ1osZUFBZU07UUFDYixJQUFJQyxPQUFPTCw2Q0FBU0E7UUFDcEIsK0JBQStCO1FBQy9CRyxXQUFXRTtJQUNiO0lBQ0UscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVdWLDhEQUFXOzswQkFDMUIsOERBQUNXO2dCQUFLRCxXQUFXVixxRUFBa0I7MEJBQUU7Ozs7OzswQkFDckMsOERBQUNhO2dCQUFJSCxXQUFXVixxRUFBa0I7MEJBQ2hDLDRFQUFDYzs7c0NBR0MsOERBQUNDOzs7OztzQ0FJRCw4REFBQ0M7NEJBQU9DLE1BQUs7NEJBQVNDLFNBQVNYO3NDQUFhOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJaEQsOERBQUNNO2dCQUFJSCxXQUFXVixnRUFBYTswQkFDM0IsNEVBQUNhOztzQ0FDQyw4REFBQ087O2dDQUFHO2dDQUFlO2dDQUFJOzs7Ozs7O3dCQUN0QmYsVUFBVTs0QkFBRUE7d0JBQVEsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25DO0dBbEN3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvcGFnZS5qcz9kMmI4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vcGFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgIHBsYW50RGF0YSAgZnJvbSBcIi4uLy4uL2RhdGFcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFxuICAvLyB9LCBbXSk7XG5hc3luYyBmdW5jdGlvbiBnZXRQbGFudHMoKSB7XG4gIGxldCBkYXRhID0gcGxhbnREYXRhO1xuICAvLyBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHNldFJlc3VsdHMoZGF0YSk7XG59XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+IFdlbGNvbWUgdG8gdGhlIGRhc2hib2FyZCA8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgPGZvcm0gXG4gICAgICAgIC8vIGFjdGlvbj1cIi9zZWFyY2hcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgIC8vIG5hbWU9XCJxdWVyeVwiIFxuXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtnZXRQbGFudHMoKX0+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPlJlc3VsdHMgLSB0YXAge1wiPlwifSBmb3IgbW9yZSBkZXRhaWxzPC9oMj5cbiAgICAgICAgICB7cmVzdWx0cyA/IHsgcmVzdWx0cyB9IDogXCJcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwbGFudERhdGEiLCJQYWdlIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJnZXRQbGFudHMiLCJkYXRhIiwibWFpbiIsImNsYXNzTmFtZSIsInNwYW4iLCJkZXNjcmlwdGlvbiIsImRpdiIsImZvcm0iLCJpbnB1dCIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiY2VudGVyIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.js\n"));

/***/ })

});