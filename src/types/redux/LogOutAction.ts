import { ActionTypes } from './actionTypes';
import { LogInProps } from './LoginProps';

export type logOutActionProps = {
  type: ActionTypes.LOG_OUT;
  payload: LogInProps;
};
