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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* harmony import */ var _PlxMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlxMenu */ "./components/PlxMenu.js");
var _jsxFileName = "/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/IndexGrid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const gridStyle = {
  position: 'fixed',
  right: 0,
  top: '20vh',
  width: '100%',
  zIndex: 10
};

const IndexGrid = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
  verticalAlign: "middle",
  columns: 4,
  centered: true,
  style: gridStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
  width: 4,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
  width: 7,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
  width: 3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
}, __jsx(_PlxMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (IndexGrid);

/***/ }),

/***/ "./components/PlxMenu.js":
/*!*******************************!*\
  !*** ./components/PlxMenu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlxMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plx */ "react-plx");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu_MenuHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/MenuHeader.js */ "./components/menu/MenuHeader.js");
/* harmony import */ var _menu_MenuAccordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/MenuAccordion.js */ "./components/menu/MenuAccordion.js");
var _jsxFileName = "/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/PlxMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const plxMenu = {
  opacity: 0,
  position: 'relative',
  right: '-250px'
};
class PlxMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      activeItem: 'Bio',
      activeIndex: ''
    });

    _defineProperty(this, "handleItemClick", (e, {
      name
    }) => {
      let element = document.getElementsByClassName(name)[0];
      element.scrollIntoView({
        behavior: 'smooth'
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

    _defineProperty(this, "handleScroll", () => {
      let introNode = {
        node: document.getElementsByClassName('Intro'),
        name: 'Intro'
      };
      let animalNode = {
        node: document.getElementsByClassName('Animals'),
        name: 'Animals'
      };
      let programmingNode = {
        node: document.getElementsByClassName('Programming'),
        name: 'Programming'
      };
      let projectsNode = {
        node: document.getElementsByClassName('Projects'),
        name: 'Projects'
      };
      let connectNode = {
        node: document.getElementsByClassName('Connect'),
        name: 'Connect'
      };
      let menuArray = [introNode, animalNode, programmingNode, projectsNode, connectNode];
      menuArray.map(e => {
        let nodeScrollSize = e.node[0].offsetTop + e.node[0].scrollHeight;

        if (e.node[0].offsetTop - 300 <= window.scrollY && window.scrollY <= nodeScrollSize) {
          this.setState({
            activeItem: e.name
          });

          if (e.name == 'Intro' || e.name == 'Animals' || e.name == 'Programming') {
            this.setState({
              activeIndex: 0
            });
          }
        }
      }); //let elementScroll = document.getElementsByClassName(name)[0].scrollTop
      //if(currentScroll == elementScroll) {
      //  this.setState({ activeItem: name });
      //}
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  render() {
    const {
      activeItem
    } = this.state;
    const {
      activeIndex
    } = this.state;
    return __jsx(react_plx__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "dynMenu",
      style: plxMenu,
      animateWhenNotInViewport: true,
      parallaxData: [{
        start: 1000,
        duration: 300,
        name: 'first',
        properties: [{
          startValue: 0,
          endValue: -250,
          property: 'translateX'
        }, {
          startValue: 0,
          endValue: 1,
          property: 'opacity'
        }]
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }
    }, __jsx(_menu_MenuHeader_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }
    }), __jsx(_menu_MenuAccordion_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      handleItemClick: this.handleItemClick,
      handleAccordionClick: this.handleAccordionClick,
      activeItem: activeItem,
      activeIndex: activeIndex,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }
    }));
  }

}

/***/ }),

/***/ "./components/menu/MenuAccordion.js":
/*!******************************************!*\
  !*** ./components/menu/MenuAccordion.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/menu/MenuAccordion.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const MenuAccordionStyle = {
  backgroundColor: 'black'
};

const BioContent = props => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Menu, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
  name: "Intro",
  active: props.activeItem === 'Intro',
  onClick: props.handleItemClick,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
  name: "Animals",
  active: props.activeItem === 'Animals',
  onClick: props.handleItemClick,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
  name: "Programming",
  active: props.activeItem === 'Programming',
  onClick: props.handleItemClick,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}));

const MenuAccordion = props => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
  style: MenuAccordionStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 3
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
  as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"],
  pointing: true,
  secondary: true,
  vertical: true,
  fluid: true,
  inverted: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Title, {
  as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item,
  content: "Bio",
  active: props.activeIndex === 0,
  index: 0,
  onClick: props.handleAccordionClick,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Content, {
  active: props.activeIndex === 0,
  content: BioContent(props),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
  name: "Projects",
  active: props.activeItem === 'Projects',
  onClick: props.handleItemClick,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 7
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
  name: "Connect",
  active: props.activeItem === 'Connect',
  onClick: props.handleItemClick,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 7
  }
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3203086379",
  __self: undefined
}, ".ui.secondary.vertical.pointing.menu .item{border-left-style:solid;border-left-width:2px;border-left-color:grey;border-right-style:none;border-right-width:0;border-right-color:none;}.ui.secondary.vertical.pointing.menu{border-left-width:2px;border-left-style:solid;border-left-color:rgba(34,36,38,.15);border-right-width:0;border-right-style:none;border-right-color:none;}.ui.secondary.vertical.pointing.menu .item{margin:0 0 0 -2px;}.ui.vertical.menu .item>i.icon{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}.ui.accordion:not(.styled) .accordion .title~.content:not(.ui),.ui.accordion:not(.styled) .title~.content:not(.ui){padding:0;text-indent:18px;}.ui.secondary.pointing.menu .dropdown.item:active,.ui.secondary.pointing.menu .link.item:active,.ui.secondary.pointing.menu a.item:active{border-color:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5od2FuZy9Eb2N1bWVudHMvcG9ydGZvbGlvX3dlYi9qdW4tcG9ydGZvbGlvL2NvbXBvbmVudHMvbWVudS9NZW51QWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlESyxBQUdpQyxBQVFGLEFBUUosQUFHRyxBQUdYLEFBSVEsVUFIRCxRQU5uQixBQVVBLElBbEIwQixFQVJGLEdBdUJ4QixtQkF0QnlCLEFBUWMsdUJBUGIsTUFpQjFCLFFBVHVCLFVBUEEsV0FRRyxVQVBBLGNBUUEsVUFQMUIsY0FRQSIsImZpbGUiOiIvVXNlcnMvanVuaHdhbmcvRG9jdW1lbnRzL3BvcnRmb2xpb193ZWIvanVuLXBvcnRmb2xpby9jb21wb25lbnRzL21lbnUvTWVudUFjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY29yZGlvbiwgTWVudSwgU2VnbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCBNZW51QWNjb3JkaW9uU3R5bGUgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJ1xufVxuXG5jb25zdCBCaW9Db250ZW50ID0gKHByb3BzKSA9PiAoXG4gIDxNZW51Lk1lbnU+XG4gICAgPE1lbnUuSXRlbVxuICAgICAgbmFtZT0nSW50cm8nXG4gICAgICBhY3RpdmU9e3Byb3BzLmFjdGl2ZUl0ZW0gPT09ICdJbnRybyd9XG4gICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgLz5cbiAgICA8TWVudS5JdGVtXG4gICAgICBuYW1lPSdBbmltYWxzJ1xuICAgICAgYWN0aXZlPXtwcm9wcy5hY3RpdmVJdGVtID09PSAnQW5pbWFscyd9XG4gICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgLz5cbiAgICA8TWVudS5JdGVtXG4gICAgICBuYW1lPSdQcm9ncmFtbWluZydcbiAgICAgIGFjdGl2ZT17cHJvcHMuYWN0aXZlSXRlbSA9PT0gJ1Byb2dyYW1taW5nJ31cbiAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAvPlxuICA8L01lbnUuTWVudT5cbilcblxuY29uc3QgTWVudUFjY29yZGlvbiA9IChwcm9wcykgPT4gKFxuICA8U2VnbWVudCBzdHlsZT17TWVudUFjY29yZGlvblN0eWxlfT5cbiAgICA8QWNjb3JkaW9uIGFzPXtNZW51fSBwb2ludGluZyBzZWNvbmRhcnkgdmVydGljYWwgZmx1aWQgaW52ZXJ0ZWQ+XG4gICAgICA8QWNjb3JkaW9uLlRpdGxlXG4gICAgICAgIGFzPXtNZW51Lkl0ZW19XG4gICAgICAgIGNvbnRlbnQ9J0JpbydcbiAgICAgICAgYWN0aXZlPXtwcm9wcy5hY3RpdmVJbmRleCA9PT0gMH1cbiAgICAgICAgaW5kZXg9ezB9XG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUFjY29yZGlvbkNsaWNrfVxuICAgICAgLz5cbiAgICAgIDxBY2NvcmRpb24uQ29udGVudCBhY3RpdmU9e3Byb3BzLmFjdGl2ZUluZGV4ID09PSAwfSBjb250ZW50PXtCaW9Db250ZW50KHByb3BzKX0gLz5cbiAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgbmFtZT0nUHJvamVjdHMnXG4gICAgICAgIGFjdGl2ZT17cHJvcHMuYWN0aXZlSXRlbSA9PT0gJ1Byb2plY3RzJ31cbiAgICAgICAgb25DbGljaz17cHJvcHMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgLz5cbiAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgbmFtZT0nQ29ubmVjdCdcbiAgICAgICAgYWN0aXZlPXtwcm9wcy5hY3RpdmVJdGVtID09PSAnQ29ubmVjdCd9XG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgIC8+XG4gICAgPC9BY2NvcmRpb24+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAge2BcbiAgICAgIC51aS5zZWNvbmRhcnkudmVydGljYWwucG9pbnRpbmcubWVudSAuaXRlbSB7XG4gICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IGdyZXk7XG4gICAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IG5vbmU7XG4gICAgICB9XG4gICAgICAudWkuc2Vjb25kYXJ5LnZlcnRpY2FsLnBvaW50aW5nLm1lbnUge1xuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xuICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDM0LDM2LDM4LC4xNSk7XG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IG5vbmU7XG4gICAgICB9XG4gICAgICAudWkuc2Vjb25kYXJ5LnZlcnRpY2FsLnBvaW50aW5nLm1lbnUgLml0ZW0ge1xuICAgICAgICBtYXJnaW46IDAgMCAwIC0ycHg7XG4gICAgICB9XG4gICAgICAudWkudmVydGljYWwubWVudSAuaXRlbT5pLmljb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgICB9XG4gICAgICAudWkuYWNjb3JkaW9uOm5vdCguc3R5bGVkKSAuYWNjb3JkaW9uIC50aXRsZX4uY29udGVudDpub3QoLnVpKSwgLnVpLmFjY29yZGlvbjpub3QoLnN0eWxlZCkgLnRpdGxlfi5jb250ZW50Om5vdCgudWkpIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDE4cHg7XG4gICAgICB9XG4gICAgICAudWkuc2Vjb25kYXJ5LnBvaW50aW5nLm1lbnUgLmRyb3Bkb3duLml0ZW06YWN0aXZlLCAudWkuc2Vjb25kYXJ5LnBvaW50aW5nLm1lbnUgLmxpbmsuaXRlbTphY3RpdmUsIC51aS5zZWNvbmRhcnkucG9pbnRpbmcubWVudSBhLml0ZW06YWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9TZWdtZW50PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNZW51QWNjb3JkaW9uOyJdfQ== */\n/*@ sourceURL=/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/menu/MenuAccordion.js */"));

/* harmony default export */ __webpack_exports__["default"] = (MenuAccordion);

/***/ }),

/***/ "./components/menu/MenuHeader.js":
/*!***************************************!*\
  !*** ./components/menu/MenuHeader.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/menu/MenuHeader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const menuHeaderStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  fontStyle: 'italic'
};

const MenuHeader = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
  style: menuHeaderStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
  src: "/web-portfolio-png/name.png",
  size: "small",
  centered: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}, "( Hwang, Jun-Hyun )"));

/* harmony default export */ __webpack_exports__["default"] = (MenuHeader);

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_IndexGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/IndexGrid */ "./components/IndexGrid.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-plx */ "react-plx");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/junhwang/Documents/portfolio_web/jun-portfolio/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function index() {
  const docBodyStyle = {
    height: '5000px'
  };
  const segIntroStyle = {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    padding: '11em 0',
    margin: '0',
    color: 'white',
    zIndex: 9
  };
  const segBgStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    margin: '0',
    zIndex: 6,
    backgroundColor: 'black',
    opacity: 0
  };
  const imageStyle = {
    position: 'fixed',
    backgroundImage: "url('web-portfolio-png/mainPic.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    zIndex: 5,
    borderRadius: 0,
    border: 0,
    boxSizing: 'content-box'
  };
  const blackBgStyle = {
    position: 'fixed',
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    zIndex: 6
  };
  const segAnimStyle = {
    padding: '15em 0',
    margin: '0',
    backgroundColor: 'black',
    color: 'white'
  };
  const segProgStyle = {
    padding: '15em 0 22em',
    margin: '0',
    backgroundColor: 'black',
    color: 'white'
  };
  return __jsx("div", {
    style: docBodyStyle,
    className: "jsx-2044262982" + " " + 'docBody',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    style: segIntroStyle,
    className: "Intro",
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx(react_plx__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "introPlx",
    animateWhenNotInViewport: true,
    parallaxData: [{
      start: 500,
      duration: 500,
      name: 'introAnimation',
      properties: [{
        startValue: 1,
        endValue: 0,
        property: 'opacity'
      }, {
        startValue: 0,
        endValue: -300,
        property: 'translateY'
      }]
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    centered: true,
    columns: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    width: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx("h1", {
    style: {
      fontSize: '85px'
    },
    className: "jsx-2044262982",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 19
    }
  }, "Hi! My name is Jun."), __jsx("h4", {
    className: "jsx-2044262982",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,"))))))), __jsx(react_plx__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: imageStyle,
    className: "segImageStyle",
    animateWhenNotInViewport: true,
    parallaxData: [{
      start: 1000,
      duration: 300,
      name: 'imgAnimation',
      properties: [{
        startValue: 0,
        endValue: -434,
        property: 'translateX'
      }]
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }), __jsx(react_plx__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: segBgStyle,
    className: "segBgStyle",
    animateWhenNotInViewport: true,
    parallaxData: [{
      start: 0,
      duration: 500,
      name: 'bgAnimation',
      properties: [{
        startValue: 0,
        endValue: 1,
        property: 'opacity'
      }, {
        startValue: 0,
        endValue: 300,
        property: 'translateX'
      }]
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }), __jsx(_components_IndexGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    style: segAnimStyle,
    className: "Animals",
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    centered: true,
    columns: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    width: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    width: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: "jsx-2044262982",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, "Animals"), __jsx("h4", {
    className: "jsx-2044262982",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    width: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    style: segProgStyle,
    className: "Programming",
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    centered: true,
    columns: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    width: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    width: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: "jsx-2044262982",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, "Programming"), __jsx("h4", {
    className: "jsx-2044262982",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    width: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    style: segProgStyle,
    className: "Projects",
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    centered: true,
    columns: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    width: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    width: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: "jsx-2044262982",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  }, "Projects"), __jsx("h4", {
    className: "jsx-2044262982",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    width: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 13
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    style: segProgStyle,
    className: "Connect",
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    centered: true,
    columns: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    width: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    width: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: "jsx-2044262982",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  }, "Connect"), __jsx("h4", {
    className: "jsx-2044262982",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    width: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2044262982",
    __self: this
  }, "html,body{width:100%;height:100%;margin:0px;padding:0px;background-color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5od2FuZy9Eb2N1bWVudHMvcG9ydGZvbGlvX3dlYi9qdW4tcG9ydGZvbGlvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1ReUIsQUFHc0IsV0FDQyxZQUNELFdBQ0MsWUFDVyx1QkFDM0IiLCJmaWxlIjoiL1VzZXJzL2p1bmh3YW5nL0RvY3VtZW50cy9wb3J0Zm9saW9fd2ViL2p1bi1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5kZXhHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvSW5kZXhHcmlkJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBseCBmcm9tICdyZWFjdC1wbHgnXG5pbXBvcnQgeyBcbiAgQ29udGFpbmVyLFxuICBTZWdtZW50LFxuICBJbWFnZSxcbiAgR3JpZCxcbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXggKCkge1xuXG4gIGNvbnN0IGRvY0JvZHlTdHlsZSA9IHtcbiAgICBoZWlnaHQ6ICc1MDAwcHgnXG4gIH1cblxuICBjb25zdCBzZWdJbnRyb1N0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIHBhZGRpbmc6ICcxMWVtIDAnLFxuICAgIG1hcmdpbjogJzAnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIHpJbmRleDogOVxuICB9XG5cbiAgY29uc3Qgc2VnQmdTdHlsZSA9IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIG1hcmdpbjogJzAnLFxuICAgIHpJbmRleDogNixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXG4gICAgb3BhY2l0eTogMFxuICB9XG5cbiAgY29uc3QgaW1hZ2VTdHlsZSA9IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCd3ZWItcG9ydGZvbGlvLXBuZy9tYWluUGljLmpwZycpXCIsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHpJbmRleDogNSxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgYm9yZGVyOiAwLFxuICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94J1xuICB9XG5cbiAgY29uc3QgYmxhY2tCZ1N0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHpJbmRleDogNixcbiAgfVxuXG4gIGNvbnN0IHNlZ0FuaW1TdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnMTVlbSAwJyxcbiAgICBtYXJnaW46ICcwJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXG4gICAgY29sb3I6ICd3aGl0ZSdcbiAgfVxuXG4gIGNvbnN0IHNlZ1Byb2dTdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnMTVlbSAwIDIyZW0nLFxuICAgIG1hcmdpbjogJzAnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgICBjb2xvcjogJ3doaXRlJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZG9jQm9keScgc3R5bGU9e2RvY0JvZHlTdHlsZX0+XG5cbiAgICAgIDxTZWdtZW50IHN0eWxlPXtzZWdJbnRyb1N0eWxlfSBjbGFzc05hbWU9J0ludHJvJyBiYXNpYz5cbiAgICAgICAgPFBseFxuICAgICAgICAgIGNsYXNzTmFtZT0naW50cm9QbHgnXG4gICAgICAgICAgYW5pbWF0ZVdoZW5Ob3RJblZpZXdwb3J0PXsgdHJ1ZSB9XG4gICAgICAgICAgcGFyYWxsYXhEYXRhPXsgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGFydDogNTAwLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICBuYW1lOiAnaW50cm9BbmltYXRpb24nLFxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogMSxcbiAgICAgICAgICAgICAgICAgIGVuZFZhbHVlOiAwLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHk6ICdvcGFjaXR5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogMCxcbiAgICAgICAgICAgICAgICAgIGVuZFZhbHVlOiAtMzAwLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHk6ICd0cmFuc2xhdGVZJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSB9XG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZCBjZW50ZXJlZCBjb2x1bW5zPXszfT5cbiAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6Jzg1cHgnfX0+SGkhIE15IG5hbWUgaXMgSnVuLjwvaDE+XG4gICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gY29tbW9kb1xuICAgICAgICAgICAgICAgICAgICBsaWd1bGEgZWdldCBkb2xvci4gQWVuZWFuIG1hc3NhIHN0cm9uZy4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldFxuICAgICAgICAgICAgICAgICAgICBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBEb25lYyBxdWFtIGZlbGlzLFxuICAgICAgICAgICAgICAgICAgICB1bHRyaWNpZXMgbmVjLCBwZWxsZW50ZXNxdWUgZXUsIHByZXRpdW0gcXVpcywgc2VtLiBOdWxsYSBjb25zZXF1YXQgbWFzc2FcbiAgICAgICAgICAgICAgICAgICAgcXVpcyBlbmltLiBEb25lYyBwZWRlIGp1c3RvLCBmcmluZ2lsbGEgdmVsLCBhbGlxdWV0IG5lYywgdnVscHV0YXRlIGVnZXQsXG4gICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvUGx4PlxuICAgICAgPC9TZWdtZW50PlxuICAgICAgXG4gICAgICA8UGx4XG4gICAgICAgIHN0eWxlPXtpbWFnZVN0eWxlfVxuICAgICAgICBjbGFzc05hbWU9J3NlZ0ltYWdlU3R5bGUnXG4gICAgICAgIGFuaW1hdGVXaGVuTm90SW5WaWV3cG9ydD17IHRydWUgfVxuICAgICAgICBwYXJhbGxheERhdGE9eyBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnQ6IDEwMDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgbmFtZTogJ2ltZ0FuaW1hdGlvbicsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiAwLFxuICAgICAgICAgICAgICAgIGVuZFZhbHVlOiAtNDM0LFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAndHJhbnNsYXRlWCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdIH1cbiAgICAgID5cbiAgICAgIDwvUGx4PlxuXG4gICAgICA8UGx4XG4gICAgICAgIHN0eWxlPXtzZWdCZ1N0eWxlfVxuICAgICAgICBjbGFzc05hbWU9J3NlZ0JnU3R5bGUnXG4gICAgICAgIGFuaW1hdGVXaGVuTm90SW5WaWV3cG9ydD17IHRydWUgfVxuICAgICAgICBwYXJhbGxheERhdGE9eyBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgbmFtZTogJ2JnQW5pbWF0aW9uJyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IDAsXG4gICAgICAgICAgICAgICAgZW5kVmFsdWU6IDEsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6ICdvcGFjaXR5J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogMCxcbiAgICAgICAgICAgICAgICBlbmRWYWx1ZTogMzAwLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAndHJhbnNsYXRlWCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdIH1cbiAgICAgID5cbiAgICAgIDwvUGx4PlxuXG4gICAgICA8SW5kZXhHcmlkLz5cblxuICAgICAgPFNlZ21lbnQgc3R5bGU9e3NlZ0FuaW1TdHlsZX0gY2xhc3NOYW1lPSdBbmltYWxzJyBiYXNpYz5cbiAgICAgICAgPEdyaWQgY2VudGVyZWQgY29sdW1ucz17M30+XG4gICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxoMT5BbmltYWxzPC9oMT5cbiAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGNvbW1vZG9cbiAgICAgICAgICAgICAgICAgIGxpZ3VsYSBlZ2V0IGRvbG9yLiBBZW5lYW4gbWFzc2Egc3Ryb25nLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0XG4gICAgICAgICAgICAgICAgICBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBEb25lYyBxdWFtIGZlbGlzLFxuICAgICAgICAgICAgICAgICAgdWx0cmljaWVzIG5lYywgcGVsbGVudGVzcXVlIGV1LCBwcmV0aXVtIHF1aXMsIHNlbS4gTnVsbGEgY29uc2VxdWF0IG1hc3NhXG4gICAgICAgICAgICAgICAgICBxdWlzIGVuaW0uIERvbmVjIHBlZGUganVzdG8sIGZyaW5naWxsYSB2ZWwsIGFsaXF1ZXQgbmVjLCB2dWxwdXRhdGUgZWdldCxcbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezJ9PlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1NlZ21lbnQ+XG5cbiAgICAgIDxTZWdtZW50IHN0eWxlPXtzZWdQcm9nU3R5bGV9IGNsYXNzTmFtZT0nUHJvZ3JhbW1pbmcnIGJhc2ljPlxuICAgICAgICA8R3JpZCBjZW50ZXJlZCBjb2x1bW5zPXszfT5cbiAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezR9PlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGgxPlByb2dyYW1taW5nPC9oMT5cbiAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGNvbW1vZG9cbiAgICAgICAgICAgICAgICAgIGxpZ3VsYSBlZ2V0IGRvbG9yLiBBZW5lYW4gbWFzc2Egc3Ryb25nLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0XG4gICAgICAgICAgICAgICAgICBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBEb25lYyBxdWFtIGZlbGlzLFxuICAgICAgICAgICAgICAgICAgdWx0cmljaWVzIG5lYywgcGVsbGVudGVzcXVlIGV1LCBwcmV0aXVtIHF1aXMsIHNlbS4gTnVsbGEgY29uc2VxdWF0IG1hc3NhXG4gICAgICAgICAgICAgICAgICBxdWlzIGVuaW0uIERvbmVjIHBlZGUganVzdG8sIGZyaW5naWxsYSB2ZWwsIGFsaXF1ZXQgbmVjLCB2dWxwdXRhdGUgZWdldCxcbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezJ9PlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1NlZ21lbnQ+XG5cbiAgICAgIDxTZWdtZW50IHN0eWxlPXtzZWdQcm9nU3R5bGV9IGNsYXNzTmFtZT0nUHJvamVjdHMnIGJhc2ljPlxuICAgICAgICA8R3JpZCBjZW50ZXJlZCBjb2x1bW5zPXszfT5cbiAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezR9PlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGgxPlByb2plY3RzPC9oMT5cbiAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGNvbW1vZG9cbiAgICAgICAgICAgICAgICAgIGxpZ3VsYSBlZ2V0IGRvbG9yLiBBZW5lYW4gbWFzc2Egc3Ryb25nLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0XG4gICAgICAgICAgICAgICAgICBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBEb25lYyBxdWFtIGZlbGlzLFxuICAgICAgICAgICAgICAgICAgdWx0cmljaWVzIG5lYywgcGVsbGVudGVzcXVlIGV1LCBwcmV0aXVtIHF1aXMsIHNlbS4gTnVsbGEgY29uc2VxdWF0IG1hc3NhXG4gICAgICAgICAgICAgICAgICBxdWlzIGVuaW0uIERvbmVjIHBlZGUganVzdG8sIGZyaW5naWxsYSB2ZWwsIGFsaXF1ZXQgbmVjLCB2dWxwdXRhdGUgZWdldCxcbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezJ9PlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1NlZ21lbnQ+XG5cbiAgICAgIDxTZWdtZW50IHN0eWxlPXtzZWdQcm9nU3R5bGV9IGNsYXNzTmFtZT0nQ29ubmVjdCcgYmFzaWM+XG4gICAgICAgIDxHcmlkIGNlbnRlcmVkIGNvbHVtbnM9ezN9PlxuICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8aDE+Q29ubmVjdDwvaDE+XG4gICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBjb21tb2RvXG4gICAgICAgICAgICAgICAgICBsaWd1bGEgZWdldCBkb2xvci4gQWVuZWFuIG1hc3NhIHN0cm9uZy4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldFxuICAgICAgICAgICAgICAgICAgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gRG9uZWMgcXVhbSBmZWxpcyxcbiAgICAgICAgICAgICAgICAgIHVsdHJpY2llcyBuZWMsIHBlbGxlbnRlc3F1ZSBldSwgcHJldGl1bSBxdWlzLCBzZW0uIE51bGxhIGNvbnNlcXVhdCBtYXNzYVxuICAgICAgICAgICAgICAgICAgcXVpcyBlbmltLiBEb25lYyBwZWRlIGp1c3RvLCBmcmluZ2lsbGEgdmVsLCBhbGlxdWV0IG5lYywgdnVscHV0YXRlIGVnZXQsXG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsyfT5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TZWdtZW50PlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLGJvZHkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxuICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/junhwang/Documents/portfolio_web/jun-portfolio/pages/index.js */"));
}

/***/ }),

/***/ 4:
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

/***/ "react-plx":
/*!****************************!*\
  !*** external "react-plx" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-plx");

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