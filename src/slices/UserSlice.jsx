/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"User",
    initialState:{
        isUser:localStorage.getItem('user-info')
        ? true
        : false,
        userData:localStorage.getItem('user-info')
        ? JSON.parse(localStorage.getItem('user-info'))
        : [{"email":"","displayName":""}],
        asked:false,
        question:[],
        data:[],
        currentFocus:"",
        history:true,
        isLoading:false,
    },
    reducers:{
        setisUser(state,action){
            state.isUser = action.payload;
            if(!action.payload){
                localStorage.removeItem("user-info")
            }
        },
        setuserData(state,action){
            state.userData = action.payload;
            localStorage.setItem("user-info",JSON.stringify(action.payload))
        },
        setisLoading(state,action){
            state.isLoading = action.payload;
        },
        setAsked(state,action){
            state.asked = action.payload;
        },
        setQuestion(state,action){
            state.question.push(action.payload)
            console.log(state.question)
        },
        setData(state,action){
            state.data.push(action.payload.Response);
            console.log(state.data)
            state.currentFocus = state.data.length;
            console.log(state.currentFocus)
        },
        setcurrentFocus(state,action){
            state.currentFocus = action.payload;
        },
        setHistory(state,action){
            state.history = action.payload;
        }
    }
})



export const UserReducer = userSlice.reducer;
export const {setisUser,setAsked,
    setData,setQuestion,
    setcurrentFocus,setHistory,
    setuserData,setisLoading} = userSlice.actions;