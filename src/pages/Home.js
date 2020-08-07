import React, { useContext } from "react";
import { DataContext } from "../context";

// Components
import SearchBar from "../components/SearchBar";
import Gallery from "../components/Gallery";
import Loading from "../components/Loading";
import Error from "../components/Error";
import FetchMore from "../components/FetchMore";

export default function Home() {
  const context = useContext(DataContext);
  const { loading, error, gallery } = context;

  let body = <Gallery />;
  if (loading) body = <Loading />;

  let err;
  if(error) err = <Error />

  let fetchMore;
  if(gallery.length > 0 && !loading) fetchMore = <FetchMore />

  return (
    <div>
      <SearchBar />
      {body}
      {err}
      {fetchMore}
    </div>
  );
}
