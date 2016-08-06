import React from 'react';

export default class TodoListEntry extends React.Component {
  constructor() {
    super();
    this.state = { name: "", editing: false };
  }

  componentWillMount() {
    this.setState({ ...this.state, name: this.props.name });
  }

  deleteTodo() {
    const { deleteTodo, id } = this.props;
    deleteTodo(id);
  }

  handleChecking() {
    this.props.changeTodoStateHandler();
  }
  handlePriorityChange(priority) {
    this.props.changeTodoPriority(priority);
  }

  handleKeyDown(event) {
    if(event.keyCode == 13) {
      const button = document.getElementById('todo-edit-button' + this.props.id);
      button.click();
    }
  }

  handleInputChange(event) {
    const input = document.getElementById('todo-edit-input' + this.props.id);
    input.value = event.target.value;
    this.setState({ ...this.state, name: event.target.value });
  }

  handleTodoEdit() {
    const input = document.getElementById('todo-edit-input' + this.props.id);
    if(input.value != '') {
      this.props.createTodoHandler(input.value, this.state.priority);
      input.value = '';
    }
  }

  handleChangeButton() {
    const { id, changeTodoName } = this.props;
    const input = document.getElementById('todo-edit-input' + this.props.id);
    changeTodoName(id, input.value);
    this.setState({ ...this.state, editing: false })
  }

  handleEditButton() {
    this.setState({ ...this.state, editing: true });
  }

  render() {
    const { name, priority, done, id } = this.props;
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
      return <li key={index}><a onClick={this.handlePriorityChange.bind(this, option)} href='#'><span className={classApply}>{option}</span></a></li>;
    });

    const input_id  = 'todo-edit-input' + id;
    const button_id = 'todo-edit-button' + id;
    const todoItem  = this.state.editing ?
        <div>
          <input onKeyDown={this.handleKeyDown.bind(this)} onChange={this.handleInputChange.bind(this)} id={input_id} className='form-control' value={this.state.name}/>
          <button onClick={this.handleChangeButton.bind(this)} type='button' id={button_id}>Done</button>
        </div> :
        <div>
          <span style={style}>{name}</span>
          <div onClick={this.handleEditButton.bind(this)} onChange={this.handleChecking.bind(this)} className='btn btn-info text-center'><span className='glyphicon glyphicon-pencil'/></div>
        </div>

    return (
      <div>
        <li className='list-group-item'>
          <div className='btn-group btn-group-xs pull-right'>
            <button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' className={classApply}>{priority} <span className='caret'/></button>
            <ul className='dropdown-menu'>{priorityOptions}</ul>
            <div onClick={this.deleteTodo.bind(this)} className='btn btn-danger text-center'><span className='glyphicon glyphicon-trash'/></div>
          </div>
          <input onChange={this.handleChecking.bind(this)} checked={done} type='checkbox'/>
          {todoItem}
        </li>
      </div>
    );
  }
}
