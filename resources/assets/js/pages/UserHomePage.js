import React from 'react';
import { connect } from 'react-redux';

import * as lists from '../actions/listsActions';

import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import TodoList from '../components/TodoList';

/*@connect((store) => {
  return {
    sidebarList: store.lists.listArray,
    listSelected: store.lists.selected,
    todos: store.lists.listArray.length != 0 ? store.lists.listArray[store.lists.selected].todos : [],
  };
})*/

@connect((store) => {
  return {
    sidebarList: store.lists.listArray ? store.lists.listArray : [],
    listSelected: store.lists.selected ? store.lists.selected : 0,
    fetchingLists: store.lists.fetchingLists
  };
})
export default class UserHomePage extends React.Component {
  componentWillMount() {
    this.props.dispatch(lists.fetchLists());
  }
  createList(name) {
    this.props.dispatch(lists.createList(name));
  }

  deleteList(id) {
    this.props.dispatch(lists.deleteList(id));
  }

  createTodo(name, priority) {
    const { dispatch, listSelected } = this.props;
    dispatch(lists.createTodo(listSelected, name, priority));
  }

  deleteTodo(id) {
    this.props.dispatch(lists.deleteTodo(id));
  }

  changeSelected(id) {
    this.props.dispatch(lists.changeSelected(id));
  }

  changeTodoState(id) {
    this.props.dispatch(lists.changeTodoState(id));
  }
  changeTodoPriority(id, priority) {
    this.props.dispatch(lists.changeTodoPriority(id, priority));
  }
  changeListName(id, name) {
    this.props.dispatch(lists.renameList(id, name));
  }
  changeTodoName(id, name) {
    this.props.dispatch(lists.renameTodo(id, name));
  }

  render() {
    const { listSelected, sidebarList } = this.props;
    let listIndex = 0;

    if(sidebarList.length) {
      sidebarList.forEach((list, index) => {
        if(list.id == listSelected) {
          listIndex = index;
          return;
        }
      })
    }

    const todos = sidebarList.length ? sidebarList[listIndex].items : [];

    return (
      <div>
        <NavBar/>
        <div id='wrapper'>
          <Sidebar changeListName={this.changeListName.bind(this)} createListHandler={this.createList.bind(this)} deleteListHandler={this.deleteList.bind(this)} changeSelectedHandler={this.changeSelected.bind(this)} sidebarList={sidebarList} selected={listSelected}/>
          <TodoList changeTodoName={this.changeTodoName.bind(this)} changeTodoPriority={this.changeTodoPriority.bind(this)} changeTodoState={this.changeTodoState.bind(this)} createTodoHandler={this.createTodo.bind(this)} deleteTodoHandler={this.deleteTodo.bind(this)} todos={todos}/>
        </div>
      </div>
    );
  }
}
