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
          lineNumber: 65,
          columnNumber: 7
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Intro",
        active: activeItem === 'Intro',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 9
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Animals",
        active: activeItem === 'Animals',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Programming",
        active: activeItem === 'Programming',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
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
            startValue: 300,
            endValue: 0,
            property: 'translateX'
          }]
        }],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-1567923929",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Segment"], {
        style: menuHeaderStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
        src: "/web-portfolio-png/name.png",
        size: "small",
        centered: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }
      }), __jsx("p", {
        className: "jsx-1567923929",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 13
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
          lineNumber: 109,
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
          lineNumber: 110,
          columnNumber: 15
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Accordion"].Content, {
        active: activeIndex === 0,
        content: BioContent,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 15
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Projects",
        active: activeItem === 'Projects',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        name: "Connect",
        active: activeItem === 'Connect',
        onClick: this.handleItemClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 13
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1567923929",
        __self: this
      }, ".ui.secondary.vertical.pointing.menu .item{border-left-style:solid;border-left-width:2px;border-left-color:grey;border-right-style:none;border-right-width:0;border-right-color:none;}.ui.secondary.vertical.pointing.menu{border-left-width:2px;border-left-style:solid;border-left-color:rgba(34,36,38,.15);border-right-width:0;border-right-style:none;border-right-color:none;}.ui.secondary.vertical.pointing.menu .item{margin:0 0 0 -2px;}.ui.vertical.menu .item>i.icon{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}.ui.accordion:not(.styled) .accordion .title~.content:not(.ui),.ui.accordion:not(.styled) .title~.content:not(.ui){padding:0;text-indent:18px;}.ui.secondary.pointing.menu .dropdown.item:active,.ui.secondary.pointing.menu .link.item:active,.ui.secondary.pointing.menu a.item:active{border-color:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5od2FuZy9Eb2N1bWVudHMvcG9ydGZvbGlvX3dlYi9qdW4tcG9ydGZvbGlvL2NvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSWEsQUFHeUMsQUFRRixBQVFKLEFBR0csQUFHWCxBQUlRLFVBSEQsUUFObkIsQUFVQSxJQWxCMEIsRUFSRixHQXVCeEIsbUJBdEJ5QixBQVFjLHVCQVBiLE1BaUIxQixRQVR1QixVQVBBLFdBUUcsVUFQQSxjQVFBLFVBUDFCLGNBUUEiLCJmaWxlIjoiL1VzZXJzL2p1bmh3YW5nL0RvY3VtZW50cy9wb3J0Zm9saW9fd2ViL2p1bi1wb3J0Zm9saW8vY29tcG9uZW50cy9NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBNZW51LCBJbWFnZSwgU2VnbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IFBseCBmcm9tICdyZWFjdC1wbHgnXG5cbmNvbnN0IG1lbnVIZWFkZXJTdHlsZSA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxuICBjb2xvcjogJ3doaXRlJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgZm9udFN0eWxlOiAnaXRhbGljJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51VmVydCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0geyBcbiAgICBhY3RpdmVJdGVtOiAnQmlvJyxcbiAgICBhY3RpdmVJbmRleDogJycgXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCwgZmFsc2UpXG4gIH1cblxuICBoYW5kbGVJdGVtQ2xpY2sgPSAoZSwgeyBuYW1lIH0pID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobmFtZSlbMF07XG4gICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6ICdzbW9vdGgnfSk7XG4gIH1cblxuICBoYW5kbGVBY2NvcmRpb25DbGljayA9IChlLCB0aXRsZVByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBpbmRleCB9ID0gdGl0bGVQcm9wc1xuICAgIGNvbnN0IHsgYWN0aXZlSW5kZXggfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBuZXdJbmRleCA9IGFjdGl2ZUluZGV4ID09PSBpbmRleCA/IC0xIDogaW5kZXhcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJbmRleDogbmV3SW5kZXggfSlcbiAgfVxuXG4gIFxuICBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgbGV0IGludHJvTm9kZSA9IHsgbm9kZTpkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdJbnRybycpLCBuYW1lOidJbnRybycgfVxuICAgIGxldCBhbmltYWxOb2RlID0geyBub2RlOmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0FuaW1hbHMnKSwgbmFtZTonQW5pbWFscycgfVxuICAgIGxldCBwcm9ncmFtbWluZ05vZGUgPSB7IG5vZGU6ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnUHJvZ3JhbW1pbmcnKSwgbmFtZTonUHJvZ3JhbW1pbmcnIH1cbiAgICBsZXQgcHJvamVjdHNOb2RlID0geyBub2RlOmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ1Byb2plY3RzJyksIG5hbWU6J1Byb2plY3RzJyB9XG4gICAgbGV0IGNvbm5lY3ROb2RlID0geyBub2RlOmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0Nvbm5lY3QnKSwgbmFtZTonQ29ubmVjdCcgfVxuICAgIGxldCBtZW51QXJyYXkgPSBbaW50cm9Ob2RlLCBhbmltYWxOb2RlLCBwcm9ncmFtbWluZ05vZGUsIHByb2plY3RzTm9kZSwgY29ubmVjdE5vZGVdXG5cbiAgICBtZW51QXJyYXkubWFwKGUgPT4ge1xuICAgICAgbGV0IG5vZGVTY3JvbGxTaXplID0gZS5ub2RlWzBdLm9mZnNldFRvcCArIGUubm9kZVswXS5zY3JvbGxIZWlnaHQgXG4gICAgICBpZihlLm5vZGVbMF0ub2Zmc2V0VG9wIC0gMzAwIDw9IHdpbmRvdy5zY3JvbGxZICYmIHdpbmRvdy5zY3JvbGxZIDw9IG5vZGVTY3JvbGxTaXplICkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSXRlbTogZS5uYW1lIH0pXG4gICAgICAgIGlmKGUubmFtZSA9PSAnSW50cm8nIHx8IGUubmFtZSA9PSAnQW5pbWFscycgfHwgZS5uYW1lID09ICdQcm9ncmFtbWluZycpe1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJbmRleDogMCB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vbGV0IGVsZW1lbnRTY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKG5hbWUpWzBdLnNjcm9sbFRvcFxuICAgIC8vaWYoY3VycmVudFNjcm9sbCA9PSBlbGVtZW50U2Nyb2xsKSB7XG4gICAgLy8gIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pO1xuICAgIC8vfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgYWN0aXZlSW5kZXggfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IEJpb0NvbnRlbnQgPSAoXG4gICAgICA8TWVudS5NZW51PlxuICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgbmFtZT0nSW50cm8nXG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnSW50cm8nfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAvPlxuICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgbmFtZT0nQW5pbWFscydcbiAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdBbmltYWxzJ31cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgLz5cbiAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgIG5hbWU9J1Byb2dyYW1taW5nJ1xuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ1Byb2dyYW1taW5nJ31cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgLz5cbiAgICAgIDwvTWVudS5NZW51PlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8UGx4XG4gICAgICAgIGNsYXNzTmFtZT0nRml4ZWREZW1vJ1xuICAgICAgICBhbmltYXRlV2hlbk5vdEluVmlld3BvcnQ9eyB0cnVlIH1cbiAgICAgICAgcGFyYWxsYXhEYXRhPXsgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXJ0OiA1MDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgbmFtZTogJ2ZpcnN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IDMwMCxcbiAgICAgICAgICAgICAgICBlbmRWYWx1ZTogMCxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogJ3RyYW5zbGF0ZVgnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdIH1cbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2VnbWVudCBzdHlsZT17bWVudUhlYWRlclN0eWxlfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy93ZWItcG9ydGZvbGlvLXBuZy9uYW1lLnBuZycgc2l6ZT0nc21hbGwnIGNlbnRlcmVkLz5cbiAgICAgICAgICAgIDxwPiggSHdhbmcsIEp1bi1IeXVuICk8L3A+XG4gICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgIFxuICAgICAgICAgIDxBY2NvcmRpb24gYXM9e01lbnV9IHBvaW50aW5nIHNlY29uZGFyeSB2ZXJ0aWNhbCBmbHVpZCBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbi5UaXRsZVxuICAgICAgICAgICAgICAgIGFzPXtNZW51Lkl0ZW19XG4gICAgICAgICAgICAgICAgY29udGVudD0nQmlvJ1xuICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSW5kZXggPT09IDB9XG4gICAgICAgICAgICAgICAgaW5kZXg9ezB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBY2NvcmRpb25DbGlja31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db250ZW50IGFjdGl2ZT17YWN0aXZlSW5kZXggPT09IDB9IGNvbnRlbnQ9e0Jpb0NvbnRlbnR9IC8+XG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9J1Byb2plY3RzJ1xuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdQcm9qZWN0cyd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT0nQ29ubmVjdCdcbiAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnQ29ubmVjdCd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC51aS5zZWNvbmRhcnkudmVydGljYWwucG9pbnRpbmcubWVudSAuaXRlbSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnVpLnNlY29uZGFyeS52ZXJ0aWNhbC5wb2ludGluZy5tZW51IHtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgzNCwzNiwzOCwuMTUpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC51aS5zZWNvbmRhcnkudmVydGljYWwucG9pbnRpbmcubWVudSAuaXRlbSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAtMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC51aS52ZXJ0aWNhbC5tZW51IC5pdGVtPmkuaWNvbiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC51aS5hY2NvcmRpb246bm90KC5zdHlsZWQpIC5hY2NvcmRpb24gLnRpdGxlfi5jb250ZW50Om5vdCgudWkpLCAudWkuYWNjb3JkaW9uOm5vdCguc3R5bGVkKSAudGl0bGV+LmNvbnRlbnQ6bm90KC51aSkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDE4cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnVpLnNlY29uZGFyeS5wb2ludGluZy5tZW51IC5kcm9wZG93bi5pdGVtOmFjdGl2ZSwgLnVpLnNlY29uZGFyeS5wb2ludGluZy5tZW51IC5saW5rLml0ZW06YWN0aXZlLCAudWkuc2Vjb25kYXJ5LnBvaW50aW5nLm1lbnUgYS5pdGVtOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9QbHg+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=/Users/junhwang/Documents/portfolio_web/jun-portfolio/components/Menu.js */")));
    }
  }]);

  return MenuVert;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.164c39dff1dc856bfe1a.hot-update.js.map