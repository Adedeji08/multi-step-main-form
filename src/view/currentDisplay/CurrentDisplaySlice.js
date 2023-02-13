/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 09/02/2023 - 17:12:19
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/02/2023
    * - Author          : 
    * - Modification    : 
**/
import { createSlice } from '@reduxjs/toolkit';
import AddOns from '../Additional/AddOns';
import Confirmation from '../confirmation/Confirmation'
import SignUp from '../auth/SignUp';
import Plan from '../Plan/Plan';
import Summary from '../Summary/Summary';


export const currentDisplaySlice = createSlice({
  name: 'currentDisplay',
  initialState: {
    options: [ <SignUp />, <Plan />, <AddOns />, <Summary />, <Confirmation />],
    currentNum: 0
  },
  reducers: {
    nextStep : (state, action) => {
      if (state.currentNum<4) state.currentNum++
    },
    previousStep : (state, action) => {
      if (state.currentNum>0) state.currentNum--
    },
    selectStep: (state, action) => {
      state.currentNum = action.payload
    }
  }
})

export const { nextStep, previousStep, selectStep } = currentDisplaySlice.actions;


export default currentDisplaySlice.reducer;