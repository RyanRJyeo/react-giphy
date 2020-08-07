import React, { Component } from "react";
import axios from "axios";

const DataContext = React.createContext();

class DataProvider extends Component {
  state = {
    loading: false,
    gallery: [],
    favorites: [],
    error: false,
    query: "",
  };

  startLoading = () => {
    this.setState({ loading: true });
  };

  getGallery = async (e) => {
    const query = e.replace(/ /g, "+");
    Promise.resolve(
      axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.REACT_APP_APIKEY}&limit=8`
      )
    )
      .then((res) => {
        const gallery = this.formatData(res.data.data);
        this.setState({ gallery, loading: false });
      })
      .catch((err) => {
        this.setState({ error: true, loading: false });
      });
  };

  getMoreGallery = async () => {
    const offset = this.state.gallery.length;
    let { query, gallery } = this.state;
    Promise.resolve(
      axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.REACT_APP_APIKEY}&limit=8&offset=${offset}`
      )
    )
      .then((res) => {
        const moreGallery = this.formatData(res.data.data);
        gallery = gallery.concat(moreGallery);
        this.setState({ gallery, loading: false });
      })
      .catch((err) => {
        this.setState({ error: true, loading: false });
      });
  };

  formatData = (dataArray) => {
    let gallery = [];
    for (let i = 0; i < dataArray.length; i++) {
      const { url } = dataArray[i].images.original;
      let favorite = false;
      if (
        this.state.favorites.length > 0 &&
        this.state.favorites.find((favUrl) => favUrl === url)
      ) {
        favorite = true;
      }
      gallery.push({ url, favorite });
    }

    return gallery;
  };

  toggleFav = (imgUrl, fromFavGallery) => {
    let favorites = this.state.favorites;
    const gallery = this.state.gallery.map((eachImage) => {
      if (eachImage.url === imgUrl) {
        eachImage.favorite = !eachImage.favorite;

        if (eachImage.favorite) {
          favorites.push(eachImage.url);
        } else {
          favorites = favorites.filter((url) => url !== eachImage.url);
        }
      }
      return eachImage;
    });
    if (fromFavGallery) {
      favorites = favorites.filter((url) => url !== imgUrl);
    }
    this.setState({ gallery, favorites });
  };

  noError = () => {
    this.setState({ error: false });
  };

  setQuery = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          startLoading: this.startLoading,
          getGallery: this.getGallery,
          toggleFav: this.toggleFav,
          noError: this.noError,
          setQuery: this.setQuery,
          getMoreGallery: this.getMoreGallery,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export { DataProvider, DataContext };
