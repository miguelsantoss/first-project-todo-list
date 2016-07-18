import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#wrapper" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a className="navbar-brand" href="#">Todo App by Team Red Iguanas</a>
          </div>
          <div className="collapse navbar-collapse">
            <div className="nav navbar-nav navbar-right">
              <Link className="btn btn-primary navbar-btn" to={'/'}>Log out</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
