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
      activeItem: 'Bio'
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      activeIndex: 0
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleItemClick", function (e, _ref) {
      var name = _ref.name;

      _this.setState({
        activeItem: name
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleAccordionClick", function (e, titleProps) {
      var index = titleProps.index;
      var activeIndex = _this.state.activeIndex;
      var newIndex = activeIndex === index ? -1 : index;

      _this.setState({
        activeIndex: newIndex
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuVert, [{
    key: "render",
    value: function render() {
      var activeItem = this.state.activeItem;
      var activeIndex = this.state.activeIndex;

      var BioContent = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 7
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "search",
        active: activeItem === 'search',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }
      }, "Search"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "add",
        active: activeItem === 'add',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, "Add"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "about",
        active: activeItem === 'about',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }, "Remove"));

      return __jsx("div", {
        className: "jsx-3159721548",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 7
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Segment"], {
        style: menuHeaderStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
        src: "/web-portfolio-png/name.png",
        size: "small",
        centered: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      }), __jsx("p", {
        className: "jsx-3159721548",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }
      }, "( Hwang, Jun-Hyun )")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Accordion"], {
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"],
        pointing: true,
        secondary: true,
        vertical: true,
        fluid: true,
        inverted: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Accordion"].Title, {
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item,
        content: "Bio",
        active: activeIndex === 0,
        index: 0,
        onClick: this.handleAccordionClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Accordion"].Content, {
        active: activeIndex === 0,
        content: BioContent,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Animals",
        active: activeItem === 'Animals',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Coding",
        active: activeItem === 'Coding',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Connect",
        active: activeItem === 'Connect',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3159721548",
        __self: this
      }, ".ui.secondary.vertical.pointing.menu .item{border-left-style:solid;border-left-width:2px;border-left-color:grey;border-right-style:none;border-right-width:0;border-right-color:none;}.ui.secondary.vertical.pointing.menu{border-left-width:2px;border-left-style:solid;border-left-color:rgba(34,36,38,.15);border-right-width:0;border-right-style:none;border-right-color:none;}.ui.secondary.vertical.pointing.menu .item{margin:0 0 0 -2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5od2FuZy9Eb2N1bWVudHMvcG9ydGZvbGlvX3dlYi9qdW4tcG9ydGZvbGlvL2NvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRlcsQUFHdUMsQUFRRixBQVFKLGtCQUNwQixJQVIwQixFQVJGLHNCQUNDLEFBUWMsdUJBUGIsY0FRSCxVQVBBLFdBUUcsVUFQQSxjQVFBLFVBUDFCLGNBUUEiLCJmaWxlIjoiL1VzZXJzL2p1bmh3YW5nL0RvY3VtZW50cy9wb3J0Zm9saW9fd2ViL2p1bi1wb3J0Zm9saW8vY29tcG9uZW50cy9NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBNZW51LCBJbWFnZSwgQ29udGFpbmVyLCBTZWdtZW50IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmNvbnN0IG1lbnVIZWFkZXJTdHlsZSA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxuICBjb2xvcjogJ3doaXRlJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgZm9udFN0eWxlOiAnaXRhbGljJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51VmVydCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0geyBhY3RpdmVJdGVtOiAnQmlvJyB9XG4gIHN0YXRlID0geyBhY3RpdmVJbmRleDogMCB9XG5cbiAgaGFuZGxlSXRlbUNsaWNrID0gKGUsIHsgbmFtZSB9KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSlcbiAgfVxuXG4gIGhhbmRsZUFjY29yZGlvbkNsaWNrID0gKGUsIHRpdGxlUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGluZGV4IH0gPSB0aXRsZVByb3BzXG4gICAgY29uc3QgeyBhY3RpdmVJbmRleCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IG5ld0luZGV4ID0gYWN0aXZlSW5kZXggPT09IGluZGV4ID8gLTEgOiBpbmRleFxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUluZGV4OiBuZXdJbmRleCB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgYWN0aXZlSW5kZXggfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IEJpb0NvbnRlbnQgPSAoXG4gICAgICA8TWVudS5NZW51PlxuICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgbmFtZT0nc2VhcmNoJ1xuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3NlYXJjaCd9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBTZWFyY2hcbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICBuYW1lPSdhZGQnXG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnYWRkJ31cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIEFkZFxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgIG5hbWU9J2Fib3V0J1xuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2Fib3V0J31cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIFJlbW92ZVxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgIDwvTWVudS5NZW51PlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VnbWVudCBzdHlsZT17bWVudUhlYWRlclN0eWxlfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPScvd2ViLXBvcnRmb2xpby1wbmcvbmFtZS5wbmcnIHNpemU9J3NtYWxsJyBjZW50ZXJlZC8+XG4gICAgICAgICAgPHA+KCBId2FuZywgSnVuLUh5dW4gKTwvcD5cbiAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICBcbiAgICAgICAgPEFjY29yZGlvbiBhcz17TWVudX0gcG9pbnRpbmcgc2Vjb25kYXJ5IHZlcnRpY2FsIGZsdWlkIGludmVydGVkPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5UaXRsZVxuICAgICAgICAgICAgICBhcz17TWVudS5JdGVtfVxuICAgICAgICAgICAgICBjb250ZW50PSdCaW8nXG4gICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSW5kZXggPT09IDB9XG4gICAgICAgICAgICAgIGluZGV4PXswfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFjY29yZGlvbkNsaWNrfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQ29udGVudCBhY3RpdmU9e2FjdGl2ZUluZGV4ID09PSAwfSBjb250ZW50PXtCaW9Db250ZW50fSAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgbmFtZT0nQW5pbWFscydcbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ0FuaW1hbHMnfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICBuYW1lPSdDb2RpbmcnXG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdDb2RpbmcnfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICBuYW1lPSdDb25uZWN0J1xuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnQ29ubmVjdCd9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC51aS5zZWNvbmRhcnkudmVydGljYWwucG9pbnRpbmcubWVudSAuaXRlbSB7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudWkuc2Vjb25kYXJ5LnZlcnRpY2FsLnBvaW50aW5nLm1lbnUge1xuICAgICAgICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xuICAgICAgICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDM0LDM2LDM4LC4xNSk7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudWkuc2Vjb25kYXJ5LnZlcnRpY2FsLnBvaW50aW5nLm1lbnUgLml0ZW0ge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIC0ycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/Menu.js */"));
    }
  }]);

  return MenuVert;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.792d6590fc3b442aad20.hot-update.js.map