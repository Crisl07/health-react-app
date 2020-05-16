import axios from 'axios';
import { history } from '../App';
import { toast } from 'react-toastify';

export const useAxiosInterceptor = () => {
  axios.interceptors.response.use(
    (response: any) => {
      const { status } = response;

      if (status >= 200 && typeof response.data === 'string') {
        toast.success(response.data);
      }

      return response;
    },
    (error: any) => {
      const { status } = error.response;

      if (status === 401) {
        toast.error("Session lost. We're sorry, You have to login again.");
        history.push('/logout');
      }

      if (status === 400) {
        toast.error(error.response.data);
      }

      if (status === 403) {
        toast.error('Login is required');
        history.push('/logout');
      }

      if (status >= 400) {
        toast.error(error.response.data);
        history.push('/logout');
      }

      if (status >= 500) toast.error('Something went wrong');
    },
  );
};
