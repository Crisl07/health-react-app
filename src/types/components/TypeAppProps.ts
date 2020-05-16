import { UserProps } from './TypeUserProps';
export type AppProps = {
  isLoggedIn: boolean;
  logIn: (user: UserProps) => void;
};
