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

/***/ "(app-client)/./app/components/Header.tsx":
/*!***********************************!*\
  !*** ./app/components/Header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nasync function fetchHeaderData() {\n    const response = await fetch(\"https://ms2.atramart.com/api/v1/header\");\n    const data = await response.json();\n    return data;\n}\nconst Header = async (param)=>{\n    let { open , classNames  } = param;\n    _s();\n    const [headerData, setHeaderData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const data = await fetchHeaderData();\n                setHeaderData(data.top_menus);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: JSON.stringify(headerData)\n    }, void 0, false, {\n        fileName: \"/home/bahar/bahar-files/complete-react-zero-to-mastery/project/mega-menu-tailwind/app/components/Header.tsx\",\n        lineNumber: 39,\n        columnNumber: 12\n    }, undefined);\n};\n_s(Header, \"F+1FUb8l/QpV5EVJRC3lYNoPxOE=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDOEQ7QUFZOUQsZUFBZUU7SUFDWCxNQUFNQyxXQUFXLE1BQU1DLE1BQU07SUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRztJQUM1QixPQUFPRDtBQUNUO0FBR0YsTUFBTUUsU0FBUztRQUFPLEVBQUVDLEtBQUksRUFBRUMsV0FBVSxFQUFlOztJQUNuRCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFFN0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVksWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1QLE9BQU8sTUFBTUg7Z0JBQ25CUyxjQUFjTixLQUFLUTtZQUNyQixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RDLFFBQVFELE1BQU1BO1lBQ2hCO1FBQ0Y7UUFFQUY7SUFDRixHQUFHLEVBQUU7SUFJTCxxQkFBTyw4REFBQ0k7a0JBQUtDLEtBQUtDLFVBQVVSOzs7Ozs7QUFDaEM7R0FuQk1IO0tBQUFBO0FBcUJOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0hlYWRlci50c3g/ODRjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERpc2Nsb3N1cmUsIE1lbnUsIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSAnLi9TZWFyY2hCb3gnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBnZXRBbGxIZWFkZXIgZnJvbSAnLi4vbGliL2dldEFsbEhlYWRlcic7XG5cblxudHlwZSBIZWFkZXJQcm9wcyA9IHtcbiAgICBvcGVuOiBib29sZWFuLFxuICAgIGNsYXNzTmFtZXM6ICguLi5jbGFzc2VzOiBzdHJpbmdbXSkgPT4gc3RyaW5nLFxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEhlYWRlckRhdGEoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9tczIuYXRyYW1hcnQuY29tL2FwaS92MS9oZWFkZXInKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cblxuY29uc3QgSGVhZGVyID0gYXN5bmMgKHsgb3BlbiwgY2xhc3NOYW1lcyB9OiBIZWFkZXJQcm9wcykgPT4ge1xuICAgIGNvbnN0IFtoZWFkZXJEYXRhLCBzZXRIZWFkZXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hIZWFkZXJEYXRhKCk7XG4gICAgICAgICAgc2V0SGVhZGVyRGF0YShkYXRhLnRvcF9tZW51cyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gIFxuICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgfSwgW10pO1xuICBcbiAgICAgIFxuXG4gICAgcmV0dXJuIDxkaXY+e0pTT04uc3RyaW5naWZ5KGhlYWRlckRhdGEpfTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmZXRjaEhlYWRlckRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJIZWFkZXIiLCJvcGVuIiwiY2xhc3NOYW1lcyIsImhlYWRlckRhdGEiLCJzZXRIZWFkZXJEYXRhIiwiZmV0Y2hEYXRhIiwidG9wX21lbnVzIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Header.tsx\n"));

/***/ })

});