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
        name: "Animals",
        active: activeItem === 'Animals',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
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
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Segment"], {
        style: menuHeaderStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
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
          lineNumber: 53,
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
          lineNumber: 54,
          columnNumber: 13
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Accordion"].Content, {
        active: activeIndex === 0,
        content: BioContent,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Projects",
        active: activeItem === 'Projects',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Connect",
        active: activeItem === 'Connect',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2624649095",
        __self: this
      }, ".ui.secondary.vertical.pointing.menu .item{border-left-style:solid;border-left-width:2px;border-left-color:grey;border-right-style:none;border-right-width:0;border-right-color:none;}.ui.secondary.vertical.pointing.menu{border-left-width:2px;border-left-style:solid;border-left-color:rgba(34,36,38,.15);border-right-width:0;border-right-style:none;border-right-color:none;}.ui.secondary.vertical.pointing.menu .item{margin:0 0 0 -2px;}.ui.vertical.menu .item>i.icon{-webkit-transform:scaleX(-1),;-ms-transform:scaleX(-1),;transform:scaleX(-1),;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5od2FuZy9Eb2N1bWVudHMvcG9ydGZvbGlvX3dlYi9qdW4tcG9ydGZvbGlvL2NvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRVcsQUFHdUMsQUFRRixBQVFKLEFBSXJCLGtCQUhDLElBUjBCLEVBUkYsc0JBQ0MsQUFRYyx1QkFQYixTQWlCMUIsS0FUdUIsVUFQQSxXQVFHLFVBUEEsY0FRQSxVQVAxQixjQVFBIiwiZmlsZSI6Ii9Vc2Vycy9qdW5od2FuZy9Eb2N1bWVudHMvcG9ydGZvbGlvX3dlYi9qdW4tcG9ydGZvbGlvL2NvbXBvbmVudHMvTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFjY29yZGlvbiwgTWVudSwgSW1hZ2UsIENvbnRhaW5lciwgU2VnbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCBtZW51SGVhZGVyU3R5bGUgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgY29sb3I6ICd3aGl0ZScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIGZvbnRTdHlsZTogJ2l0YWxpYydcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVZlcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHsgYWN0aXZlSXRlbTogJ0JpbycgfVxuICBzdGF0ZSA9IHsgYWN0aXZlSW5kZXg6IDAgfVxuXG4gIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pXG4gIH1cblxuICBoYW5kbGVBY2NvcmRpb25DbGljayA9IChlLCB0aXRsZVByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBpbmRleCB9ID0gdGl0bGVQcm9wc1xuICAgIGNvbnN0IHsgYWN0aXZlSW5kZXggfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBuZXdJbmRleCA9IGFjdGl2ZUluZGV4ID09PSBpbmRleCA/IC0xIDogaW5kZXhcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJbmRleDogbmV3SW5kZXggfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUl0ZW0gfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGFjdGl2ZUluZGV4IH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBCaW9Db250ZW50ID0gKFxuICAgICAgPE1lbnUuTWVudT5cbiAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgIG5hbWU9J0FuaW1hbHMnXG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnQW5pbWFscyd9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICBuYW1lPSdQcm9ncmFtbWluZydcbiAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdQcm9ncmFtbWluZyd9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICA8L01lbnUuTWVudT5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlZ21lbnQgc3R5bGU9e21lbnVIZWFkZXJTdHlsZX0+XG4gICAgICAgICAgPEltYWdlIHNyYz0nL3dlYi1wb3J0Zm9saW8tcG5nL25hbWUucG5nJyBzaXplPSdzbWFsbCcgY2VudGVyZWQvPlxuICAgICAgICAgIDxwPiggSHdhbmcsIEp1bi1IeXVuICk8L3A+XG4gICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgXG4gICAgICAgIDxBY2NvcmRpb24gYXM9e01lbnV9IHBvaW50aW5nIHNlY29uZGFyeSB2ZXJ0aWNhbCBmbHVpZCBpbnZlcnRlZD5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uVGl0bGVcbiAgICAgICAgICAgICAgYXM9e01lbnUuSXRlbX1cbiAgICAgICAgICAgICAgY29udGVudD0nQmlvJ1xuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUluZGV4ID09PSAwfVxuICAgICAgICAgICAgICBpbmRleD17MH1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBY2NvcmRpb25DbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkNvbnRlbnQgYWN0aXZlPXthY3RpdmVJbmRleCA9PT0gMH0gY29udGVudD17QmlvQ29udGVudH0gLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgIG5hbWU9J1Byb2plY3RzJ1xuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnUHJvamVjdHMnfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICBuYW1lPSdDb25uZWN0J1xuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnQ29ubmVjdCd9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC51aS5zZWNvbmRhcnkudmVydGljYWwucG9pbnRpbmcubWVudSAuaXRlbSB7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudWkuc2Vjb25kYXJ5LnZlcnRpY2FsLnBvaW50aW5nLm1lbnUge1xuICAgICAgICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xuICAgICAgICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDM0LDM2LDM4LC4xNSk7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudWkuc2Vjb25kYXJ5LnZlcnRpY2FsLnBvaW50aW5nLm1lbnUgLml0ZW0ge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIC0ycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudWkudmVydGljYWwubWVudSAuaXRlbT5pLmljb24ge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/Menu.js */"));
    }
  }]);

  return MenuVert;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.552be82419fc3b8167e6.hot-update.js.map