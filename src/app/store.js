// store.js
// Setting up the Redux store, the central repository for all the state in my application

import { configureStore } from "@reduxjs/toolkit";
import stockReducer from '../features/stocks/stockSlice';

export const store = configureStore({
    reducer: {
        stocks: stockReducer,
    }
})