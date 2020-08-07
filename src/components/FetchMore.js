import React, { useContext } from "react";
import { DataContext } from "../context";

export default function FetchMore() {
  const context = useContext(DataContext);
  const { getMoreGallery } = context;

  return (
    <div className="fetch-holder">
      <button className="fetch" onClick={getMoreGallery}>Fetch More!</button>
    </div>
  );
}
