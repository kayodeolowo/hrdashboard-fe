// api/customBaseQuery.ts

import { fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { handleSessionExpiration } from './handleSessionExpiration';

// Define your base query
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('hrToken');
    const apiKey = process.env.NEXT_PUBLIC_APP_ID; // Fetch the API key from .env
    
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    if (apiKey) {
      headers.set('X-API-KEY', apiKey); // Set the X-API-KEY header
    }
    
    return headers;
  },
});

// Custom base query with proper typing to handle session expiration
const customBaseQuery: BaseQueryFn<
  string | FetchArgs,  // Args can be either a string or a FetchArgs object
  unknown,             // Result type (unknown since it's generic)
  FetchBaseQueryError  // Error type (from RTK Query)
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  // Check for errors indicating session expiration
  if (result.error) {
    const errorData = result.error.data;

    if (
      typeof errorData === 'object' &&
      errorData !== null &&
      'status' in errorData &&
      errorData.status === "error" &&
      'message' in errorData &&
      errorData.message === "Unauthorized access"
    ) {
      // Call your session expiration handler if "Unauthorized access" is found
      handleSessionExpiration(errorData.message);
    }
  }

  return result;
};

export default customBaseQuery;
