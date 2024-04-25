// stockEpics.js
// Redux-Observable Epic, which takes a stream of actions and returns a stream of actions
// orchestrates the asynchronous flow of fetching stocks

import { Action } from "rxjs/internal/scheduler/Action";
import { fetchStocks$ } from "../../api/stockapi";
import { FETCH_STOCKS_START, fetchStocksSuccess, fetchStocksFailure } from "./stockSlice";
import { ofType } from 'redux-observable';
import { switchMap, map, catchError } from "rxjs";

// Definte the epic for fetching stocks
export const fetchStocksEpic = action$ => action$.pipe(
    ofType(FETCH_STOCKS_START), // Listen for the 'FETCH_STOCKS_START' action
    switchMap(() => // Once the action is received, switch to a new observable
    fetchStocks$().pipe( // Call the API and handle its reponse
    map(response => fetchStocksSuccess(response)), // On sucess, dispatch success action with response data
    catchError(error => of(fetchStocksFailure(error.message))) // On error, dispatch failure action with error message
    )
    )
)

// Combine all stock-related epics into a single root epic. This will be imported into redux store and used.
export const rootEpic = combineEpics (
    fetchStocksEpic
);