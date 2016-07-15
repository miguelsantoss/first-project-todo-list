import React from 'react';

import SidebarEntry from './SidebarEntry';

export default class Sidebar extends React.Component {
	render() {
		const { sidebarList } = this.props;

		const sidebarItems = sidebarList.map((item) => {
	        return <SidebarEntry key={item.id} {...item}/>;
	    });

		return (
			<div id="sidebar-wrapper">
				<ul className="sidebar-nav">
					<li class="sidebar-brand">ToDo App</li>
					{sidebarItems}
				</ul>
			</div>
		);
	}
}