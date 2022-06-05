import React, { useCallback, useEffect, useRef } from "react";
import { ListOfGifs } from "components/ListOfGifs/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import { useNearScreen } from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import Helmet from "react-helmet";
import SearchForm from "components/SearchForm";
import "./SearchResults.css";

export const SearchResults = ({ params }) => {
  const { keyword, rating = 'g' } = params;
  const { gifs, setPage } = useGifs({ keyword, rating });

  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({ externalRef, once: false });

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : "";

  const debounceHandleNextPage = useCallback(
    debounce(function () {
      setPage((prevPage) => prevPage + 1);
    }, 1000),
    [setPage]
  );

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage();
    },
    [isNearScreen, debounceHandleNextPage]
  );

  return (
    <>
      <Helmet>
        <title>{`${title} | NeedGifs`}</title>
        <meta name="description" content={`Results of ${keyword}`}/>
      </Helmet>
      <SearchForm initialRating={rating} initialKeyword={keyword} />
      <div className="main">
        <h2>{decodeURI(keyword)}</h2>
        <ListOfGifs gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </div>
    </>
  );
};
