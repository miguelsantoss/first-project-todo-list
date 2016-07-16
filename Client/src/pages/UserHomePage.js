import React from 'react';

import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import TodoList from '../components/TodoList';

const todos = [
  {
    todoText: 'Cook Dinner',
    id: 0,
    priority: 'HIGH',
    done: false
  },
  {
    todoText: 'Watch a Movie',
    id: 1,
    priority: 'MEDIUM',
    done: true
  },
  {
    todoText: 'Wash Dishes',
    id: 2,
    priority: 'LOW',
    done: false
  },
];

const sidebarList = [
  {
    listName: 'Completed',
    id: 0
  },
  {
    listName: 'Custom list',
    id: 1
  }
]

export default class UserHomePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div id="wrapper">
          <Sidebar sidebarList={sidebarList}/>
          <TodoList todos={todos}/>
        </div>
      </div>
    );
  }
}
