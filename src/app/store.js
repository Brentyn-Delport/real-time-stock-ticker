// store.js
// Setting up the Redux store, the central repository for all the state in my application

import { configureStore } from "@reduxjs/toolkit";
import stockReducer from '../features/stocks/stockSlice';

export const store = configureStore({
    // Key object
    reducer: {
        // key:value pair representing a slice of the state and the reducer that is managing it ( key = stocks: Value = stockReducer)
        stocks: stockReducer,
    }
})