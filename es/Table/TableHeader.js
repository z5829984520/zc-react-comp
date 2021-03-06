function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React from 'react';
import { cssPrefix } from './index';
import TableCell from './TableCell';

var TableHeader = /*#__PURE__*/function (_React$Component) {
  _inherits(TableHeader, _React$Component);

  var _super = _createSuper(TableHeader);

  function TableHeader() {
    var _this;

    _classCallCheck(this, TableHeader);

    _this = _super.apply(this, arguments);
    _this.scrollDivRef = /*#__PURE__*/React.createRef();
    _this.theadRef = /*#__PURE__*/React.createRef();

    _this.setScrollX = function (scrollLeft) {
      if (_this.scrollDivRef && _this.scrollDivRef.current) {
        _this.scrollDivRef.current.scrollLeft = scrollLeft;
      }
    };

    _this.noticeTheadHeight = function () {
      _this.timer = setTimeout(function () {
        _this.props.theadChange && _this.props.theadChange(_this.theadRef.current);
      }, 0);
    };

    return _this;
  }

  _createClass(TableHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.noticeTheadHeight();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      // @ts-ignore
      var _this$props = this.props,
          originColumns = _this$props.originColumns,
          endColumns = _this$props.endColumns,
          scroll = _this$props.scroll,
          onResize = _this$props.onResize;
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(cssPrefix, "-header"),
        ref: this.scrollDivRef,
        style: Object.assign(Object.assign({}, scroll && scroll.y && {
          overflowY: 'scroll'
        }), {
          overflowX: 'hidden'
        })
      }, /*#__PURE__*/React.createElement("table", {
        style: {
          width: scroll && scroll.x
        }
      }, /*#__PURE__*/React.createElement("colgroup", null, endColumns.map(function (item) {
        return /*#__PURE__*/React.createElement("col", {
          key: item.dataIndex,
          style: {
            width: item.width,
            minWidth: item.width
          }
        });
      })), /*#__PURE__*/React.createElement("thead", {
        ref: this.theadRef
      }, originColumns.map(function (tr, trIndex) {
        return /*#__PURE__*/React.createElement("tr", {
          key: trIndex
        }, tr.map(function (column, colIndex) {
          return /*#__PURE__*/React.createElement(TableCell, {
            onResize: onResize,
            key: colIndex,
            type: "header",
            column: column
          });
        }));
      }))));
    }
  }]);

  return TableHeader;
}(React.Component);

export default TableHeader;