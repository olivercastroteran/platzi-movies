const initState = {
  movies: [],
};

export const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return state;
    case 'REMOVE_MOVIE':
      return state;
    default:
      return state;
  }
};
