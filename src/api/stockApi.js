// stockApi.js
// We will be testing out RxJS library for fetching our stock data

import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const API_KEY = 'col228pr01qo8vduc2ngcol228pr01qo8vduc2o0';
const BASE_URL = 'https://finnhub.io/api/v1/';

// The '$' sign indicates this variable is an observable
const fetchStocks$  = () => {
    // Creates an abservable that makes an HTTP Get request and returns the response as JSON
    // pipe() is a method used to compose a series of operators (functions) that manipulate the observable stream
    return ajax.getJSON(`${BASE_URL}stock/symbol?exchange=US&token=${API_KEY}`).pipe(
        // No transformation on the data received, the map functions keeps the data unchanged in this case.
        map(Response => Response), 
        // Catcherror is used to transfrom the error into a regular object and continue the observable sequence, preventing the stream from ending prematurely. 
        catchError(error => of({ error: true, message: error.message}))
    );
};

export { fetchStocks$  };