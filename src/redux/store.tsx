import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './services/loginService';
import { dashboardService } from './services/dashboardService';
import { departmentService } from './services/departmentService';
// import { loginSlice } from './apiSlice/loginSlice';



export const store = configureStore({
  reducer: {
     [authApi.reducerPath]: authApi.reducer,
     [dashboardService.reducerPath] : dashboardService.reducer,
     [departmentService.reducerPath] : departmentService.reducer
 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat( authApi.middleware, dashboardService.middleware, departmentService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
