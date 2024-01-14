// api.ts

import axios, { AxiosResponse } from 'axios';
import { ApiResponse } from '../types/interfaces';

const BASE_URL = 'https://dummyjson.com'; 



const makeGetRequest = async <T = ApiResponse>(
  endpoint: string,
  params?: Record<string, any>
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.get(`${BASE_URL}/${endpoint}`, { params });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error; 
  }
};

export default makeGetRequest;
