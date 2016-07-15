import React from 'react';

import TodoListEntry from './TodoListEntry';

export default class TodoList extends React.Component {
	render() {
		const { todos } = this.props;

		const listEntries = todos.map((todo) => {
	        return <TodoListEntry key={todo.id} {...todo}/>;
	    });

		return (
			<div id="page-content-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-6">
							<ul className="list-group">
								{listEntries}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}