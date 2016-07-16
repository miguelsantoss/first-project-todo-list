import React from 'react';

import TodoListEntry from './TodoListEntry';

export default class TodoList extends React.Component {
  render() {
    const { todos } = this.props;

    const listEntries = todos.map((todo) => {
          return <TodoListEntry key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="input-group">
              <input type="text" className="form-control"/>
              <div className="input-group-btn">
                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn btn-success dropdown-toggle">LOW <span className="caret"></span></button>
                <ul className="dropdown-menu">
                  <li><a href="#"><span className="text-success">LOW</span></a></li>
                  <li><a href="#"><span className="text-warning">MEDIUM</span></a></li>
                  <li><a href="#"><span className="text-danger">HIGH</span></a></li>
                </ul>
                <button className="btn btn-primary" type="button"><span className="glyphicon glyphicon-plus"/></button>
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
