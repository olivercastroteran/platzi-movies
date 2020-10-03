import React, { useState } from 'react';
import './SearchMovies.scss';

const SearchMovies = () => {
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('en');

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log(input);
    const api_key = '0559217f931948d53686513322d626c7';
    const query = input;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=${language}-US&query=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setInput('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={searchMovies}>
        <label htmlFor="query" className="search__label">
          Movie Name:
        </label>
        <input
          autoComplete="off"
          type="text"
          className="search__input"
          name="query"
          placeholder="i.e. Interstellar"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="search__language">
          <button
            className={
              language === 'en'
                ? 'search__language--opt search__language--opt-1 selected'
                : 'search__language--opt search__language--opt-1'
            }
            type="button"
            onClick={(e) => setLanguage('en')}
          >
            En
          </button>
          <button
            className={
              language === 'es'
                ? 'search__language--opt search__language--opt-2 selected'
                : 'search__language--opt search__language--opt-2'
            }
            type="button"
            onClick={(e) => setLanguage('es')}
          >
            Es
          </button>
        </div>
        <button className="search__btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;
