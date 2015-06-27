'use strict';

var React = require('react');

var Tag = React.createClass({
  displayName: 'Tag',

  render: function render() {
    return React.createElement(
      'h1',
      null,
      'Hello World'
    );
  }
});

module.exports = Tag;