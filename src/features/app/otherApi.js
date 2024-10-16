import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = "https://nga-states-lga.onrender.com";

const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => headers, // Simplified arrow function
});

export const otherApi = createApi({
    reducerPath: 'otherApi',
    baseQuery, // Using property shorthand here
    endpoints: (builder) => ({
        getAllStates: builder.query({
            query: () => ({
                url: '/fetch',
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useGetAllStatesQuery,
} = otherApi;
