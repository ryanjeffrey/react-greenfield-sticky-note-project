import React, { Component } from "react";

/* This presentational component renders a single
list item element with two text input fields,
one for the note's title and one for the note's
description. When the user types in these fields,
functions that are passed to this component
as props are used to update the state of the
corresponding note object in the state of the
App component  */
class Note extends Component {
  updateTitle = (e) => {
    var updatedValue = e.target.value;
    var editMeId = this.props.note.id;
    this.props.onType(editMeId, "title", updatedValue);
  };
  updateDescription = (e) => {
    var updatedValue = e.target.value;
    var editMeId = this.props.note.id;
    this.props.onType(editMeId, "description", updatedValue);
  };
  clickDelete = () => this.props.remove(this.props.note.id);
  render() {
    return (
      <li className="note">
        <input
          type="text"
          placeholder="Title"
          className="note__title"
          value={this.props.note.title}
          onChange={this.updateTitle}
        />
        <textarea
          placeholder="Description..."
          className="note__description"
          value={this.props.note.description}
          onChange={this.updateDescription}
        />
        <span onClick={this.clickDelete} className="note__delete">
          X
        </span>
      </li>
    );
  }
}

export default Note;
