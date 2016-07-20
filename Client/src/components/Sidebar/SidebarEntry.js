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

    return (
      <li>
        <div onClick={this.handleDeleteButton.bind(this)} className="btn btn-danger btn-xs pull-right text-center"><span className="glyphicon glyphicon-trash"/></div>
        <a href="#" onClick={this.handleClick.bind(this)} style={style}>{name}</a>
      </li>
    );
  }
}
