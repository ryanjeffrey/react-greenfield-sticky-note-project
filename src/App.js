import React, { Component } from "react";
import Header from "./Header";
import NotesList from "./NotesList";

/* This container component manages all of the state 
for this application, delegating rendering logic to 
presentational components. */
class App extends Component {
  state = {
    notes: [],
    searchText: ""
  };
  addNote = () => {
    var newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    var newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });
  };
  onType = (editMeId, updatedKey, updatedValue) => {
    /* this event handler updates sticky note text fields
      - editMeId: the id of the note that the user typed in
      - updatedKey: which field was edited? 'title' or 'description'
      - updatedValue: new value of edited field */
    var updateIdMatch = (note) => {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedKey === "title") {
          return {
            ...note,
            title: updatedValue
          };
        } else {
          return {
            ...note,
            description: updatedValue
          };
        }
      }
    };
    var updatedNotes = this.state.notes.map(updateIdMatch);
    this.setState({ notes: updatedNotes });
  };
  onSearch = (e) => {
    /* toggle the doesMatchSearch boolean value of each sticky
    note when the user types in the search field.
    set the doesMatchSearch value to true for a sticky note if
    it's title or description matches the search string. */
    var searchText = e.target.value.toLowerCase();
    var updatedNotes = this.state.notes.map((note) => {
      if (!searchText) {
        /* If the search field is empty, then
      we set the doesMatchSearch value for every note to true. */
        return {
          ...note,
          doesMatchSearch: true
        };
      } else {
        var title = note.title.toLowerCase();
        var description = note.description.toLowerCase();
        var titleMatch = title.includes(searchText);
        var descriptionMatch = description.includes(searchText);
        var hasMatch = titleMatch || descriptionMatch;
        return {
          ...note,
          doesMatchSearch: hasMatch
        };
      }
    });
    this.setState({
      searchText: searchText,
      notes: updatedNotes
    });
  };
  render() {
    return (
      <div>
        <Header
          searchText={this.state.searchText}
          addNote={this.addNote}
          onSearch={this.onSearch}
        />
        <NotesList notes={this.state.notes} onType={this.onType} />
      </div>
    );
  }
}
export default App;
