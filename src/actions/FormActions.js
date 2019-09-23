import {apiKey, baseUrl} from '../data/apiConstants';
import {getAdditionalData} from '../actions/ChartDataActions';

export const startTrade = () => (dispatch, getState) => {
    dispatch({
        type: 'EXECUTE_TRADE'
    });
    //dispatch action to get data from the API
    dispatch(getAdditionalData('EXECUTE_TRADE'));
}

export const advanceChart = () => (dispatch, getState) => {
    dispatch({
        type: 'ADVANCE_CHART'
    });
    const tradeParams = getState().chartData;
    const futureData = getState().tradeData;
    const endDate = ((futureData.endDate || tradeParams.endDate).getTime()/1000) + (51 * tradeParams.aggregate * 60 * 60);

    return fetch(`${baseUrl}histohour?fsym=${tradeParams.symbol}&tsym=${tradeParams.instrument}&limit=50&toTs=${endDate}&aggregate=${tradeParams.aggregate}&api_key=${apiKey}`).then(
        (response) => {
            return response.json().then(
                (data) => {
                    if (response.ok) {
                        dispatch({
                            type: 'EXECUTE_TRADE_SUCCESS',
                            payload: data
                        })
                    } else {
                        dispatch({
                            type: 'EXECUTE_TRADE_FAILURE',
                            payload: data
                        })
                    }
                }
            )
        }
    )  

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