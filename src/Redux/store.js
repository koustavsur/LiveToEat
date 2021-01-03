import { createStore } from 'redux' 
import reducer from './reducers';

const initialState = {
    appetizer: {
        isLoading: null,
        error: null,
        data: null
    },
    breakfast:{
        isLoading: null,
        error: null,
        data: null
    },
    lunch:{
        isLoading: null,
        error: null,
        data: null
    },
    dinner:{
        isLoading: null,
        error: null,
        data: null
    },
    dessert:{
        isLoading: null,
        error: null,
        data: null
    },
    indian:{
        isLoading: null,
        error: null,
        data: null
    },
    chinese:{
        isLoading: null,
        error: null,
        data: null
    },
    italian:{
        isLoading: null,
        error: null,
        data: null
    },
    receipeById:{
        isLoading: null,
        error: null,
        data: null
    }
};

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;