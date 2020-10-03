export const toggleNav = (isOpen) => {
  return {
    type: 'TOGGLE_SIDEBAR',
    payload: isOpen,
  };
};
