import axios from 'axios';
import { DEFAULT_BASE_URL } from 'src/constants/endpoints';
import {getAuthorizationToken} from 'src/utils/authorization'

const axiosInstance = ({ baseURL = null, method = 'get', headers = {} } = {}) => {
  return axios.create({
    baseURL: baseURL || DEFAULT_BASE_URL,
    method,
    headers: {
      Authorization: getAuthorizationToken(),
      ...headers,
    },
  });
};

const axiosPOSTRequest = async ({ url = '', data = {}, headers = {} }) => {
  const config = {
    headers,
  };

  const response = await axiosInstance({ method: 'POST' }).post(url, data, config);

  return response;
};

const axiosGETRequest = async ({ url = '', config = {}, headers }) => {
  const response = await axiosInstance({ method: 'GET', headers }).get(url, config);

  return response;
};

export { axiosInstance, axiosPOSTRequest, axiosGETRequest };
