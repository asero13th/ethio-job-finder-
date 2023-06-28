import {  configureStore } from '@reduxjs/toolkit';
import allJobsReducer from "./reducer/allJobsReducer"


export const store = configureStore({
  reducer: {
    jobs: allJobsReducer,

  },
});
 
