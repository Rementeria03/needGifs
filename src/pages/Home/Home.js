import { useState } from "react";
import { useLocation } from "wouter";
import { ListOfGifs } from "components/ListoOfGifs/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import LazyTranding from "components/TrendingSearches/index";
import "./Home.css";

export const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [path, newLocation] = useLocation();
  const gifs = useGifs();

  function handleChange(evt) {
    setKeyword(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    //navegar a la URL nueva
    newLocation(`/gifs/${keyword}`);
  }

  return (
    <div className="home-container">
      <h1>I need gifs</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={keyword} type="text" />
        <button type="submit">buscar</button>
      </form>
      <h2 className="home-title">Ultima Busqueda</h2>
      <div className="gifs-home">
        <ListOfGifs gifs={gifs}/>
        <LazyTranding />
      </div>
    </div>
  );
};
