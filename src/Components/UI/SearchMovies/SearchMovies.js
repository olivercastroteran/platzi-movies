import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../../Store/Actions/moviesActions';
import './SearchMovies.scss';
import Spinner from '../Spinner/Spinner';
import { search } from './search';

const SearchMovies = () => {
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('en');
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  const searchMovies = async (e) => {
    setIsReady(true);
    if (input.length < 2) return;

    e.preventDefault();
    const api_key = 'secret';
    const query = input;

    try {
      const data = await search(api_key, language, query);
      //console.log(data);
      dispatch(addMovies(data.results));
      setInput('');
      setIsReady(false);
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
          className={
            input.length > 1 ? 'search__input' : 'search__input invalid'
          }
          name="query"
          placeholder="i.e. Avengers (2 letters min)"
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
      {isReady ? <Spinner /> : null}
    </div>
  );
};

export default SearchMovies;
