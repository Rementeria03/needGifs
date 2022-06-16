import React from "react";
import { Link } from "wouter";
import "./Gif.css";
import { RiHeart2Fill } from "react-icons/ri"

function Gif({ title, url, id }) {
  return (
    <Link className="gif-link" to={`/gif/${id}`}>
      <div className="gif-container">
        <div className="fav-heart-c">
          <RiHeart2Fill />
        </div>
        <h4>{title}</h4>
        <img alt={title} src={url} />
      </div>
    </Link>
  );
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
