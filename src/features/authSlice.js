/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 08/02/2023 - 12:01:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 08/02/2023
    * - Author          : 
    * - Modification    : 
**/
import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState:{
        name: '',
        email: '',
        phoneNum: ''
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        },
        changeEmail: (state, action) => {
            state.email = action.payload
        },
        changePhoneNum: (state, action) => {
            state.phoneNum = action.payload
        }
    },

  })
  export const {changeName, changeEmail, changePhoneNum} = authSlice.actions
  export default authSlice.reducer