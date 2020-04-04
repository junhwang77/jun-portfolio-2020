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
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
var _jsxFileName = "/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/IndexGrid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const gridStyle = {
  position: 'fixed',
  right: 0,
  top: '20vh',
  width: '100%'
};
const imgStyle = {
  position: 'fixed',
  top: '170px',
  width: 'inherit'
};

const IndexGrid = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
  verticalAlign: "middle",
  columns: 4,
  centered: true,
  style: gridStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
  width: 4,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
  width: 7,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
  width: 3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }
}, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
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
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-plx */ "react-plx");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const menuHeaderStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  fontStyle: 'italic',
  position: 'relative',
  right: '-250px'
};
const menuBodyStyle = {
  position: 'relative',
  right: '-250px'
};
class MenuVert extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
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

    const BioContent = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Menu, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      name: "Intro",
      active: activeItem === 'Intro',
      onClick: this.handleItemClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      name: "Animals",
      active: activeItem === 'Animals',
      onClick: this.handleItemClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      name: "Programming",
      active: activeItem === 'Programming',
      onClick: this.handleItemClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }
    }));

    return __jsx(react_plx__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "FixedDemo",
      animateWhenNotInViewport: true,
      parallaxData: [{
        start: 500,
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
        lineNumber: 92,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "jsx-1567923929",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      style: menuHeaderStyle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: "/web-portfolio-png/name.png",
      size: "small",
      centered: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }), __jsx("p", {
      className: "jsx-1567923929",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    }, "( Hwang, Jun-Hyun )")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
      style: menuBodyStyle,
      as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"],
      pointing: true,
      secondary: true,
      vertical: true,
      fluid: true,
      inverted: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
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
        lineNumber: 122,
        columnNumber: 15
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Content, {
      active: activeIndex === 0,
      content: BioContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 15
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      name: "Projects",
      active: activeItem === 'Projects',
      onClick: this.handleItemClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      name: "Connect",
      active: activeItem === 'Connect',
      onClick: this.handleItemClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 13
      }
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1567923929",
      __self: this
    }, ".ui.secondary.vertical.pointing.menu .item{border-left-style:solid;border-left-width:2px;border-left-color:grey;border-right-style:none;border-right-width:0;border-right-color:none;}.ui.secondary.vertical.pointing.menu{border-left-width:2px;border-left-style:solid;border-left-color:rgba(34,36,38,.15);border-right-width:0;border-right-style:none;border-right-color:none;}.ui.secondary.vertical.pointing.menu .item{margin:0 0 0 -2px;}.ui.vertical.menu .item>i.icon{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}.ui.accordion:not(.styled) .accordion .title~.content:not(.ui),.ui.accordion:not(.styled) .title~.content:not(.ui){padding:0;text-indent:18px;}.ui.secondary.pointing.menu .dropdown.item:active,.ui.secondary.pointing.menu .link.item:active,.ui.secondary.pointing.menu a.item:active{border-color:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5od2FuZy9Eb2N1bWVudHMvcG9ydGZvbGlvX3dlYi9qdW4tcG9ydGZvbGlvL2NvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SWEsQUFHeUMsQUFRRixBQVFKLEFBR0csQUFHWCxBQUlRLFVBSEQsUUFObkIsQUFVQSxJQWxCMEIsRUFSRixHQXVCeEIsbUJBdEJ5QixBQVFjLHVCQVBiLE1BaUIxQixRQVR1QixVQVBBLFdBUUcsVUFQQSxjQVFBLFVBUDFCLGNBUUEiLCJmaWxlIjoiL1VzZXJzL2p1bmh3YW5nL0RvY3VtZW50cy9wb3J0Zm9saW9fd2ViL2p1bi1wb3J0Zm9saW8vY29tcG9uZW50cy9NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBNZW51LCBJbWFnZSwgU2VnbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IFBseCBmcm9tICdyZWFjdC1wbHgnXG5cbmNvbnN0IG1lbnVIZWFkZXJTdHlsZSA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxuICBjb2xvcjogJ3doaXRlJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIHJpZ2h0OiAnLTI1MHB4J1xufVxuXG5jb25zdCBtZW51Qm9keVN0eWxlID0ge1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgcmlnaHQ6ICctMjUwcHgnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVWZXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IFxuICAgIGFjdGl2ZUl0ZW06ICdCaW8nLFxuICAgIGFjdGl2ZUluZGV4OiAnJyBcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsLCBmYWxzZSlcbiAgfVxuXG4gIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lKVswXTtcbiAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogJ3Ntb290aCd9KTtcbiAgfVxuXG4gIGhhbmRsZUFjY29yZGlvbkNsaWNrID0gKGUsIHRpdGxlUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGluZGV4IH0gPSB0aXRsZVByb3BzXG4gICAgY29uc3QgeyBhY3RpdmVJbmRleCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IG5ld0luZGV4ID0gYWN0aXZlSW5kZXggPT09IGluZGV4ID8gLTEgOiBpbmRleFxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUluZGV4OiBuZXdJbmRleCB9KVxuICB9XG5cbiAgXG4gIGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBsZXQgaW50cm9Ob2RlID0geyBub2RlOmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0ludHJvJyksIG5hbWU6J0ludHJvJyB9XG4gICAgbGV0IGFuaW1hbE5vZGUgPSB7IG5vZGU6ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnQW5pbWFscycpLCBuYW1lOidBbmltYWxzJyB9XG4gICAgbGV0IHByb2dyYW1taW5nTm9kZSA9IHsgbm9kZTpkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdQcm9ncmFtbWluZycpLCBuYW1lOidQcm9ncmFtbWluZycgfVxuICAgIGxldCBwcm9qZWN0c05vZGUgPSB7IG5vZGU6ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnUHJvamVjdHMnKSwgbmFtZTonUHJvamVjdHMnIH1cbiAgICBsZXQgY29ubmVjdE5vZGUgPSB7IG5vZGU6ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnQ29ubmVjdCcpLCBuYW1lOidDb25uZWN0JyB9XG4gICAgbGV0IG1lbnVBcnJheSA9IFtpbnRyb05vZGUsIGFuaW1hbE5vZGUsIHByb2dyYW1taW5nTm9kZSwgcHJvamVjdHNOb2RlLCBjb25uZWN0Tm9kZV1cblxuICAgIG1lbnVBcnJheS5tYXAoZSA9PiB7XG4gICAgICBsZXQgbm9kZVNjcm9sbFNpemUgPSBlLm5vZGVbMF0ub2Zmc2V0VG9wICsgZS5ub2RlWzBdLnNjcm9sbEhlaWdodCBcbiAgICAgIGlmKGUubm9kZVswXS5vZmZzZXRUb3AgLSAzMDAgPD0gd2luZG93LnNjcm9sbFkgJiYgd2luZG93LnNjcm9sbFkgPD0gbm9kZVNjcm9sbFNpemUgKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBlLm5hbWUgfSlcbiAgICAgICAgaWYoZS5uYW1lID09ICdJbnRybycgfHwgZS5uYW1lID09ICdBbmltYWxzJyB8fCBlLm5hbWUgPT0gJ1Byb2dyYW1taW5nJyl7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUluZGV4OiAwIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy9sZXQgZWxlbWVudFNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobmFtZSlbMF0uc2Nyb2xsVG9wXG4gICAgLy9pZihjdXJyZW50U2Nyb2xsID09IGVsZW1lbnRTY3JvbGwpIHtcbiAgICAvLyAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSk7XG4gICAgLy99XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBhY3RpdmVJbmRleCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgQmlvQ29udGVudCA9IChcbiAgICAgIDxNZW51Lk1lbnU+XG4gICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICBuYW1lPSdJbnRybydcbiAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdJbnRybyd9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICBuYW1lPSdBbmltYWxzJ1xuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ0FuaW1hbHMnfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAvPlxuICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgbmFtZT0nUHJvZ3JhbW1pbmcnXG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnUHJvZ3JhbW1pbmcnfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAvPlxuICAgICAgPC9NZW51Lk1lbnU+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQbHhcbiAgICAgICAgY2xhc3NOYW1lPSdGaXhlZERlbW8nXG4gICAgICAgIGFuaW1hdGVXaGVuTm90SW5WaWV3cG9ydD17IHRydWUgfVxuICAgICAgICBwYXJhbGxheERhdGE9eyBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnQ6IDUwMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBuYW1lOiAnZmlyc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogMCxcbiAgICAgICAgICAgICAgICBlbmRWYWx1ZTogLTI1MCxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogJ3RyYW5zbGF0ZVgnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogMCxcbiAgICAgICAgICAgICAgICBlbmRWYWx1ZTogMSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogJ29wYWNpdHknXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSB9XG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNlZ21lbnQgc3R5bGU9e21lbnVIZWFkZXJTdHlsZX0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPScvd2ViLXBvcnRmb2xpby1wbmcvbmFtZS5wbmcnIHNpemU9J3NtYWxsJyBjZW50ZXJlZC8+XG4gICAgICAgICAgICA8cD4oIEh3YW5nLCBKdW4tSHl1biApPC9wPlxuICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICBcbiAgICAgICAgICA8QWNjb3JkaW9uIHN0eWxlPXttZW51Qm9keVN0eWxlfSBhcz17TWVudX0gcG9pbnRpbmcgc2Vjb25kYXJ5IHZlcnRpY2FsIGZsdWlkIGludmVydGVkPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRpdGxlXG4gICAgICAgICAgICAgICAgYXM9e01lbnUuSXRlbX1cbiAgICAgICAgICAgICAgICBjb250ZW50PSdCaW8nXG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJbmRleCA9PT0gMH1cbiAgICAgICAgICAgICAgICBpbmRleD17MH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFjY29yZGlvbkNsaWNrfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbnRlbnQgYWN0aXZlPXthY3RpdmVJbmRleCA9PT0gMH0gY29udGVudD17QmlvQ29udGVudH0gLz5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT0nUHJvamVjdHMnXG4gICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ1Byb2plY3RzJ31cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBuYW1lPSdDb25uZWN0J1xuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdDb25uZWN0J31cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLnVpLnNlY29uZGFyeS52ZXJ0aWNhbC5wb2ludGluZy5tZW51IC5pdGVtIHtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudWkuc2Vjb25kYXJ5LnZlcnRpY2FsLnBvaW50aW5nLm1lbnUge1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDM0LDM2LDM4LC4xNSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnVpLnNlY29uZGFyeS52ZXJ0aWNhbC5wb2ludGluZy5tZW51IC5pdGVtIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIC0ycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnVpLnZlcnRpY2FsLm1lbnUgLml0ZW0+aS5pY29uIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnVpLmFjY29yZGlvbjpub3QoLnN0eWxlZCkgLmFjY29yZGlvbiAudGl0bGV+LmNvbnRlbnQ6bm90KC51aSksIC51aS5hY2NvcmRpb246bm90KC5zdHlsZWQpIC50aXRsZX4uY29udGVudDpub3QoLnVpKSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogMThweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudWkuc2Vjb25kYXJ5LnBvaW50aW5nLm1lbnUgLmRyb3Bkb3duLml0ZW06YWN0aXZlLCAudWkuc2Vjb25kYXJ5LnBvaW50aW5nLm1lbnUgLmxpbmsuaXRlbTphY3RpdmUsIC51aS5zZWNvbmRhcnkucG9pbnRpbmcubWVudSBhLml0ZW06YWN0aXZlIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BseD5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/Menu.js */")));
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
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-plx */ "react-plx");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/junhwang/Documents/portfolio_web/jun-portfolio/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function index() {
  const segIntroStyle = {
    padding: '12em 0',
    margin: '0',
    backgroundColor: 'black',
    color: 'white'
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
    className: "docBody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    style: segIntroStyle,
    className: "Intro",
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    centered: true,
    columns: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, __jsx("h1", {
    style: {
      fontSize: '85px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "Hi! My name is Jun."), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    style: segAnimStyle,
    className: "Animals",
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    centered: true,
    columns: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "Animals"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    style: segProgStyle,
    className: "Programming",
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    centered: true,
    columns: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, "Programming"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    style: segProgStyle,
    className: "Projects",
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    centered: true,
    columns: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, "Projects"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    style: segProgStyle,
    className: "Connect",
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    centered: true,
    columns: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, "Connect"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  })))), __jsx(_components_IndexGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }));
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