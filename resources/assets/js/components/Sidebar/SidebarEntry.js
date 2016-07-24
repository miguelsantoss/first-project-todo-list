import React from 'react';

export default class SidebarEntry extends React.Component {
  handleClick() {
    const { select, id } = this.props;
    select(id);
  }
  handleDeleteButton() {
    this.props.deleteListEntry();
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

    return (
      <li>
        <button style={buttonStyle} onClick={this.handleDeleteButton.bind(this)} type='button' className='btn btn-link btn-sm pull-right'><span className='glyphicon glyphicon-trash'/></button>
        <a href='#' onClick={this.handleClick.bind(this)} style={style}>{name}</a>
      </li>
    );
  }
}
