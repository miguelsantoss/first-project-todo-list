import React from 'react';

export default class SidebarEntry extends React.Component {
	handleClick() {
		const { select, id } = this.props;
		select(id);
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
				<a href="#" onClick={this.handleClick.bind(this)} style={style}>{name}</a>
			</li>
		);
	}
}
