import { LoginFormInputs, LoginResponse } from '@/Interface/auth';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginFormInputs>({
      query: (credentials) => ({
        url: 'auth/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

// Export the `useLoginMutation` hook for components
export const { useLoginMutation } = authApi;
