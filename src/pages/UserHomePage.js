import React from 'react';

import SideBar from '../components/Sidebar';
import TodoList from '../components/TodoList';

const todos = [
	{
		todoText:'Cook Dinner',
		id: 0,
		priority: 'HIGH',
	},
	{
		todoText:'Watch a Movie',
		id: 1,
		priority: 'MEDIUM',
	},
	{
		todoText:'Wash dishes',
		id: 2,
		priority: 'LOW',
	},
];

const options = [
	{
		listName:'Not completed',
		id: 0,
	},
	{
		listName:'Important',
		id: 1,
	},
];

export default class UserHomePage extends React.Component {
	render() {
		return (
			<div>
				<div id="wrapper">
					<SideBar sidebarList={options}/>
					<TodoList todos={todos}/>
				</div>
			</div>
		);
	}
}