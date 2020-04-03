import axios from "axios";
import { SicknessProps } from "../models/TypeSicknessProps";

export const getSicknesses = (): Promise<SicknessProps[]> =>
  axios.get("/sicknesses.json").then(response => response.data);