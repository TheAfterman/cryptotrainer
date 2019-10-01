export default (state = { chartIntervals: ['4'], pairs: ['USD'], symbols: ['BTC', 'ETH', 'LTC', 'XRP'] }, action) => {
    switch (action.type) {
        case 'SET_INTERVAL':
            return {
                ...state,
                chartIntervals: action.payload.chartIntervals
            };
        case 'SET_PAIRS':
            return {
                ...state,
                pairs: action.payload.pairs
            };
        case 'SET_SYMBOLS':
            return {
                ...state,
                symbols: action.payload.symbols
            }
        default:
                return state;
    }
}
