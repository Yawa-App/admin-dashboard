import { apiSlice } from "./apiSlice";


export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/admin/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getcategories: builder.query({
      query: () => ({
        url: '/api/admin/category',
        method: 'GET',

      }),
    }),
  }),
});

export const { useLoginMutation, useGetcategoriesQuery } = authApiSlice;