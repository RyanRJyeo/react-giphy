import React, { useContext } from "react";
import { DataContext } from "../context";

// Components
import SearchBar from "../components/SearchBar";
import Gallery from "../components/Gallery";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Home() {
  const context = useContext(DataContext);
  const { loading, error } = context;

  let body = <Gallery />;
  if (loading) {
    body = <Loading />;
  }

  let err;
  if(error){
    err = <Error />
  }

  return (
    <div>
      <SearchBar />
      {body}
      {err}
    </div>
  );
}
