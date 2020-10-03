import { combineReducers } from 'redux';
import { sideBarReducer } from './sidebarReducer';
import { moviesReducer } from './moviesReducer';

const rootReducer = combineReducers({
  navOpen: sideBarReducer,
  movies: moviesReducer,
});

export default rootReducer;
