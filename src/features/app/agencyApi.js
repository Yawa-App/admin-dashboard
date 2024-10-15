import { apiSlice } from "./apiSlice";


export const agencyApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createagency: builder.mutation({
            query: (credentials) => ({
                url: '/api/admin/agency/invite',
                method: 'POST',
                body: credentials,
            }),
        }),
        getAllAgency: builder.query({
            query: () => ({
                url: '/api/admin/agency/invite',
                method: 'GET',
                params: { page: 1, limit: 50 },
            }),
        }),
    }),
});

export const { useCreateagencyMutation, useGetAllAgencyQuery } = agencyApi;