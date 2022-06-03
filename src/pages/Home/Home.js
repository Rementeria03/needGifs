import React, { useCallback } from "react";
import { useLocation } from "wouter";
import { ListOfGifs } from "components/ListOfGifs/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import LazyTranding from "components/TrendingSearches/index";
import "./Home.css";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

export const Home = () => {
  const [path, newLocation] = useLocation();
  const { gifs } = useGifs();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      //navegar a la URL nueva
      newLocation(`/gifs/${keyword}`);
    },
    [newLocation]
  );

  return (
    <>
      <Helmet>
        <title>Home | NeedGifs</title>
        <meta name="description" content="NeedGifs app"/>
      </Helmet>
      <div className="home-container">
        <SearchForm onSubmit={handleSubmit} />
        <h2 className="home-title">Última Búsqueda</h2>
        <div className="gifs-home">
          <ListOfGifs gifs={gifs} />
          <LazyTranding />
        </div>
      </div>
    </>
  );
};
