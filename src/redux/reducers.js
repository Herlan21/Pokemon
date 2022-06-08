import { LOGIN_SUCCESS } from './types'

const initialState = {
    isLogin: false,
    userData: {}
}

const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                isLogin: true,
            }
        default:
            return state
    }
}

    export default Reducers