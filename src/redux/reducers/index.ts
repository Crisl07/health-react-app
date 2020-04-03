import { ActionTypes } from "../actions/actionTypes";
import { isLoggedInAction } from "../actions";

const initialState = {
  isLoggedIn: false
};

export type RootState = {
  isLoggedIn: boolean;
};

export function rootReducer(
  state: RootState  = initialState,
  action: isLoggedInAction
) : RootState {
  switch (action.type) {
    case ActionTypes.IS_LOGGED_IN:
      return { isLoggedIn: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
