import React, { useContext, useEffect } from "react";
import { DataContext } from "../context";

export default function Gallery() {
  const context = useContext(DataContext);
  const { gallery, doneLoading, loading } = context;

  console.log(context);
  let img;
  if (gallery.length > 0) {
    img = gallery.map((image, index) => {
      return (
        <div
          key={index}
          className="eachimage"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      );
    });
  }

  useEffect(() => {
    if (img && loading) {
      doneLoading();
    }
    return () => {
    }
  }, [doneLoading, img, loading])

  return <div className="gallery">{img}</div>;
}
