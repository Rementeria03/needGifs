import React from "react";
import useSingleGif from "hooks/useSingleGif";
import Gif from "components/Gif/Gif";
import { Helmet } from "react-helmet"

export const Detail = ({ params }) => {
  const { gif } = useSingleGif({ id: params.id });
  const title = gif ? gif.title : ''

  return (
    <>
      <Helmet>
        <title>{title} | NeedGifs</title>
        <meta name="description" content={`description of ${title}`}/>
      </Helmet>
      <div>
        <Gif {...gif}/>
      </div>
    </>
  );
};
