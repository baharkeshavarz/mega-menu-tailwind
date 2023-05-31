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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @headlessui/react */ \"(app-client)/./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js\");\n/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox */ \"(app-client)/./app/components/SearchBox.js\");\n/* harmony import */ var _MenuBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBar */ \"(app-client)/./app/components/MenuBar.tsx\");\n/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileMenu */ \"(app-client)/./app/components/MobileMenu.tsx\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"(app-client)/./app/components/Header.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_getAllHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/getAllHeader */ \"(app-client)/./app/lib/getAllHeader.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction classNames() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\nfunction Navbar() {\n    _s();\n    const [headerData, setHeaderData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [menusData, setMenuData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [categoriesData, setCategoriesData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const data = await (0,_lib_getAllHeader__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n                setHeaderData(data.top_menus);\n                setMenuData(data.menus);\n                setCategoriesData(Object.values(data.categories));\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        console.log(\"categoriesData\", categoriesData);\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Disclosure, {\n            as: \"nav\",\n            children: (param)=>/*#__PURE__*/ {\n                let { open  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    open: open,\n                                    classNames: classNames,\n                                    headerData: headerData\n                                }, void 0, false, {\n                                    fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    classNames: classNames,\n                                    menusData: menusData,\n                                    categoriesData: categoriesData\n                                }, void 0, false, {\n                                    fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"hidden lg:block\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex h-20 items-center justify-between\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 18\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MobileMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            headerData: headerData,\n                            classNames: classNames\n                        }, void 0, false, {\n                            fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true);\n            }\n        }, void 0, false, {\n            fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n            lineNumber: 37,\n            columnNumber: 1\n        }, this)\n    }, void 0, false);\n}\n_s(Navbar, \"Z64Sxh7TOc1z0sniLGvaQJR6W3E=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDOEM7QUFDWDtBQUNKO0FBQ007QUFDUjtBQUNjO0FBQ0c7QUFFOUMsU0FBU1E7SUFBVztRQUFHQyxRQUFILHVCQUFvQjtJQUFEO0lBQ3JDLE9BQU9BLFFBQVFDLE9BQU9DLFNBQVNDLEtBQUs7QUFDdEM7QUFFZSxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFhLEVBQUU7SUFDM0QsTUFBTSxDQUFDVSxXQUFXQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFhLEVBQUU7SUFDeEQsTUFBTSxDQUFDWSxnQkFBZ0JDLGtCQUFrQixHQUFHYiwrQ0FBUUEsQ0FBYSxFQUFFO0lBRW5FRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1lLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxPQUFlLE1BQU1kLDZEQUFZQTtnQkFDdkNRLGNBQWNNLEtBQUtDO2dCQUNuQkwsWUFBWUksS0FBS0U7Z0JBQ2pCSixrQkFBa0JLLE9BQU9DLE9BQU9KLEtBQUtLO1lBQ3ZDLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsTUFBTUE7WUFDaEI7UUFDRjtRQUNBQyxRQUFRQyxJQUFJLGtCQUFrQlg7UUFDOUJFO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0Y7a0JBRUEsNEVBQUNwQix5REFBVUE7WUFBQzhCLElBQUc7c0JBQ1I7b0JBQUMsRUFBRUMsS0FBSSxFQUFFO3VCQUNSOztzQ0FDRSw4REFBQ0M7NEJBQUlDLFdBQVU7OzhDQUViLDhEQUFDN0IsK0NBQU1BO29DQUFDMkIsTUFBTUE7b0NBQU12QixZQUFZQTtvQ0FBWU0sWUFBWUE7Ozs7Ozs4Q0FHeEQsOERBQUNaLGdEQUFPQTtvQ0FBQ00sWUFBWUE7b0NBQVlRLFdBQVdBO29DQUFXRSxnQkFBZ0JBOzs7Ozs7OENBR3ZFLDhEQUFDYztvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ1osNEVBQUNoQyxrREFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLbkIsOERBQUNFLG1EQUFVQTs0QkFBQ1csWUFBWUE7NEJBQVlOLFlBQVlBOzs7Ozs7OztZQUM5Qzs7Ozs7OztBQVNWO0dBbkR3Qks7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeD82MzBlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyBEaXNjbG9zdXJlIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQgU2VhcmNoQm94IGZyb20gJy4vU2VhcmNoQm94J1xuaW1wb3J0IE1lbnVCYXIgZnJvbSAnLi9NZW51QmFyJ1xuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9Nb2JpbGVNZW51J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBnZXRBbGxIZWFkZXIgZnJvbSAnLi4vbGliL2dldEFsbEhlYWRlcidcblxuZnVuY3Rpb24gY2xhc3NOYW1lcyguLi5jbGFzc2VzOiBzdHJpbmdbXSkge1xuICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgW2hlYWRlckRhdGEsIHNldEhlYWRlckRhdGFdID0gdXNlU3RhdGU8TWVudUl0ZW1bXT4oW10pO1xuICBjb25zdCBbbWVudXNEYXRhLCBzZXRNZW51RGF0YV0gPSB1c2VTdGF0ZTxNZW51SXRlbVtdPihbXSk7XG4gIGNvbnN0IFtjYXRlZ29yaWVzRGF0YSwgc2V0Q2F0ZWdvcmllc0RhdGFdID0gdXNlU3RhdGU8Q2F0ZWdvcnlbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YTpBbGxNZW51ID0gYXdhaXQgZ2V0QWxsSGVhZGVyKCk7XG4gICAgICAgIHNldEhlYWRlckRhdGEoZGF0YS50b3BfbWVudXMpO1xuICAgICAgICBzZXRNZW51RGF0YShkYXRhLm1lbnVzKTtcbiAgICAgICAgc2V0Q2F0ZWdvcmllc0RhdGEoT2JqZWN0LnZhbHVlcyhkYXRhLmNhdGVnb3JpZXMpKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJ2NhdGVnb3JpZXNEYXRhJywgY2F0ZWdvcmllc0RhdGEpO1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbjw+XG57LyogPFN1YkNhdGVnb3JpZXMgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc0RhdGF9Lz4gKi99XG48RGlzY2xvc3VyZSBhcz1cIm5hdlwiPlxuICAgICAgeyh7IG9wZW4gfSkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICAgICAgPEhlYWRlciBvcGVuPXtvcGVufSBjbGFzc05hbWVzPXtjbGFzc05hbWVzfSBoZWFkZXJEYXRhPXtoZWFkZXJEYXRhfSAgLz5cblxuICAgICAgICAgICAgey8qIE1lbnVCYXIgKi99XG4gICAgICAgICAgICA8TWVudUJhciBjbGFzc05hbWVzPXtjbGFzc05hbWVzfSBtZW51c0RhdGE9e21lbnVzRGF0YX0gY2F0ZWdvcmllc0RhdGE9e2NhdGVnb3JpZXNEYXRhfS8+XG5cbiAgICAgICAgICAgIHsvKiBTZWFyY2ggKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9ja1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC0yMCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgIDxTZWFyY2hCb3ggLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8TW9iaWxlTWVudSBoZWFkZXJEYXRhPXtoZWFkZXJEYXRhfSBjbGFzc05hbWVzPXtjbGFzc05hbWVzfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9EaXNjbG9zdXJlPlxuPC8+XG5cblxuXG5cbiAgKVxufVxuXG5cbiJdLCJuYW1lcyI6WyJEaXNjbG9zdXJlIiwiU2VhcmNoQm94IiwiTWVudUJhciIsIk1vYmlsZU1lbnUiLCJIZWFkZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldEFsbEhlYWRlciIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJOYXZiYXIiLCJoZWFkZXJEYXRhIiwic2V0SGVhZGVyRGF0YSIsIm1lbnVzRGF0YSIsInNldE1lbnVEYXRhIiwiY2F0ZWdvcmllc0RhdGEiLCJzZXRDYXRlZ29yaWVzRGF0YSIsImZldGNoRGF0YSIsImRhdGEiLCJ0b3BfbWVudXMiLCJtZW51cyIsIk9iamVjdCIsInZhbHVlcyIsImNhdGVnb3JpZXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhcyIsIm9wZW4iLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Navbar.tsx\n"));

/***/ })

});