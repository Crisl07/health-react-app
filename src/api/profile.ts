import axios from 'axios';
import { UserProps } from '../types/components/UserProps';
import { userId } from './auth';

export const getUserInfo = (): Promise<UserProps> =>
  axios
    .get(`http://localhost:5001/api/v1.0/users/${userId}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const updateUser = async (newUserInfo: UserProps) =>
  await axios.put(
    `http://localhost:5001/api/v1.0/users/${userId}`,
    newUserInfo,
  );
