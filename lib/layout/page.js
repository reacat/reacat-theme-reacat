'use strict';

var React = require('react');

var Page = React.createClass({
  displayName: 'Page',

  render: function render() {
    return React.createElement(
      'h1',
      null,
      'Hello World'
    );
  }
});

module.exports = Page;