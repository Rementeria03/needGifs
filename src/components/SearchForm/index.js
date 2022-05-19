import React, { useState } from "react";

function SearchForm ({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //navegar a la URL nueva
    onSubmit({ keyword });
  }

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={keyword} type="text" />
      <button type="submit">buscar</button>
    </form>
  );
};

export default React.memo(SearchForm)
