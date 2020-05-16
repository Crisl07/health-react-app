import { ActionTypes } from './actionTypes';
import { LogInProps } from './TypeLoginProps';

export type logOutActionProps = {
  type: ActionTypes.LOG_OUT;
  payload: LogInProps;
};
