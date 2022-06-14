import useForm from "components/SearchForm/useForm";
import React from "react";
import { useLocation } from "wouter";
import "./searchForm.css";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchForm({ initialKeyword = "", initialRating }) {
  const [_, newLocation] = useLocation();
  const { keyword, rating, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //navegar a la URL nueva
    newLocation(`/gifs/${keyword}/${rating}`);
  };

  const handleChangeKeyword = (evt) => {
    updateKeyword(evt.target.value);
  };

  const handleChangeRating = (evt) => {
    updateRating(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className="form-button">Buscar</button>
      <input
      className="form-input"
        placeholder="Search a GIF here"
        onChange={handleChangeKeyword}
        value={keyword}
        type="text"
      />
      <select onChange={handleChangeRating} value={rating}>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
  );
}

export default React.memo(SearchForm);
