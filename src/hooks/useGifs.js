import { useEffect, useContext, useState } from "react";
import { GifsContext } from "../context/GifsContext";
import getGifs from "../services/getGifs";

const INITIAL_PAGE = 0;

export function useGifs({ keyword, rating } = { keyword: null}) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  //obtenemos la keyword o usamos la ultima en localStorage
  const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random"

  useEffect(
    function () {
      getGifs({ keyword: keywordToUse, rating})
        .then((gifs) => {
          setGifs(gifs);
          //guardamos la ultima keyword en el localStorage
          if( keyword !== null ) localStorage.setItem("lastKeyword", keyword);
        });
    },
    [keyword, setGifs, keywordToUse, rating]
  );

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;
      getGifs({ keyword: keywordToUse, page, rating}).then((nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
      });
    },
    [page, setGifs, keywordToUse, rating]
  );

  return { gifs, setPage, page };
}
