import axios from 'axios';
import { SicknessProps } from '../types/components/SicknessProps';
import { userId } from './auth';

export const getUserSicknesses = (): Promise<SicknessProps[]> =>
  axios
    .get(`http://localhost:5001/api/v1.0/users/${userId}/sicknesses`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const getAllSicknesses = (): Promise<SicknessProps[]> =>
  axios
    .get(`http://localhost:5001/api/v1.0/sicknesses`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const createNewSickness = async (newSickness: SicknessProps) => {
  await axios.post(`http://localhost:5001/api/v1.0/sicknesses`, newSickness);
};

export const deleteUserSickness = async (sicknessId: string) => {
  await axios.delete(
    `http://localhost:5001/api/v1.0/users/${userId}/sicknesses/${sicknessId}`,
  );
};

export const addSicknessToUser = async (sicknessId: string) => {
  await axios.post(
    `http://localhost:5001/api/v1.0/users/${userId}/sicknesses/${sicknessId}`,
  );
};
