

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseUrl = "https://nga-states-lga.onrender.com"

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {


        return headers;
    },
});

export const otherApi = createApi({
    reducerPath: 'otherApi',
    baseQuery: baseQuery,
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
