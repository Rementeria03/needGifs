import React from "react";
import { Link } from "wouter";
import "./Category.css"

export const Category = ({ name, options = [] }) => {
  return (
    <aside className="Category">
      <h3>{name}</h3>
      <ul>
        {options.map((singleOption) => (
          <li key={singleOption}>
            <Link to={`/gifs/${singleOption}`}>{singleOption}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
