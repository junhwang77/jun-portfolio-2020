webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuVert; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");







var _jsxFileName = "/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var menuHeaderStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  fontStyle: 'italic'
};

var MenuVert = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MenuVert, _Component);

  var _super = _createSuper(MenuVert);

  function MenuVert() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuVert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      activeItem: 'Introduction'
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleItemClick", function (e, _ref) {
      var name = _ref.name;
      return _this.setState({
        activeItem: name
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuVert, [{
    key: "render",
    value: function render() {
      var activeItem = this.state.activeItem;
      return __jsx("div", {
        className: "jsx-3159721548",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Segment"], {
        style: menuHeaderStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
        src: "/web-portfolio-png/name.png",
        size: "small",
        centered: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }), __jsx("p", {
        className: "jsx-3159721548",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }
      }, "( Hwang, Jun-Hyun )")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"], {
        pointing: true,
        secondary: true,
        vertical: true,
        fluid: true,
        inverted: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Bio",
        active: activeItem === 'Introduction',
        onClick: this.handleItemClick,
        position: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "search",
        active: activeItem === 'search',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 15
        }
      }, "Search"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "add",
        active: activeItem === 'add',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }
      }, "Add"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "about",
        active: activeItem === 'about',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 15
        }
      }, "Remove")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Animals",
        active: activeItem === 'Animals',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Coding",
        active: activeItem === 'Coding',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Connect",
        active: activeItem === 'Connect',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3159721548",
        __self: this
      }, ".ui.secondary.vertical.pointing.menu .item{border-left-style:solid;border-left-width:2px;border-left-color:grey;border-right-style:none;border-right-width:0;border-right-color:none;}.ui.secondary.vertical.pointing.menu{border-left-width:2px;border-left-style:solid;border-left-color:rgba(34,36,38,.15);border-right-width:0;border-right-style:none;border-right-color:none;}.ui.secondary.vertical.pointing.menu .item{margin:0 0 0 -2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5od2FuZy9Eb2N1bWVudHMvcG9ydGZvbGlvX3dlYi9qdW4tcG9ydGZvbGlvL2NvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RVcsQUFHdUMsQUFRRixBQVFKLGtCQUNwQixJQVIwQixFQVJGLHNCQUNDLEFBUWMsdUJBUGIsY0FRSCxVQVBBLFdBUUcsVUFQQSxjQVFBLFVBUDFCLGNBUUEiLCJmaWxlIjoiL1VzZXJzL2p1bmh3YW5nL0RvY3VtZW50cy9wb3J0Zm9saW9fd2ViL2p1bi1wb3J0Zm9saW8vY29tcG9uZW50cy9NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWVudSwgSW1hZ2UsIENvbnRhaW5lciwgU2VnbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCBtZW51SGVhZGVyU3R5bGUgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgY29sb3I6ICd3aGl0ZScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIGZvbnRTdHlsZTogJ2l0YWxpYydcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVZlcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHsgYWN0aXZlSXRlbTogJ0ludHJvZHVjdGlvbicgfVxuXG4gIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSlcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlZ21lbnQgc3R5bGU9e21lbnVIZWFkZXJTdHlsZX0+XG4gICAgICAgICAgPEltYWdlIHNyYz0nL3dlYi1wb3J0Zm9saW8tcG5nL25hbWUucG5nJyBzaXplPSdzbWFsbCcgY2VudGVyZWQvPlxuICAgICAgICAgIDxwPiggSHdhbmcsIEp1bi1IeXVuICk8L3A+XG4gICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgXG4gICAgICAgIDxNZW51IHBvaW50aW5nIHNlY29uZGFyeSB2ZXJ0aWNhbCBmbHVpZCBpbnZlcnRlZD5cbiAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICBuYW1lPSdCaW8nXG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdJbnRyb2R1Y3Rpb24nfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgICAgICBwb3NpdGlvbj0ncmlnaHQnXG4gICAgICAgICAgLz5cbiAgICAgICAgICAgIDxNZW51Lk1lbnU+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICBuYW1lPSdzZWFyY2gnXG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnc2VhcmNoJ31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgIG5hbWU9J2FkZCdcbiAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdhZGQnfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgbmFtZT0nYWJvdXQnXG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnYWJvdXQnfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPC9NZW51Lk1lbnU+XG4gICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgbmFtZT0nQW5pbWFscydcbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ0FuaW1hbHMnfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICBuYW1lPSdDb2RpbmcnXG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdDb2RpbmcnfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICBuYW1lPSdDb25uZWN0J1xuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnQ29ubmVjdCd9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L01lbnU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAudWkuc2Vjb25kYXJ5LnZlcnRpY2FsLnBvaW50aW5nLm1lbnUgLml0ZW0ge1xuICAgICAgICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVpLnNlY29uZGFyeS52ZXJ0aWNhbC5wb2ludGluZy5tZW51IHtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgzNCwzNiwzOCwuMTUpO1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVpLnNlY29uZGFyeS52ZXJ0aWNhbC5wb2ludGluZy5tZW51IC5pdGVtIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAtMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/Menu.js */"));
    }
  }]);

  return MenuVert;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.db1612a4eca30a920a5d.hot-update.js.map