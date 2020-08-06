import React, { useContext } from "react";
import { DataContext } from "../context";

export default function SearchBar() {
  const context = useContext(DataContext);
  const { getGallery } = context;

  return (
    <div className="searchbar-holder">
      <input
        className="searchbar"
        type="text"
        name="picture"
        placeholder="Start searching for images!"
        onChange={getGallery}
      />
    </div>
  );
}
