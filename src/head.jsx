import React from 'react';
import fs from 'fs';
import cssmin from 'cssmin';
const normalize = cssmin(fs.readFileSync(require.resolve('normalize.css'), 'utf8'));

export default class Head extends React.Component {
  getTitle() {
    if (this.props.page && this.props.page.title) {
      return this.props.page.title + ' | ' + this.props.config.title;
    }
    return this.props.config.title;
  }
  render() {
    return (
      <head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{this.getTitle()}</title>
        <style dangerouslySetInnerHTML={{__html:normalize}}/>
      </head>
    );
  }
}