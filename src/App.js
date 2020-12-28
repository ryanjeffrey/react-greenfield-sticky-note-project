import React, { Component } from "react";
import Header from "./Header";
import NotesList from "./NotesList";

/* This container component manages all of the state 
for this application, delegating rendering logic to 
presentational components. */
class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
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
  render() {
    return (
      <div>
        <Header searchText={this.state.searchText} addNote={this.addNote} />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}
export default App;
