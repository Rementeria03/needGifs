import React from "react";
import Gif from "../Gif/Gif";
import "./ListOfGifs.css";

export const ListOfGifs = ({ gifs }) => {
  return (
    <div className="gifs-container">
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  );
};
