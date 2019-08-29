const apiKey = '3890d86ed97a82753eb2c4eb17ab33553069654b37632a9aa6cc0009c8348ed5';
const baseUrl = 'https://min-api.cryptocompare.com/data/';
const getHistoryUrl = baseUrl + 'histohour?fsym=BTC&tsym=USD&limit=180&aggregate=4';

export const getData = () => (dispatch => {
    dispatch({
        type: 'GET_DATA_REQUEST',
    });

    return fetch(`${getHistoryUrl}&api_key=${apiKey}`).then(
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
