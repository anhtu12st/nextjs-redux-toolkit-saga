import Axios from './Axios';

export const loginWithGoogle = async (values) => {
  const url = `/auth/google`;
  const { data } = await Axios.post(url, values);
  return data;
};