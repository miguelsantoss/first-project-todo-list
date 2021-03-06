import React from 'react';
import { findDOMNode } from 'react-dom';

import TodoListEntry from './TodoListEntry';

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = { filter: 'No Filter', priority: 'LOW' };
  }

  componentDidMount() {
    const input = document.getElementById('search-creation-box');
    input.focus();
  }

  handleTodoCreation() {
    const input = document.getElementById('search-creation-box');
    if(input.value != ''){
      this.props.createTodoHandler(input.value, this.state.priority);
      input.value = '';
    }
  }

  handleKeyDown(event) {
    if(event.keyCode == 13) {
      const button = document.getElementById('todo-creation-button');
      button.click();
    }
  }

  changeFilter(filter) {
    this.setState({ ...this.state, filter });
  }

  changePriority(priority) {
    this.setState({ ...this.state, priority });
  }

  changeTodoState(id) {
    this.props.changeTodoState(id);
  }

  changeTodoPriority(id, priority) {
    this.props.changeTodoPriority(id, priority);
  }

  changeTodoName(id, text) {
    this.props.changeTodoName(id, text);
  }

  render() {
    const { todos, deleteTodoHandler } = this.props;
    const { filter, priority } = this.state;
    const filters = [
      'No Filter',
      '',
      'Done',
      'Not Done',
      '',
      'LOW',
      'MEDIUM',
      'HIGH'
    ].map((option, index) => {
      if(option != '') {
        const classApply = option == this.state.filter ? 'active' : '';
        return (<li className={classApply} key={index}><a href='#' onClick={this.changeFilter.bind(this, option)}>{option}</a></li>);
      }
      else {
        return (<li key={index} className='divider' role='separator'></li>);
      }
    });

    const listEntries = todos.map((todo) => {
      if(filter != 'No Filter' && filter != 'Done' && filter != 'Not Done' && todo.priority != filter) {
        return;
      }
      const done = filter == 'Done' ? true : false;
      if(filter == 'No Filter' || todo.priority == filter || todo.done == done) {
        return <TodoListEntry changeTodoName={this.changeTodoName.bind(this)} changeTodoPriority={this.changeTodoPriority.bind(this, todo.id)} changeTodoStateHandler={this.changeTodoState.bind(this, todo.id)} deleteTodo={deleteTodoHandler} key={todo.id} {...todo}/>;
      }
    });

    const priorityOptions = [
      'LOW',
      'MEDIUM',
      'HIGH'
    ].map((option, index) => {
      let classApply = option === 'LOW' ? 'text-success' : option === 'MEDIUM' ? 'text-warning' : 'text-danger';
      return <li key={index}><a href='#' onClick={this.changePriority.bind(this, option)}><span className={classApply}>{option}</span></a></li>;
    });

    const classPriorityDropdown = 'btn ' + (priority === 'LOW' ? 'btn-success' : priority === 'MEDIUM' ? 'btn-warning' : 'btn-danger') + ' dropdown-toggle';
    const buttonRemoveRoundCorners = {
      borderRadius: '0'
    }
    return (
      <div>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <div className='input-group'>
              <div className='input-group-btn'>
                <button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' className='btn btn-default dropdown-toggle'>Filters <span className='caret'></span></button>
                <ul className='dropdown-menu'>
                  {filters}
                </ul>
              </div>
              <input onKeyDown={this.handleKeyDown.bind(this)} type='text' id='search-creation-box' className='form-control' placeholder='Search or create an item...'/>
              <div className='input-group-btn'>
                <button style={buttonRemoveRoundCorners} type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' className={classPriorityDropdown}>{priority}&nbsp;&nbsp;<span className='caret'></span></button>
                <ul className='dropdown-menu'>
                  {priorityOptions}
                </ul>
                <button id='todo-creation-button' onClick={this.handleTodoCreation.bind(this)} className='btn btn-primary' type='button'><span className='glyphicon glyphicon-plus'/></button>
              </div>
            </div>
          </div>
          <ul className='list-group'>
            {listEntries}
          </ul>
        </div>
      </div>
    );
  }
}
