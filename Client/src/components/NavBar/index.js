import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Todo App by Team Red Iguanas</a>
          </div>
          <Link className="btn btn-default nav navbar-nav navbar-collapse navbar-right navbar-btn" to={'/'}>Log out</Link>
        </div>
      </nav>
    );
  }
}
