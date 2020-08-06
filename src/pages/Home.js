import React, { useContext } from "react";
import { DataContext } from "../context";

// Components
import SearchBar from "../components/SearchBar";
import Gallery from "../components/Gallery";
import Loading from "../components/Loading";

export default function Home() {
  const context = useContext(DataContext);
  const { loading } = context;

  let body;
  if (loading) {
    body = <Loading />;
  } else {
    body = <Gallery />;
  }

  return (
    <div>
      <SearchBar />
      {body}
    </div>
  );
}
