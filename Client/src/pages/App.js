import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}
