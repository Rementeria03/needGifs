import React, { useReducer, useState } from "react";
import { useLocation } from "wouter";
import "./searchForm.css";

const RATINGS = ["g", "pg", "pg-13", "r"];

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
};

const ACTIONS_REDUCERS = {
  [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload,
  }),
  [ACTIONS.UPDATE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload,
  }),
};

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

function SearchForm({ initialKeyword = "", initialRating }) {
  const [_, newLocation] = useLocation();

  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
  });

  const { keyword, rating } = state;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //navegar a la URL nueva
    newLocation(`/gifs/${keyword}/${rating}`);
  };

  const handleChangeKeyword = (evt) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: evt.target.value });
  };

  const handleChangeRating = (evt) => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: evt.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Buscar</button>
      <input
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
