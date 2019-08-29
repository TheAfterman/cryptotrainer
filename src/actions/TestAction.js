export const simpleAction = () => dispatch => {
    dispatch({
        type: 'TEST_ACTION',
        payload: 'hello world!'
    })
}
