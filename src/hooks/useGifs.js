import { useEffect, useContext } from "react";
import { GifsContext } from "../context/GifsContext";
import getGifs from "../services/getGifs";

export function useGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext);

  //si obtenemos una keyword usamos la ultima utilizada desde el localStorage
  const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "rick";

  useEffect(
    function () {
      getGifs({ keyword: keywordToUse }).then((gifs) => {
        //guardamos la ultima keyword en el localStorage
        localStorage.setItem("lastKeyword", keyword);
        setGifs(gifs);
      });
    },
    [keyword]
  );
  return gifs;
}
