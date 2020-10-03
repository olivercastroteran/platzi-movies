const initState = {
  isOpen: true,
};

export const sideBarReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return { isOpen: action.payload };
    default:
      return state;
  }
};
