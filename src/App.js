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
        id: 0,
        title: "eat",
        description: "reese peanut butter cups",
        doesMatchSearch: true
      },
      {
        id: 1,
        title: "sleep",
        description: "eight hours",
        doesMatchSearch: true
      },
      {
        id: 2,
        title: "code",
        description: "build an awesome ui",
        doesMatchSearch: true
      }
    ],
    searchText: "search for me"
  };
  render() {
    return (
      <div>
        <Header searchText={this.state.searchText} />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}
export default App;
