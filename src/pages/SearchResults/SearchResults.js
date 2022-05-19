import React, { useCallback, useEffect, useRef } from "react";
import { ListOfGifs } from "components/ListOfGifs/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import "./SearchResults.css";
import { useNearScreen } from "hooks/useNearScreen";
import debounce from "just-debounce-it";

export const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({ externalRef, once: false });

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage((prevPage) => prevPage + 1), 1000
  ), [setPage]);

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage();
    },
    [isNearScreen, debounceHandleNextPage]
  );

  return (
    <div className="main">
      <h3>{decodeURI(keyword)}</h3>
      <ListOfGifs gifs={gifs} />
      <div id="visor" ref={externalRef}></div>
    </div>
  );
};
