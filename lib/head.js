'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _cssmin = require('cssmin');

var _cssmin2 = _interopRequireDefault(_cssmin);

var normalize = (0, _cssmin2['default'])(_fs2['default'].readFileSync(require.resolve('normalize.css'), 'utf8'));

var Head = (function (_React$Component) {
  function Head() {
    _classCallCheck(this, Head);

    _get(Object.getPrototypeOf(Head.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(Head, _React$Component);

  _createClass(Head, [{
    key: 'getTitle',
    value: function getTitle() {
      if (this.props.page && this.props.page.title) {
        return this.props.page.title + ' | ' + this.props.config.title;
      }
      return this.props.config.title;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'head',
        null,
        _react2['default'].createElement('meta', { charSet: 'UTF-8' }),
        _react2['default'].createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
        _react2['default'].createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
        _react2['default'].createElement(
          'title',
          null,
          this.getTitle()
        ),
        _react2['default'].createElement('style', { dangerouslySetInnerHTML: { __html: normalize } })
      );
    }
  }]);

  return Head;
})(_react2['default'].Component);

exports['default'] = Head;
module.exports = exports['default'];