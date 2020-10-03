import React from 'react';
import './SearchMovies.scss';

const SearchMovies = () => {
  return (
    <div className="search">
      <form className="search__form">
        <label htmlFor="query" className="search__label">
          Movie Name:
        </label>
        <input
          autoComplete="off"
          type="text"
          className="search__input"
          name="query"
          placeholder="i.e. Interstellar"
        />
        <button className="search__btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;
