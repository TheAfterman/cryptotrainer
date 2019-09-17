import {apiKey, baseUrl} from '../data/apiConstants';

export const getData = (symbol, ins, endDate, aggregate) => ((dispatch, getState) => {
    if (!symbol) {
        symbol = getState().settingsData.symbols[0];
    }
    if (!ins) {
        ins = getState().settingsData.pairs[0];
    }
    if (!aggregate) {
        aggregate = getState().settingsData.chartIntervals[0];
    }
    if (!endDate) {
        // don't get data that's too new or we won't have any future data to play the chart with
        let end = new Date(Date.now() - 1000*60*60*24*90);
        // don't get data that's too old (e.g. before cryptos even existed)
        let start = new Date(2015, 0, 1);
        endDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }


    dispatch({
        type: 'GET_DATA_REQUEST',
        payload: {
            symbol,
            endDate,
            ins,
            aggregate
        }
    });

    return requestData(symbol, ins, endDate, aggregate, dispatch, 'GET_DATA');
});

export const getAdditionalData = (actionModifier) => ((dispatch, getState) => {
    dispatch({
        type: 'GET_ADDITIONAL_DATA_REQUEST'
    });

    const currentChart = getState().chartData;
    // calculate the correct timestamp to get the next 100 candles
    const endDate = new Date(currentChart.endDate.getTime() + (181 * currentChart.aggregate * 60 * 60 * 1000));
    return requestData(currentChart.symbol, currentChart.instrument, endDate, currentChart.aggregate, dispatch, actionModifier);
});

const requestData = (symbol, ins, endDate, aggregate, dispatch, actionModifier) => {
    const timeStamp = Math.floor(endDate.getTime()/1000);
    return fetch(`${baseUrl}histohour?fsym=${symbol}&tsym=${ins}&limit=180&toTs=${timeStamp}&aggregate=${aggregate}&api_key=${apiKey}`).then(
        (response) => {
            return response.json().then(
                (data) => {
                    if (response.ok) {
                        dispatch({
                            type: actionModifier + '_SUCCESS',
                            payload: data
                        })
                    } else {
                        dispatch({
                            type: actionModifier + '_FAILURE',
                            payload: data
                        })
                    }
                }
            )
        }
    );
}
