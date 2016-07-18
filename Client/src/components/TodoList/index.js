import React from 'react';

import TodoListEntry from './TodoListEntry';

export default class TodoList extends React.Component {
  handleTodoCreation() {
    const input = document.getElementById("search-creation-box");
    this.props.createTodoHandler(input.value);
    input.value = "";
  }
  
  render() {
    const { todos, deleteTodoHandler } = this.props;

    const listEntries = todos.map((todo) => {
          return <TodoListEntry deleteTodo={deleteTodoHandler} key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="input-group">
              <div className="input-group-btn">
                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn btn-default dropdown-toggle">Filters <span className="caret"></span></button>
                <ul className="dropdown-menu">
                  <li><a href="#">Done</a></li>
                  <li className="active"><a href="#">Not Done</a></li>
                  <li className="divider" role="separator"></li>
                  <li><a href="#">LOW</a></li>
                  <li><a href="#">MEDIUM</a></li>
                  <li><a href="#">HIGH</a></li>
                </ul>
              </div>
              <input type="text" id="search-creation-box" className="form-control" placeholder="Search or create an item..."/>
              <div className="input-group-btn">
                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn btn-success dropdown-toggle">LOW <span className="caret"></span></button>
                <ul className="dropdown-menu">
                  <li><a href="#"><span className="text-success">LOW</span></a></li>
                  <li><a href="#"><span className="text-warning">MEDIUM</span></a></li>
                  <li><a href="#"><span className="text-danger">HIGH</span></a></li>
                </ul>
                <button onClick={this.handleTodoCreation.bind(this)} className="btn btn-primary" type="button"><span className="glyphicon glyphicon-plus"/></button>
              </div>
            </div>
          </div>
          <ul className="list-group">
            {listEntries}
          </ul>
        </div>
      </div>
    );
  }
}
