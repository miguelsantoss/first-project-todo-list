import React from 'react';

import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import TodoList from '../components/TodoList';

const todos = [
  {
    name: 'Cook Dinner',
    id: 0,
    priority: 'HIGH',
    done: false
  },
  {
    name: 'Watch a Movie',
    id: 1,
    priority: 'MEDIUM',
    done: true
  },
  {
    name: 'Wash Dishes',
    id: 2,
    priority: 'LOW',
    done: false
  },
];

const sidebarList = [
  {
    name: 'Groceries',
    id: 0
  },
  {
    name: 'Games I Want',
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
