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
    const classApply = 'btn btn-' + (priority === 'LOW' ? 'success' : priority === 'MEDIUM' ? 'warning' : 'danger');
    const priorityOptions = [
      'LOW',
      'MEDIUM',
      'HIGH'
    ].map((option, index) => {
      let classApply = option === 'LOW' ? 'text-success' : option === 'MEDIUM' ? 'text-warning' : 'text-danger';
      return <li key={index}><a href="#"><span className={classApply}>{option}</span></a></li>;
    });

    return (
      <div>
        <li className="list-group-item">
          <div className="btn-group btn-group-xs pull-right">
            <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={classApply}>{priority} <span className="caret"/></button>
            <ul className="dropdown-menu">{priorityOptions}</ul>
            <div onClick={this.deleteTodo.bind(this)} className="btn btn-danger text-center"><span className="glyphicon glyphicon-trash"/></div>
          </div>
          <input onChange={this.handleChecking.bind(this)} checked={done} type="checkbox"/>
          <span style={style}>{name}</span>
        </li>
      </div>
    );
  }
}
