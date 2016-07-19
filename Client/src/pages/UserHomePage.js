import React from 'react';
import { connect } from 'react-redux';

import * as lists from '../actions/listsActions';

import AddListModal from '../components/AddListModal'
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import TodoList from '../components/TodoList';

@connect((store) => {
  return {
    sidebarList: store.lists.listArray,
    listSelected: store.lists.selected,
    todos: store.lists.listArray[store.lists.selected].todos,
  };
})
export default class UserHomePage extends React.Component {
  createList(name) {
    const { dispatch } = this.props;
    dispatch(lists.createList(name));
  }

  deleteList(name) {
    const { dispatch } = this.props;
    dispatch(lists.deleteList(name));
  }

  createTodo(name, priority) {
    const { dispatch, listSelected } = this.props;
    dispatch(lists.createTodo(listSelected, name, priority));
  }

  deleteTodo(name) {
    const { dispatch, listSelected } = this.props;
    dispatch(lists.deleteTodo(listSelected, name));
  }

  changeSelected(id) {
    const { dispatch } = this.props;
    dispatch(lists.changeSelected(id));
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div id="wrapper">
          <Sidebar changeSelectedHandler={this.changeSelected.bind(this)} sidebarList={this.props.sidebarList} selected={this.props.listSelected}/>
          <TodoList createTodoHandler={this.createTodo.bind(this)} deleteTodoHandler={this.deleteTodo.bind(this)} todos={this.props.todos}/>
        </div>
        <AddListModal createListHandler={this.createList.bind(this)}/>
      </div>
    );
  }
}
