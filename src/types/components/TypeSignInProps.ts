import { UserProps } from "./TypeUserProps";

export type SignInProps = {
  isLoggedIn: boolean;
  changeIsLoggedIn: (user: UserProps) => void;
}