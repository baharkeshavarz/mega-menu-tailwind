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

/***/ "(app-client)/./app/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./app/components/Navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @headlessui/react */ \"(app-client)/./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js\");\n/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox */ \"(app-client)/./app/components/SearchBox.js\");\n/* harmony import */ var _MenuBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBar */ \"(app-client)/./app/components/MenuBar.tsx\");\n/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileMenu */ \"(app-client)/./app/components/MobileMenu.tsx\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"(app-client)/./app/components/Header.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_getAllHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/getAllHeader */ \"(app-client)/./app/lib/getAllHeader.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst navigation = [\n    {\n        name: \"خرید اقساط\",\n        href: \"#\",\n        current: true\n    },\n    {\n        name: \"درباره ما\",\n        href: \"#\",\n        current: false\n    },\n    {\n        name: \"مجله آترا\",\n        href: \"#\",\n        current: false\n    },\n    {\n        name: \"فروش سازمانی\",\n        href: \"#\",\n        current: false\n    }\n];\nfunction classNames() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\nfunction Navbar() {\n    _s();\n    const [headerData, setHeaderData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const data = await (0,_lib_getAllHeader__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n                setHeaderData(data.top_menus);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Disclosure, {\n        as: \"nav\",\n        children: (param)=>/*#__PURE__*/ {\n            let { open  } = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                open: open,\n                                classNames: classNames,\n                                headerData: headerData\n                            }, void 0, false, {\n                                fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                classNames: classNames\n                            }, void 0, false, {\n                                fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hidden lg:block\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex h-20 items-center justify-between\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 18\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MobileMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        navigation: navigation,\n                        classNames: classNames\n                    }, void 0, false, {\n                        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true);\n        }\n    }, void 0, false, {\n        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"F+1FUb8l/QpV5EVJRC3lYNoPxOE=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDOEM7QUFDWDtBQUNKO0FBQ007QUFDUjtBQUNjO0FBQ0c7QUFFOUMsTUFBTVEsYUFBYTtJQUNqQjtRQUFFQyxNQUFNO1FBQWNDLE1BQU07UUFBS0MsU0FBUztJQUFLO0lBQy9DO1FBQUVGLE1BQU07UUFBYUMsTUFBTTtRQUFLQyxTQUFTO0lBQU07SUFDL0M7UUFBRUYsTUFBTTtRQUFhQyxNQUFNO1FBQUtDLFNBQVM7SUFBTTtJQUMvQztRQUFFRixNQUFNO1FBQWdCQyxNQUFNO1FBQUtDLFNBQVM7SUFBTTtDQUNuRDtBQUVELFNBQVNDO0lBQVc7UUFBR0MsUUFBSCx1QkFBb0I7SUFBRDtJQUNyQyxPQUFPQSxRQUFRQyxPQUFPQyxTQUFTQyxLQUFLO0FBQ3RDO0FBRWUsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUU3Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsT0FBTyxNQUFNZCw2REFBWUE7Z0JBQy9CWSxjQUFjRSxLQUFLQztZQUNyQixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RDLFFBQVFELE1BQU1BO1lBQ2hCO1FBQ0Y7UUFFQUg7SUFDRixHQUFHLEVBQUU7SUFLTCxxQkFDRSw4REFBQ3BCLHlEQUFVQTtRQUFDeUIsSUFBRztrQkFDWjtnQkFBQyxFQUFFQyxLQUFJLEVBQUU7bUJBQ1I7O2tDQUNFLDhEQUFDQzt3QkFBSUMsV0FBVTs7MENBRWIsOERBQUN4QiwrQ0FBTUE7Z0NBQUNzQixNQUFNQTtnQ0FBTWQsWUFBWUE7Z0NBQVlNLFlBQVlBOzs7Ozs7MENBR3hELDhEQUFDaEIsZ0RBQU9BO2dDQUFDVSxZQUFZQTs7Ozs7OzBDQUdyQiw4REFBQ2U7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOzhDQUNaLDRFQUFDM0Isa0RBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS25CLDhEQUFDRSxtREFBVUE7d0JBQUNLLFlBQVlBO3dCQUFZSSxZQUFZQTs7Ozs7Ozs7UUFDOUM7Ozs7OztBQUlWO0dBM0N3Qks7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeD82MzBlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyBEaXNjbG9zdXJlIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQgU2VhcmNoQm94IGZyb20gJy4vU2VhcmNoQm94J1xuaW1wb3J0IE1lbnVCYXIgZnJvbSAnLi9NZW51QmFyJ1xuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9Nb2JpbGVNZW51J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBnZXRBbGxIZWFkZXIgZnJvbSAnLi4vbGliL2dldEFsbEhlYWRlcidcblxuY29uc3QgbmF2aWdhdGlvbiA9IFtcbiAgeyBuYW1lOiAn2K7YsduM2K8g2KfZgtiz2KfYtycsIGhyZWY6ICcjJywgY3VycmVudDogdHJ1ZSB9LFxuICB7IG5hbWU6ICfYr9ix2KjYp9ix2Ycg2YXYpycsIGhyZWY6ICcjJywgY3VycmVudDogZmFsc2UgfSxcbiAgeyBuYW1lOiAn2YXYrNmE2Ycg2KLYqtix2KcnLCBocmVmOiAnIycsIGN1cnJlbnQ6IGZhbHNlIH0sXG4gIHsgbmFtZTogJ9mB2LHZiNi0INiz2KfYstmF2KfZhtuMJywgaHJlZjogJyMnLCBjdXJyZW50OiBmYWxzZSB9LFxuXVxuXG5mdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCBbaGVhZGVyRGF0YSwgc2V0SGVhZGVyRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRBbGxIZWFkZXIoKTtcbiAgICAgICAgc2V0SGVhZGVyRGF0YShkYXRhLnRvcF9tZW51cyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuXG5cblxuICByZXR1cm4gKFxuICAgIDxEaXNjbG9zdXJlIGFzPVwibmF2XCI+XG4gICAgICB7KHsgb3BlbiB9KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgICAgICA8SGVhZGVyIG9wZW49e29wZW59IGNsYXNzTmFtZXM9e2NsYXNzTmFtZXN9IGhlYWRlckRhdGE9e2hlYWRlckRhdGF9ICAvPlxuXG4gICAgICAgICAgICB7LyogTWVudUJhciAqL31cbiAgICAgICAgICAgIDxNZW51QmFyIGNsYXNzTmFtZXM9e2NsYXNzTmFtZXN9Lz5cblxuICAgICAgICAgICAgey8qIHRoaXJkIG1lbnUgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9ja1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC0yMCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgIDxTZWFyY2hCb3ggLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8TW9iaWxlTWVudSBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSBjbGFzc05hbWVzPXtjbGFzc05hbWVzfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9EaXNjbG9zdXJlPlxuICApXG59XG5cblxuIl0sIm5hbWVzIjpbIkRpc2Nsb3N1cmUiLCJTZWFyY2hCb3giLCJNZW51QmFyIiwiTW9iaWxlTWVudSIsIkhlYWRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QWxsSGVhZGVyIiwibmF2aWdhdGlvbiIsIm5hbWUiLCJocmVmIiwiY3VycmVudCIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJOYXZiYXIiLCJoZWFkZXJEYXRhIiwic2V0SGVhZGVyRGF0YSIsImZldGNoRGF0YSIsImRhdGEiLCJ0b3BfbWVudXMiLCJlcnJvciIsImNvbnNvbGUiLCJhcyIsIm9wZW4iLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Navbar.tsx\n"));

/***/ })

});