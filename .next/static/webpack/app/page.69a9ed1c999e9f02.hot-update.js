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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @headlessui/react */ \"(app-client)/./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js\");\n/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox */ \"(app-client)/./app/components/SearchBox.js\");\n/* harmony import */ var _MenuBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBar */ \"(app-client)/./app/components/MenuBar.tsx\");\n/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileMenu */ \"(app-client)/./app/components/MobileMenu.tsx\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"(app-client)/./app/components/Header.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_getAllHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/getAllHeader */ \"(app-client)/./app/lib/getAllHeader.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction classNames() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\nfunction Navbar() {\n    _s();\n    const [headerData, setHeaderData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [menusData, setMenuData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [categoriesData, setCategoriesData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const data = await (0,_lib_getAllHeader__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n                setHeaderData(data.top_menus);\n                setMenuData(data.menus);\n                setCategoriesData(Object.values(data.categories));\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchData();\n    }, []);\n    let loading = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-20\",\n                children: \"Noteworthy technology acquisitions 2021\"\n            }, void 0, false, {\n                fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                lineNumber: 36,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-normal text-gray-700 dark:text-gray-400 opacity-20\",\n                children: \"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\"\n            }, void 0, false, {\n                fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                lineNumber: 37,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                role: \"status\",\n                className: \"absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        \"aria-hidden\": \"true\",\n                        className: \"w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600\",\n                        viewBox: \"0 0 100 101\",\n                        fill: \"none\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\",\n                                fill: \"currentColor\"\n                            }, void 0, false, {\n                                fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 185\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\",\n                                fill: \"currentFill\"\n                            }, void 0, false, {\n                                fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 581\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"sr-only\",\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                lineNumber: 38,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n        lineNumber: 35,\n        columnNumber: 17\n    }, this);\n    let content = headerData.length === 0 ? loading : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Disclosure, {\n        as: \"nav\",\n        children: (param)=>/*#__PURE__*/ {\n            let { open  } = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                open: open,\n                                classNames: classNames,\n                                headerData: headerData\n                            }, void 0, false, {\n                                fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                classNames: classNames,\n                                menusData: menusData,\n                                categoriesData: categoriesData\n                            }, void 0, false, {\n                                fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hidden lg:block\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex h-20 items-center justify-between\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 11\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 9\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MobileMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        headerData: headerData,\n                        classNames: classNames\n                    }, void 0, false, {\n                        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true);\n        }\n    }, void 0, false, {\n        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n        lineNumber: 44,\n        columnNumber: 56\n    }, this);\n    return content;\n}\n_s(Navbar, \"Z64Sxh7TOc1z0sniLGvaQJR6W3E=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDOEM7QUFDWDtBQUNKO0FBQ007QUFDUjtBQUNjO0FBQ0c7QUFFOUMsU0FBU1E7SUFBVztRQUFHQyxRQUFILHVCQUFvQjtJQUFEO0lBQ3JDLE9BQU9BLFFBQVFDLE9BQU9DLFNBQVNDLEtBQUs7QUFDdEM7QUFFZSxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFhLEVBQUU7SUFDM0QsTUFBTSxDQUFDVSxXQUFXQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFhLEVBQUU7SUFDeEQsTUFBTSxDQUFDWSxnQkFBZ0JDLGtCQUFrQixHQUFHYiwrQ0FBUUEsQ0FBYSxFQUFFO0lBRW5FRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1lLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxPQUFlLE1BQU1kLDZEQUFZQTtnQkFDdkNRLGNBQWNNLEtBQUtDO2dCQUNuQkwsWUFBWUksS0FBS0U7Z0JBQ2pCSixrQkFBa0JLLE9BQU9DLE9BQU9KLEtBQUtLO1lBQ3ZDLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsTUFBTUE7WUFDaEI7UUFDRjtRQUVBUDtJQUNGLEdBQUcsRUFBRTtJQUdMLElBQUlTLHdCQUFVLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDN0IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFrRjs7Ozs7OzBCQUNoRyw4REFBQ0U7Z0JBQUVGLFdBQVU7MEJBQTBEOzs7Ozs7MEJBQ3ZFLDhEQUFDRDtnQkFBSUksTUFBSztnQkFBU0gsV0FBVTs7a0NBQ3pCLDhEQUFDSTt3QkFBSUMsZUFBWTt3QkFBT0wsV0FBVTt3QkFBMkVNLFNBQVE7d0JBQWNDLE1BQUs7d0JBQU9DLE9BQU07OzBDQUE2Qiw4REFBQ0M7Z0NBQUtDLEdBQUU7Z0NBQStXSCxNQUFLOzs7Ozs7MENBQWdCLDhEQUFDRTtnQ0FBS0MsR0FBRTtnQ0FBZ2xCSCxNQUFLOzs7Ozs7Ozs7Ozs7a0NBQzNwQyw4REFBQ0k7d0JBQUtYLFdBQVU7a0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUk5QixJQUFJWSxVQUFVN0IsV0FBVzhCLFdBQVcsSUFBSWYsd0JBQWEsOERBQUM3Qix5REFBVUE7UUFBQzZDLElBQUc7a0JBQ25FO2dCQUFDLEVBQUVDLEtBQUksRUFBRTttQkFDVjs7a0NBQ0UsOERBQUNoQjt3QkFBSUMsV0FBVTs7MENBRWIsOERBQUMzQiwrQ0FBTUE7Z0NBQUMwQyxNQUFNQTtnQ0FBTXRDLFlBQVlBO2dDQUFZTSxZQUFZQTs7Ozs7OzBDQUd4RCw4REFBQ1osZ0RBQU9BO2dDQUFDTSxZQUFZQTtnQ0FBWVEsV0FBV0E7Z0NBQVdFLGdCQUFnQkE7Ozs7OzswQ0FHdkUsOERBQUNZO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQzlCLGtEQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtsQiw4REFBQ0UsbURBQVVBO3dCQUFDVyxZQUFZQTt3QkFBWU4sWUFBWUE7Ozs7Ozs7O1FBQzlDOzs7Ozs7SUFJRixPQUFPbUM7QUFDVDtHQXREd0I5QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9OYXZiYXIudHN4PzYzMGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IERpc2Nsb3N1cmUgfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSAnLi9TZWFyY2hCb3gnXG5pbXBvcnQgTWVudUJhciBmcm9tICcuL01lbnVCYXInXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tICcuL01vYmlsZU1lbnUnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGdldEFsbEhlYWRlciBmcm9tICcuLi9saWIvZ2V0QWxsSGVhZGVyJ1xuXG5mdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCBbaGVhZGVyRGF0YSwgc2V0SGVhZGVyRGF0YV0gPSB1c2VTdGF0ZTxNZW51SXRlbVtdPihbXSk7XG4gIGNvbnN0IFttZW51c0RhdGEsIHNldE1lbnVEYXRhXSA9IHVzZVN0YXRlPE1lbnVJdGVtW10+KFtdKTtcbiAgY29uc3QgW2NhdGVnb3JpZXNEYXRhLCBzZXRDYXRlZ29yaWVzRGF0YV0gPSB1c2VTdGF0ZTxDYXRlZ29yeVtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhOkFsbE1lbnUgPSBhd2FpdCBnZXRBbGxIZWFkZXIoKTtcbiAgICAgICAgc2V0SGVhZGVyRGF0YShkYXRhLnRvcF9tZW51cyk7XG4gICAgICAgIHNldE1lbnVEYXRhKGRhdGEubWVudXMpO1xuICAgICAgICBzZXRDYXRlZ29yaWVzRGF0YShPYmplY3QudmFsdWVzKGRhdGEuY2F0ZWdvcmllcykpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgIFxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cblxuICBsZXQgbG9hZGluZyA9IDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaXRlbXMtY2VudGVyIGJsb2NrIG1heC13LXNtIHAtNiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQtbGcgc2hhZG93LW1kIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS04MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiPlxuICA8aDUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUgb3BhY2l0eS0yMFwiPk5vdGV3b3J0aHkgdGVjaG5vbG9neSBhY3F1aXNpdGlvbnMgMjAyMTwvaDU+XG4gIDxwIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwIG9wYWNpdHktMjBcIj5IZXJlIGFyZSB0aGUgYmlnZ2VzdCBlbnRlcnByaXNlIHRlY2hub2xvZ3kgYWNxdWlzaXRpb25zIG9mIDIwMjEgc28gZmFyLCBpbiByZXZlcnNlIGNocm9ub2xvZ2ljYWwgb3JkZXIuPC9wPlxuICA8ZGl2IHJvbGU9XCJzdGF0dXNcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgdG9wLTIvNCBsZWZ0LTEvMlwiPlxuICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTggaC04IG1yLTIgdGV4dC1ncmF5LTIwMCBhbmltYXRlLXNwaW4gZGFyazp0ZXh0LWdyYXktNjAwIGZpbGwtYmx1ZS02MDBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDFcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEwMCA1MC41OTA4QzEwMCA3OC4yMDUxIDc3LjYxNDIgMTAwLjU5MSA1MCAxMDAuNTkxQzIyLjM4NTggMTAwLjU5MSAwIDc4LjIwNTEgMCA1MC41OTA4QzAgMjIuOTc2NiAyMi4zODU4IDAuNTkwODIgNTAgMC41OTA4MkM3Ny42MTQyIDAuNTkwODIgMTAwIDIyLjk3NjYgMTAwIDUwLjU5MDhaTTkuMDgxNDQgNTAuNTkwOEM5LjA4MTQ0IDczLjE4OTUgMjcuNDAxMyA5MS41MDk0IDUwIDkxLjUwOTRDNzIuNTk4NyA5MS41MDk0IDkwLjkxODYgNzMuMTg5NSA5MC45MTg2IDUwLjU5MDhDOTAuOTE4NiAyNy45OTIxIDcyLjU5ODcgOS42NzIyNiA1MCA5LjY3MjI2QzI3LjQwMTMgOS42NzIyNiA5LjA4MTQ0IDI3Ljk5MjEgOS4wODE0NCA1MC41OTA4WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PHBhdGggZD1cIk05My45Njc2IDM5LjA0MDlDOTYuMzkzIDM4LjQwMzggOTcuODYyNCAzNS45MTE2IDk3LjAwNzkgMzMuNTUzOUM5NS4yOTMyIDI4LjgyMjcgOTIuODcxIDI0LjM2OTIgODkuODE2NyAyMC4zNDhDODUuODQ1MiAxNS4xMTkyIDgwLjg4MjYgMTAuNzIzOCA3NS4yMTI0IDcuNDEyODlDNjkuNTQyMiA0LjEwMTk0IDYzLjI3NTQgMS45NDAyNSA1Ni43Njk4IDEuMDUxMjRDNTEuNzY2NiAwLjM2NzU0MSA0Ni42OTc2IDAuNDQ2ODQzIDQxLjczNDUgMS4yNzg3M0MzOS4yNjEzIDEuNjkzMjggMzcuODEzIDQuMTk3NzggMzguNDUwMSA2LjYyMzI2QzM5LjA4NzMgOS4wNDg3NCA0MS41Njk0IDEwLjQ3MTcgNDQuMDUwNSAxMC4xMDcxQzQ3Ljg1MTEgOS41NDg1NSA1MS43MTkxIDkuNTI2ODkgNTUuNTQwMiAxMC4wNDkxQzYwLjg2NDIgMTAuNzc2NiA2NS45OTI4IDEyLjU0NTcgNzAuNjMzMSAxNS4yNTUyQzc1LjI3MzUgMTcuOTY0OCA3OS4zMzQ3IDIxLjU2MTkgODIuNTg0OSAyNS44NDFDODQuOTE3NSAyOC45MTIxIDg2Ljc5OTcgMzIuMjkxMyA4OC4xODExIDM1Ljg3NThDODkuMDgzIDM4LjIxNTggOTEuNTQyMSAzOS42NzgxIDkzLjk2NzYgMzkuMDQwOVpcIiBmaWxsPVwiY3VycmVudEZpbGxcIi8+PC9zdmc+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj47XG5cbiAgbGV0IGNvbnRlbnQgPSBoZWFkZXJEYXRhLmxlbmd0aCA9PT0gMCA/IGxvYWRpbmcgOiAoICA8RGlzY2xvc3VyZSBhcz1cIm5hdlwiPlxuICB7KHsgb3BlbiB9KSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8SGVhZGVyIG9wZW49e29wZW59IGNsYXNzTmFtZXM9e2NsYXNzTmFtZXN9IGhlYWRlckRhdGE9e2hlYWRlckRhdGF9ICAvPlxuXG4gICAgICB7LyogTWVudUJhciAqL31cbiAgICAgIDxNZW51QmFyIGNsYXNzTmFtZXM9e2NsYXNzTmFtZXN9IG1lbnVzRGF0YT17bWVudXNEYXRhfSBjYXRlZ29yaWVzRGF0YT17Y2F0ZWdvcmllc0RhdGF9Lz5cblxuICAgICAgey8qIFNlYXJjaCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTIwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8U2VhcmNoQm94IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgPE1vYmlsZU1lbnUgaGVhZGVyRGF0YT17aGVhZGVyRGF0YX0gY2xhc3NOYW1lcz17Y2xhc3NOYW1lc30gLz5cbiAgPC8+XG4gICl9XG4gIDwvRGlzY2xvc3VyZT4pXG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cblxuIl0sIm5hbWVzIjpbIkRpc2Nsb3N1cmUiLCJTZWFyY2hCb3giLCJNZW51QmFyIiwiTW9iaWxlTWVudSIsIkhlYWRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QWxsSGVhZGVyIiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIk5hdmJhciIsImhlYWRlckRhdGEiLCJzZXRIZWFkZXJEYXRhIiwibWVudXNEYXRhIiwic2V0TWVudURhdGEiLCJjYXRlZ29yaWVzRGF0YSIsInNldENhdGVnb3JpZXNEYXRhIiwiZmV0Y2hEYXRhIiwiZGF0YSIsInRvcF9tZW51cyIsIm1lbnVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY2F0ZWdvcmllcyIsImVycm9yIiwiY29uc29sZSIsImxvYWRpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsInAiLCJyb2xlIiwic3ZnIiwiYXJpYS1oaWRkZW4iLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwicGF0aCIsImQiLCJzcGFuIiwiY29udGVudCIsImxlbmd0aCIsImFzIiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Navbar.tsx\n"));

/***/ })

});