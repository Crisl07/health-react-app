import axios from "axios";
import { UserProps } from "../types/components/TypeUserProps";
import { history } from "../App";

let userId: number;

const signUp = async (newUser: UserProps) =>
  await axios.post("http://localhost:5001/api/v1.0/signup", newUser);

const signIn = async (user: UserProps) =>
  await axios.post("http://localhost:5001/api/v1.0/login", user);

const setToken = (token: string, newUserId: number) => {
  userId = newUserId;

  axios.defaults.headers.common['Authorization'] =
    `Bearer ${token}`;
  history.push("/sicknesses")
}

export {
  signUp,
  signIn,
  setToken,
  userId
}