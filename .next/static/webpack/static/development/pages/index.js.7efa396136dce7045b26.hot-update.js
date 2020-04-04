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
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var menuHeaderStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  fontStyle: 'italic',
  position: 'relative',
  right: '-250px'
};
var menuBodyStyle = {
  position: 'relative',
  right: '-250px'
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
      activeItem: 'Bio',
      activeIndex: ''
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleItemClick", function (e, _ref) {
      var name = _ref.name;
      var element = document.getElementsByClassName(name)[0];
      element.scrollIntoView({
        behavior: 'smooth'
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleScroll", function () {
      var introNode = {
        node: document.getElementsByClassName('Intro'),
        name: 'Intro'
      };
      var animalNode = {
        node: document.getElementsByClassName('Animals'),
        name: 'Animals'
      };
      var programmingNode = {
        node: document.getElementsByClassName('Programming'),
        name: 'Programming'
      };
      var projectsNode = {
        node: document.getElementsByClassName('Projects'),
        name: 'Projects'
      };
      var connectNode = {
        node: document.getElementsByClassName('Connect'),
        name: 'Connect'
      };
      var menuArray = [introNode, animalNode, programmingNode, projectsNode, connectNode];
      menuArray.map(function (e) {
        var nodeScrollSize = e.node[0].offsetTop + e.node[0].scrollHeight;

        if (e.node[0].offsetTop - 300 <= window.scrollY && window.scrollY <= nodeScrollSize) {
          _this.setState({
            activeItem: e.name
          });

          if (e.name == 'Intro' || e.name == 'Animals' || e.name == 'Programming') {
            _this.setState({
              activeIndex: 0
            });
          }
        }
      }); //let elementScroll = document.getElementsByClassName(name)[0].scrollTop
      //if(currentScroll == elementScroll) {
      //  this.setState({ activeItem: name });
      //}
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuVert, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll, false);
    }
  }, {
    key: "render",
    value: function render() {
      var activeItem = this.state.activeItem;
      var activeIndex = this.state.activeIndex;

      var BioContent = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 7
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Intro",
        active: activeItem === 'Intro',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Animals",
        active: activeItem === 'Animals',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
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

      return __jsx(react_plx__WEBPACK_IMPORTED_MODULE_10___default.a, {
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
          lineNumber: 110,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Segment"], {
        style: menuHeaderStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
        src: "/web-portfolio-png/name.png",
        size: "small",
        centered: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }
      }), __jsx("p", {
        className: "jsx-1567923929",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }
      }, "( Hwang, Jun-Hyun )")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Accordion"], {
        style: menuBodyStyle,
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"],
        pointing: true,
        secondary: true,
        vertical: true,
        fluid: true,
        inverted: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
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
          lineNumber: 117,
          columnNumber: 15
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Accordion"].Content, {
        active: activeIndex === 0,
        content: BioContent,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 15
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Projects",
        active: activeItem === 'Projects',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Connect",
        active: activeItem === 'Connect',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1567923929",
        __self: this
      }, ".ui.secondary.vertical.pointing.menu .item{border-left-style:solid;border-left-width:2px;border-left-color:grey;border-right-style:none;border-right-width:0;border-right-color:none;}.ui.secondary.vertical.pointing.menu{border-left-width:2px;border-left-style:solid;border-left-color:rgba(34,36,38,.15);border-right-width:0;border-right-style:none;border-right-color:none;}.ui.secondary.vertical.pointing.menu .item{margin:0 0 0 -2px;}.ui.vertical.menu .item>i.icon{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}.ui.accordion:not(.styled) .accordion .title~.content:not(.ui),.ui.accordion:not(.styled) .title~.content:not(.ui){padding:0;text-indent:18px;}.ui.secondary.pointing.menu .dropdown.item:active,.ui.secondary.pointing.menu .link.item:active,.ui.secondary.pointing.menu a.item:active{border-color:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5od2FuZy9Eb2N1bWVudHMvcG9ydGZvbGlvX3dlYi9qdW4tcG9ydGZvbGlvL2NvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SWEsQUFHeUMsQUFRRixBQVFKLEFBR0csQUFHWCxBQUlRLFVBSEQsUUFObkIsQUFVQSxJQWxCMEIsRUFSRixHQXVCeEIsbUJBdEJ5QixBQVFjLHVCQVBiLE1BaUIxQixRQVR1QixVQVBBLFdBUUcsVUFQQSxjQVFBLFVBUDFCLGNBUUEiLCJmaWxlIjoiL1VzZXJzL2p1bmh3YW5nL0RvY3VtZW50cy9wb3J0Zm9saW9fd2ViL2p1bi1wb3J0Zm9saW8vY29tcG9uZW50cy9NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBNZW51LCBJbWFnZSwgU2VnbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IFBseCBmcm9tICdyZWFjdC1wbHgnXG5cbmNvbnN0IG1lbnVIZWFkZXJTdHlsZSA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxuICBjb2xvcjogJ3doaXRlJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIHJpZ2h0OiAnLTI1MHB4J1xufVxuXG5jb25zdCBtZW51Qm9keVN0eWxlID0ge1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgcmlnaHQ6ICctMjUwcHgnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVWZXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IFxuICAgIGFjdGl2ZUl0ZW06ICdCaW8nLFxuICAgIGFjdGl2ZUluZGV4OiAnJyBcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsLCBmYWxzZSlcbiAgfVxuXG4gIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lKVswXTtcbiAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogJ3Ntb290aCd9KTtcbiAgfVxuXG4gIGhhbmRsZUFjY29yZGlvbkNsaWNrID0gKGUsIHRpdGxlUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGluZGV4IH0gPSB0aXRsZVByb3BzXG4gICAgY29uc3QgeyBhY3RpdmVJbmRleCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IG5ld0luZGV4ID0gYWN0aXZlSW5kZXggPT09IGluZGV4ID8gLTEgOiBpbmRleFxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUluZGV4OiBuZXdJbmRleCB9KVxuICB9XG5cbiAgXG4gIGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBsZXQgaW50cm9Ob2RlID0geyBub2RlOmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0ludHJvJyksIG5hbWU6J0ludHJvJyB9XG4gICAgbGV0IGFuaW1hbE5vZGUgPSB7IG5vZGU6ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnQW5pbWFscycpLCBuYW1lOidBbmltYWxzJyB9XG4gICAgbGV0IHByb2dyYW1taW5nTm9kZSA9IHsgbm9kZTpkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdQcm9ncmFtbWluZycpLCBuYW1lOidQcm9ncmFtbWluZycgfVxuICAgIGxldCBwcm9qZWN0c05vZGUgPSB7IG5vZGU6ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnUHJvamVjdHMnKSwgbmFtZTonUHJvamVjdHMnIH1cbiAgICBsZXQgY29ubmVjdE5vZGUgPSB7IG5vZGU6ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnQ29ubmVjdCcpLCBuYW1lOidDb25uZWN0JyB9XG4gICAgbGV0IG1lbnVBcnJheSA9IFtpbnRyb05vZGUsIGFuaW1hbE5vZGUsIHByb2dyYW1taW5nTm9kZSwgcHJvamVjdHNOb2RlLCBjb25uZWN0Tm9kZV1cblxuICAgIG1lbnVBcnJheS5tYXAoZSA9PiB7XG4gICAgICBsZXQgbm9kZVNjcm9sbFNpemUgPSBlLm5vZGVbMF0ub2Zmc2V0VG9wICsgZS5ub2RlWzBdLnNjcm9sbEhlaWdodCBcbiAgICAgIGlmKGUubm9kZVswXS5vZmZzZXRUb3AgLSAzMDAgPD0gd2luZG93LnNjcm9sbFkgJiYgd2luZG93LnNjcm9sbFkgPD0gbm9kZVNjcm9sbFNpemUgKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBlLm5hbWUgfSlcbiAgICAgICAgaWYoZS5uYW1lID09ICdJbnRybycgfHwgZS5uYW1lID09ICdBbmltYWxzJyB8fCBlLm5hbWUgPT0gJ1Byb2dyYW1taW5nJyl7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUluZGV4OiAwIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy9sZXQgZWxlbWVudFNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobmFtZSlbMF0uc2Nyb2xsVG9wXG4gICAgLy9pZihjdXJyZW50U2Nyb2xsID09IGVsZW1lbnRTY3JvbGwpIHtcbiAgICAvLyAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSk7XG4gICAgLy99XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBhY3RpdmVJbmRleCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgQmlvQ29udGVudCA9IChcbiAgICAgIDxNZW51Lk1lbnU+XG4gICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICBuYW1lPSdJbnRybydcbiAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdJbnRybyd9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICBuYW1lPSdBbmltYWxzJ1xuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ0FuaW1hbHMnfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAvPlxuICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgbmFtZT0nUHJvZ3JhbW1pbmcnXG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnUHJvZ3JhbW1pbmcnfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAvPlxuICAgICAgPC9NZW51Lk1lbnU+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQbHhcbiAgICAgICAgY2xhc3NOYW1lPSdGaXhlZERlbW8nXG4gICAgICAgIGFuaW1hdGVXaGVuTm90SW5WaWV3cG9ydD17IHRydWUgfVxuICAgICAgICBwYXJhbGxheERhdGE9eyBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnQ6IDUwMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBuYW1lOiAnZmlyc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogMCxcbiAgICAgICAgICAgICAgICBlbmRWYWx1ZTogLTI1MCxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogJ3RyYW5zbGF0ZVgnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdIH1cbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2VnbWVudCBzdHlsZT17bWVudUhlYWRlclN0eWxlfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy93ZWItcG9ydGZvbGlvLXBuZy9uYW1lLnBuZycgc2l6ZT0nc21hbGwnIGNlbnRlcmVkLz5cbiAgICAgICAgICAgIDxwPiggSHdhbmcsIEp1bi1IeXVuICk8L3A+XG4gICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgIFxuICAgICAgICAgIDxBY2NvcmRpb24gc3R5bGU9e21lbnVCb2R5U3R5bGV9IGFzPXtNZW51fSBwb2ludGluZyBzZWNvbmRhcnkgdmVydGljYWwgZmx1aWQgaW52ZXJ0ZWQ+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb24uVGl0bGVcbiAgICAgICAgICAgICAgICBhcz17TWVudS5JdGVtfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9J0JpbydcbiAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUluZGV4ID09PSAwfVxuICAgICAgICAgICAgICAgIGluZGV4PXswfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWNjb3JkaW9uQ2xpY2t9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29udGVudCBhY3RpdmU9e2FjdGl2ZUluZGV4ID09PSAwfSBjb250ZW50PXtCaW9Db250ZW50fSAvPlxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBuYW1lPSdQcm9qZWN0cydcbiAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnUHJvamVjdHMnfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9J0Nvbm5lY3QnXG4gICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ0Nvbm5lY3QnfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAudWkuc2Vjb25kYXJ5LnZlcnRpY2FsLnBvaW50aW5nLm1lbnUgLml0ZW0ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC51aS5zZWNvbmRhcnkudmVydGljYWwucG9pbnRpbmcubWVudSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMzQsMzYsMzgsLjE1KTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudWkuc2Vjb25kYXJ5LnZlcnRpY2FsLnBvaW50aW5nLm1lbnUgLml0ZW0ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgLTJweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudWkudmVydGljYWwubWVudSAuaXRlbT5pLmljb24ge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudWkuYWNjb3JkaW9uOm5vdCguc3R5bGVkKSAuYWNjb3JkaW9uIC50aXRsZX4uY29udGVudDpub3QoLnVpKSwgLnVpLmFjY29yZGlvbjpub3QoLnN0eWxlZCkgLnRpdGxlfi5jb250ZW50Om5vdCgudWkpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAxOHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC51aS5zZWNvbmRhcnkucG9pbnRpbmcubWVudSAuZHJvcGRvd24uaXRlbTphY3RpdmUsIC51aS5zZWNvbmRhcnkucG9pbnRpbmcubWVudSAubGluay5pdGVtOmFjdGl2ZSwgLnVpLnNlY29uZGFyeS5wb2ludGluZy5tZW51IGEuaXRlbTphY3RpdmUge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGx4PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/Menu.js */")));
    }
  }]);

  return MenuVert;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.7efa396136dce7045b26.hot-update.js.map