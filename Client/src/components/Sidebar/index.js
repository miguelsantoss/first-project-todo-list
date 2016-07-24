import React from 'react';
import { Link } from 'react-router';

import SidebarEntry from './SidebarEntry';

export default class Sidebar extends React.Component {
  deleteListEntry(id) {
    this.props.deleteListHandler(id);
  }

  handleListCreation() {
    const input = document.getElementById('listName');
    if(input.value != '') {
      this.props.createListHandler(input.value);
      input.value = '';
    }
  }

  handleKeyDown(event) {
    if(event.keyCode == 13) {
      const button = document.getElementById('list-creation-button');
      button.click();
    }
  }

  render() {
    const { changeSelectedHandler, sidebarList, selected } = this.props;

    const sidebarItems = sidebarList.map((item) => {
      const isSelected = item.id == selected ? true : false;
      return <SidebarEntry deleteListEntry={this.deleteListEntry.bind(this, item.id)} select={changeSelectedHandler} selected={isSelected} key={item.id} {...item}/>;
    });

    const style = {
      background: '#2c3e50',
      color: 'white',
      height: '40px',
      width: '180px',
      border: 'none',
      outline: 'none'
    }

    return (
      <div id='sidebar-wrapper'>
        <ul className='sidebar-nav'>
          <li className='sidebar-brand'>
            <button onClick={this.handleListCreation.bind(this)} id='list-creation-button' type='button' className='btn btn-link pull-right'><span className='glyphicon glyphicon-plus'/></button>
            <input onKeyDown={this.handleKeyDown.bind(this)} id='listName' style={style} placeholder='New list name' />
          </li>
          <li className='divider' role='separator'></li>
          {sidebarItems}
          <li className='visible-xs-block'><Link className='btn btn-success' to={'/'}>Log out</Link></li>
        </ul>
      </div>
    );
  }
}
