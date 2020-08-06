import React from "react";

export default function SearchBar() {
  const handleQuery = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="searchbar-holder">
      <input
        className="searchbar"
        type="text"
        name="picture"
        placeholder="Start searching for images!"
        onChange={handleQuery}
      />
    </div>
  );
}
