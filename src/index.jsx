import React from 'react';
import Head from './head';
import styles from './styles';

export default class Reacat extends React.Component {
  render() {
    return (
      <html>
        <Head {...this.props}/>
        <body>
          <div style={styles.container}>
            <div dangerouslySetInnerHTML={{__html:this.props.htmlContent}}/>
          </div>
        </body>
      </html>
    );
  }
}
