import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import customBaseQuery from '@/utils/customBaseQuery';

export const dashboardService = createApi({
  reducerPath: 'dashboardService',
  baseQuery: customBaseQuery, 
  endpoints: (builder) => ({
    

 
    fetchAllEmployees: builder.query({
        query: () => {
          const url = '/employees/all';
          return url; 
        },
         keepUnusedDataFor: 5000, 
      }), 


      fetchEmployeeDetails: builder.query({
        query: (id) => {
          const url = `/employees/${id}`;
          return url; 
        },
         keepUnusedDataFor: 5000, 
      }), 
   
  }),
});

export const { useFetchAllEmployeesQuery, useFetchEmployeeDetailsQuery } = dashboardService;
