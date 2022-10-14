import {configureStore} from '@reduxjs/toolkit'
import itemsSlice from './shop/itemsSlice'

export const store = configureStore({
    reducer:{
        shopItems: itemsSlice,
    }
})