import React from 'react';

export default class TodoListEntry extends React.Component {
  deleteTodo() {
    const { deleteTodo, name } = this.props;
    deleteTodo(name);
  }

  handleChecking() {
    this.props.changeTodoStateHandler();
  }

  render() {
    const { name, priority, done } = this.props;
    const style = {
      textDecoration: done ? 'line-through' : '',
      fontStyle: done ? 'italic' : 'normal',
      color: done ? 'black' : '',
    };
    const classApply = priority === 'LOW' ? 'label label-success' : priority === 'MEDIUM' ? 'label label-warning' : 'label label-danger';

    return (
      <div>
        <li className="list-group-item">
          <div onClick={this.deleteTodo.bind(this)} className="btn btn-danger btn-xs pull-right text-center"><span className="glyphicon glyphicon-trash"/></div>
          <input onChange={this.handleChecking.bind(this)} checked={done} type="checkbox" />
          <span>&nbsp;</span>
          <span style={style}>{name}</span>
          <span>&nbsp;</span>
          <span className={classApply}>{priority}</span>
        </li>
      </div>
    );
  }
}
