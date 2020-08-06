import React, { useContext, useState } from "react";
import { DataContext } from "../context";

export default function SearchBar() {
  const context = useContext(DataContext);
  const [typingTimeout, setTypingTimeout] = useState(0);
  const { getGallery, startLoading } = context;

  const handleOnChange = (e) => {
    startLoading();
    const query = e.target.value;
    if (typingTimeout) clearTimeout(typingTimeout);
    setTypingTimeout(
      setTimeout(() => {
        getGallery(query);
      }, 2000)
    );
  };
  return (
    <div className="searchbar-holder">
      <input
        className="searchbar"
        type="text"
        name="picture"
        placeholder="Start searching for images!"
        onChange={handleOnChange}
      />
    </div>
  );
}
