'use strict';

var React = require('react');

var Category = React.createClass({
  displayName: 'Category',

  render: function render() {
    return React.createElement(
      'h1',
      null,
      'Hello World'
    );
  }
});

module.exports = Category;