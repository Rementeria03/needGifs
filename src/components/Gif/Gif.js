import React from "react";
import { Link } from "wouter";
import "./Gif.css"

function Gif({ title, url, id }) {
  return (
    <div className="gif-container">
      <Link className="gif-link" to={`/gif/${id}`}>
        <h4>{title}</h4>
        <img alt={title} src={url} />
      </Link>
    </div>
  );
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})