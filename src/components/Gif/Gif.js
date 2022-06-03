import React from "react";
import { Link } from "wouter";
import "./Gif.css";

function Gif({ title, url, id }) {
  return (
    <Link className="gif-link" to={`/gif/${id}`}>
      <div className="gif-container">
        <h4>{title}</h4>
        <img alt={title} src={url} />
      </div>
    </Link>
  );
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
