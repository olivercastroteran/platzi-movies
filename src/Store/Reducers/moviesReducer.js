const initState = {
  moviesFetch: [],
};

export const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return { moviesFetch: action.payload };
    default:
      return state;
  }
};
