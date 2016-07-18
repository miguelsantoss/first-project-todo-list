import React from 'react';

export default class addListModal extends React.Component {
  render() {
    return (
      <div className="modal fade" id="addListModal" tabIndex="-1" role="dialog" aria-labelledby="addListModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="addListModalLabel">Add a list</h4>
            </div>
            <div className="modal-body">
              <div class="form-group">
                <label for="listName">List name:</label>
                <input type="text" class="form-control" id="listName"/>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
