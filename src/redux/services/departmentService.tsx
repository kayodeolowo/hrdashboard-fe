import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import customBaseQuery from '@/utils/customBaseQuery';

export const departmentService = createApi({
  reducerPath: 'departmentService',
  baseQuery: customBaseQuery, 
  endpoints: (builder) => ({
    

 
    fetchAllDepartments: builder.query({
        query: () => {
          const url = '/department/all';
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

export const { useFetchAllDepartmentsQuery} = departmentService;
