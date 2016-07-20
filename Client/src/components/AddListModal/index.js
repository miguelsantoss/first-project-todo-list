import React from 'react';

export default class addListModal extends React.Component {
  handleListCreation() {
    const input = document.getElementById("listName");
    if(input.value != "") {
      this.props.createListHandler(input.value);
      input.value = "";
    }
  }

  handleKeyDown(event) {
    if(event.keyCode == 13) {
      const button = document.getElementById("list-creation-button");
      button.click();
    }
  }

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
                <input onKeyDown={this.handleKeyDown.bind(this)} placeholder="Enter list name" defaultValue="" type="text" class="form-control" id="listName"/>
              </div>
            </div>
            <div className="modal-footer">
              <button id="list-creation-button" type="button" onClick={this.handleListCreation.bind(this)} className="btn btn-primary" data-dismiss="modal">Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
