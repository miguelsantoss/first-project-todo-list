import React from 'react';

export default class SidebarEntry extends React.Component {
  render() {
    const { listName } = this.props;

    return (
      <li>
        <a href="#">{listName}</a>
      </li>
    );
  }
}
