module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/IndexGrid.js":
/*!*********************************!*\
  !*** ./components/IndexGrid.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
var _jsxFileName = "/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/IndexGrid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const gridStyle = {
  position: 'fixed',
  right: 0,
  top: '20vh',
  width: '100%'
};

const IndexGrid = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
  verticalAlign: "middle",
  columns: 4,
  centered: true,
  style: gridStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
  width: 4,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
  width: 7,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
  width: 3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (IndexGrid);

/***/ }),

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuVert; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const menuHeaderStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  fontStyle: 'italic'
};
class MenuVert extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      activeItem: 'Bio'
    });

    _defineProperty(this, "state", {
      activeIndex: 0
    });

    _defineProperty(this, "handleItemClick", (e, {
      name
    }) => {
      this.setState({
        activeItem: name
      });
    });

    _defineProperty(this, "handleAccordionClick", (e, titleProps) => {
      const {
        index
      } = titleProps;
      const {
        activeIndex
      } = this.state;
      const newIndex = activeIndex === index ? -1 : index;
      this.setState({
        activeIndex: newIndex
      });
    });
  }

  render() {
    const {
      activeItem
    } = this.state;
    const {
      activeIndex
    } = this.state;

    const BioContent = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Menu, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      name: "Animals",
      active: activeItem === 'Animals',
      onClick: this.handleItemClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      name: "Programming",
      active: activeItem === 'Programming',
      onClick: this.handleItemClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }));

    return __jsx("div", {
      className: "jsx-2624649095",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      style: menuHeaderStyle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: "/web-portfolio-png/name.png",
      size: "small",
      centered: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }), __jsx("p", {
      className: "jsx-2624649095",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, "( Hwang, Jun-Hyun )")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
      as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"],
      pointing: true,
      secondary: true,
      vertical: true,
      fluid: true,
      inverted: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Title, {
      as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item,
      content: "Bio",
      active: activeIndex === 0,
      index: 0,
      onClick: this.handleAccordionClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Content, {
      active: activeIndex === 0,
      content: BioContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      name: "Projects",
      active: activeItem === 'Projects',
      onClick: this.handleItemClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      name: "Connect",
      active: activeItem === 'Connect',
      onClick: this.handleItemClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2624649095",
      __self: this
    }, ".ui.secondary.vertical.pointing.menu .item{border-left-style:solid;border-left-width:2px;border-left-color:grey;border-right-style:none;border-right-width:0;border-right-color:none;}.ui.secondary.vertical.pointing.menu{border-left-width:2px;border-left-style:solid;border-left-color:rgba(34,36,38,.15);border-right-width:0;border-right-style:none;border-right-color:none;}.ui.secondary.vertical.pointing.menu .item{margin:0 0 0 -2px;}.ui.vertical.menu .item>i.icon{-webkit-transform:scaleX(-1),;-ms-transform:scaleX(-1),;transform:scaleX(-1),;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5od2FuZy9Eb2N1bWVudHMvcG9ydGZvbGlvX3dlYi9qdW4tcG9ydGZvbGlvL2NvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RVcsQUFHdUMsQUFRRixBQVFKLEFBSXJCLGtCQUhDLElBUjBCLEVBUkYsc0JBQ0MsQUFRYyx1QkFQYixTQWlCMUIsS0FUdUIsVUFQQSxXQVFHLFVBUEEsY0FRQSxVQVAxQixjQVFBIiwiZmlsZSI6Ii9Vc2Vycy9qdW5od2FuZy9Eb2N1bWVudHMvcG9ydGZvbGlvX3dlYi9qdW4tcG9ydGZvbGlvL2NvbXBvbmVudHMvTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFjY29yZGlvbiwgTWVudSwgSW1hZ2UsIENvbnRhaW5lciwgU2VnbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCBtZW51SGVhZGVyU3R5bGUgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgY29sb3I6ICd3aGl0ZScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIGZvbnRTdHlsZTogJ2l0YWxpYydcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVZlcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHsgYWN0aXZlSXRlbTogJ0JpbycgfVxuICBzdGF0ZSA9IHsgYWN0aXZlSW5kZXg6IDAgfVxuXG4gIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pXG4gIH1cblxuICBoYW5kbGVBY2NvcmRpb25DbGljayA9IChlLCB0aXRsZVByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBpbmRleCB9ID0gdGl0bGVQcm9wc1xuICAgIGNvbnN0IHsgYWN0aXZlSW5kZXggfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBuZXdJbmRleCA9IGFjdGl2ZUluZGV4ID09PSBpbmRleCA/IC0xIDogaW5kZXhcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJbmRleDogbmV3SW5kZXggfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUl0ZW0gfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGFjdGl2ZUluZGV4IH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBCaW9Db250ZW50ID0gKFxuICAgICAgPE1lbnUuTWVudT5cbiAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgIG5hbWU9J0FuaW1hbHMnXG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnQW5pbWFscyd9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICBuYW1lPSdQcm9ncmFtbWluZydcbiAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdQcm9ncmFtbWluZyd9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICA8L01lbnUuTWVudT5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlZ21lbnQgc3R5bGU9e21lbnVIZWFkZXJTdHlsZX0+XG4gICAgICAgICAgPEltYWdlIHNyYz0nL3dlYi1wb3J0Zm9saW8tcG5nL25hbWUucG5nJyBzaXplPSdzbWFsbCcgY2VudGVyZWQvPlxuICAgICAgICAgIDxwPiggSHdhbmcsIEp1bi1IeXVuICk8L3A+XG4gICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgXG4gICAgICAgIDxBY2NvcmRpb24gYXM9e01lbnV9IHBvaW50aW5nIHNlY29uZGFyeSB2ZXJ0aWNhbCBmbHVpZCBpbnZlcnRlZD5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uVGl0bGVcbiAgICAgICAgICAgICAgYXM9e01lbnUuSXRlbX1cbiAgICAgICAgICAgICAgY29udGVudD0nQmlvJ1xuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUluZGV4ID09PSAwfVxuICAgICAgICAgICAgICBpbmRleD17MH1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBY2NvcmRpb25DbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkNvbnRlbnQgYWN0aXZlPXthY3RpdmVJbmRleCA9PT0gMH0gY29udGVudD17QmlvQ29udGVudH0gLz5cbiAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICBuYW1lPSdQcm9qZWN0cydcbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ1Byb2plY3RzJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgbmFtZT0nQ29ubmVjdCdcbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ0Nvbm5lY3QnfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAudWkuc2Vjb25kYXJ5LnZlcnRpY2FsLnBvaW50aW5nLm1lbnUgLml0ZW0ge1xuICAgICAgICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVpLnNlY29uZGFyeS52ZXJ0aWNhbC5wb2ludGluZy5tZW51IHtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgzNCwzNiwzOCwuMTUpO1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVpLnNlY29uZGFyeS52ZXJ0aWNhbC5wb2ludGluZy5tZW51IC5pdGVtIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAtMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVpLnZlcnRpY2FsLm1lbnUgLml0ZW0+aS5pY29uIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/Menu.js */"));
  }

}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_IndexGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/IndexGrid */ "./components/IndexGrid.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/junhwang/Documents/portfolio_web/jun-portfolio/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function index() {
  const segmentOneStyle = {
    padding: '18em 0',
    margin: '0',
    backgroundColor: 'black',
    color: 'white'
  };
  const segmentTwoStyle = {
    padding: '15em 0',
    margin: '0',
    backgroundColor: 'black',
    color: 'white'
  };
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
    style: segmentOneStyle,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    centered: true,
    columns: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    width: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Title 1"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,")))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
    style: segmentTwoStyle,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    centered: true,
    columns: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    width: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Title 2"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa")))))), __jsx(_components_IndexGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/junhwang/Documents/portfolio_web/jun-portfolio/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map