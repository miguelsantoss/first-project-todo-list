import React from 'react';

export default class TodoListEntry extends React.Component {

	render() {
		const { todoText } = this.props;

		return (
			<div>
				<li className="list-group-item">
					<span>{todoText}</span>
				</li>
			</div>
		);
	}
}