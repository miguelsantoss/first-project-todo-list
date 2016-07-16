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
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button"><span className="glyphicon glyphicon-plus"/></button>
              </span>
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
