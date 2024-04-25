// stockSlice.js
// Manage all state related to stocks
// using createSlice, grouping all logic for a particular state, including reducers and actions, in one place

import { createSlice } from "@reduxjs/toolkit";

// Initial state of the stock slice with stocks array, loading status and error information
const initialState = {
    stocks: [], // Arrary to store stock data
    loading: false, // Boolean to track if we are currently fetching stock data
    error: null // To store any error information from fetch operations
};

// Define the slice with reducers and actions automatically generated
const stockSlice = createSlice({
    name: 'stocks', // Name of this slice used in action types
    initialState, // the initial state for this slice
    reducers: {
        // Reducer to handle the start of a stock data fetch operation
        fetchStocksStart(state) {
            state.loading = true;
            state.error = null;
        },
        // Reducer to handle successful fetching of stock data
        fetchStocksSuccess(state, action) {
            state.stocks = action.payload; // Payload is the data fetched, assigned to stocks 
            state.loading = false;
        },
        // Reducer to handle errors during the detch operation
        fetchStocksFailure(state, action) {
            state.error = action.payload; // Payload is the error returned
            state.loading = false;
        },
    },
});

// Export actions for use in components and other part of my app
export const { fetchStocksStart, fetchStocksSuccess, fetchStocksFailure } = stockSlice.actions;

// Export the reducer for this slice to be included in the store
export default stockSlice.reducer;