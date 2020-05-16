import axios, { AxiosResponse, AxiosError } from 'axios';
import { history } from '../App';
import { toast } from 'react-toastify';

export const useAxiosInterceptor = () => {
  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      const { status } = response;

      if (status >= 200 && typeof response.data === 'string') {
        toast.success(response.data);
      }

      return response;
    },
    (error: AxiosError) => {
      const response = error.response;

      if (response && response.status === 401) {
        toast.error("Session lost. We're sorry, You have to login again.");
        history.push('/logout');
      }

      if (response && response.status === 400) toast.error(error.response!.data);

      if (response && response.status === 403) {
        toast.error('Login is required');
        history.push('/logout');
      }

      if (response && response.status >= 400) {
        toast.error(error.response!.data);
        history.push('/logout');
      }

      if (response && response.status >= 500) toast.error('Something went wrong');
    },
  );
};
