import { actionType } from "../constants/action-type";

const initialState = {};
  
  const JobsReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionType.SELECTED_JOB:
        return {
          ...state,
          ...action.payload
        }
      default:
        return state;
    }
  };
  
  export default JobsReducer;

// const initialState = {
//     someething: []
// }

// export const jobsReduer = (state = initialState, action) => {
//     switch(action.type){
//         case actionType.SET_JOBS:
//             return [...state,  action.payload]
//         default:
//             return state
//     }
// }

// export const selectedJobReducer = (state = {}, action) => {
//     switch(action.type){
//         case actionType.SELECTED_JOB:
//             return {...state, ...action.payload}
//         default:
//             return state
//     }
// }