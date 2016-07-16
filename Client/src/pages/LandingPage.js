import React from 'react';
import { Link, browserHistory } from 'react-router'

export default class LandingPage extends React.Component {
  handleLogInclick() {
    browserHistory.push('/home'); //FIXME add login logic
  }
  handleRegisterclick() {
    browserHistory.push('/register'); //FIXME register logic
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Login or register</h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label for="username">Username:</label>
                <input type="text" className="form-control" id="username"/>
              </div>
              <div className="form-group">
                <label for="password">Password:</label>
                <input type="password" className="form-control" id="password"/>
              </div>
              <div class="btn-group" role="group">
                <button type="button" onClick={this.handleLogInclick.bind(this)} className="btn btn-primary">Log in</button>
                <button type="button" onClick={this.handleRegisterclick.bind(this)} className="btn btn-success">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
