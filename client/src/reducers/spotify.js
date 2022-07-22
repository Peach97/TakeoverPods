import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  token: null,
  playlist: null,
  show: null,
  playing: false,
  item: null,
  devices: null,
  premiumToken: null,
  auth: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PREMIUM_TOKEN":
      return { ...state, premiumToken: action.premiumToken };
    case "SET_PLAYLIST":
      return { ...state, playlist: action.playlist };
    case "SET_SPOTIFY":
      return { ...state, spotify: action.spotify };
    case "SET_PLAYING":
      return { ...state, playing: action.playing };
    case "SET_ITEM":
      return { ...state, item: action.item };
    case "SET_DEVICES":
      return { ...state, devices: action.devices };
    case "SET_AUTH":
      return { ...state, authUser: action.authUser };
    default:
      return state;
  }
};

export default reducer;
