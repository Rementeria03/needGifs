import { useEffect, useContext, useState } from "react";
import { GifsContext } from "../context/GifsContext";
import getGifs from "../services/getGifs";

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null}) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);

  //obtenemos la keyword o usamos la ultima en localStorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || "random"

  useEffect(
    function () {
      getGifs({ keyword: keywordToUse})
        .then((gifs) => {
          setGifs(gifs);
          //guardamos la ultima keyword en el localStorage
          localStorage.setItem("lastKeyword", keyword);
        });
    },
    [keyword, setGifs, keywordToUse]
  );

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;
      getGifs({ keyword: keywordToUse, page}).then((nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
      });
    },
    [page, setGifs, keywordToUse]
  );

  return { gifs, setPage, page };
}
