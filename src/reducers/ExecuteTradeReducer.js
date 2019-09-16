export default (state = {}, action) => {
    switch (action.type) {
        case 'EXECUTE_TRADE':
            return {
                ...state,
                isRunning: true
            };
        case 'EXECUTE_TRADE_SUCCESS':
            return {
                ...state,
                data: action.payload.Data
            };
        case 'EXECUTE_TRADE_PAUSE':
            return {
                ...state,
                isRunning: false
            };
        case 'EXECUTE_TRADE_COMPLETE':
            return {
                ...state,
                isRunning: false
            };
        case 'ENTRY_PRICE_CHANGE':
            return {
                ...state,
                entry: parseFloat(action.payload.price)
            };
        case 'STOP_PRICE_CHANGE':
            return {
                ...state,
                stop: parseFloat(action.payload.price)
            };
        case 'TARGET_PRICE_CHANGE':
            return {
                ...state,
                target: parseFloat(action.payload.price)
            };
        default:
            return state;
    }
}