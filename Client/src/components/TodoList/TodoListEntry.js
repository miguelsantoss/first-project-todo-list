import React from 'react';

export default class TodoListEntry extends React.Component {
  deleteTodo() {
    const { deleteTodo, name } = this.props;
    deleteTodo(name);
  }

  render() {
    const { name, priority } = this.props;

    return (
      <div>
        <li className="list-group-item">
          <div onClick={this.deleteTodo.bind(this)} className="btn btn-danger btn-xs pull-right text-center"><span className="glyphicon glyphicon-trash"/></div>
          <input type="checkbox"/>
          <span>&nbsp;{name}&nbsp;</span>
          <span className={ priority === 'LOW' ? 'label label-success' : priority === 'MEDIUM' ? 'label label-warning' : 'label label-danger' }>{priority}</span>
        </li>
      </div>
    );
  }
}
