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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @headlessui/react */ \"(app-client)/./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js\");\n/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox */ \"(app-client)/./app/components/SearchBox.js\");\n/* harmony import */ var _MenuBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBar */ \"(app-client)/./app/components/MenuBar.tsx\");\n/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileMenu */ \"(app-client)/./app/components/MobileMenu.tsx\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"(app-client)/./app/components/Header.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_getAllHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/getAllHeader */ \"(app-client)/./app/lib/getAllHeader.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction classNames() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\nfunction Navbar() {\n    _s();\n    const [headerData, setHeaderData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [menusData, setMenuData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [categoriesData, setCategoriesData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const data = await (0,_lib_getAllHeader__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n                setHeaderData(data.top_menus);\n                setMenuData(data.menus);\n                setCategoriesData(data.categories);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Disclosure, {\n            as: \"nav\",\n            children: (param)=>/*#__PURE__*/ {\n                let { open  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    open: open,\n                                    classNames: classNames,\n                                    headerData: headerData\n                                }, void 0, false, {\n                                    fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    classNames: classNames,\n                                    menusData: menusData,\n                                    categoriesData: categoriesData\n                                }, void 0, false, {\n                                    fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"hidden lg:block\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex h-20 items-center justify-between\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 18\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MobileMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            headerData: headerData,\n                            classNames: classNames\n                        }, void 0, false, {\n                            fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true);\n            }\n        }, void 0, false, {\n            fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n            lineNumber: 38,\n            columnNumber: 1\n        }, this)\n    }, void 0, false);\n}\n_s(Navbar, \"Z64Sxh7TOc1z0sniLGvaQJR6W3E=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDOEM7QUFDWDtBQUNKO0FBQ007QUFDUjtBQUNjO0FBQ0c7QUFHOUMsU0FBU1E7SUFBVztRQUFHQyxRQUFILHVCQUFvQjtJQUFEO0lBQ3JDLE9BQU9BLFFBQVFDLE9BQU9DLFNBQVNDLEtBQUs7QUFDdEM7QUFFZSxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFhLEVBQUU7SUFDM0QsTUFBTSxDQUFDVSxXQUFXQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFhLEVBQUU7SUFDeEQsTUFBTSxDQUFDWSxnQkFBZ0JDLGtCQUFrQixHQUFHYiwrQ0FBUUEsQ0FBYSxFQUFFO0lBRW5FRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1lLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxPQUFlLE1BQU1kLDZEQUFZQTtnQkFDdkNRLGNBQWNNLEtBQUtDO2dCQUNuQkwsWUFBWUksS0FBS0U7Z0JBQ2pCSixrQkFBa0JFLEtBQUtHO1lBQ3pCLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsTUFBTUE7WUFDaEI7UUFDRjtRQUVBTDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNGO2tCQUVBLDRFQUFDcEIseURBQVVBO1lBQUMyQixJQUFHO3NCQUNSO29CQUFDLEVBQUVDLEtBQUksRUFBRTt1QkFDUjs7c0NBQ0UsOERBQUNDOzRCQUFJQyxXQUFVOzs4Q0FFYiw4REFBQzFCLCtDQUFNQTtvQ0FBQ3dCLE1BQU1BO29DQUFNcEIsWUFBWUE7b0NBQVlNLFlBQVlBOzs7Ozs7OENBR3hELDhEQUFDWixnREFBT0E7b0NBQUNNLFlBQVlBO29DQUFZUSxXQUFXQTtvQ0FBV0UsZ0JBQWdCQTs7Ozs7OzhDQUd2RSw4REFBQ1c7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNEO3dDQUFJQyxXQUFVO2tEQUNaLDRFQUFDN0Isa0RBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS25CLDhEQUFDRSxtREFBVUE7NEJBQUNXLFlBQVlBOzRCQUFZTixZQUFZQTs7Ozs7Ozs7WUFDOUM7Ozs7Ozs7QUFTVjtHQW5Ed0JLO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL05hdmJhci50c3g/NjMwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgRGlzY2xvc3VyZSB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tICcuL1NlYXJjaEJveCdcbmltcG9ydCBNZW51QmFyIGZyb20gJy4vTWVudUJhcidcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vTW9iaWxlTWVudSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZ2V0QWxsSGVhZGVyIGZyb20gJy4uL2xpYi9nZXRBbGxIZWFkZXInXG5pbXBvcnQgU3ViQ2F0ZWdvcmllcyBmcm9tICcuL21lbnUvU3ViQ2F0ZWdvcmllcydcblxuZnVuY3Rpb24gY2xhc3NOYW1lcyguLi5jbGFzc2VzOiBzdHJpbmdbXSkge1xuICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgW2hlYWRlckRhdGEsIHNldEhlYWRlckRhdGFdID0gdXNlU3RhdGU8TWVudUl0ZW1bXT4oW10pO1xuICBjb25zdCBbbWVudXNEYXRhLCBzZXRNZW51RGF0YV0gPSB1c2VTdGF0ZTxNZW51SXRlbVtdPihbXSk7XG4gIGNvbnN0IFtjYXRlZ29yaWVzRGF0YSwgc2V0Q2F0ZWdvcmllc0RhdGFdID0gdXNlU3RhdGU8Q2F0ZWdvcnlbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YTpBbGxNZW51ID0gYXdhaXQgZ2V0QWxsSGVhZGVyKCk7XG4gICAgICAgIHNldEhlYWRlckRhdGEoZGF0YS50b3BfbWVudXMpO1xuICAgICAgICBzZXRNZW51RGF0YShkYXRhLm1lbnVzKTtcbiAgICAgICAgc2V0Q2F0ZWdvcmllc0RhdGEoZGF0YS5jYXRlZ29yaWVzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG48Plxuey8qIDxTdWJDYXRlZ29yaWVzIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXNEYXRhfS8+ICovfVxuPERpc2Nsb3N1cmUgYXM9XCJuYXZcIj5cbiAgICAgIHsoeyBvcGVuIH0pID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgICAgICAgIDxIZWFkZXIgb3Blbj17b3Blbn0gY2xhc3NOYW1lcz17Y2xhc3NOYW1lc30gaGVhZGVyRGF0YT17aGVhZGVyRGF0YX0gIC8+XG5cbiAgICAgICAgICAgIHsvKiBNZW51QmFyICovfVxuICAgICAgICAgICAgPE1lbnVCYXIgY2xhc3NOYW1lcz17Y2xhc3NOYW1lc30gbWVudXNEYXRhPXttZW51c0RhdGF9IGNhdGVnb3JpZXNEYXRhPXtjYXRlZ29yaWVzRGF0YX0vPlxuXG4gICAgICAgICAgICB7LyogU2VhcmNoICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2tcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtMjAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICA8U2VhcmNoQm94IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPE1vYmlsZU1lbnUgaGVhZGVyRGF0YT17aGVhZGVyRGF0YX0gY2xhc3NOYW1lcz17Y2xhc3NOYW1lc30gLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvRGlzY2xvc3VyZT5cbjwvPlxuXG5cblxuXG4gIClcbn1cblxuXG4iXSwibmFtZXMiOlsiRGlzY2xvc3VyZSIsIlNlYXJjaEJveCIsIk1lbnVCYXIiLCJNb2JpbGVNZW51IiwiSGVhZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRBbGxIZWFkZXIiLCJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiTmF2YmFyIiwiaGVhZGVyRGF0YSIsInNldEhlYWRlckRhdGEiLCJtZW51c0RhdGEiLCJzZXRNZW51RGF0YSIsImNhdGVnb3JpZXNEYXRhIiwic2V0Q2F0ZWdvcmllc0RhdGEiLCJmZXRjaERhdGEiLCJkYXRhIiwidG9wX21lbnVzIiwibWVudXMiLCJjYXRlZ29yaWVzIiwiZXJyb3IiLCJjb25zb2xlIiwiYXMiLCJvcGVuIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Navbar.tsx\n"));

/***/ })

});