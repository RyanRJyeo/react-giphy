import React, { useContext } from "react";
import { DataContext } from "../context";

export default function FavGallery() {
  const context = useContext(DataContext);
  const { favorites, toggleFav } = context;

  let img;
  if (favorites.length > 0) {
    img = favorites.map((image, index) => {
      let heart = (
        <div className="heartbox" onClick={() => toggleFav(image, true)}>
          <i className="bx bxs-heart bx-md"></i>
        </div>
      );
      return (
        <div
          key={index}
          className="eachimage"
          style={{ backgroundImage: `url(${image})` }}
        >
          {heart}
        </div>
      );
    });
  }

  return (
    <div className="gallery" style={{ marginTop: "10%" }}>
      {img}
    </div>
  );
}
