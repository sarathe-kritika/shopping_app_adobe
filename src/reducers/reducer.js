const isState = {
  selectedItem: ["Test"],
};
const reducer = (state = [], action) => {
  if (action.type === "CHANGE_ITEM") {
    return [...state, action.payload];
  }

  if (action.type === "REMOVE_ITEM") {
    //return [...state, action.payload];
    for (let s of state) {
      if (s.name === action.payload.name) {
        let indexpp = state.indexOf(s);
        state.splice(indexpp, 1);
      }
    }
    return [...state];
  }
  return state;
};

export default reducer;
