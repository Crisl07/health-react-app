import { ActionTypes } from '../../types/redux/actionTypes';
import { logOutActionProps } from '../../types/redux/TypeLogOutAction';
import { logInActionProps } from '../../types/redux/TypeLoginActionProps';
import { RootState } from '../../types/redux/TypeRootState';

const initialState = {
  isLoggedIn: false,
  token: '',
  userId: 0,
  avatar: '',
};

export function rootReducer(
  state: RootState = initialState,
  action: logInActionProps | logOutActionProps,
): RootState {
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return { ...state, ...action.payload };
    case ActionTypes.LOG_OUT:
      return { ...initialState };
    default:
      return state;
  }
}

export default rootReducer;
