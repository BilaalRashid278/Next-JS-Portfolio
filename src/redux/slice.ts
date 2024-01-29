import { createSlice } from "@reduxjs/toolkit";


export default createSlice({
    name : 'appSlice',
    initialState : {
        isLogin : false,
    },
    reducers : {
        setLogin : (state,action) => {
            action.payload = state.isLogin
        }
    }
});

