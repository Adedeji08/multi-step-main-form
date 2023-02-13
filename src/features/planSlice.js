/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 09/02/2023 - 13:12:31
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/02/2023
    * - Author          : 
    * - Modification    : 
**/
import { createSlice } from "@reduxjs/toolkit";


const planSlice = createSlice({
    name: 'plan',
    initialState:{
      type: {
        name: '',
        rate: undefined,
      },
      frequency: 'monthly'
    },
    reducers: {
        changeFrequency: (state, action) => {
        state.frequency==='monthly' ? state.frequency = 'yearly': state.frequency = 'monthly'
        },
        changeType: (state, action) => {
          state.type.name = action.payload.name;
          state.type.rate = action.payload.rate;
        }
      }
})

export const { changeFrequency, changeType } = planSlice.actions;
export default planSlice.reducer;