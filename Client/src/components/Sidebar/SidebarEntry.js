import React from 'react';

export default class SidebarEntry extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <li>
        <a href="#">{name}</a>
      </li>
    );
  }
}
