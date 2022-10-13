import {createSlice} from '@reduxjs/toolkit'

export const itemsSlice = createSlice({
    name: 'items',
    initialState:{
        items: [],
        totalMoney: 100000000000
    }
})

export default itemsSlice.reducer