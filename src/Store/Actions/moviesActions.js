export const addMovies = (movies) => {
  return {
    type: 'ADD_MOVIES',
    payload: movies,
  };
};

export const addToFavorites = (movie) => {
  return {
    type: 'ADD_TO_FAVORITES',
    payload: movie,
  };
};

export const removeFromFavorites = (id) => {
  return {
    type: 'REMOVE_FROM_FAVORITES',
    payload: id,
  };
};
