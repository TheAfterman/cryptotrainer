export default (state = {}, action) => {
    switch (action.type) {
        case 'LAST_PRICE':
            return {
                ...state,
                currentPrice: action.payload.price
            }
        case 'GET_DATA_REQUEST':
            return {
                ...state,
                symbol: action.payload.symbol,
                instrument: action.payload.ins,
                endDate: action.payload.endDate,
                aggregate: action.payload.aggregate,
                loading: true
            };
        case 'GET_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload.Data
            };
        case 'GET_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
}
