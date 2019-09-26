import firebase from 'firebase';

export default (state = { tradesWon: 0, tradesLost: 0, profit: 0, authComplete: false }, action) => {
    switch (action.type) {
        case 'EXECUTE_TRADE_CLOSE':
            let tradesWon = state.tradesWon;
            let tradesLost = state.tradesLost;
            if (action.payload.entry < action.payload.close) {
                tradesWon = state.tradesWon + 1;
            } else {
                tradesLost = state.tradesLost + 1;
            }

            return {
                ...state,
                tradesWon: tradesWon,
                tradesLost: tradesLost,
                profit: state.profit + 100 * (action.payload.close - action.payload.entry)/action.payload.entry
            };
        case 'AUTH_COMPLETE':
            return {
                ...state,
                authComplete: true
            };
        case 'SIGN_OUT':
            firebase.auth().signOut();
            return {
                ...state,
            }
        default:
                return state;
    }
}
