import React from 'react';
import { Link } from 'react-router';

import SidebarEntry from './SidebarEntry';

export default class Sidebar extends React.Component {
  deleteListEntry(id) {
    this.props.deleteListHandler(id);
  }
  render() {
    const { changeSelectedHandler, sidebarList, selected } = this.props;

    const sidebarItems = sidebarList.map((item) => {
      const isSelected = item.id == selected ? true : false;
      return <SidebarEntry deleteListEntry={this.deleteListEntry.bind(this, item.id)} select={changeSelectedHandler} selected={isSelected} key={item.id} {...item}/>;
    });

    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <button type="button" className="btn btn-link pull-right" data-toggle="modal" data-target="#addListModal"><span className="glyphicon glyphicon-plus"/></button>
            <span>Lists</span>
          </li>
          {sidebarItems}
          <li className="visible-xs-block"><Link className="btn btn-success" to={'/'}>Log out</Link></li>
        </ul>
      </div>
    );
  }
}
