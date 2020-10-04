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
    default:
      return state;
  }
};
