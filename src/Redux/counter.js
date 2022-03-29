const initProduct = {
    usertoken: null,
    isLogin: false,
    name: 'occho',
}
export const counterReducer = (state = initProduct, action) => {
    switch (action.type) {
        case 'Login':
            state.isLogin = true
            state.usertoken = action.payload
            console.log(state.usertoken)
            return state

        case 'Logout':
            state.isLogin = false
            state.usertoken = null
            return state
        case 'Set_token':
            state.usertoken = action.payload
            return state
        default:
            return state
    }
}
export default counterReducer;