import { IsLoggedInType } from "../redux/actions";

export type AppProps = {
  isLoggedIn: boolean;
  logIn: (isLoggedIn: IsLoggedInType) => void
}