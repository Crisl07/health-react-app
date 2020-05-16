import { LogInProps } from './TypeLoginProps';
import { ActionTypes } from './actionTypes';

export type logInActionProps = {
  type: ActionTypes.LOG_IN;
  payload: LogInProps;
};
