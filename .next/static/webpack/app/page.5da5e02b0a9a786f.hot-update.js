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

/***/ "(app-client)/./app/components/MobileMenu.tsx":
/*!***************************************!*\
  !*** ./app/components/MobileMenu.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ \"(app-client)/./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst MobileMenu = (param)=>{\n    let { headerData , classNames  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Disclosure.Panel, {\n        className: \"lg:hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"space-y-1 px-2 pb-3 pt-2 border-b-2\",\n            children: headerData && headerData.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Disclosure.Button, {\n                    as: \"a\",\n                    href: item.link,\n                    className: classNames(i === 1 ? \"bg-gray-200 text-black\" : \"text-gray-300 hover:bg-gray-100 hover:text-gray-700\", \"block rounded-md px-3 py-2 text-base text-right font-medium\"),\n                    \"aria-current\": i === 1 ? \"page\" : undefined,\n                    children: item.name\n                }, item.title, false, {\n                    fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/MobileMenu.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 21\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/MobileMenu.tsx\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/MobileMenu.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_c = MobileMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\nvar _c;\n$RefreshReg$(_c, \"MobileMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTW9iaWxlTWVudS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBQ3JCO0FBT3pCLE1BQU1FLGFBQWE7UUFBQyxFQUFFQyxXQUFVLEVBQUVDLFdBQVUsRUFBbUI7SUFDM0QscUJBQ0ksOERBQUNKLCtEQUFnQks7UUFBQ0MsV0FBVTtrQkFDeEIsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ1BILGNBQWNBLFdBQVdLLElBQUksQ0FBQ0MsTUFBTUMsa0JBQ3BDLDhEQUFDVixnRUFBaUJXO29CQUVkQyxJQUFHO29CQUNIQyxNQUFNSixLQUFLSztvQkFDWFIsV0FBV0YsV0FDUE0sTUFBTSxJQUFJLDJCQUEyQix1REFDckM7b0JBRUpLLGdCQUFjTCxNQUFNLElBQUksU0FBU007OEJBRWhDUCxLQUFLUTttQkFURFIsS0FBS1M7Ozs7Ozs7Ozs7Ozs7OztBQWVsQztLQXJCTWhCO0FBdUJOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL01vYmlsZU1lbnUudHN4PzI1NGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzY2xvc3VyZSB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG50eXBlIE1vYmlsZU1lbnVQcm9wcyA9IHtcbiAgICBoZWFkZXJEYXRhOiBNZW51SXRlbVtdLFxuICAgIGNsYXNzTmFtZXM6ICguLi5jbGFzc2VzOiBzdHJpbmdbXSkgPT4gc3RyaW5nLFxufVxuXG5jb25zdCBNb2JpbGVNZW51ID0gKHsgaGVhZGVyRGF0YSwgY2xhc3NOYW1lcyB9OiBNb2JpbGVNZW51UHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RGlzY2xvc3VyZS5QYW5lbCBjbGFzc05hbWU9XCJsZzpoaWRkZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xIHB4LTIgcGItMyBwdC0yIGJvcmRlci1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICB7aGVhZGVyRGF0YSAmJiBoZWFkZXJEYXRhLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RGlzY2xvc3VyZS5CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9PT0gMSA/ICdiZy1ncmF5LTIwMCB0ZXh0LWJsYWNrJyA6ICd0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOnRleHQtZ3JheS03MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdibG9jayByb3VuZGVkLW1kIHB4LTMgcHktMiB0ZXh0LWJhc2UgdGV4dC1yaWdodCBmb250LW1lZGl1bSdcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e2kgPT09IDEgPyAncGFnZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvRGlzY2xvc3VyZS5CdXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EaXNjbG9zdXJlLlBhbmVsPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudVxuIl0sIm5hbWVzIjpbIkRpc2Nsb3N1cmUiLCJSZWFjdCIsIk1vYmlsZU1lbnUiLCJoZWFkZXJEYXRhIiwiY2xhc3NOYW1lcyIsIlBhbmVsIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwiaXRlbSIsImkiLCJCdXR0b24iLCJhcyIsImhyZWYiLCJsaW5rIiwiYXJpYS1jdXJyZW50IiwidW5kZWZpbmVkIiwibmFtZSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/MobileMenu.tsx\n"));

/***/ })

});