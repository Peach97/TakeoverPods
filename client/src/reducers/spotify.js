import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  token: null,
  playlist: null,
  show: null,
  playing: false,
  item: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLIST":
      return { ...state, playlist: action.playlist };
    case "SET_SPOTIFY":
      return { ...state, spotify: action.spotify };
    default:
      return state;
  }
};

export default reducer;
