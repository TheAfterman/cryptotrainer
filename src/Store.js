import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer';

const INIT_STATE = {
    chartData: {
        data: [],
        historyData: [],
        loading: false,
        error: null
    }
}

export default function configureStore(initialState = INIT_STATE) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
