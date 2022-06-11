import { LOGIN_SUCCESS, REGISTER_SUCCESS, POKEMON_SUCCESS } from './types'

const initialState = {
    isLogin: false,
    isRegister: false,
    userData: {},
    pokeData:[]
}

const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegister: true,
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                isLogin: true,
            }

            case POKEMON_SUCCESS:
            return {
                ...state,
                pokeData: action.payload,
            }
        default:
            return state
    }
}

    export default Reducers