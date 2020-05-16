import { ActionTypes } from '../../types/redux/actionTypes';
import { signIn } from '../../api/auth';
import { Dispatch } from 'react';
import { UserProps } from '../../types/components/UserProps';
import { logInActionProps } from '../../types/redux/LoginActionProps';

export const logIn = (user: UserProps) => {
  return async (dispatch: Dispatch<logInActionProps>) => {
    try {
      const response = await signIn(user);
      const authProps = {
        isLoggedIn: true,
        token: response.data.token,
        userId: response.data.userId,
        avatar: response.data.avatar,
      };
      dispatch({
        type: ActionTypes.LOG_IN,
        payload: authProps,
      });
    } catch (error) { }
  };
};

export const logOut = () => ({
  type: ActionTypes.LOG_OUT,
});
