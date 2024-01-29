import { createSlice } from '@reduxjs/toolkit'


export interface GlobalStateProps {
  isLogin: boolean
}

const initialState: GlobalStateProps = {
  isLogin: true
}

export const GlobalStateSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLogin : (state,action) => {
        state.isLogin = action.payload
    }
  }
})


export const {setLogin} = GlobalStateSlice.actions
export const GlobalSlice = GlobalStateSlice.reducer