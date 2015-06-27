import React from 'react';

export default class Reacat extends React.Component {
  render() {
    return (
      <p><pre>{JSON.stringify(this.props, null, 2)}</pre></p>
    );
  }
}
