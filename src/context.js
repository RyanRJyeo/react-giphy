import React, { Component } from "react";
const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    searchQuery: "",
    favorites: [],
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default { DataProvider, DataContext };
