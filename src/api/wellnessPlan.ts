import axios from "axios";
import { WellnessPlanProps } from "../types/components/TypeWellnessPlan";
import { userId } from "./auth";

export const getSicknessWellnessActivities = (id: string): Promise<WellnessPlanProps[]> =>
  axios.get(`http://localhost:5001/api/v1.0/sicknesses/${id}/wellnessActivities`)
    .then((response) => response.data)
    .catch(error => console.log(error))

export const getUserWellnessActivities = (): Promise<WellnessPlanProps[]> =>
  axios.get(`http://localhost:5001/api/v1.0/users/${userId}/wellnessActivities`)
    .then((response) => response.data)
    .catch(error => console.log(error))

export const deleteUserWellnessActivity = (wellnessActivityId: string) =>
  axios.delete(`http://localhost:5001/api/v1.0//users/${userId}/wellnessActivities/${wellnessActivityId}`)
    .then((response) => response.data)
    .catch(error => console.log(error))

export const getFavoriteWellnessActivitiesBySickness = (sicknessId: string): Promise<WellnessPlanProps[]> =>
  axios.get(`http://localhost:5001/api/v1.0/users/${userId}/sicknesses/${sicknessId}/favoriteWellnessActivities`)
    .then((response) => response.data)
    .catch(error => console.log(error))

export const addUserWellnessActivity = (wellnessActivityId: string): Promise<WellnessPlanProps[]> =>
  axios.post(`http://localhost:5001/api/v1.0/users/${userId}/wellnessActivities/${wellnessActivityId}`)
    .then((response) => response.data)
    .catch(error => console.log(error))
