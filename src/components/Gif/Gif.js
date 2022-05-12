import React from "react";
import { Link } from "wouter";
import "./Gif.css"

export default function Gif({ title, url, id }) {
  return (
    <Link to={`/gif/${id}`}>
      <figure>
        <img alt={title} src={url} />
        <figcaption>{title}</figcaption>
      </figure>
    </Link>
  );
}
