import React from 'react';
import { connect } from 'react-redux';

import AddListModal from '../components/AddListModal'
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import TodoList from '../components/TodoList';

@connect((store) => {
  return {
    sidebarList: store.lists.lists,
    listSelected: store.lists.selected,
    todos: store.lists.lists[store.lists.selected].todos,
  };
})
export default class UserHomePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div id="wrapper">
          <Sidebar sidebarList={this.props.sidebarList}/>
          <TodoList todos={this.props.todos}/>
        </div>
        <AddListModal/>
      </div>
    );
  }
}
