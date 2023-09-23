import { configureStore, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: ['fazer todo', 'estudar redux' ],
    reducers: {}

})

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    }
})