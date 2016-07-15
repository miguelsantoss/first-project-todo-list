import React from 'react';

export default class TodoListEntry extends React.Component {
  render() {
    const { todoText, priority } = this.props;

    return (
      <div>
        <li className="list-group-item">
          <div className="btn btn-danger btn-xs pull-right"><span className="glyphicon glyphicon-trash"/></div>
          <input type="checkbox"/>
          <span>&nbsp;{todoText}&nbsp;</span>
          <span className={ priority === 'LOW' ? 'label label-success' : priority === 'MEDIUM' ? 'label label-warning' : 'label label-danger' }>{priority}</span>
        </li>
      </div>
    );
  }
}
