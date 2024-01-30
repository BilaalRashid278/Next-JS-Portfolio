import { createSlice } from '@reduxjs/toolkit'


export interface GlobalStateProps {
  isLogin: boolean,
  isPopup : boolean
}

const initialState: GlobalStateProps = {
  isLogin: true,
  isPopup : true
}

export const GlobalStateSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLogin : (state,action) => {
        state.isLogin = action.payload
    },
    setPopup : (state,action) => {
      state.isPopup = action.payload
  }
  }
})


export const {setLogin,setPopup} = GlobalStateSlice.actions
export const GlobalSlice = GlobalStateSlice.reducer