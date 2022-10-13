import {configureStore} from '@reduxjs/toolkit'
import receiptSlice from './receipt/receiptSlice'
import itemsSlice from './shop/itemsSlice'

export const store = configureStore({
    reducer:{
        shopItems: itemsSlice,
        receipt: receiptSlice
    }
})