import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASEURLAPI } from 'src/utils/api';

import { logOut } from '../slide/authSlice';


const baseQuery = fetchBaseQuery({
  baseUrl: BASEURLAPI,
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem('accessToken');

    // const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithAuthCheck = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // Token has expired or is invalid
    api.dispatch(logOut());
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithAuthCheck,
  endpoints: (builder) => ({}),
});