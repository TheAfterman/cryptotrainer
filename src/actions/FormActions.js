import {getAdditionalData} from '../actions/ChartDataActions';

export const startTrade = () => (dispatch, getState) => {
    dispatch({
        type: 'EXECUTE_TRADE'
    });
    //dispatch action to get data from the API
    dispatch(getAdditionalData('EXECUTE_TRADE'));
}

export const pauseTrade = () => (dispatch) => {
    dispatch({
        type: 'EXECUTE_TRADE_PAUSE'
    });
}

export const closeTrade = (entry, close) => (dispatch, getState) => {
    if (!close) {
        close = getState().chartData.currentPrice;
    }

    dispatch({
        type: 'EXECUTE_TRADE_CLOSE',
        payload: {
            entry,
            close
        }
    });
}

export const entryPriceChange = (price) => (dispatch) => {
    dispatch({
        type: 'ENTRY_PRICE_CHANGE',
        payload: {
            price
        }
    })
}

export const stopPriceChange = (price) => (dispatch) => {
    dispatch({
        type: 'STOP_PRICE_CHANGE',
        payload: {
            price
        }
    })
}

export const targetPriceChange = (price) => (dispatch) => {
    dispatch({
        type: 'TARGET_PRICE_CHANGE',
        payload: {
            price
        }
    })
}