import React from 'react';

export default class LandingPage extends React.Component {
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
                <button type="submit" className="btn btn-primary">Log in</button>
                <button type="submit" className="btn btn-default">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
