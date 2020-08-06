import React, { Component } from "react";
import axios from "axios";

const DataContext = React.createContext();

class DataProvider extends Component {
  state = {
    loading: false,
    gallery: [],
    favorites: [],
  };

  getGallery = async (e) => {
    this.setState({ loading: true });
    const query = e.target.value.replace(/ /g, "+");
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.REACT_APP_APIKEY}&limit=8`
      )
      .then((res) => {
        const gallery = this.formatData(res.data.data);
        this.setState({ gallery });
      });
  };

  formatData = (dataArray) => {
    let gallery = [];
    for (let i = 0; i < dataArray.length; i++) {
      const { url } = dataArray[i].images.original;
      gallery.push(url);
    }

    return gallery;
  };

  doneLoading = () => {
    this.setState({ loading: false });
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          getGallery: this.getGallery,
          doneLoading: this.doneLoading,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export { DataProvider, DataContext };
