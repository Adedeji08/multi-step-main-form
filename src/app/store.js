/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 01/02/2023 - 14:26:49
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/02/2023
    * - Author          : 
    * - Modification    : 
**/
import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from 'redux'
import authSlice from "../features/authSlice";
import planSlice from "../features/planSlice";
import CurrentDisplaySlice from "../view/currentDisplay/CurrentDisplaySlice";


export const store = configureStore({
    reducer: {
        auth: authSlice,
        plan: planSlice,
        CurrentDisplay: CurrentDisplaySlice
      
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

