/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 10/02/2023 - 10:23:31
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/02/2023
    * - Author          : 
    * - Modification    : 
**/
import { createSlice } from '@reduxjs/toolkit';

const selectedAddOnsSlice = createSlice({
  name: 'addOns',
  initialState: {
    selectedAddOns: []
  },
  reducers: {
    addAddOn : (state, action) => {
      state.selectedAddOns.push(action.payload)
    },

    removeAddOn : (state, action) => {
      state.selectedAddOns = state.selectedAddOns.filter((addOn) => {
        
        return addOn.name.toLowerCase()!==action.payload.name.toLowerCase()
      
      })
    }
  }

})

export const { addAddOn, removeAddOn } = selectedAddOnsSlice.actions;

export default selectedAddOnsSlice.reducer;