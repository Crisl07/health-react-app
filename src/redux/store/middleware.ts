import { logInActionProps } from '../../types/redux/LoginActionProps';
import { ActionTypes } from '../../types/redux/actionTypes';
import { setToken } from '../../api/auth';

export const saveToken = (store: any) => (next: any) => (
  action: logInActionProps,
) => {
  if (action.type === ActionTypes.LOG_IN) {
    setToken(action.payload.token, action.payload.userId);
  }
  return next(action);
};
