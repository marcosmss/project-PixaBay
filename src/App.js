import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <NavBar />
            <Search />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
