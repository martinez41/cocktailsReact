
import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "../container/Register/registerSlice";



export const store = configureStore({
	reducer:{
		register : registerSlice
	}
})