import { createSlice,nanoid,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'http://localhost:5000/users'

const initialState = {
	users:[]
}

//Fonctions Ashyntrone 

export const addNewUser = createAsyncThunk('users/addNewUser',async(initialUser)=>{
	const response = await axios.post(USERS_URL,initialUser)
	return response.data
})

export const showUser = createAsyncThunk('users/showUser',async () =>{
	const response =await axios.get(USERS_URL)
	return 	response.data
})

const registerSlice = createSlice({
	name:'register',
	initialState,
	reducers:{
		addUsers:{
			reducer(state,action){
				state.users.push(action.payload)
			},
			prepare(name,pseudo,email,age,sex,password){
				return{
					payload:{
						id:nanoid(),
						name,
						pseudo,
						email,
						age,
						sex,
						password
					}
				}
			}
		}

	},
	
})

export const { addUsers }=registerSlice.actions
export const allusers = (state)=> state.register.users
export default registerSlice.reducer