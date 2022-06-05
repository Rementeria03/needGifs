import React from "react";
import { ListOfGifs } from "components/ListOfGifs/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import LazyTranding from "components/TrendingSearches/index";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";
import "./Home.css";

export const Home = () => {
  const { gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | NeedGifs</title>
        <meta name="description" content="NeedGifs app"/>
      </Helmet>
      <SearchForm />
      <div className="home-container">
        <h2 className="home-title">Última Búsqueda</h2>
        <div className="gifs-home">
          <ListOfGifs gifs={gifs} />
          <LazyTranding />
        </div>
      </div>
    </>
  );
};
