import React from 'react';

import NavBar from '../components/NavBar';
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

export default class UserHomePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <TodoList todos={todos}/>
      </div>
    );
  }
}
