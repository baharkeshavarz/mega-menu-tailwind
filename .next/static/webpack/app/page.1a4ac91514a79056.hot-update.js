"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/components/menu/SubCategories.tsx":
/*!***********************************************!*\
  !*** ./app/components/menu/SubCategories.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubCategories; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction SubCategories(param) {\n    let { categories  } = param;\n    const renderMenu = (links)=>{\n        return links.map((menuItem)=>{\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginLeft: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: menuItem === null || menuItem === void 0 ? void 0 : menuItem.link,\n                        children: menuItem === null || menuItem === void 0 ? void 0 : menuItem.name\n                    }, void 0, false, {\n                        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/menu/SubCategories.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    (menuItem === null || menuItem === void 0 ? void 0 : menuItem.sub_category) && renderMenu(menuItem === null || menuItem === void 0 ? void 0 : menuItem.sub_category)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/menu/SubCategories.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: renderMenu(categories)\n    }, void 0, false, {\n        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/menu/SubCategories.tsx\",\n        lineNumber: 18,\n        columnNumber: 10\n    }, this);\n}\n_c = SubCategories;\nvar _c;\n$RefreshReg$(_c, \"SubCategories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvbWVudS9TdWJDYXRlZ29yaWVzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFPZSxTQUFTQSxjQUFjLEtBQTBCO1FBQTFCLEVBQUNDLFdBQVUsRUFBZSxHQUExQjtJQUNwQyxNQUFNQyxhQUFhLENBQUNDO1FBQ2xCLE9BQU9BLE1BQU1DLElBQUksQ0FBQ0M7MEJBQ2hCLHFFQUFDQztnQkFBSUMsT0FBTztvQkFBRUMsWUFBWTtnQkFBTzs7a0NBQy9CLDhEQUFDQzt3QkFBRUMsTUFBTUwscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVTTtrQ0FBT04scUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVTzs7Ozs7O29CQUNuQ1AsQ0FBQUEscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVUSxZQUFXLEtBQUtYLFdBQVdHLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVVE7Ozs7Ozs7O0lBR3REO0lBRUEscUJBQU8sOERBQUNQO2tCQUFLSixXQUFXRDs7Ozs7O0FBQzFCO0tBWHdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9tZW51L1N1YkNhdGVnb3JpZXMudHN4P2U2YzAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOYXZiYXJDb250ZW50cywgTmF2YmFySXRlbSwgTmF2YmFyR3JvdXAgfSBmcm9tIFwiLi4vLi4vLi4vTmF2TGlua3NcIjtcblxudHlwZSBOYXZNZW51UHJvcHMgPSB7XG4gICAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3ViQ2F0ZWdvcmllcyh7Y2F0ZWdvcmllc306IE5hdk1lbnVQcm9wcykge1xuICBjb25zdCByZW5kZXJNZW51ID0gKGxpbmtzOiBOYXZiYXJDb250ZW50cykgPT4ge1xuICAgIHJldHVybiBsaW5rcy5tYXAoKG1lbnVJdGVtOiBOYXZiYXJJdGVtIHwgTmF2YmFyR3JvdXAgfCBzdHJpbmcpID0+IChcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX0+XG4gICAgICAgIDxhIGhyZWY9e21lbnVJdGVtPy5saW5rfT57bWVudUl0ZW0/Lm5hbWV9PC9hPlxuICAgICAgICB7bWVudUl0ZW0/LnN1Yl9jYXRlZ29yeSAmJiByZW5kZXJNZW51KG1lbnVJdGVtPy5zdWJfY2F0ZWdvcnkpfVxuICAgICAgPC9kaXY+XG4gICAgKSk7XG4gIH07XG5cbiAgcmV0dXJuIDxkaXY+e3JlbmRlck1lbnUoY2F0ZWdvcmllcyl9PC9kaXY+O1xufVxuIl0sIm5hbWVzIjpbIlN1YkNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwicmVuZGVyTWVudSIsImxpbmtzIiwibWFwIiwibWVudUl0ZW0iLCJkaXYiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJhIiwiaHJlZiIsImxpbmsiLCJuYW1lIiwic3ViX2NhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/menu/SubCategories.tsx\n"));

/***/ })

});