import { configureStore } from '@reduxjs/toolkit'
import { GlobalSlice } from './features/authSlice/authSlice'

export const store = configureStore({
    reducer: {
        GlobalSlice : GlobalSlice
    }
})


