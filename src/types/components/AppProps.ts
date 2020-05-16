import { UserProps } from './UserProps';
export type AppProps = {
  isLoggedIn: boolean;
  logIn: (user: UserProps) => void;
};
