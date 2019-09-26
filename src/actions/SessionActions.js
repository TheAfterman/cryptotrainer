export const authCompleted = () => (dispatch) => {
    dispatch({
        type: 'AUTH_COMPLETE'
    });
}

export const signOut = () => (dispatch) => {
    dispatch({
        type: 'SIGN_OUT'
    });
}