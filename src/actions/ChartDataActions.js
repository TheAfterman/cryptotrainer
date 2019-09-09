import {apiKey, baseUrl} from '../data/apiConstants';

export const getData = (symbol, ins = 'USD', endDate, aggregate = 4) => (dispatch => {
    dispatch({
        type: 'GET_DATA_REQUEST',
        payload: {
            symbol,
            endDate,
            ins,
            aggregate
        }
    });

    return fetch(`${baseUrl}histohour?fsym=${symbol}&tsym=${ins}&limit=180&toTs=${endDate.getTime()/1000}&aggregate=${aggregate}&api_key=${apiKey}`).then(
        (response) => {
            return response.json().then(
                (data) => {
                    if (response.ok) {
                        dispatch({
                            type: 'GET_DATA_SUCCESS',
                            payload: data
                        })
                    } else {
                        dispatch({
                            type: 'GET_DATA_FAILURE',
                            payload: data
                        })
                    }
                }
            )
        }
    );
})
