import React from 'react';
import { Link, browserHistory } from 'react-router'

export default class LandingPage extends React.Component {
  handleLogInClick() {
    browserHistory.push('/home'); //FIXME add login logic
  }
  handleRegisterClick() {
    browserHistory.push('/home'); //FIXME add register logic
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 text-center">
              <h1>Todo App</h1>
              <p>by Team Red Iguanas</p>
            </div>
            <div className="col-md-6">
              <div className="panel panel-primary">
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
                      <button type="button" onClick={this.handleLogInClick.bind(this)} className="btn btn-primary">Log in</button>
                      <button type="button" onClick={this.handleRegisterClick.bind(this)} className="btn btn-success">Register</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
