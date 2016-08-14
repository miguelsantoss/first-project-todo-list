import React from 'react';

export default class SidebarEntry extends React.Component {
  constructor() {
    super();
    this.state = { name: "", editing: false };
  }

  componentWillMount() {
    this.setState({ ...this.state, name: this.props.name });
  }

  handleClick() {
    const { select, id } = this.props;
    select(id);
  }
  handleDeleteButton() {
    this.props.deleteListEntry();
  }

  handleInputChange(event) {
    const input = document.getElementById('list-edit-input' + this.props.id);
    input.value = event.target.value;
    this.setState({ ...this.state, name: event.target.value });
  }

  handleKeyDown() {

  }

  handleChangeButton() {
    const { id, changeListName } = this.props;
    const input = document.getElementById('list-edit-input' + this.props.id);
    changeListName(id, input.value);
    this.setState({ ...this.state, editing: false });
  }

  handleEditButton() {
    this.setState({ ...this.state, editing: true });
  }

  render() {
    const { name, selected } = this.props;

    let style = {};
    if(selected) {
      style = {
        background: '#3e5871'
      };
    }

    const buttonStyle = {
      marginRight: '3%'
    }

    const input_id = 'list-edit-input' + this.props.id;
    const button_id = 'list-edit-button' + this.props.id;

    const listItem = this.state.editing ?
      <div className="input-group input-group-20px">
        <input onKeyDown={this.handleKeyDown.bind(this)} onChange={this.handleInputChange.bind(this)} id={input_id} type="text" className="form-control" value={this.state.name}/>
        <span className="input-group-btn">
          <button onClick={this.handleChangeButton.bind(this)} type="button" className="btn btn-success btn-exception" id={button_id}>OK</button>
        </span>
      </div> :
      <div>
        <button style={buttonStyle} onClick={this.handleDeleteButton.bind(this)} type='button' className='btn btn-link btn-sm pull-right'><span className='glyphicon glyphicon-trash'/></button>
        <button style={buttonStyle} onClick={this.handleEditButton.bind(this)} type='button' className='btn btn-link btn-sm pull-right'><span className='glyphicon glyphicon-pencil'/></button>
        <a href='#' onClick={this.handleClick.bind(this)}>{this.state.name}</a>
      </div>

    return (
      <li style={style}>
        {listItem}
      </li>
    );
  }
}
