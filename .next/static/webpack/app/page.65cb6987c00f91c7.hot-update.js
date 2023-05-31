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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/react */ \"(app-client)/./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js\");\n/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox */ \"(app-client)/./app/components/SearchBox.js\");\n/* harmony import */ var _MenuBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBar */ \"(app-client)/./app/components/MenuBar.tsx\");\n/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileMenu */ \"(app-client)/./app/components/MobileMenu.tsx\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"(app-client)/./app/components/Header.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst navigation = [\n    {\n        name: \"خرید اقساط\",\n        href: \"#\",\n        current: true\n    },\n    {\n        name: \"درباره ما\",\n        href: \"#\",\n        current: false\n    },\n    {\n        name: \"مجله آترا\",\n        href: \"#\",\n        current: false\n    },\n    {\n        name: \"فروش سازمانی\",\n        href: \"#\",\n        current: false\n    }\n];\nfunction classNames() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\nfunction Navbar() {\n    _s();\n    const [headerData, setHeaderData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    useEffect(()=>{\n        const fetchData = async ()=>{\n            try {\n                const data = await getAllHeader();\n                setHeaderData(data.top_menus);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Disclosure, {\n        as: \"nav\",\n        children: (param)=>/*#__PURE__*/ {\n            let { open  } = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                open: open,\n                                classNames: classNames\n                            }, void 0, false, {\n                                fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                classNames: classNames\n                            }, void 0, false, {\n                                fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hidden lg:block\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex h-20 items-center justify-between\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 18\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MobileMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        navigation: navigation,\n                        classNames: classNames\n                    }, void 0, false, {\n                        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true);\n        }\n    }, void 0, false, {\n        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Navbar.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"F+1FUb8l/QpV5EVJRC3lYNoPxOE=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM4QztBQUNYO0FBQ0o7QUFDTTtBQUNSO0FBQ0c7QUFFaEMsTUFBTU0sYUFBYTtJQUNqQjtRQUFFQyxNQUFNO1FBQWNDLE1BQU07UUFBS0MsU0FBUztJQUFLO0lBQy9DO1FBQUVGLE1BQU07UUFBYUMsTUFBTTtRQUFLQyxTQUFTO0lBQU07SUFDL0M7UUFBRUYsTUFBTTtRQUFhQyxNQUFNO1FBQUtDLFNBQVM7SUFBTTtJQUMvQztRQUFFRixNQUFNO1FBQWdCQyxNQUFNO1FBQUtDLFNBQVM7SUFBTTtDQUNuRDtBQUVELFNBQVNDO0lBQVc7UUFBR0MsUUFBSCx1QkFBb0I7SUFBRDtJQUNyQyxPQUFPQSxRQUFRQyxPQUFPQyxTQUFTQyxLQUFLO0FBQ3RDO0FBRWUsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUU3Q2EsVUFBVTtRQUNSLE1BQU1DLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxPQUFPLE1BQU1DO2dCQUNuQkosY0FBY0csS0FBS0U7WUFDckIsRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxNQUFNQTtZQUNoQjtRQUNGO1FBRUFKO0lBQ0YsR0FBRyxFQUFFO0lBS0wscUJBQ0UsOERBQUNuQix5REFBVUE7UUFBQ3lCLElBQUc7a0JBQ1o7Z0JBQUMsRUFBRUMsS0FBSSxFQUFFO21CQUNSOztrQ0FDRSw4REFBQ0M7d0JBQUlDLFdBQVU7OzBDQUViLDhEQUFDeEIsK0NBQU1BO2dDQUFDc0IsTUFBTUE7Z0NBQU1oQixZQUFZQTs7Ozs7OzBDQUdoQyw4REFBQ1IsZ0RBQU9BO2dDQUFDUSxZQUFZQTs7Ozs7OzBDQUdyQiw4REFBQ2lCO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDWiw0RUFBQzNCLGtEQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtuQiw4REFBQ0UsbURBQVVBO3dCQUFDRyxZQUFZQTt3QkFBWUksWUFBWUE7Ozs7Ozs7O1FBQzlDOzs7Ozs7QUFJVjtHQTNDd0JLO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL05hdmJhci50c3g/NjMwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgRGlzY2xvc3VyZSB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tICcuL1NlYXJjaEJveCdcbmltcG9ydCBNZW51QmFyIGZyb20gJy4vTWVudUJhcidcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vTW9iaWxlTWVudSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBuYXZpZ2F0aW9uID0gW1xuICB7IG5hbWU6ICfYrtix24zYryDYp9mC2LPYp9i3JywgaHJlZjogJyMnLCBjdXJyZW50OiB0cnVlIH0sXG4gIHsgbmFtZTogJ9iv2LHYqNin2LHZhyDZhdinJywgaHJlZjogJyMnLCBjdXJyZW50OiBmYWxzZSB9LFxuICB7IG5hbWU6ICfZhdis2YTZhyDYotiq2LHYpycsIGhyZWY6ICcjJywgY3VycmVudDogZmFsc2UgfSxcbiAgeyBuYW1lOiAn2YHYsdmI2LQg2LPYp9iy2YXYp9mG24wnLCBocmVmOiAnIycsIGN1cnJlbnQ6IGZhbHNlIH0sXG5dXG5cbmZ1bmN0aW9uIGNsYXNzTmFtZXMoLi4uY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IFtoZWFkZXJEYXRhLCBzZXRIZWFkZXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEFsbEhlYWRlcigpO1xuICAgICAgICBzZXRIZWFkZXJEYXRhKGRhdGEudG9wX21lbnVzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPERpc2Nsb3N1cmUgYXM9XCJuYXZcIj5cbiAgICAgIHsoeyBvcGVuIH0pID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgICAgICAgIDxIZWFkZXIgb3Blbj17b3Blbn0gY2xhc3NOYW1lcz17Y2xhc3NOYW1lc30gLz5cblxuICAgICAgICAgICAgey8qIE1lbnVCYXIgKi99XG4gICAgICAgICAgICA8TWVudUJhciBjbGFzc05hbWVzPXtjbGFzc05hbWVzfS8+XG5cbiAgICAgICAgICAgIHsvKiB0aGlyZCBtZW51ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2tcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtMjAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICA8U2VhcmNoQm94IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPE1vYmlsZU1lbnUgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gY2xhc3NOYW1lcz17Y2xhc3NOYW1lc30gLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvRGlzY2xvc3VyZT5cbiAgKVxufVxuXG5cbiJdLCJuYW1lcyI6WyJEaXNjbG9zdXJlIiwiU2VhcmNoQm94IiwiTWVudUJhciIsIk1vYmlsZU1lbnUiLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsIm5hdmlnYXRpb24iLCJuYW1lIiwiaHJlZiIsImN1cnJlbnQiLCJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiTmF2YmFyIiwiaGVhZGVyRGF0YSIsInNldEhlYWRlckRhdGEiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJkYXRhIiwiZ2V0QWxsSGVhZGVyIiwidG9wX21lbnVzIiwiZXJyb3IiLCJjb25zb2xlIiwiYXMiLCJvcGVuIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Navbar.tsx\n"));

/***/ })

});