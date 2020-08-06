import React, { useContext } from "react";
import { DataContext } from "../context";

export default function Gallery() {
  const context = useContext(DataContext);
  const { gallery, toggleFav } = context;

  let img;
  if (gallery.length > 0) {
    img = gallery.map((image, index) => {
      let heart = (
        <div className="heartbox" onClick={() => toggleFav(image.url)}>
          <i className="bx bxs-heart bx-md"></i>
        </div>
      );

      if (image.favorite) {
        heart = (
          <div className="heartboxfav" onClick={() => toggleFav(image.url)}>
            <i className="bx bxs-heart bx-md"></i>
          </div>
        );
      }
      return (
        <div
          key={index}
          className="eachimage"
          style={{ backgroundImage: `url(${image.url})` }}
        >
          {heart}
        </div>
      );
    });
  }

  return <div className="gallery">{img}</div>;
}
