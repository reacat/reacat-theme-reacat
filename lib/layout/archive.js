'use strict';

var React = require('react');

var Archive = React.createClass({
  displayName: 'Archive',

  render: function render() {
    return React.createElement(
      'h1',
      null,
      'Hello World'
    );
  }
});

module.exports = Archive;