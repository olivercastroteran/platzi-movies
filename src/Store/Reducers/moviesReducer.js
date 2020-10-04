const initState = {
  moviesFetch: [],
  favMovies: [],
};

export const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return { ...state, moviesFetch: action.payload };
    case 'ADD_TO_FAVORITES':
      let newFavs = [...state.favMovies, action.payload];
      return {
        ...state,
        favMovies: newFavs,
      };
    case 'REMOVE_FROM_FAVORITES':
      let newFavMovies = state.favMovies.filter(
        (movie) => movie.id !== action.payload
      );
      return {
        ...state,
        favMovies: newFavMovies,
      };
    default:
      return state;
  }
};
