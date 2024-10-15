import { apiSlice } from "./apiSlice";


export const stateApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createstate: builder.mutation({
            query: (credentials) => ({
                url: '/api/admin/state/invite',
                method: 'POST',
                body: credentials,
            }),
        }),
        getAllStates: builder.query({
            query: () => ({
                url: '/api/admin/state/invite',
                method: 'GET',
                params: { page: 1, limit: 50 },
            }),
        }),
    }),
});

export const { useCreatestateMutation, useGetAllStatesQuery } = stateApi;