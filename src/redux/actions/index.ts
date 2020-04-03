import { ActionTypes } from "./actionTypes";

export type IsLoggedInType = boolean;

export type isLoggedInAction = {
  type: ActionTypes.IS_LOGGED_IN;
  payload: IsLoggedInType;
}

export function logIn(payload: IsLoggedInType) : isLoggedInAction {
  return {
    type: ActionTypes.IS_LOGGED_IN,
    payload,
  };
}
