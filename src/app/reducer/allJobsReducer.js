import { createSlice } from "@reduxjs/toolkit";
   
  export const jobSlice = createSlice({
    name: "jobs",
    initialState: {value: []},
    reducers: {
      setJob: (state, action) =>{
          state.value = action.payload
      },
      addJob: (state, action) => {
          state.value.push(action.payload) 
      },
      deleteJob: (state, action) =>{
        state.value = state.value.filter((user) => user.id !== action.payload.id)
      },

      updateJob: (state, action) =>{
          state.value.map((job) => {
            if(job.id === action.payload.id){

              job.title = action.payload.title
              job.applicant_needed = action.payload.applicant_needed
              job.campany_name = action.payload.campany_name
              job.company_logo  = action.payload.company_logo
              job.initial_salary = action.payload.initialState
              job.tag = action.payload.tag
              job.job_type = action.payload.job_type
              job.location = action.payload.location
              
            }
          })
    },
  },
  });

  export const {addJob, deleteJob, updateJob, setJob} = jobSlice.actions;
  export default jobSlice.reducer;