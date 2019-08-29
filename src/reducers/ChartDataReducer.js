export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_DATA_REQUEST':
            return {
                ...state,
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
