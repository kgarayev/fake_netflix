import { initialState } from "./initialState";
import {
  SET_FAVOURITE_MOVIE,
  SET_GENRES,
  SET_MOVIES,
  SET_SCREEN_MODE,
} from "./types";
import { getState, storeState } from "../storage";

const dataFromDisk = getState("redux");

//create the logic that manipulates the state
export function reducer(state = dataFromDisk || initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case SET_GENRES: {
      const result = { ...state, genres: payload };

      storeState("redux", result);

      return result;
    }

    case SET_MOVIES: {
      const result = {
        ...state,
        movies: { ...state.movies, [payload.id]: payload.movies },
        lastClickedId: payload.id,
        screenMode: 0,
      };

      storeState("redux", result);

      return result;
    }

    case SET_FAVOURITE_MOVIE: {
      const indexOf = state.favouriteMovies.indexOf(payload);

      if (indexOf === -1) {
        const result = {
          ...state,
          favouriteMovies: [...state.favouriteMovies, payload],
        };

        storeState("redux", result);

        return result;
      }

      const favouriteMovies = [...state.favouriteMovies];
      favouriteMovies.splice(indexOf, 1);
      const result = { ...state, favouriteMovies };

      storeState("redux", result);

      return result;
    }

    case SET_SCREEN_MODE: {
      return { ...state, screenMode: payload };
    }

    default:
      console.log("Reducer started or INVALID reducer type, probably a typo");
      return state;
  }
}
