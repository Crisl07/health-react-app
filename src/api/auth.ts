import axios from 'axios';
import { UserProps } from '../types/components/UserProps';
import { NewPasswordProps } from '../types/components/NewPasswordProps';
import { history } from '../App';

let userId: number;

const signUp = async (newUser: UserProps) =>
  await axios.post('http://localhost:5001/api/v1.0/signup', newUser);

const signIn = async (user: UserProps) =>
  await axios.post('http://localhost:5001/api/v1.0/login', user);

const forgetPassword = async (email: string) => {
  await axios.post(
    'http://localhost:5001/api/v1.0/auth/forgot_password',
    { email },
  );
};

const resetPassword = async (newPasswordProps: NewPasswordProps) => {
  await axios.post(
    'http://localhost:5001/api/v1.0/auth/reset_password',
    newPasswordProps,
  );
};

const setToken = (token: string, newUserId: number) => {
  userId = newUserId;

  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  history.push('/sicknesses');
};

export { signUp, signIn, forgetPassword, resetPassword, setToken, userId };
