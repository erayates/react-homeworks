import { createSlice } from "@reduxjs/toolkit";

export const receiptSlice = createSlice({
    name:'receipt',
    initialState:{
        items:[]
    },
    reducers:{
        addItemToReceipt: (state,action) => {
            
        }
    }
}) 


export const {addItemToReceipt} = receiptSlice.actions
export const receipt = state => state.receipt.items
export default receiptSlice.reducer