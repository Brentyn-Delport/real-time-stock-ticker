// store.js
// Setting up the Redux store, the central repository for all the state in my application

import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from 'redux-observable';
import stockReducer from '../features/stocks/stockSlice';
import { rootEpic } from "../features/stocks/stockEpics";

// Create an instance of EpicMiddleware. This middleware will handle the lifceycle of epics.
const EpicMiddleware = createEpicMiddleware();

// Setup the redux store with the reducers and middleware
export const store = configureStore({
    // Key object
    reducer: {
        // key:value pair representing a slice of the state and the reducer that is managing it ( key = stocks: Value = stockReducer)
        stocks: stockReducer,
    },
    // Apply middleware to the store
    middleware: (getDefaultMiddleware) =>
        // getDefaultMiddleware provides Redux Toolkit's default middleware (includes thunk among others).
        // We concatenate our epicMiddleware to integrate Redux-Observable into our Redux store.
        getDefaultMiddleware().concat(epicMiddleware)

});

// After creating the store, we start the epicMiddleware with the rootEpic.
// rootEpic will listen for actions and handle complex asynchronous logic defined in our epics.
epicMiddleware.run(rootEpic);
