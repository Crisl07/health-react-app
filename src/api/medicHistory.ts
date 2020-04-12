import axios from "axios";
import { userId } from "./auth";
import { MedicHistoryProps } from "../types/components/TypeMedicHistoryProps";

export const getUserMedicHistories = (): Promise<MedicHistoryProps[]> =>
  axios.get(`http://localhost:5001/api/v1.0/users/${userId}/medicHistories`)
    .then(response => response.data)
    .catch(error => console.log(error))