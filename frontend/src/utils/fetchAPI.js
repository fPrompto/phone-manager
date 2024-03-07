import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const BACKEND_URI = process.env.BACKEND_URI

export async function getAPI(route) {
  const URL = `${BACKEND_URI}${route}`;
  const response = await axios({
    method: 'GET',
    url: URL,
  });
  const axiosData = await response.data;
  console.log('get data =>', axiosData);
  return axiosData;
}

export async function postAPI(route, data) {
  const URL = `${BACKEND_URI}${route}`;
  const response = await axios({
    method: 'POST',
    url: URL,
    data,
  });
  const axiosData = await response.data;
  console.log('post data =>', axiosData);
  return axiosData;
}

export async function putAPI(route, data) {
  const URL = `${BACKEND_URI}${route}`;
  console.log('PUT URL =>', URL);
  const response = await axios({
    method: 'PUT',
    url: URL,
    data,
  });
  const axiosData = await response.data;
  console.log('put data =>', axiosData);
  return axiosData;
}
